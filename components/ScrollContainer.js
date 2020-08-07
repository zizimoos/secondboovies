import React from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

const ScrollContainer = ({ loading, children }) => (
  <ScrollView
    vertical
    style={{
      backgroundColor: "black",
    }}
    contentContainerStyle={{
      //   flex: loading ? "1" : "auto",
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? <ActivityIndicator color="white" size="small" /> : children}
  </ScrollView>
);

ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollContainer;
