import { Modal } from "./Modal";

export const ImageZoom = ({ src, alt, title, isVisible, setVisibility }) => {
  return (
    <>
      {isVisible && (
        <Modal setVisibility={setVisibility}>
          <div style={{ backgroundColor: "white" }}>
            <img
              src={src}
              title={title}
              alt={alt}
              style={{
                height: "80vh",
                width: "90vw",
                backgroundColor: "white",
              }}
            />
          </div>
        </Modal>
      )}
    </>
  );
};
