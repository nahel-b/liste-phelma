import React from "react";
import { View, Text,useState } from "react-native";
import MultipleMenu from "../Components/MultipleMenu";
import RNBounceable from "@freakycoder/react-native-bounceable";
import EntetePage from "../Components/EntetePage";
import { Dimensions } from "react-native";
import lightTheme from "../Colors";



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

  const titles = ["Tout", "Livraison", "Ménage", "Jardinage"];
  const components = [
    <Text key="1" style={{ fontSize: 20 }}>Composant Tout</Text>,
    <Text key="2" style={{ fontSize: 20 }}>Composant Livraison</Text>,
    <Text key="3" style={{ fontSize: 20 }}>Composant Ménage</Text>,
    <Text key="4" style={{ fontSize: 20 }}>Composant Jardinage</Text>,
  ];
  return (
    <View style={{ flex: 1, justifyContent : "flex-start",backgroundColor : lightTheme.background}}>

        <EntetePage Titre="SOS" />
        <View style={{ height: height * 0.01 }} />
        <MultipleMenu titles={titles} components={components} />
    </View>
);
};

