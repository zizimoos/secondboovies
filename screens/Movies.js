import * as React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "black", fontColor: "white" }}>
      <Text style={{ color: "white" }}>Movies</Text>
      <Button
        onPress={() => navigation.navigate("Detail")}
        title="Go to Detail"
      ></Button>
    </View>
  );
};
