import { Column } from "./Column";
import { Login } from "./Login";
import { Row } from "./Row";

export const SiteHeader = () => {
  return (
    <Column>
      <Row>
        <h1>Ecommerce Storefront</h1>
        <Row>
          <button>🛒</button>
          <button>Sign Up</button>
          <Login />
        </Row>
      </Row>
    </Column>
  );
};
