import * as React from "react";
import { View, Text } from "react-native";
import { movieApi } from "../api";

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
  return (
    <View>
      <Text>Favorites length : {favs.discover?.length}</Text>
    </View>
  );
};
