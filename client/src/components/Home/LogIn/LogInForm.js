import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { receiveUserData, receiveUserDataErr } from "../../../actions/actions";
import Input from "../../Home/Input";
const LogInForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = useState({
    username: null,
    password: null,
  });
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
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
          console.log(data.data);
          history.push("/dashboard");
          //setData to local storage
          return dispatch(receiveUserData(data));
        }
        if (data.status === 400) {
          return dispatch(receiveUserDataErr());
          //setMessage from store??
          //setMessage(data.message);
        }
        //dispatch to actions
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
        <button onClick={handleSubmit}>Submit</button>
      </Form>
      <Message>{message}</Message>
    </>
  );
};

export default LogInForm;

const Form = styled.form``;

const Message = styled.p``;