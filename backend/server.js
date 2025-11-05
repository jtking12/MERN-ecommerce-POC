import express from "express";
import { initDB } from "./db";
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  console.log("Received PING... responding with PONG");
  res.send("PONG");
});

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
