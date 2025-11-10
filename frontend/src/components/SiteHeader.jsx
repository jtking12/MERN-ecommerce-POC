import { useContext } from "react";
import { Column } from "./Column";
import { Login } from "./Login";
import { Row } from "./Row";
import { SignUp } from "./SignUp";
import { CartContext } from "../context/CartProvider";
import { ViewCart } from "./ViewCart";

export const SiteHeader = () => {
  return (
    <Column>
      <Row>
        <h1>Ecommerce Storefront</h1>
        <Row>
          <ViewCart />
          <SignUp />
          <Login />
        </Row>
      </Row>
    </Column>
  );
};
