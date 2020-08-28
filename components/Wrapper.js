import React from "react";
import {StyleSheet, View} from "react-native";


const Wrapper = (props) => <View style={styles.wrapper}>{props.children}</View>;

export default Wrapper;

const styles = StyleSheet.create ({
    wrapper: {

width: "100%",
height: "100%", 

    } })