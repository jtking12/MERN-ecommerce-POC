import { getDbConnection } from "../db";

export const placeOrderRoute = {
  path: "/api/place-order",
  method: "post",
  handler: async (req, res) => {
    //Debug Log
    console.log("Received post request on /api/place-order");

    const {
      uid,
      email,
      firstName,
      lastName,
      location,
      cartItems,
      cartTotal,
      numberOfItems,
    } = req.body;

    if (
      !uid ||
      !email ||
      !firstName ||
      !lastName ||
      !location ||
      !cartItems ||
      !cartTotal ||
      !numberOfItems
    )
      return res.sendStatus(400);

    const orderDate = Date.now();

    const db = getDbConnection("ecommerce");
    const result = await db.collection("orders").insertOne({
      uid,
      email,
      firstName,
      lastName,
      orderDate,
      location,
      cartItems,
      cartTotal,
      numberOfItems,
    });

    const { insertedId } = result;
    if (!insertedId) return res.sendStatus(500);
    return res.sendStatus(200);
  },
};
