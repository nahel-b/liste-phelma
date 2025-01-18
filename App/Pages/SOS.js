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
import { MurFeuillesHaut, HautLiane } from "../Components/Decoration";


const { width, height } = Dimensions.get("window");

export default function SOS() {

  
    const { missions,catégories_missions } = Data;


    return (
        <View style={{flex : 1, backgroundColor : lightTheme.background}}>

            
             {/* <View pointerEvents="none" 
            style={{
                
                height : width * 0.7,
                width : width * 0.7,
                position: "absolute",
                right : -width * 0.3, // Aligné à droite
                zIndex: 1,
                top : height * 0.25,

                //bottom: height * 0.5, // Centré verticalement
                transform: [{ rotateY: "0deg"},{rotateZ : "75deg" }],
                
                }} >
            <Image  source={require("../../assets/images/liane/liane-4.png")} 
            style={{
                
                height : width * 0.7,
                width : width * 0.7,
                resizeMode : "stretch",
                zIndex : 1,
                
                }}/>
            </View> */}
        <CategoriesPage items={missions} head_item={true} categories_item={catégories_missions} commander_button={true} nom={"SOS"}/>
        
       
      

           
        
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
