import * as React from "react";

import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import { apiImage } from "../../api";
import { Dimensions } from "react-native";
import Poster from "../../components/Poster";

const Text = styled.Text`
  color: white;
  padding: 10px;
`;
const Container = styled.View`
  height: ${Dimensions.get("window").height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BGImage = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
`;

const Info = styled.View``;

export default ({
  id,
  title,
  votes,
  poster,
  overview,
  releaseDate,
  backgroundImage,
  background_path,
  refreshFn,
  loading,
}) => {
  return (
    <ScrollContainer loading={loading} refreshFn={refreshFn}>
      <Container>
        <BGImage
          source={{ uri: apiImage(backgroundImage || background_path) }}
        />
        <Poster url={poster}></Poster>
        <Text style={{ fontSize: 24 }}>{title}</Text>
        <Info>
          <Text>
            ★ {votes} / 10 &nbsp; ∙ &nbsp; Release Date : {releaseDate}
          </Text>
          {overview ? <Text>Overview</Text> : <Text></Text>}

          <Text>{overview}</Text>
        </Info>
      </Container>
    </ScrollContainer>
  );
};
