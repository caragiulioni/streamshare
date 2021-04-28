import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  sendUserData,
  receiveUserData,
  receiveUserDataErr,
} from "../../actions/actions";
import Input from "../Home/Input";
import LoginBtn from "../Buttons/LoginBtn";
const LogInForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = useState({
    username: null,
    password: null,
  });
  const [message, setMessage] = useState("");
  const submit = "Submit";
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendUserData());
    fetch("/api/login", {
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
          const id = data.data.user._id;
          localStorage.setItem("streamshareUser", id);
          dispatch(receiveUserData(data.data));
          history.push("/mytitles");
        } else {
          setMessage("please provide valid login data");
          dispatch(receiveUserDataErr());
        }
      });
  };
  return (
    <>
      <Form type="submit" autocomplete="on">
        <Input
          name="username"
          type="text"
          placeholder="User Name"
          setValue={setValue}
          value={value}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          minlength="8"
          setValue={setValue}
          value={value}
        />
        <LoginBtn action={handleSubmit} text={submit} />
      </Form>
      <Message>{message}</Message>
    </>
  );
};

export default LogInForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.p`
  text-align: center;
  margin: 10px 0px;
  color: var(--orange);
  font-size: 0.8em;
`;
