import * as React from "react";
import { View, Text, Button } from "react-native";
import { tvApi } from "../api";

export default ({ navigation, route }) => {
  const [shows, setShows] = React.useState({
    today: [],
    todayError: null,
    thisWeek: [],
    thisWeekError: null,
    popular: [],
    popularError: null,
    topRated: [],
    topRatedError: null,
  });
  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [popular, popularError] = await tvApi.popular();
    const [topRated, topRatedError] = await tvApi.topRated();
    setShows({
      today,
      todayError,
      thisWeek,
      thisWeekError,
      popular,
      popularError,
      topRated,
      topRatedError,
    });
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "black", fontColor: "white" }}>
      <Text style={{ color: "white" }}>
        todayLength : {shows.today?.length}
      </Text>
      <Button
        onPress={() => navigation.navigate("Detail")}
        title="Go to Detail"
      ></Button>
    </View>
  );
};
