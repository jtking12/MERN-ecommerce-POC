import { Modal } from "./Modal";
import { useState } from "react";
import { InputField } from "./InputField";

export const Login = () => {
  const [isVisible, setVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      <button>Login</button>
    </Modal>
  );
};
