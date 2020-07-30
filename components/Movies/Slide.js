import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Dimensions, Image, Text } from "react-native";
import { apiImage } from "../../api";
import Poster from "../Poster";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BGImage = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Data = styled.View`
  width: 50%;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;
const Votes = styled.Text`
  color: white;
  opacity: 0.7;
  margin-bottom: 5px;
  font-size: 12px;
`;
const Overview = styled.Text`
  color: white;
  opacity: 0.7;
  font-size: 14px;
  font-weight: 500;
`;

const DetailButton = styled.View`
  margin-top: 5px;
  width: 50%;
  background-color: #e74c3c;
  padding: 4px;
  border-radius: 20px;
  text-align: center;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
  <Container>
    <BGImage resizeMode="cover" source={{ uri: apiImage(backgroundImage) }} />
    <Content>
      <Poster url={apiImage(poster)}></Poster>
      <Data>
        <Title>{title.slice(0, 20)}</Title>
        <Votes>★ {votes} / 10</Votes>
        <Overview>{overview.slice(0, 120)}...</Overview>
        <TouchableOpacity>
          <DetailButton>
            <Text style={{ color: "white" }}> View Detail </Text>
          </DetailButton>
        </TouchableOpacity>
      </Data>
    </Content>
  </Container>
);

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Slide;
