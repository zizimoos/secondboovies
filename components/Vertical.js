import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { apiImage } from "../api";
import Votes from "./Votes";

const Container = styled.View`
  margin-right: 2px;
`;

const Title = styled.Text`
  color: white;
`;

const Vertical = ({ poster, title, votes }) => {
  return (
    <Container>
      <Poster url={apiImage(poster)}></Poster>
      <Title>{title.slice(0, 10)}...</Title>
      <Votes votes={votes}></Votes>
    </Container>
  );
};

Vertical.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
