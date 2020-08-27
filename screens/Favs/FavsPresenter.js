import React from "react";
import styled from "styled-components/native";
import { Dimensions, PanResponder, Animated } from "react-native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

const Card = styled.View`
  top: 50px;
  height: ${HEIGHT / 1.5}px;
  width: 90%;
  position: absolute;
`;

const Poster = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

const styles = {
  top: 50,
  height: HEIGHT / 1.5,
  width: "90%",
  position: "absolute",
};

export default ({ discover }) => {
  const [topIndex, setTopIndex] = React.useState(0);
  const nextCard = () => setTopIndex((currentValue) => currentValue + 1);

  const repeatCard = () => {
    if (topIndex === 19) {
      setTopIndex(-1);
    }
  };
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (evt, { dx, dy }) => {
      if (dx >= 250) {
        Animated.spring(position, {
          toValue: {
            x: WIDTH * 1.5,
            y: dy,
          },
        }).start(nextCard);
        repeatCard();
      } else if (dx <= -250) {
        Animated.spring(position, {
          toValue: {
            x: -WIDTH * 1.5,
            y: dy,
          },
        }).start(nextCard);
        repeatCard();
      } else {
        Animated.spring(position, {
          toValue: {
            x: 0,
            y: 0,
          },
          bounciness: 10,
        }).start();
      }
    },
  });

  const rotationValues = position.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });
  const secondCardOpacity = position.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [0.9, 0.1, 0.9],
    extrapolate: "clamp",
  });
  const secondCardScale = position.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [1, 0.5, 1],
    extrapolate: "clamp",
  });

  return (
    <Container>
      {discover.map((dis, index) => {
        if (index < topIndex) {
          return null;
        } else if (index === topIndex) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: 1,
                transform: [
                  { rotate: rotationValues },
                  ...position.getTranslateTransform(),
                ],
              }}
              key={dis.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(dis.poster_path) }}></Poster>
            </Animated.View>
          );
        } else if (index === topIndex + 1) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }],
              }}
              key={dis.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(dis.poster_path) }}></Poster>
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: 0,
              }}
              key={dis.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(dis.poster_path) }}></Poster>
            </Animated.View>
          );
        }
      })}
    </Container>
  );
};
