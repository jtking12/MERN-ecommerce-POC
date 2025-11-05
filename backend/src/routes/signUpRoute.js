import { getDbConnection } from "../db";

export const signUpRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {
    //Debug Log
    console.log("Received POST to /api/signup with body:");

    const { email, password } = req.body;
    if (!email || !password) return res.status(500);

    //Debug Log
    console.log(`Email: ${email}, Password: ${password}`);

    const db = getDbConnection("ecommerce");
    const result = await db.collection("users").insertOne({
      email,
      password,
    });

    if (!result) return res.sendStatus(500);

    const { insertedId } = result;
    console.log(`InsertedID: ${insertedId}`);

    return res.sendStatus(200);
  },
};
