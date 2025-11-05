import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

let client;

const dbURI = process.env.MONGODB_URI || "";

export const initDB = async () => {
  if (!dbURI) console.log("Unable to access dbUri");

  client = await MongoClient.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getDbConnection = (dbName) => client.db(dbName);
