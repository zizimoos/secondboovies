import React from "react";
import FavsPresenter from "./FavsPresenter";
import { View, Text } from "react-native";
import { movieApi } from "../../api";

export default () => {
  const [favs, setFavs] = React.useState({
    discover: [],
    discoverError: null,
  });
  const getData = async () => {
    const [discover, discoverError] = await movieApi.discover();
    setFavs({ discover, discoverError });
  };

  React.useEffect(() => {
    getData();
  }, []);
  return <FavsPresenter {...favs}></FavsPresenter>;
};
