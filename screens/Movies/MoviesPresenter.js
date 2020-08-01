import * as React from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import { ScrollView } from "react-native";
import Vertical from "../../components/Vertical";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  margin-bottom: 5px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying, popular }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "black",
      }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <SliderContainer>
            <Swiper loop timeout={3} controlsEnabled={false}>
              {nowPlaying.map((movie) => (
                <Slide
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  overview={movie.overview}
                  votes={movie.vote_average}
                  backgroundImage={movie.backdrop_path}
                  poster={movie.poster_path}
                />
              ))}
            </Swiper>
          </SliderContainer>
          <Container style={{ backgroundColor: "black" }}>
            <Title title={"Popular Movies"}></Title>
            <ScrollView horizontal>
              {popular.map((movie) => (
                <Vertical
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  votes={movie.vote_average}
                  poster={movie.poster_path}
                />
              ))}
            </ScrollView>
          </Container>
        </>
      )}
    </ScrollView>
  );
};
