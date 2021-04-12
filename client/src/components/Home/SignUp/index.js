import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import SignUpForm from "./SignUpForm";

import "../modalStyles.css";
Modal.setAppElement("#root");
const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <LoginWrap>
      <button onClick={toggleModal}>Sign Up</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
        contentLabel="Member sign up"
      >
        <InnerModal>
          <button onClick={toggleModal}>X</button>
          <h3>Sign Up</h3>
          <SignUpForm />
        </InnerModal>
      </Modal>
    </LoginWrap>
  );
};

export default SignUp;

const LoginWrap = styled.div``;

const InnerModal = styled.div`
  display: flex;
  flex-direction: column;

  button {
  }
`;
