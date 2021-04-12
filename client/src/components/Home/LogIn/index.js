import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import LogInForm from "./LogInForm";

import "../modalStyles.css";
Modal.setAppElement("#root");
const LogIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <LoginWrap>
      <button onClick={toggleModal}>Log In</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
        contentLabel="Member log in"
      >
        <InnerModal>
          <button onClick={toggleModal}>X</button>
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

  button {
    align-self: flex-end;
  }
`;
