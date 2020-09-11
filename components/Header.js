import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Memory Game</Text>
        <Text style={styles.text2}>
          Try not to click on the same famous person twice!
        </Text>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    backgroundColor: "#8cbeff",
    alignItems: "center",
    justifyContent:"center",
    
   
  
  },
  text: {
    marginTop: -20,
    fontSize: 40,
  },
  text2: {
    fontSize: 14,
  marginBottom:-30,
  },
});
