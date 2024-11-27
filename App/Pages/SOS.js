import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal } from "react-native";
import MultipleMenu from "../Components/MultipleMenu";
import RNBounceable from "@freakycoder/react-native-bounceable";
import EntetePage from "../Components/EntetePage";
import { Dimensions } from "react-native";
import lightTheme from "../Colors";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function SOS() {

    const missions = [
        { nom_mission: "Mission 1", type_mission: "Livraison", description: "Description de la mission 1" },
        { nom_mission: "Mission 2", type_mission: "Ménage", description: "Description de la mission 2" },
        { nom_mission: "Mission 3", type_mission: "Livraison", description: "Description de la mission 3" },
        { nom_mission: "Mission 4", type_mission: "Jardinage", description: "Description de la mission 4" },
        { nom_mission: "Mission 5", type_mission: "Ménage", description: "Description de la mission 5" },
      ];

    const [selectedMission, setSelectedMission] = useState(null); // Mission sélectionnée pour afficher dans la modal
    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        console.log(isModalVisible);
        }, [isModalVisible]);

  const titles = ["Tout", "Livraison", "Ménage", "Jardinage"];
  
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
              setModalVisible(true);
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
        titles={titles}
        components={titles.map((title) => renderMissionList(title))}
      />

     
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <TouchableOpacity activeOpacity={1} style={styles.modalContainer} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <RNBounceable 
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close" size={24} color="black" />
            </RNBounceable>
            <Text style={styles.modalTitle}>{selectedMission?.nom_mission}</Text>
            <Text style={styles.modalType}>{selectedMission?.type_mission}</Text>
            <Text style={styles.modalDescription}>{selectedMission?.description}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#a67b5b",
    },
    missionContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: 10,
    },
    missionCard: {
      width: (width / 2) - 20,
      height: 100,
      backgroundColor: "#2e4b2b",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    missionText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      //backgroundColor: "rgba(0, 0, 0, 0.5)",

    },
    modalContent: {
      backgroundColor: "#fff",
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      
    },
    closeButton: {
      position: "absolute",
      top: 10,
      right: 10,
      zIndex: 1,
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#333",
    },
    modalType: {
      fontSize: 18,
      marginBottom: 10,
      color: "#666",
    },
    modalDescription: {
      fontSize: 16,
      color: "#888",
    },
  });
