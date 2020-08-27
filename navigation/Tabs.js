import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tv from "../screens/TvShows/index";
import Search from "../screens/Search/index";
import Movies from "../screens/Movies/index";
import Favs from "../screens/Favs/index";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();
const getHeaderName = (route) =>
  route?.state?.routeNames[route?.state?.index] || "Movies";

export default ({ navigation, route }) => {
  React.useEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
      headerStyle: {
        backgroundColor: name === "Favs" ? "black" : "black",
        borderBottomColor: "black",
      },
    });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          // console.log(route);
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "Movies") {
            iconName += "film";
          } else if (route.name === "TV") {
            iconName += "tv";
          } else if (route.name === "Search") {
            iconName += "search";
          } else if (route.name === "Favs") {
            iconName += "heart-empty";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "grey"}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tabs.Screen name="Movies" component={Movies}></Tabs.Screen>
      <Tabs.Screen name="TV" component={Tv}></Tabs.Screen>
      <Tabs.Screen name="Search" component={Search}></Tabs.Screen>
      <Tabs.Screen name="Favs" component={Favs}></Tabs.Screen>
    </Tabs.Navigator>
  );
};
