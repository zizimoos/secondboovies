import * as React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/input";
import Horizontal from "../../components/Horiziontal";
import { ScrollView } from "react-native";

import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../../components/ScrollContainer";

const Container = styled.ScrollView`
  background-color: black;
`;
const MoviesSearchContainer = styled.View`
  margin-top: 10px;
`;

export default ({ onChange, onSubmit, keyword, movies, shows }) => {
  return (
    <ScrollContainer
      refreshFn={onSubmit}
      loading={false}
      contentContainerStyle={{ paddingTop: 10 }}
    >
      <Input
        placeholder={` Search term `}
        value={keyword}
        onChange={onChange}
        onSubmit={onSubmit}
      ></Input>
      <MoviesSearchContainer>
        {movies?.length !== 0 && <Title title={"Movies Results"}></Title>}
        <ScrollView
          style={{ marginTop: 3 }}
          horizontal
          indicatorStyle={{ backgroundColor: "white" }}
        >
          {movies.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              votes={movie.vote_average}
              poster={movie.poster_path}
            />
          ))}
        </ScrollView>
      </MoviesSearchContainer>
      <MoviesSearchContainer>
        {shows.length !== 0 && <Title title={"TvShows Results"}></Title>}
        <ScrollView
          style={{ marginTop: 3 }}
          horizontal
          indicatorStyle={{ backgroundColor: "white" }}
        >
          {shows.map((show) => (
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
      </MoviesSearchContainer>
    </ScrollContainer>
  );
};
