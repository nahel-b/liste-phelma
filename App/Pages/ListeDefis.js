import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Image, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedGestureHandler, useAnimatedStyle, withSpring } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import lightTheme from "../Colors";
import EntetePage from "../Components/EntetePage";
import MultipleMenu from "../Components/MultipleMenu";
import HapticBounceable from "../Components/HapticBounceable";
import CategoriesPage from "../Components/CategoriesPage";
import Data from "../Data";



const { width, height } = Dimensions.get("window");

export default function ListeDefis() {

  
    const { defis,catégories_défis } = Data;


    return (
        <View style={{flex : 1, backgroundColor : lightTheme.background}}>
        <CategoriesPage items={defis} categories_item={catégories_défis} commander_button={false} nom={"Liste des défis"}/>
        
        {/* <View pointerEvents="none"
        style={{
            
            height : height * 0.15,
            width : width * 0.6,
            position: "absolute",
            top: 0, // Aligné en haut
            left: -60, // Aligné à droite
            zIndex: 1,
            transform: [{ rotate: "-20deg" }],
    
        }} >
      <Image source={require("../../assets/images/liane/liane-1.png")} 
      style={{
        
        height : height * 0.15,
        width : width * 0.6,
        

      }}/>
      </View> */}
        
        </View>
    )
}


const style = StyleSheet.create(

    {
        ImageContainer : 
        
        {
            
        }

    }
)
