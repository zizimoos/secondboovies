import React, { useState } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import Stack from "./navigation/Stack";
import Tabs from "./navigation/Tabs";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://filmlexikon.hu/media/persons/portraits/t/tessa-thompson--RH6EFzIocL.jpg",
      require("./assets/splash.png"),
    ]);
    const fonts = cacheFonts([Ionicons.font, FontAwesome.font]);
    return Promise.all([...images, ...fonts]);
    // return Promise.all(...fonts);
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
