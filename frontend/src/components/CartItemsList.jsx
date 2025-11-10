import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { CartItem } from "./CartItem";
import { getCartTotal, getNumberOfItemsInCart } from "../utils/cartManagement";

export const CartItemsList = () => {
  const [cartItems] = useContext(CartContext);
  const numberOfItems = getNumberOfItemsInCart(cartItems);
  const cartTotal = getCartTotal(cartItems);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gap: "8px 8px",
          gridTemplateColumns: "1fr 5fr 2fr 2fr",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {cartItems.map((item, index) => (
          <CartItem key={item.id + item.title} index={index} item={item} />
        ))}
      </div>
      <p>Number of Items in Cart: {numberOfItems}</p>
      <p>Total: $ {cartTotal}</p>
    </div>
  );
};
