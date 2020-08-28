import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Clicky Game</Text>
        <Text style={styles.text2}>
          Try not to click the same person twice!
        </Text>
      </View>
    );};
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "10%",
    backgroundColor: "#8cbeff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 30,
    fontSize: 40,
  },
  text2: {
    marginTop: 10,
    fontSize: 14,
  },
});
