import * as React from "react";

import Detail from "../screens/Detail";

import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "black",
        },
        headerTintColor: "white",
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs}></Stack.Screen>
      <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
    </Stack.Navigator>
  );
};
