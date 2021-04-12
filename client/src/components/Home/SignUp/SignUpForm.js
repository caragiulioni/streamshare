import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../Input";
const SignUpForm = () => {
  const [value, setValue] = useState({
    userName: null,
    email: null,
    password: null,
    confirmPassword: null,
  });

  console.log(value);

  let isVerified = "minimum 8 characters";
  let notVerified = "passwords do not match";

  const [message, setMessage] = useState(isVerified);
  const [confirmed, setConfirmed] = useState("*all fields required");
  const [borderColor, setBorderColor] = useState("darkgrey");
  const handleSubmit = (event) => {
    event.preventDefault();
    const passIsValid = value.password === value.confirmPassword;
    const verifyEmail = value.email.includes("@") && value.email.includes(".");
    if (!passIsValid) {
      setBorderColor("#E97124");
      setMessage(notVerified);
    } else if (!verifyEmail) {
      setBorderColor("#E97124");
      setConfirmed("email must contain valid characters");
    } else {
      setBorderColor("darkgrey");
      //perfoem POST fetch
      //commit to database
      //pass data to dispatch
    }
  };

  return (
    <>
      <Form type="submit">
        <Input
          name="userName"
          type="text"
          placeholder="User Name"
          setValue={setValue}
          value={value}
        />

        <Input
          borderColor={borderColor}
          name="email"
          type="text"
          placeholder="Your email"
          setValue={setValue}
          value={value}
        />

        <Password>
          <Input
            borderColor={borderColor}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            minlength="8"
            setValue={setValue}
            value={value}
          />
          <Input
            borderColor={borderColor}
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            setValue={setValue}
            value={value}
          />
          <p>{message}</p>
        </Password>
        <button onClick={handleSubmit}>Submit</button>
      </Form>
      <Confirmation>{confirmed}</Confirmation>
    </>
  );
};

export default SignUpForm;

const Form = styled.form`
  font-size: 0.4em;
  p {
    margin-top: -5px;
    margin-bottom: 5px;
    font-size: 0.6em;
  }
`;

const Password = styled.div`
  display: flex;
  flex-direction: column;
`;

const Confirmation = styled.p`
  font-size: 0.6em;
  margin: 10px 0px;
`;
