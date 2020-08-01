import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { apiImage } from "../api";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  margin-right: 2px;
`;

const Title = styled.Text`
  color: white;
`;

const Vertical = ({ id, poster, title, votes }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster url={apiImage(poster)}></Poster>
        <Title>{title.length > 10 ? `${title.slice(0, 10)}...` : title}</Title>
        <Votes votes={votes}></Votes>
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
