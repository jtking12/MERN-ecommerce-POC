import { useContext } from "react";
import { Column } from "./Column";
import { Login } from "./Login";
import { Row } from "./Row";
import { SignUp } from "./SignUp";
import { useNavigate } from "react-router-dom";
import { ViewCart } from "./ViewCart";
import { CurrentUserContext } from "../context/CurrentUserProvider";

export const SiteHeader = () => {
  const [currentUser, , setToken] = useContext(CurrentUserContext);
  const navigate = useNavigate();
  return (
    <Column>
      <Row>
        <h1>Ecommerce Storefront</h1>
        <Row>
          <ViewCart />
          {currentUser ? (
            <>
              <button onClick={() => navigate("/orders")}>View Orders</button>
              <button onClick={() => setToken(null)}>Sign Out</button>
            </>
          ) : (
            <>
              <SignUp />
              <Login />
            </>
          )}
        </Row>
      </Row>
    </Column>
  );
};
