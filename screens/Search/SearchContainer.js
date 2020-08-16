import searchPresenter from "./SearchPresenter";
import * as React from "react";
import { View, Text } from "react-native";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

const SearchContainer = () => {
  const [keyword, setKeyword] = React.useState("");
  const [results, setResults] = React.useState({
    movies: [],
    shows: [],
    moviesError: null,
    showsError: null,
  });
  const onChange = (text) => setKeyword(text);

  const search = async () => {
    if (keyword === "") {
      return;
    }
    const [movies, moviesError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResults({
      movies,
      shows,
      moviesError,
      showsError,
    });
  };
  return (
    <SearchPresenter
      onChange={onChange}
      onSubmit={search}
      keyword={keyword}
      {...results}
    ></SearchPresenter>
  );
};

export default SearchContainer;
