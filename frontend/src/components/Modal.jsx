import { Column } from "./Column";
import { Row } from "./Row";

export const Modal = ({ children, setVisibility }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
          width: "100vw",
          height: "100vh",
          zIndex: "0",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          postion: "absolute",
        }}
        onClick={() => setVisibility(false)}
      ></div>
      <Column
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          minWidth: "60vw",
          minHeight: "90vh",
          transform: "translate(-50%, -50%)",
          backgroundColor: "black",
          border: "2px solid white",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <Row style={{ justifyContent: "flex-end" }}>
          <button onClick={() => setVisibility(false)}>❌</button>
        </Row>
        {children}
        {}
      </Column>
    </div>
  );
};
