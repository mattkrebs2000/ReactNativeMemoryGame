import React from "react";
import { Dimensions, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const Card = (jill) => (
  <View
    style={
      Dimensions.get("window").height > Dimensions.get("window").width
        ? styles.card2
        : styles.card
    }
  >
    <TouchableOpacity onPress={() => jill.shuffleScoreCard(jill.id, jill.name)}>
      <Image
        source={{ uri: jill.image }}
        style={{ width: "95%", height: "97.5%" }}
        id={jill.id}
        name={jill.name}
      />
    </TouchableOpacity>
  </View>
);



export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#8cbeff",
    borderRadius: 10,
    margin: 2,
    minWidth: 140,
    height: "48%",
    resizeMode: "contain",
  },
  card2: {
    backgroundColor: "#8cbeff",
    borderRadius: 10,
    margin: 2,
    minWidth: 140,
    height: "24%",
    resizeMode: "contain",
  },
});
