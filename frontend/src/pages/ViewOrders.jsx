import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserProvider";
import axios from "axios";
import { Column } from "../components/Column";
import { CartItemsList } from "../components/CartItemsList";

export const ViewOrders = () => {
  const [, token] = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [orders, setOrders] = useState([]);

  if (!token) navigate("/");

  useEffect(() => {
    if (!isLoading) return;

    const getUserOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/orders", {
          headers: { authorization: `Bearer ${token}` },
        });

        const { data } = response;
        console.log("Successfully loaded orders:", data);
        setOrders(() => data);
        setIsLoading(false);
      } catch (e) {
        setErrorMessage("Error loading orders.");
        console.log(e);
        setIsLoading(false);
      }
    };
    getUserOrders();
  }, [isLoading]);

  if (isLoading) return <p>Loading...</p>;

  if (errorMessage) return <p>{errorMessage}</p>;

  if (orders.length < 1) return <p>You have no orders yet.</p>;

  return (
    <Column>
      <h3>Your orders:</h3>
      {orders.map((o) => (
        <Column style={{ borderBlockEnd: "2px solid white" }}>
          <p>Order id: {o._id}</p>
          <p>
            Order information: {o.firstName} {o.lastName}, {o.location}
          </p>
          <p>Order date: {new Date(o.orderDate).toString()}</p>
          <CartItemsList
            key={o._id}
            inMemory={false}
            cartItemsProp={o.cartItems}
          />
        </Column>
      ))}
      <>
        <button onClick={() => navigate("/")}>Back To Home Page</button>
      </>
    </Column>
  );
};
