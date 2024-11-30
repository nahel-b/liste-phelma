import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Image, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedGestureHandler, useAnimatedStyle, withSpring } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import lightTheme from "../Colors";
import EntetePage from "../Components/EntetePage";
import MultipleMenu from "../Components/MultipleMenu";
import RNBounceable from "@freakycoder/react-native-bounceable";

import Data from "../Data";



const { width, height } = Dimensions.get("window");

export default function SOS() {

  
    const { missions,catégories_missions } = Data;


    const [selectedMission, setSelectedMission] = useState(null);
    const collapsedHeight = height; // Position de départ du modal (bas)
    const modalHeight = height * 0.4; // Hauteur du modal ouvert
    const translateY = useSharedValue(collapsedHeight); // Position verticale animée du modal
    const [modalVisible, setModalVisible] = useState(false);


    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = translateY.value;
        },
        onActive: (event, ctx) => {
            translateY.value = ctx.startY + event.translationY;
            if (translateY.value < 0) translateY.value = 0; // Empêche de dépasser le haut
        },
        onEnd: () => {
            if (translateY.value > modalHeight / 2) {
                translateY.value = withSpring(collapsedHeight); // Fermer le modal
            } else {
                translateY.value = withSpring(0); // Ouvrir le modal
            }
        },
    });

    const modalStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));

    const renderMissionList = (filter) => {
        const filteredMissions = filter === "Tout" ? missions : missions.filter((mission) => mission.type_mission === filter);
    
        return (
          <ScrollView contentContainerStyle={styles.missionContainer}>
            {filteredMissions.map((mission, index) => (
              <TouchableOpacity
                key={index}
                style={styles.missionCard}
                onPress={() => {
                    setSelectedMission(mission);
                    translateY.value = withSpring(0, { damping: 150, stiffness: 500 });
                }}
              >
                <Text style={styles.missionText}>{mission.nom_mission}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        );
      };

    return (
        <View style={styles.container}>
        <EntetePage Titre="SOS" />
        <View style={{ height: height * 0.01 }} />
      <MultipleMenu
        titles={catégories_missions}
        components={catégories_missions.map((title) => renderMissionList(title))}
      />

      
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.modal, modalStyle]}>
                    <View style={styles.handleBar} />
                    {selectedMission && (
                        <View style={styles.modalContent}>
                            <View style={{alignItems : "center",justifyContent : "space-between",flexDirection : "row"}}>
                            <View style={{}}>
                            <Text style={styles.modalTitle}>{selectedMission.nom_mission}</Text>
                            <Text style={styles.modalType}>{selectedMission.type_mission}</Text>
                            </View>
                            <RNBounceable>
                            <View style={{alignItems : "flex-end",backgroundColor : lightTheme.lightBackground,padding : 10,borderRadius : 20}}>
                            <Image source={require("../../assets/images/animaux/tigre.png")} style={{height : width * 0.2,width : width * 0.2}} />
                           <Text style={{color : "black",fontFamily : "JungleBold",fontSize : 15}}>Commander</Text>
                            </View>
                            </RNBounceable>
                            </View>
                            <Text style={styles.modalDescription}>{selectedMission.description}</Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => translateY.value = withSpring(collapsedHeight)}
                            >
                                <Text style={styles.closeButtonText}>FERMER</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightTheme.background,
    },
    missionContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 10,
    },
    missionCard: {
        width: width / 2 - 20,
        height: 100,
        backgroundColor: "#2e4b2b",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    missionText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "JungleBold",
    },
    modal: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: height * 0.6, // Ajuster selon les besoins
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    handleBar: {
        width: 60,
        height: 5,
        backgroundColor: "#ccc",
        borderRadius: 2.5,
        alignSelf: "center",
        marginVertical: 10,
    },
    modalContent: {
        flex: 1,
        paddingHorizontal: width * 0.05,
        paddingVertical: width * 0.02,
    },
    modalTitle: {
        fontSize: 27,
        fontFamily: "JungleBold",
        marginBottom: 10,
        color: "#333",
    },
    modalType: {
        fontSize: 14,
        marginBottom: 10,
        fontFamily: "Medium",
        color: "#666",
    },
    modalDescription: {
        fontSize: 17,
        color: "#888",
        fontFamily: "SemiBold",
    },
    closeButton: {
        marginTop: 20,
       // backgroundColor: lightTheme.brown,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    closeButtonText: {
        color: lightTheme.brown,
        fontFamily : "JungleBold",
        fontSize: 16,
    },
});
