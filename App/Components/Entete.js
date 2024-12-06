import React from "react";
import { View, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import lightTheme from "../Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Data from "../Data";  
import RNBounceable from "@freakycoder/react-native-bounceable";
import { Linking } from "react-native";
const { lien_liste_facebook,lien_liste_insta,lien_liste_youtube } = Data;

import data from "../Data";


export default function Entete() {

    const insets = useSafeAreaInsets();
    return (

        <View>
        <View style={[{ height: insets.top, backgroundColor: lightTheme.barBackground }]} />

        <View
            style={{
                alignItems: "center",
                backgroundColor: lightTheme.barBackground,
                flexDirection: "row",
                zIndex: 2,
            }}  
        >

                <View
                style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
  
                
            <RNBounceable onPress={()=>{Linking.openURL(lien_liste_facebook)}}>
            <Entypo name="facebook" size={30} color={lightTheme.lightGreen} style={{ margin: 10 }} />
            </RNBounceable>
            <RNBounceable onPress={()=>{Linking.openURL(lien_liste_insta)}}>
            <Entypo name="instagram" size={30} color={lightTheme.lightGreen} style={{ margin: 10 }} />
            </RNBounceable>
            <RNBounceable onPress={()=>{Linking.openURL(lien_liste_youtube)}}>
            <Entypo name="youtube" size={30} color={lightTheme.lightGreen} style={{ margin: 8 }} />
            </RNBounceable>
            </View>
            
            <View style={{ alignItems : "center", justifyContent : "center",flex:1
  }}>
  
            <Text style={{ color: "black",fontSize : 22, marginRight: 10,fontFamily : "JungleBold", }}>{data.nom_de_la_liste}</Text>
            </View>
        </View>
        </View>

    );
  }