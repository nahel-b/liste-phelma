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
        width : width * 0.4,
        
          }}/>
      </View>
      <View style={[styles.section,styles.sectionContainer ]}>
        <RNBounceable style={styles.largeButton}>
          <Text style={styles.largeButtonText}>EVENT DU JOUR</Text>
        </RNBounceable>
        <RNBounceable onPress={()=>{navigation.navigate("Calendrier")}} style={styles.largeButton}>
          <Text style={styles.largeButtonText}>CALENDRIER</Text>
        </RNBounceable>
      </View>

      {/* BDE Section */}
      <View style={[styles.sectionContainer]}>
      <View style={[styles.section, styles.bdeSection]}>
        <Text style={styles.sectionTitle}>BDE</Text>
        <View style={styles.row}>
          <RNBounceable style={styles.smallButton}>
            <Text style={styles.smallButtonText}>WEL</Text>
          </RNBounceable>
          <RNBounceable style={styles.smallButton}>
            <Text style={styles.smallButtonText}>SOS</Text>
          </RNBounceable>
          <RNBounceable style={styles.smallButton}>
            <Text style={styles.smallButtonText}>soirée BDE</Text>
          </RNBounceable>
        </View>
      </View>
    </View> 
      {/* BDA and BDS Sections */}
      <View style={[styles.row, styles.sectionContainer,{width : "95%"}]}>
        <View style={[styles.bdaBdsSection, { width: width * 0.45,backgroundColor : lightTheme.brown }]}>
            <Text style={styles.sectionTitle}>BDA</Text>
            <View style={styles.row}>
            <RNBounceable style={[styles.rowSmallButton, { height: height * 0.08 }]}>
            <Text style={styles.smallButtonText}>Soirée{"\n"}Zik</Text>
            </RNBounceable>
            <RNBounceable style={[styles.rowSmallButton, { height: height * 0.08 }]}>
            <Text style={styles.smallButtonText}>Aprem{"\n"}BDA</Text>
            </RNBounceable>
            </View>
        </View>

        <View style={[styles.bdaBdsSection, { width: width * 0.4,backgroundColor : lightTheme.lightGreen }]}>
            <Text style={styles.sectionTitle}>BDS</Text>
            <View style={styles.row}>

            <RNBounceable style={[styles.rowSmallButton, { height: height * 0.08 }]}>
            <Text style={styles.smallButtonText}>MINP</Text>
            </RNBounceable>
            <RNBounceable style={[styles.rowSmallButton, { height: height * 0.08 }]}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width : "100%",
  },
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //marginHorizontal: 50,
    marginBottom: 20,
    width : "100%",
  },
  section: {
    marginBottom: 20,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 0.03*height,
    fontFamily : "JungleBold",
    color: "black",
    //marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly", // Répartit uniformément les espaces
    alignItems: "center",
    marginBottom: height * 0.02,
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
    backgroundColor: lightTheme.lightBackground,
    paddingVertical: height * 0.017,
    paddingHorizontal: width * 0.05,
    borderRadius: 5,
    marginHorizontal: width * 0.01,
    borderWidth: 1,
    borderColor: "#000",
  },
    rowSmallButton: {
        backgroundColor: lightTheme.lightBackground,
        //paddingVertical: 10,
        marginTop: height * 0.015,
        paddingHorizontal: width * 0.03,
        borderRadius: 5,
        marginHorizontal: width * 0.01,
        borderWidth: 1,
        borderColor: "#000",
        justifyContent : "center",
        
        alignItems : "center",
    },
  smallButtonText: {
    fontSize: width * 0.03,
    fontFamily : "Black",
    color: "#000",
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
    fontWeight: "bold",
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
    padding: height * 0.01,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#000",
    flex : 1
  },
  bdeSection: {
    backgroundColor: lightTheme.darkGreen, // Couleur verte foncée pour BDE
   // paddingVertical: 0.04*height,
   height : 0.15*height,
    width: "80%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent : "space-evenly",
    alignItems : "center",
  },
});
