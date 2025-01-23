import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import HapticBounceable from "../Components/HapticBounceable";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const TabSelector = ({ titles, components,head_item }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const w = titles.length === 1 ? width * 0.4  : titles.length === 3 ? width * 0.31 : width * 0.25;

  const styles = StyleSheet.create({
    container: {
      justifyContent : "flex-start",
    },
    tabContainer: {
      flexDirection: "row",
      //paddingVertical: 1,
      alignItems: "flex-start",
    },
    tabButton: {
      alignItems: "center",
      marginHorizontal: 5,
      width : w,
      height: width * 0.14,
      justifyContent: "center",
      
  
    },
    tabImage: {
      width: w,
      height: width * 0.14,
      resizeMode: "stretch",
      zIndex: 1,
    },
    tabText: {
      position: "absolute",
      //top: width * 0.042,
      fontSize: width * 0.048,
      fontFamily: "JungleBold",
      color: "rgb(95,49,17)",
      textAlign: "center",
      zIndex: 2 
      ,
    },
    componentContainer: {
      marginTop: height * 0.02,
      justifyContent: "flex-start",
      height: height*0.65,
    },
  });

  return (
    <View style={styles.container}>
      {/* Scroll View Horizontale pour les titres */}
      <ScrollView horizontal contentContainerStyle={styles.tabContainer} showsHorizontalScrollIndicator={false}>
        {titles.map((title, index) => (
          <HapticBounceable
            key={index}
            onPress={() => setSelectedIndex(index)}
            
          >
            <View style={[styles.tabButton, titles.length === 1 && {alignItems : "center",width : width}]}>
            <Image
              style={styles.tabImage}
              source={
                selectedIndex === index && titles.length > 1
                  ? require("../../assets/images/button/button-wood-pressed.png")
                  : require("../../assets/images/button/button-wood.png")
              }
            />
            <Text style={styles.tabText}>{title}</Text>
            </View>
          </HapticBounceable>
        ))}
        
      </ScrollView>

      {head_item != null && head_item[selectedIndex]}
      {/* Composant affiché */}
      <View style={styles.componentContainer}>
        {components[selectedIndex]}
      </View>
    </View>
  );
};





export default TabSelector;
