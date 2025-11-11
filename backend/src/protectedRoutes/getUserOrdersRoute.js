import { ObjectId } from "mongodb";
import { getDbConnection } from "../db";

export const getUserOrdersRoute = {
  path: "/api/orders",
  method: "get",
  handler: async (req, res) => {
    // Debug log
    console.log("Received a get request on /api/orders");

    const { uid } = req.body;

    const isValidUid = ObjectId.isValid(uid);
    if (!isValidUid) return res.sendStatus(400);

    const db = getDbConnection("ecommerce");
    const orders = await db
      .collection("orders")
      .find({ uid })
      .limit(10)
      .toArray();

    if (!orders) return res.sendStatus(500);

    return res.json(orders);
  },
};
