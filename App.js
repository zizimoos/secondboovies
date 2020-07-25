import React, { useState } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import Stack from "./navigation/Stack";
import Tabs from "./navigation/Tabs";

// const cacheImages = (images) =>
//   images.map((image) => {
//     if (typeof image === "string") {
//       return Image.prefetch(image);
//     } else {
//       return Asset.fromModule(image).downloadAsync();
//     }
//   });

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    // const images = cacheImages([
    //   "https://images.unsplash.com/photo-1505850557988-b858c0aec076?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
    //   require("./assets/splash.png"),
    // ]);
    const fonts = cacheFonts([Ionicons.font]);
    // return Promise.all([...images, ...fonts]);
    return Promise.all([...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <>
      <NavigationContainer>
        <Stack></Stack>
      </NavigationContainer>
      <StatusBar barStyle="default"></StatusBar>
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    ></AppLoading>
  );
}
