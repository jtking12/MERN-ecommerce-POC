import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

let client;

const dbURI = process.env.MONGODB_URI || "";
//console.log("Database URI:", dbURI);

export const initDB = async () => {
  if (!dbURI) console.log("Unable to access dbUri", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client = await MongoClient.connect(dbURI);
};

export const getDbConnection = (dbName) => client.db(dbName);
