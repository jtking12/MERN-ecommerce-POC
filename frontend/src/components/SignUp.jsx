import { useState } from "react";
import { Modal } from "./Modal";
import { InputField } from "./InputField";

export const SignUp = () => {
  const [isVisible, setVisibility] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isVisible)
    return <button onClick={() => setVisibility(true)}>Sign Up</button>;

  return (
    <Modal setVisibility={setVisibility}>
      <InputField
        label="First Name:"
        setValue={setFirstName}
        value={firstName}
      />
      <InputField label="Last Name:" setValue={setLastName} value={lastName} />
      <InputField label="Location:" setValue={setLocation} value={location} />
      <InputField label="Email:" setValue={setEmail} value={email} />
      <InputField
        label="Password:"
        setValue={setPassword}
        value={password}
        type="password"
      />

      <button>Sign Up</button>
    </Modal>
  );
};
