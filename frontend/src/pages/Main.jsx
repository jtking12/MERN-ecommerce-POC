import { Row } from "../components/Row";
import { sampleProductsList } from "../assets/sampleProducts";
import { ProductCard } from "../components/ProductCard";

export const Main = () => {
  return (
    <Row style={{ flexWrap: "wrap", justifyContent: "center" }}>
      {sampleProductsList.map((p) => (
        <ProductCard key={p.id + p.title} product={p} />
      ))}
    </Row>
  );
};
