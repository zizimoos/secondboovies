import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const ItextInput = styled.TextInput`
  background-color: white;
  color: black;
  margin: 0px 30px;
  padding: 3px 20px;
  border-radius: 20px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => {
  return (
    <ItextInput
      returnKeyType={"search"}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      placeholder={placeholder}
      value={value}
    ></ItextInput>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
