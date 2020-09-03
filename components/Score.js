import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Score = (props) => (
  <View>
    <View style={styles.score2}>
      <Text>Your Score: {props.total}</Text>
      <Text style={styles.score2}>{props.status}</Text>
      <Text style={styles.score2}>{props.direction}</Text>
    </View>
  </View>
);

export default Score;

const styles = StyleSheet.create({
  score: {
    justifyContent: "center",
  },
  score2: {
    justifyContent: "center",
    alignItems: "center",
  },
});
