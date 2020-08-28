import React from "react";
import {StyleSheet, View} from "react-native";


const Wrapper = (props) => <View style={styles.wrapper}>{props.children}</View>;

export default Wrapper;

const styles = StyleSheet.create({
  wrapper: {
    
      justifyContent:"center",
      flex: 1,
  flexDirection:"row",
  flexWrap:"wrap",
    overflow: "scroll",
    width: "100%",
    
  },
});