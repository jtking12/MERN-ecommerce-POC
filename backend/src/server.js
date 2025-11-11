import express from "express";
import { initDB } from "./db";
import { routes } from "./routes/index.js";
import { authMiddleware } from "../utils/authMiddleware.js";
import { protectedRoutes } from "./protectedRoutes/index.js";
import cors from "cors";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
  console.log("Received PING... responding with PONG");
  res.send("PONG");
});

routes.map((route) => app[route.method](route.path, route.handler));

app.use("/", authMiddleware);

protectedRoutes.map((route) => app[route.method](route.path, route.handler));

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
