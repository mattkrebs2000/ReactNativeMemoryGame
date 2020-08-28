import React from "react";
import {StyleSheet, View, Image} from "react-native";


const Card = (jill) => (
  <View style={styles.card}>
  <Image source = {{uri:jill.image}}
   style = {{ width: 200, height: 200 }}/>
  </View>
);

export default Card;

const styles = StyleSheet.create({
card: {
backgroundColor: "red",
borderRadius: 10, 
margin: 2, 

width:"50%",
height: "20%",
overflow: "hidden",  
},

image: {
width: "100%"

}

})