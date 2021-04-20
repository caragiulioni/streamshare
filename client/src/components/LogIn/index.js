import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import LogInForm from "./LogInForm";
import LoginBtn from "../Buttons/LoginBtn";
import "../../Global/modalStyles.css";
import { FiX } from "react-icons/fi";

Modal.setAppElement("#root");
const LogIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const login = "Log In";
  return (
    <LoginWrap>
      <LoginBtn action={toggleModal} text={login} />
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
        contentLabel="Member log in"
      >
        <InnerModal>
          <Close onClick={toggleModal}>Close</Close>
          <h3>Log In</h3>
          <LogInForm />
        </InnerModal>
      </Modal>
    </LoginWrap>
  );
};

export default LogIn;

const LoginWrap = styled.div``;

const InnerModal = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    text-align: center;
    margin: 10px 0px;
    color: var(--blue);
    font-weight: bold;
  }
`;

const Close = styled.button`
  background-color: var(--blue);
  opacity: 0.8;
  color: white;
  padding: 2px 0px;
  width: 40px;
  margin-left: 110px;
  font-size: 0.8em;
  font-weight: 300;
  border: none;
`;
