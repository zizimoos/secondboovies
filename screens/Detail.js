import * as React from "react";

import styled from "styled-components/native";
import ScrollContainer from "../components/ScrollContainer";
import { apiImage } from "../api";
import { Dimensions } from "react-native";
import Poster from "../components/Poster";

const Text = styled.Text`
  color: white;
`;
const Container = styled.View`
  height: ${Dimensions.get("window").height}px;
`;
const BGImage = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
`;

export default ({
  navigation,
  route: {
    params: {
      id,
      title,
      votes,
      poster,
      overview,
      releaseDate,
      backgroundImage,
    },
  },
}) => {
  navigation.setOptions({ title });
  return (
    <ScrollContainer>
      <Container>
        <BGImage source={{ uri: apiImage(poster) }} />
        <Poster url={poster}></Poster>
        <Text>{id}</Text>
        <Text>{title}</Text>
        <Text>{overview}</Text>
        <Text>{releaseDate}</Text>
        <Text>{votes}</Text>
      </Container>
    </ScrollContainer>
  );
};
