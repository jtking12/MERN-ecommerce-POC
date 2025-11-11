import { useState } from "react";
import { Modal } from "./Modal";
import { InputField } from "./InputField";
import axios from "axios";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserProvider";

export const SignUp = () => {
  const [user, token, setToken] = useContext(CurrentUserContext);
  const [isVisible, setVisibility] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const emptyFormFields =
    !firstName ||
    !lastName ||
    !location ||
    !email ||
    !password ||
    !confirmPassword;

  const passwordNoMatch = password !== confirmPassword;

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
      <InputField label="Email:" setValue={setEmail} value={email} />
      <InputField
        label="Password:"
        setValue={setPassword}
        value={password}
        type="password"
      />
      <InputField
        label="Confirm Password:"
        setValue={setConfirmPassword}
        value={confirmPassword}
        type="password"
      />
      <InputField label="Location:" setValue={setLocation} value={location} />

      {errorMessage && (
        <div style={{ border: "2px solid red" }}>
          <p style={{ color: "red" }}>{errorMessage}</p>
        </div>
      )}

      <button
        onClick={async () => {
          setIsSubmitted(true);

          if (emptyFormFields)
            return setErrorMessage("All fields are required");

          if (passwordNoMatch) return setErrorMessage("Passwords do not match");

          setErrorMessage("");

          try {
            const response = await axios.post(
              "http://localhost:8080/api/signup",
              { firstName, lastName, email, password, location }
            );
            const {
              data: { token },
            } = response;

            setToken(token);
            setVisibility(false);
          } catch (e) {
            if (e.response.status === 409) {
              setErrorMessage("Email already in use");
            } else {
              setErrorMessage("Error creating user");
            }

            console.log(e);
          }
        }}
      >
        Sign Up
      </button>
    </Modal>
  );
};
