import React from "react";
import { Text, View, StyleSheet, Dimensions,Image } from "react-native";
const { width, height } = Dimensions.get("window");
import { useFonts,getLoadedFonts } from 'expo-font';
import lightTheme from "../Colors";
import Entete from "../Components/Entete";
import { useNavigation } from "@react-navigation/native";

import RNBounceable from "@freakycoder/react-native-bounceable";





export default function Acceuil() {

  const navigation = useNavigation();
    
  
  return (

<View style={{flex : 1,backgroundColor : lightTheme.background}}>
    <View style={styles.container}>
      
      {/* Event du jour et Calendrier */}


<View pointerEvents="none"
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
      </View>
      <View pointerEvents="none"
        style={{
            
            height : width * 0.4,
        width : width * 0.2,
            position: "absolute",
            top: height*0.1, // Aligné en haut
            left: 0, // Aligné à droite
            zIndex: 1,
            transform: [{ rotate: "0deg" }],
    
        }} >
      <Image source={require("../../assets/images/liane/singe.png")} 
      style={{
        
        height : width * 0.4,
        width : width * 0.2,
        

      }}/>
      </View>
      <View pointerEvents="none" 
       style={{
        
        height : width * 0.6,
        width : width * 0.4,
        position: "absolute",
        right : 0, // Aligné à droite
        zIndex: 1,
        bottom: height * 0.5, // Centré verticalement
        transform: [{ rotateY: "180deg" }],
        
          }} >
      <Image  source={require("../../assets/images/liane/leaf-tree.png")} 
      style={{
        
        height : width * 0.6,
        width : width * 0.3,
        
          }}/>
      </View>
      
      <View style={[styles.section,styles.sectionContainer,{backgroundColor : "transparent",flex : 0.9} ]}>
        <RNBounceable style={styles.largeButton}>
          <Text style={styles.largeButtonText}>EVENT DU JOUR</Text>
        </RNBounceable>
        <RNBounceable onPress={()=>{navigation.navigate("Calendrier")}} style={styles.largeButton}>
          <Text style={styles.largeButtonText}>CALENDRIER</Text>
        </RNBounceable>
      </View>

      {/* BDE Section */}
      <View style={[styles.sectionContainer,{backgroundColor : "transparent"}]}>
      <View style={[styles.section, styles.bdeSection,{justifyContent : "space-evenly", backgroundColor : "transparent"}]}>
        <Image 
        style={{
          top : 0,
          height : 0.17*height,
          width : 0.8*width,
          position : "absolute",
          resizeMode :  "stretch",
        }}
        source={require("../../assets/images/button/button-wood.png")}/>
        <Text style={[styles.sectionTitle,{backgroundColor : "transparent",marginTop: height*0.01}]}>BDE</Text>
        <View style={[styles.row,{backgroundColor : "transparent",justifyContent:"center"}]}>
          <RNBounceable style={styles.smallButton}>
            <Text style={styles.smallButtonText}>WEL</Text>
          </RNBounceable>
          <RNBounceable onPress={()=>{navigation.navigate("SOS")}} style={styles.smallButton}>
            <Text style={styles.smallButtonText}>SOS</Text>
          </RNBounceable>
          <RNBounceable style={styles.smallButton}>
            <Text style={styles.smallButtonText}>soirée BDE</Text>
          </RNBounceable>
        </View>
      </View>
    </View> 
      {/* BDA and BDS Sections */}
      <View style={[styles.row, styles.sectionContainer,{ backgroundColor : "transparent",width : "90%"}]}>
      <Image 
        style={{
          top : height*0.005,
          height : 0.2*height,
          width : width*0.98,
          position : "absolute",
          resizeMode :  "stretch",
        }}
        source={require("../../assets/images/button/button-wood.png")}/>

        <View style={[styles.bdaBdsSection, { width: width * 0.4,}]}>
            <Text style={[styles.sectionTitle,]}>BDA</Text>
            <View style={styles.row}>
            <RNBounceable style={[styles.rowSmallButton, { height: height * 0.07 }]}>
            <Text style={styles.smallButtonText}>Soirée{"\n"}Zik</Text>
            </RNBounceable>
            <RNBounceable style={[styles.rowSmallButton, { height: height * 0.07 }]}>
            <Text style={styles.smallButtonText}>Aprem{"\n"}BDA</Text>
            </RNBounceable>
            </View>
        </View>

        <View style={[styles.bdaBdsSection, { width: width * 0.4 }]}>
            <Text style={styles.sectionTitle}>BDS</Text>
            <View style={styles.row}>

            <RNBounceable style={[styles.rowSmallButton, { height: height * 0.07 }]}>
            <Text style={styles.smallButtonText}>MINP</Text>
            </RNBounceable>
            <RNBounceable style={[styles.rowSmallButton, { height: height * 0.07 }]}>
            <Text style={styles.smallButtonText}>Event{"\n"}Sport</Text>
            </RNBounceable>
            </View>
        </View>
        </View>

      {/* Carte de la liste et Les défis */}
      <View style={[styles.row,styles.sectionContainer,]}>
        <RNBounceable >
          <View style={[styles.cardButton,{transform: [{ rotate: "-8deg" },{translateY : -10}]}]}>
          <Text style={styles.titledCard}>CARTE DE{"\n"}LA LISTE</Text>
          </View>
        </RNBounceable>
        <RNBounceable > 
        <View style={[styles.cardButton,{transform: [{ rotate: "8deg"},{translateY : -20 }],}]}>
          <Text style={styles.titledCard}>LES DEFIS !</Text>
        </View>
        </RNBounceable>
      </View>
    </View>
    <View pointerEvents="none"
     style={{
      flex : 0.1}}
    />

    <View pointerEvents="none"
          
          style={{
          height : height * 0.15,
          width : width * 0.6,
          position: "absolute",
          bottom: 0, // Aligné en bas
          left: width * 0.25, // Centré horizontalement
          zIndex: 1,
        
          }}
          >
          <Image source={require("../../assets/images/temple/crypt-2.png")}
          style={{
        height : width * 0.4,
        width : width * 0.5,
        resizeMode :  "stretch",
        bottom : height * 0.07,
        right : 0,
        zIndex : 1,
        transform : [{rotate : "0deg"}],
          }}
          />

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: "flex-start",
    alignItems: "center",
    width : "100%",
  },
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //marginHorizontal: 50,
    marginBottom: 0,
    width : "100%",
  },
  section: {
    //marginBottom: 20,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 0.04*height,
    fontFamily : "JungleBold",
    color: "black",
    //marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly", // Répartit uniformément les espaces
    alignItems: "flex-end",
    //marginBottom: height * 0.02,
    width: "100%", // Adapte la largeur de la rangée
    
  },
  largeButton: {
    backgroundColor: lightTheme.lightBackground,
    paddingVertical: height * 0.02, // Proportionnel à la hauteur
    paddingHorizontal: width * 0.1, // Proportionnel à la largeur
    borderRadius: 10,
    width: width * 0.8,
    // border black
    borderWidth: 1,
    borderColor: "#000",
    justifyContent : "center",
    alignItems : "center",
    marginVertical: height * 0.01,
  },
  largeButtonText: {
    fontSize: width * 0.05, // Taille de police relative à la largeur de l'écran
    fontFamily : "JungleBold",
    color: "#",
    alignSelf : "center",
  },
  smallButton: {
    backgroundColor: "rgb(164,104,68)",
    paddingVertical: height * 0.017,
    paddingHorizontal: width * 0.04,
    borderRadius: 5,
    marginHorizontal: width * 0.01,
    borderWidth: 1.5,
    //borderColor: "rgb(81,28,59)",
    borderColor: "rgb(164,81,57)",
    marginBottom: height * 0.01,

  },
    rowSmallButton: {
        //paddingVertical: 10,
        marginTop: height * 0.01,
        paddingHorizontal: width * 0.025,
        borderRadius: 5,
        //marginHorizontal: width * 0.01,
        borderWidth: 1.5,
        // backgroundColor: "rgb(164,101,55)",
        //backgroundColor: "rgb(137,64,56)",
        backgroundColor: "rgb(164,104,68)",
        borderColor: "rgb(164,81,57)",
        //borderColor: "rgb(164,101,55)",
        justifyContent : "center",
        
        alignItems : "center",
    },
  smallButtonText: {
    fontSize: width * 0.035,
    fontFamily : "Black",
    color: "black",
    textAlign: "center",
  },
  
  cardButton : {
    backgroundColor: "transparent",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    
    borderRadius: 5,
    marginHorizontal: width * 0.05,
    borderWidth: 1.5,
    borderColor: "#000",
  },
  tiltedButtonText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
  titledCard : {
    fontSize : 0.06*width,
    fontFamily : "JungleBold",
    color : "#000",
    textAlign : "center"
    },
  bdaBdsSection: {
    //padding: height * 0.01,
    borderRadius: 10,
    alignItems: "center",
    //marginHorizontal: 10,
    // borderWidth: 1,
    // borderColor: "#000",
    flex : 1,
    zIndex : 1,
  },
  bdeSection: {
    //backgroundColor: lightTheme.darkGreen, // Couleur verte foncée pour BDE
   // paddingVertical: 0.04*height,
   height : 0.15*height,
    width: "80%",
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "#000",
    justifyContent : "space-evenly",
    alignItems : "center",
  },
});
