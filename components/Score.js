import React from "react";
import {View, Text} from "react-native";

const Score = (props) => (
  <View>
    <Text>Your Score: {props.total}</Text>
   <Text>
      {props.status}
   </Text>
  </View>
);

export default Score;