import * as React from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import { ScrollView } from "react-native";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horiziontal";
import ScrollContainer from "../../components/ScrollContainer";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 5px;
`;

const Container = styled.View``;

const UpcomingContainer = styled.View``;

export default ({ refreshFn, loading, nowPlaying, popular, upcoming }) => {
  return (
    <ScrollContainer
      refreshFn={refreshFn}
      vertical
      style={{
        backgroundColor: "black",
      }}
      contentContainerStyle={{
        // flex: loading ? 1 : "auto",
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
            <ScrollView
              style={{ marginTop: 3 }}
              horizontal
              indicatorStyle={{ backgroundColor: "white" }}
            >
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
          <Title title={"Coming Soon"}></Title>
          <UpcomingContainer>
            {upcoming.map((movie) => (
              <Horizontal
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                votes={movie.vote_average}
                releaseDate={movie.release_date}
                poster={movie.poster_path}
                overview={movie.overview}
              ></Horizontal>
            ))}
          </UpcomingContainer>
        </>
      )}
    </ScrollContainer>
  );
};
