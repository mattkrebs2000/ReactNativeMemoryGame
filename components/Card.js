import React from "react";
import {StyleSheet, View, Image} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";



const Card = (jill) => (
  <View style={styles.card}>
    <Image
      source={{ uri: jill.image }}
      style={{ width: "100%", height: "100%" }}
    />
  </View>
);

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "red",
    borderRadius: 10,
    margin: 2,
    height: hp("20%"),
    width: hp("20%"),
    resizeMode: "contain",
  },

  image: {
    height: hp("20%"),
    width: hp("20%"),
  },
});