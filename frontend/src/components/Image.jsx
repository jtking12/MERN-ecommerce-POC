import Placeholder from "../assets/placeholder.jpg";
import { useState } from "react";
import { ImageZoom } from "./ImageZoom";

export const Image = ({ src = Placeholder, title, alt, style }) => {
  const [isVisible, setVisibility] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          placeItems: "center",
          border: "1px solid lightgray",
          minHeight: "200px",
          backgroundColor: "white",
          cursor: "pointer",
        }}
        onClick={() => setVisibility(true)}
      >
        <img
          src={src}
          title={title}
          alt={alt}
          style={{ width: "100%", ...style }}
        />
      </div>
      <ImageZoom
        src={src}
        isVisible={isVisible}
        setVisibility={setVisibility}
        alt={alt}
        title={title}
      />
    </>
  );
};
