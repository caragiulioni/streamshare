import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import SignUpForm from "./SignUpForm";
import LoginBtn from "../Buttons/LoginBtn";
import "../../Global/modalStyles.css";
Modal.setAppElement("#root");
const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const signup = "Sign Up";
  return (
    <LoginWrap>
      <LoginBtn action={toggleModal} text={signup} />
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
        contentLabel="Member sign up"
      >
        <InnerModal>
          <Close onClick={toggleModal}>Close</Close>
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
  text-align: center;
  h3 {
    margin: 10px 0px;
    color: var(--blue);
    font-weight: bold;
  }
`;

const Close = styled.button`
  background-color: var(--orange);
  opacity: 0.8;
  color: white;
  padding: 2px 0px;
  width: 40px;
  margin-left: 150px;
  font-size: 0.8em;
  font-weight: 300;
  border: none;
  @media (min-width: 700px) {
    margin-left: 120px;
  }
`;
