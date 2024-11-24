import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Dimensions,Image } from "react-native";
const { width, height } = Dimensions.get("window");
import { useFonts,getLoadedFonts } from 'expo-font';

export default function Acceuil() {


    console.log(getLoadedFonts());
  return (
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
        <TouchableOpacity style={styles.largeButton}>
          <Text style={styles.largeButtonText}>Event du jour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.largeButton}>
          <Text style={styles.largeButtonText}>CALENDRIER</Text>
        </TouchableOpacity>
      </View>

      {/* BDE Section */}
      <View style={[styles.sectionContainer]}>
      <View style={[styles.section, styles.bdeSection]}>
        <Text style={styles.sectionTitle}>BDE</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.smallButton}>
            <Text style={styles.smallButtonText}>WEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Text style={styles.smallButtonText}>SOS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Text style={styles.smallButtonText}>soirée BDE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View> 
      {/* BDA and BDS Sections */}
      <View style={[styles.row, styles.sectionContainer]}>
        <View style={[styles.bdaBdsSection, { width: width * 0.45,backgroundColor :"rgb(122,97,29)" }]}>
            <Text style={styles.sectionTitle}>BDA</Text>
            <View style={styles.row}>
            <TouchableOpacity style={[styles.rowSmallButton, { height: height * 0.08 }]}>
            <Text style={styles.smallButtonText}>Soirée{"\n"}Zik</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.rowSmallButton, { height: height * 0.08 }]}>
            <Text style={styles.smallButtonText}>Aprem{"\n"}BDA</Text>
            </TouchableOpacity>
            </View>
        </View>

        <View style={[styles.bdaBdsSection, { width: width * 0.4,backgroundColor :"rgb(101,114,42)" }]}>
            <Text style={styles.sectionTitle}>BDS</Text>
            <View style={styles.row}>

            <TouchableOpacity style={[styles.rowSmallButton, { height: height * 0.08 }]}>
            <Text style={styles.smallButtonText}>MINP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.rowSmallButton, { height: height * 0.08 }]}>
            <Text style={styles.smallButtonText}>Event{"\n"}Sport</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>

      {/* Carte de la liste et Les défis */}
      <View style={[styles.row,styles.sectionContainer,]}>
        <TouchableOpacity style={[styles.cardButton,{transform: [{ rotate: "-8deg" }],}]}>
          <Text style={styles.titledCard}>CARTE DE{"\n"}LA LISTE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cardButton,{transform: [{ rotate: "8deg"},{translateY : -10 }],}]}>
          <Text style={styles.titledCard}>LES DEFIS !</Text>
        </TouchableOpacity>
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
    fontFamily : "Black",
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
    backgroundColor: "#d8e9d0",
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
    backgroundColor: "#eaece5",
    paddingVertical: height * 0.017,
    paddingHorizontal: width * 0.05,
    borderRadius: 5,
    marginHorizontal: width * 0.01,
    borderWidth: 1,
    borderColor: "#000",
  },
    rowSmallButton: {
        backgroundColor: "#eaece5",
        //paddingVertical: 10,
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
    fontFamily : "Inter-Bold",
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
    fontSize : 0.05*width,
    fontFamily : "Inter-SemiBold",
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
  },
  bdeSection: {
    backgroundColor: "#49542b", // Couleur verte foncée pour BDE
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
