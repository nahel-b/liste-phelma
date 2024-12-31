import React from "react";
import { View, Text, Image,StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import lightTheme from "../Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Data from "../Data";  
import HapticBounceable from "../Components/HapticBounceable";
import { Linking } from "react-native";
const { lien_liste_facebook,lien_liste_insta,lien_liste_youtube } = Data;

import { Dimensions } from "react-native";
const { height,width } = Dimensions.get("window");

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
  
                
            <HapticBounceable onPress={()=>{Linking.openURL(lien_liste_facebook)}}>
            <View style={styles.shadow}>
                <Entypo name="facebook" size={30} color={lightTheme.lightGreen} style={{ margin: 10 }} />
            </View>
            </HapticBounceable>
            <HapticBounceable onPress={()=>{Linking.openURL(lien_liste_insta)}}>
            <View style={styles.shadow}>
            <Entypo name="instagram" size={30} color={lightTheme.lightGreen} style={{ margin: 10 }} />
            </View>
            </HapticBounceable>
            <HapticBounceable onPress={()=>{Linking.openURL(lien_liste_youtube)}}>
            <View style={styles.shadow}>
            <Entypo name="youtube" size={30} color={lightTheme.lightGreen} style={{ margin: 8 }} />
            </View>
            </HapticBounceable>
            </View>
            
            {/* <View style={{ alignItems : "center", justifyContent : "center",flex:1
  }}>
  
            
           <Text style={{ color: "black",fontSize : 22, marginLeft: 12,marginRight : 20,fontFamily : "JungleBold", }}>{data.nom_de_la_liste}</Text>
           
           
           
            </View> */}
            <View style={{flex : 1,alignItems : "flex-end",justifyContent : "flex-end"}}>
        <Image source={require("../../assets/images/lettre_crypt.png")} 
           
           style={{
            marginRight : 0,
            height : height * 0.055,
            width : height * 0.13,
           }}/>
        </View>
        </View>

        
        </View>

    );
  }




const styles = StyleSheet.create({ 


    shadow : {
        shadowColor: 'black',
                    shadowOffset: {width: 2, height: 2},
                    shadowOpacity: 0.8,
                    shadowRadius: 3,
    }
});