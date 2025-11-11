import { Modal } from "./Modal";
import { useState } from "react";
import { InputField } from "./InputField";
import axios from "axios";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserProvider";

export const Login = () => {
  const [, , setToken] = useContext(CurrentUserContext);
  const [isVisible, setVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isVisible)
    return <button onClick={() => setVisibility(true)}>Login</button>;

  return (
    <Modal setVisibility={setVisibility}>
      <InputField label="Email:" setValue={setEmail} value={email} />

      <InputField
        label="Password:"
        setValue={setPassword}
        value={password}
        type="password"
      />

      {errorMessage && (
        <div style={{ border: "2px solid red" }}>
          <p style={{ color: "red" }}>{errorMessage}</p>
        </div>
      )}

      <button
        onClick={async () => {
          try {
            const response = await axios.post(
              "http://localhost:8080/api/sign-in",
              { email, password }
            );
            const {
              data: { token },
            } = response;

            setToken(token);
            setVisibility(false);
          } catch (e) {
            if (e.response.status === 400) {
              setErrorMessage("Invalid Email/Password");
            }
            console.log(e);
          }
        }}
      >
        Login
      </button>
    </Modal>
  );
};
