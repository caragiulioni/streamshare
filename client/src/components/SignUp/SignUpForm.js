import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Input from "../Home/Input";
import LoginBtn from "../Buttons/LoginBtn";
const SignUpForm = () => {
  let history = useHistory();
  const [value, setValue] = useState({
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  });
  const isVerified = "minimum 8 characters";
  const notVerified = "passwords do not match";
  const submit = "Submit";

  const [message, setMessage] = useState(isVerified);
  const [confirmed, setConfirmed] = useState("*all fields required");
  const [inputErr, setInputErr] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !value.password ||
      !value.confirmPassword ||
      !value.email ||
      !value.username
    ) {
      setConfirmed("please fill in all required fields");
    } else {
      const passIsValid = value.password === value.confirmPassword;
      const verifyEmail =
        value.email.includes("@") && value.email.includes(".");
      if (!passIsValid) {
        setInputErr("password");
        setMessage(notVerified);
      }
      if (!verifyEmail) {
        setInputErr("email");
        setConfirmed("email must contain valid characters");
      }
      if (!passIsValid && !verifyEmail) {
        setInputErr("all");
        setMessage(notVerified);
        setConfirmed("email must contain valid characters");
      }
      if (passIsValid && verifyEmail) {
        fetch("/signup", {
          method: "POST",
          body: JSON.stringify(value),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status === 200) {
              history.push("/login");
            } else if (data.status === 400) {
            }
          });
      }
    }
  };

  return (
    <>
      <Form type="submit" autocomplete="on">
        <label htmlFor="username" aria-label="username" />
        <Input
          maxlength="10"
          name="username"
          type="text"
          placeholder="User Name"
          setValue={setValue}
          value={value}
        />
        <label htmlFor="email" aria-label="email" />
        <Input
          borderColor={
            inputErr === "email" || inputErr === "all" ? "#F7A800" : "darkgrey"
          }
          name="email"
          type="text"
          placeholder="Your email"
          setValue={setValue}
          value={value}
        />

        <Password>
          <label htmlFor="password" aria-label="password" />
          <Input
            borderColor={
              inputErr === "password" || inputErr === "all"
                ? "#F7A800"
                : "darkgrey"
            }
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            minlength="8"
            setValue={setValue}
            value={value}
          />
          <label htmlFor="confirmPassword" aria-label="confirm-password" />
          <Input
            borderColor={
              inputErr === "password" || inputErr === "all"
                ? "#F7A800"
                : "darkgrey"
            }
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            setValue={setValue}
            value={value}
          />
          <p color={inputErr === "password" && "#F7A800"}>{message}</p>
        </Password>
        <LoginBtn action={handleSubmit} text={submit} />
      </Form>
      <Confirmation>{confirmed}</Confirmation>
    </>
  );
};

export default SignUpForm;

const Form = styled.form`
  p {
    text-align: center;
    margin-top: -5px;
    margin-bottom: 5px;
    font-size: 0.6em;
    font-weight: 100;
  }
`;

const Password = styled.div`
  display: flex;
  flex-direction: column;
`;

const Confirmation = styled.p`
  text-align: center;
  font-weight: 100;
  font-size: 0.6em;
  margin: 10px 0px;
`;
