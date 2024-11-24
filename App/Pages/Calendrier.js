import { StyleSheet,TouchableOpacity,Image, Text, View,Modal } from 'react-native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import lightTheme from "../Colors";
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
import EntetePage from "../Components/EntetePage";
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';


const Event = ({ title,backgroundColor,textColor, description,onPress }) => {
    return (
        <RNBounceable onPress={onPress}>
        <View style={[styles.eventContainer,{backgroundColor : backgroundColor}]}>
            <Text style={[styles.eventTitle,{color : textColor}]}>{title}</Text>
        </View>
        </RNBounceable>
    );
};


export default function Calendrier() {


        
    const events = [
        { 
            nomJour: "1 sep", 
            title: "Kfet ouverture", 
            description: "La soirée d'ouverture de la Kfet.", 
            textColor: "black", 
            backgroundColor: lightTheme.lightGreen 
        },
        { 
            nomJour: "2 sep", 
            title: "Soirée 2c", 
            description: "Une soirée conviviale pour tous les 2C.", 
            textColor: "black", 
            backgroundColor: lightTheme.brown 
        },
        { nomJour: "3 sep" },
        { nomJour: "4 sep", title: "Aprem Sportive", description: "Une après-midi de sport.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "5 sep", title: "Soirée 8c", description: "La soirée des 8C.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "6 sep", title: "Soirée 9c", description: "La soirée des 9C.", textColor: "black", backgroundColor: lightTheme.brown },
        { nomJour: "7 sep", title: "Soirée 12c", description: "La soirée des 12C.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "8 sep" },
        { nomJour: "9 sep" },
        { nomJour: "10 sep", title: "Soirée 1c", description: "La soirée des 1C.", textColor: "black", backgroundColor: lightTheme.brown },
        { nomJour: "11 sep" },
        { nomJour: "12 sep" },
        { nomJour: "13 sep", title: "Soirée 3c", description: "La soirée des 3C.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "14 sep" },
        { nomJour: "15 sep" },
        { nomJour: "16 sep", title: "Soirée 4c", description: "La soirée des 4C.", textColor: "black", backgroundColor: lightTheme.brown },
        { nomJour: "17 sep" },
        { nomJour: "18 sep" },
        { nomJour: "19 sep", title: "Soirée 5c", description: "La soirée des 5C.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "20 sep" },
        { nomJour: "21 sep" },
        
      
        
        
    ];
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(true); // Toujours visible mais en bas
    const modalHeight = height/3 ; // Hauteur du modal ouvert
    const collapsedHeight =  height * 1; // Hauteur du modal fermé

    const translateY = useSharedValue(10); // Position initiale du modal (fermé)


    useEffect(() => {
        if (selectedEvent) {
            translateY.value = withSpring(0, { damping: 20, stiffness: 200 }); // Animer l'ouverture avec moins de rebond
        }
        else {
            translateY.value = withSpring(collapsedHeight); // Animer la fermeture
        }
    }
    
    , [selectedEvent]);




    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = translateY.value; // Garde la position initiale
        },
        onActive: (event, ctx) => {
            translateY.value = ctx.startY + event.translationY; // Suivre le doigt de l'utilisateur
            if (translateY.value < 0) translateY.value = 0; // Empêcher de dépasser le haut
        },
        onEnd: (event) => {
            // Déterminer si on ouvre ou ferme le modal
            
            if (translateY.value > modalHeight / 2) {
                translateY.value = withSpring(collapsedHeight); // Revenir à l'état fermé
            } else {
                translateY.value = withSpring(0); // Aller à l'état ouvert
            }
        },
    });

    const modalStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));

    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex: 1, backgroundColor: lightTheme.background }}>
            <EntetePage Titre={"Calendrier"} />
            <View pointerEvents="none"
        style={{
            
            height : width * 1,
            width : width *1,
            position: "absolute",
            top: -20, // Aligné en haut
            left: -10, // Aligné à droite
            zIndex: 1,
            transform: [{ rotate: "0deg" }],
    
        }} >
      <Image source={require("../../assets/images/liane/liane-2.png")} 
      style={{
        
        height : width * 1,
        width : width *1,
        

      }}/>
      </View>
        

 
        <View style={{ flex: 1 }}>
            <CalendrierComp events={events} onEventPress={setSelectedEvent} />
        </View>
    
    

        {isModalVisible && selectedEvent && (
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[styles.modal, modalStyle]}>
                        <View style={styles.handleBar} />
                        <Text style={styles.modalTitle}>{selectedEvent.title}</Text>
                        <Text style={styles.modalContent}>
                            {selectedEvent.description}                      
                          </Text>
                        <TouchableOpacity style={styles.button} onPress={() => translateY.value = withSpring(collapsedHeight)}>
                            <Text style={{color : lightTheme.background,fontSize : 13,fontFamily : "JungleBold"}}>FERMER</Text>
                        </TouchableOpacity>
                        <View style={{height : insets.bottom + height*0.1}} />
                    </Animated.View>
                </PanGestureHandler>
            )}


        </View>
    );
}


const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"]; // Lettres des jours

const CalendrierComp = ({ events,onEventPress }) => {
    // Fonction pour créer les cellules
    const renderCell = ({ item }) => (
        <View style={styles.cell}>
            <Text style={styles.dayTitle}>{item.nomJour}</Text>
            <View style={styles.eventWrapper}>
                {item.title && (
                    <Event
                        title={item.title}
                        backgroundColor={item.backgroundColor}
                        textColor={item.textColor}
                        onPress={() => onEventPress(item)} // Définir l'événement sélectionné
                    />
                )}
            </View>
        </View>
    );

    return (
        <View style={styles.calendarContainer}>
            {/* En-tête des jours */}
            <View style={styles.headerRow}>
                {daysOfWeek.map((day, index) => (
                    <View key={index} style={styles.headerCell}>
                        <Text style={styles.headerText}>{day}</Text>
                    </View>
                ))}
            </View>
            
            {/* Corps du calendrier */}
            <FlatList
                data={events}
                numColumns={7}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderCell}
                contentContainerStyle={styles.grid}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    eventContainer: {
        backgroundColor: '#e0f7fa',
        borderRadius: 8,
        padding: 5,
        marginTop: 4,
        alignItems: 'center',
    },
    eventTitle: {
        fontSize: 12,
        color: '#00796b',
        textAlign: 'center',
        fontFamily : "SemiBold",
    },
    calendarContainer: {
        flex: 1,
        //padding: 10,
        backgroundColor: "transparent",
        
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5,
        marginTop : height*0.05,
    },
    headerCell: {
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 16,
        fontFamily : "JungleBold",
        color: '#5d4037',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cell: {
        width: width/7 - width*0.01, // Divise l'écran en 7 colonnes
        height: height*0.16, // Hauteur des cellules
        // borderWidth: 1,
        // borderColor: "transparent",
        borderRadius : 10,
        margin: width*0.005,
        backgroundColor: '#d8e9d0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayTitle: {
        fontSize: 12,
        color: '#6d4c41',
        marginBottom: 0,
        marginTop: height*0.01,
        // borderBottomWidth: 1,
        width: '100%',
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily : "JungleBold",
    },
    eventWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    modal: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    modalContent: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 23,
        fontFamily: 'JungleBold',
        marginTop: height*0.02,
    },
    modalDescription: {
        fontSize: 14,
        fontFamily: 'JungleRegular',
        textAlign: 'center',
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: lightTheme.lightGreen,
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});