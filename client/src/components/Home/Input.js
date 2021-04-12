import React from "react";
import styled from "styled-components";
const Input = ({
  name,
  type,
  placeholder,
  setValue,
  value,
  borderColor,
  emailBorder,
}) => {
  return (
    <Wrapper>
      <label htmlFor={name}></label>
      <StyledInput
        emailBorder={emailBorder}
        borderColor={borderColor}
        type={type}
        name={name}
        placeholder={placeholder}
        required
        onChange={(e) => setValue({ ...value, [name]: e.target.value })}
      />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin: 2px 0px 10px 0px;
  }

  label {
    font-size: 0.7em;
    font-weight: normal;
  }
  input::placeholder {
    color: grey;
    font-size: 0.7em;
  }
`;

const StyledInput = styled.input`
  border-color: ${(props) => props.borderColor};
`;
