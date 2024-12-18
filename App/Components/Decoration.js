import React, { useState } from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import lightTheme from "../Colors";
import EntetePage from "../Components/EntetePage";
import MultipleMenu from "../Components/MultipleMenu";
import Data from "../Data";
import { Dimensions } from "react-native";
import HapticBounceable from "../Components/HapticBounceable";
import { ScrollView } from "react-native-gesture-handler";
const { height,width } = Dimensions.get("window");



export function MurFeuillesGauche({petit})
{


    return (
            
            <View pointerEvents="none" style={{zIndex : 1}}>


        {/* MUR HAUT GAUCHE */}
        <View pointerEvents="none" 
        style={{
            
            height : width * 1,
            width : width * 1,
            position: "absolute",
            left : !petit ?  -width * 0.63 :  -width * 0.67, // Aligné à droite
            zIndex: 1,
            top : width * 0.22,

            //bottom: height * 0.5, // Centré verticalement
            transform: [{ rotateY: "180deg"},{rotateZ : "0deg" }],
            
            }} >
        <Image  source={require("../../assets/images/liane/mur.png")} 
        style={{
            
            height : width * 1,
            width : width * 1,
            resizeMode : "stretch",
            zIndex : 1,
            
            }}/>
        </View>

        {/*   ----- MUR BAS GAUCHE  -----  */}
        <View pointerEvents="none" 
            style={{
                
                height : width * 1,
                width : width * 1,
                position: "absolute",
                left : -width * 0.72, // Aligné à droite
                zIndex: 2,
                top : height * 0.4,

                //bottom: height * 0.5, // Centré verticalement
                transform: [{ rotateY: "0deg"},{rotateZ : "10deg" }],
                
                }} >
            <Image  source={require("../../assets/images/liane/mur.png")} 
            style={{
                
                height : width * 1,
                width : width * 1,
                resizeMode : "stretch",
                zIndex : 1,
                
                }}/>
            </View>

        </View>
    );
}

export function MurFeuillesDroite({petit,monter})
{

    return (
            
        <View pointerEvents="none" style={{zIndex : 1}} >
{/* MUR HAUT DROITE */}
<View pointerEvents="none" 
            style={{
                
                height : width * 1,
                width : width * 1,
                position: "absolute",
                left : !petit ? width * 0.7 : width * 0.75, // Aligné à droite
                zIndex: 2,
                top : monter ? width * 0.25 : width * 0.25,

                //bottom: height * 0.5, // Centré verticalement
                transform: [{ rotateY: "180deg"},{rotateZ : "10deg" }],
                
                }} >
            <Image  source={require("../../assets/images/liane/mur.png")} 
            style={{
                
                height : width * 1,
                width : width * 1,
                resizeMode : "stretch",
                zIndex : 1,
                
                }}/>
            </View>
            

            {/* MUR BAS DROITE */}
            <View pointerEvents="none" 
            style={{
                
                height : width * 1,
                width : width * 1,
                position: "absolute",
                right : -width * 0.6, // Aligné à droite
                zIndex: 1,
                top : height * 0.4,

                //bottom: height * 0.5, // Centré verticalement
                transform: [{ rotateY: "0deg"},{rotateZ : "0deg" }],
                
                }} >
            <Image  source={require("../../assets/images/liane/mur.png")} 
            style={{
                
                height : width * 1,
                width : width * 1,
                resizeMode : "stretch",
                zIndex : 1,
                
                }}/>
            </View>




    </View>);
}

export function MurFeuillesHaut({fg,monter})
{
    return (
           
        <View pointerEvents="none" style={{zIndex : fg ? 2 : 0}} >
        
        {/*   ----- HAUT DROITE  -----  */}

      <View pointerEvents="none" 
       style={{
        
        height : width * 0.5,
        width : width * 0.5,
        position: "absolute",
        right : 0, // Aligné à droite
        zIndex : 3,
        top : monter ? -height*0.05 : 0,
        //bottom: height * 0.5, // Centré verticalement
        transform: [{ rotateY: "180deg"},{rotateZ : "0deg" }],
        
          }} >
      <Image  source={require("../../assets/images/liane/leave-frame-left.png")} 
      style={{
        
        height : width * 0.5,
        width : width * 0.5,
        
          }}/>
      </View>
      
      {/*   ----- HAUT GAUCHE  -----  */}
      <View pointerEvents="none" 
       style={{
        
        height : width * 0.7,
        width : width * 0.7,
        position: "absolute",
        left : 0, // Aligné à droite
        zIndex: 0,
        top : width * 0.0,

        //bottom: height * 0.5, // Centré verticalement
        transform: [{ rotateY: "180deg"},{rotateZ : "0deg" }],
        
          }} >
      <Image  source={require("../../assets/images/liane/leave-frame-right.png")} 
      style={{
        
        height : width * 0.7,
        width : width * 0.7,
        resizeMode : "stretch"
        
          }}/>
      </View>

    </View>
    )
}

export function HautLiane()
{


    return (

        <View pointerEvents="none" style={{zIndex : 1}}>
            {/*   ----- HAUT LIANE  -----  */}
        <View pointerEvents="none"
        style={{
            
            height : height * 0.18,
            width : width * 0.7,
            position: "absolute",
            top: -width * 0.23, // Aligné en haut
            left: width*0.2, // Aligné à droite
            zIndex: 3,
            transform: [{ rotate: "-20deg" }],
    
        }} >
      <Image source={require("../../assets/images/liane/liane-1.png")} 
      style={{
        
        height : height * 0.18,
        width : width * 0.7,
        

      }}/>
      </View>
      </View>
    )
}