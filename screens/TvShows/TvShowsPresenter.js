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

const TestView = styled.Text`
  color: white;
`;
const UpcomingContainer = styled.View``;

export default ({ refreshFn, loading, today, thisWeek, topRated, popular }) => {
  return (
    <ScrollContainer loading={loading} refreshFn={refreshFn}>
      <>
        <Container style={{ backgroundColor: "black" }}>
          <Title title={"Today Shows"}></Title>
          <ScrollView
            style={{ marginTop: 3 }}
            horizontal
            indicatorStyle={{ backgroundColor: "white" }}
          >
            {today.map((show) => (
              <Vertical
                isTv={true}
                key={show.id}
                id={show.id}
                title={show.original_name.slice(0, 7)}
                votes={show.vote_count}
                poster={show.poster_path}
              />
            ))}
          </ScrollView>
        </Container>
        <SliderContainer>
          <Swiper loop timeout={3} controlsEnabled={false}>
            {thisWeek.map((movie) => (
              <Slide
                isTv={true}
                key={movie.id}
                id={movie.id}
                title={movie.original_name}
                overview={movie.overview}
                votes={movie.vote_count}
                backgroundImage={movie.backdrop_path}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </SliderContainer>
        <Title title={"Top Rated"}></Title>
        <UpcomingContainer>
          {topRated.map((movie) => (
            <Horizontal
              isTv={true}
              key={movie.id}
              id={movie.id}
              title={movie.original_name}
              votes={movie.vote_count}
              releaseDate={movie.first_air_date}
              poster={movie.poster_path}
              overview={movie.overview}
            ></Horizontal>
          ))}
        </UpcomingContainer>
      </>
    </ScrollContainer>
  );
};
