import { Column } from "./Column";
import { Login } from "./Login";
import { Row } from "./Row";
import { SignUp } from "./SignUp";

export const SiteHeader = () => {
  return (
    <Column>
      <Row>
        <h1>Ecommerce Storefront</h1>
        <Row>
          <button>🛒</button>
          <SignUp />
          <Login />
        </Row>
      </Row>
    </Column>
  );
};
