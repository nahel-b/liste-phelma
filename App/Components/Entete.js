import React from "react";
import { View, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import lightTheme from "../Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

  



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
  
            <Entypo name="facebook" size={30} color={lightTheme.lightGreen} style={{ margin: 10 }} />
            <Entypo name="instagram" size={30} color={lightTheme.lightGreen} style={{ margin: 10 }} />
            <Entypo name="youtube" size={30} color={lightTheme.lightGreen} style={{ margin: 8 }} />
            </View>
            
            <View style={{ alignItems : "center", justifyContent : "center",flex:1
  }}>
  
            <Text style={{ color: "black",fontSize : 22, marginRight: 10,fontFamily : "JungleBold", }}>Nom de la liste</Text>
            </View>
        </View>
        </View>

    );
  }