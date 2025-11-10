import "./App.css";
import { Column } from "./components/Column";
import { Row } from "./components/Row";
import { SiteHeader } from "./components/SiteHeader";
import { sampleProductsList } from "./assets/sampleProducts";
import { ProductCard } from "./components/ProductCard";

function App() {
  return (
    <Column>
      <SiteHeader />
      <Row style={{ flexWrap: "wrap", justifyContent: "center" }}>
        {sampleProductsList.map((p) => (
          <ProductCard key={p.id + p.title} product={p} />
        ))}
      </Row>
    </Column>
  );
}

export default App;
