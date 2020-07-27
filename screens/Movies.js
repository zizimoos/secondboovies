import * as React from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../api";

export default ({ navigation, route }) => {
  const [movies, setMovies] = React.useState({
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
    });
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "black", fontColor: "white" }}>
      <Text style={{ color: "white" }}>
        nowPlayingLength : {movies.nowPlaying?.length}
      </Text>
      <Button
        onPress={() => navigation.navigate("Detail")}
        title="Go to Detail"
      ></Button>
    </View>
  );
};
