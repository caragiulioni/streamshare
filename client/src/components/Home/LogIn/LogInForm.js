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
          const id = data.data.user._id;
          localStorage.setItem("streamshareUser", id);
          history.push("/mytitles");
          return dispatch(receiveUserData(data.data));
        }
        if (data.status === 400) {
          //setMessage from store??
          //setMessage(data.message);
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
