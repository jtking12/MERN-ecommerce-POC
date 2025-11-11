import { getDbConnection, initDB } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

export const signUpRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {
    dotenv.config();
    //Debug Log
    console.log("Received POST to /api/signup with body:");

    const db = getDbConnection("ecommerce");

    const { email, firstName, lastName, location, password } = req.body;
    if (!email || !password || !firstName || !lastName || !location)
      return res.status(500);

    const user = await db.collection("users").findOne({ email });
    if (user) return res.sendStatus(409); // Conflict - User already exists

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Debug Log
    console.log(`Email: ${email}, Password: ${password}`);
    console.log(
      `Password: ${password}\nSalt: ${salt}\nHashed Password: ${hashedPassword}`
    );

    const result = await db.collection("users").insertOne({
      email,
      hashedPassword,
      firstName,
      lastName,
      location,
    });

    if (!result) return res.sendStatus(500);

    const { insertedId } = result;
    console.log(`InsertedID: ${insertedId}`);

    jwt.sign(
      { uid: insertedId, email, firstName, lastName, location },
      process.env.JWT_SECRET,
      { expiresIn: "2d" },
      (err, token) => {
        if (err) {
          console.log("Error generating JWT token:\n", err);
          return res.sendStatus(500).send(err);
        }

        return res.status(200).json({ token });
      }
    );
  },
};
