import { useState } from "react";
import { CartItemsList } from "../components/CartItemsList";
import { Column } from "../components/Column";
import { Row } from "../components/Row";
import { useNavigate } from "react-router-dom";
import { ConfirmModal } from "../components/ConfirmModal";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export const CheckOut = () => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const waitTime = 5000;
  const [timeRemaining, setTimeRemaining] = useState(waitTime / 1000);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isConfirmed) {
      setCartItems([]);
      setTimeout(() => navigate("/"), waitTime);
      setInterval(() => setTimeRemaining((pre) => pre - 1), 1000);
    }
  }, [isConfirmed]);

  return (
    <Column>
      {isConfirmed ? (
        <p>
          Thank You, your order has been confirmed. You will be redirected to
          the Home Page in {timeRemaining} seconds...
        </p>
      ) : (
        <Column>
          <h2>User Info</h2>
          <CartItemsList />
          <Row>
            <ConfirmModal
              label="Confirm Order"
              setIsConfirmed={setIsConfirmed}
            />
            <button onClick={() => navigate("/")}>Continue Shopping</button>
          </Row>
        </Column>
      )}
    </Column>
  );
};
