import { StyleSheet,TouchableOpacity,Image, Text, View,Modal } from 'react-native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import lightTheme from "../Colors";
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import HapticBounceable from "../Components/HapticBounceable";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
import EntetePage from "../Components/EntetePage";
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { MurFeuillesDroite,MurFeuillesGauche,MurFeuillesHaut } from '../Components/Decoration';
import data from '../Data';

const Event = ({ title,backgroundColor,textColor, description,onPress }) => {
    return (
        <HapticBounceable onPress={onPress}>
        <View style={[styles.eventContainer,{backgroundColor : backgroundColor}]}>
            <Text style={[styles.eventTitle,{color : textColor}]}>{title}</Text>
        </View>
        </HapticBounceable>
    );
};


export default function Calendrier() {


    const { calendrier_data } = data;

    
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(true); // Toujours visible mais en bas
    const modalHeight = height * 0.35;
        
    const collapsedHeight =  height ; // Hauteur du modal fermé

    const translateY = useSharedValue(10); // Position initiale du modal (fermé)


    // useEffect(() => {
    //     if (selectedEvent) {
    //         translateY.value = withSpring(0, { damping: 20, stiffness: 200 }); // Animer l'ouverture avec moins de rebond
    //     }
    //     else {
    //         translateY.value = withSpring(collapsedHeight); // Animer la fermeture
    //     }
    // }
    
    // , [selectedEvent]);




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
            <MurFeuillesHaut fg={false} monter={true}/>
            <MurFeuillesDroite monter={true} petit={true} />
            <MurFeuillesGauche  petit={true} />
            <View pointerEvents="none"
        style={{
            
            height : width * 1,
            width : width *1,
            position: "absolute",
            top: -20, // Aligné en haut
            left: -10, // Aligné à droite
            zIndex: 0,
            transform: [{ rotate: "0deg" }],
    
        }} >
      <Image source={require("../../assets/images/liane/liane-2.png")} 
      style={{
        
        height : width * 1,
        width : width *1,
        

      }}/>
      </View>
        

 
        <View style={{ flex: 1,zIndex : 1 }}>
            <CalendrierComp events={calendrier_data} onEventPress={(event) => {setSelectedEvent(event);translateY.value = withSpring(0, { damping: 20, stiffness: 200 })}} />
        </View>



        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require("../../assets/images/logo-liste.png")} style={{ width: width * 0.5, height: width * 0.5 }} />
        </View>
    
    

        {isModalVisible && selectedEvent && (
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[styles.modal, modalStyle]}>
                        <View style={styles.handleBar} />
                        <Text style={styles.modalTitle}>{selectedEvent.title}</Text>
                        <Text style={styles.modalContent}>
                            {selectedEvent.description}                      
                          </Text>
                        <HapticBounceable style={styles.button} onPress={() => {translateY.value = withSpring(collapsedHeight)}}>
                            <Text style={{color : lightTheme.background,fontSize : 13,fontFamily : "JungleBold"}}>FERMER</Text>
                        </HapticBounceable>
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
            scrollEnabled={false}
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
        zIndex: 1,
        //padding: 10,
        backgroundColor: "transparent",
        
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5,
        marginTop : height*0.05,
        zIndex: 1,
    },
    headerCell: {
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 16,
        fontFamily : "JungleBold",
        color: '#5d4037',
        zIndex: 3,
        
    },
    grid: {
        // flexDirection: 'row',
        // flexWrap: 'wrap',
    },
    cell: {
        width: width/7 - width*0.01, // Divise l'écran en 7 colonnes
        height: height*0.13, // Hauteur des cellules
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
        justifyContent: 'flex-start', // Alignement en haut
        alignItems: 'center',
        borderRadius: 15,
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        width: '100%',
        height: height * 0.35, // Assurez-vous que la hauteur correspond au nouveau modalHeight
        overflow: 'hidden', // Empêcher le contenu de déborder
    },
    modalContent: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        fontFamily : "JungleBold",
        padding: 20,
        alignItems: 'center',
        opacity : 0.7,
    },
    modalTitle: {
        fontSize: 23,
        fontFamily: 'JungleBold',
        marginTop: height*0.02,
    },
    modalDescription: {
        fontSize: 14,
        fontFamily: 'JungleBold',
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