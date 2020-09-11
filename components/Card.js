import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
"react-native";

const Card = (jill) => (
 
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => jill.shuffleScoreCard(jill.id, jill.name)}
      >
        <Image
          source={{ uri: jill.image }}
          style={{ width: "95%", height:"97.5%" }}
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
    height: "22%",
    resizeMode:"contain"
  },
});
