import React from "react";
import {StyleSheet, View, Image} from "react-native";

const Card = (jill) => (
  <View style={styles.card}>
    <Image
      source={{ uri: jill.image }}
      style={{ width: "95%", height: "95%" }}
      id={jill.id}
      name={jill.name}
      onClick={() => jill.shuffleScoreCard(jill.id, jill.name)}
    />
    
  </View>
);

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#8cbeff",
    borderRadius: 10,
    margin: 2,
    minWidth: 140,
    minHeight: 140,
    resizeMode: "contain",
  },

  image: {
    // height: hp("20%"),
    // width: hp("20%"),
  },
});