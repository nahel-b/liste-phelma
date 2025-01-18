import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Image, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedGestureHandler, useAnimatedStyle, withSpring } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import lightTheme from "../Colors";
import EntetePage from "../Components/EntetePage";
import MultipleMenu from "../Components/MultipleMenu";
import HapticBounceable from "../Components/HapticBounceable";
import { MurFeuillesHaut ,HautLiane, MurFeuillesDroite, MurFeuillesGauche} from "../Components/Decoration";

import { Linking } from "react-native";
import data from "../Data";


const { width, height } = Dimensions.get("window");

export default function CategoriesPage({items,categories_item,commander_button,nom,head_item}) {

  


    const [selectedItem, setSelectedItem] = useState(null);
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

    const renderItemList = (filter) => {
        const filteredItems = filter === "Tout" ? items : items.filter((item) => item.categorie === filter);
    
      
        return (

        
          <ScrollView contentContainerStyle={styles.missionContainer}>
            {filteredItems.map((item, index) => (
              <HapticBounceable
                key={index}
                style={styles.missionCard}
                onPress={() => {
                    setSelectedItem(item);
                    translateY.value = withSpring(0, { damping: 150, stiffness: 500 });
                }}
              >
                <Text style={styles.missionText}>{item.nom}</Text>
              </HapticBounceable>
            ))}
          </ScrollView>
        );
      };

      const renderHead = (filter) => {


        const filteredItems = filter === "Tout" ? items : items.filter((item) => item.categorie === filter);
        
        const filteredIndex = categories_item.indexOf(filter);
        let text = data.description_mission_catégorie[filteredIndex];
        
        return (

        <View style={[{alignItems : "center",justifyContent : "center",
            backgroundColor : lightTheme.lightBackground,

            width : width * 0.7,
            alignSelf : "center",
            marginTop : height * 0.02,
            borderRadius : width * 0.03,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 1,
            shadowRadius: 3,
            borderColor: "black",
            borderWidth: 0,
        }]}>
          <Text style={{color : "#2e4b2b",fontFamily : "JungleBold",fontSize : 20,margin : 10}}>
            {text}
            </Text>
        </View>

        );
      };

    return (
        <View style={styles.container}>
        <EntetePage Titre={nom} />
        <MurFeuillesHaut/>
        <MurFeuillesDroite petit={true}/>
        <MurFeuillesGauche petit={true}/>
        
        <HautLiane petit={true}/>
        <View style={{ height: height * 0.03 }} />
      <MultipleMenu
        titles={categories_item}
        components={categories_item.map((title) => renderItemList(title))}
        head_item={ head_item ? categories_item.map((title) => renderHead(title)) : null}
      />

      
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.modal, modalStyle,{ zIndex: 1 } ]}>
                    <View style={styles.handleBar} />
                    {selectedItem && (
                        <View style={[styles.modalContent,{ zIndex: 3 }]}>
                            <View style={{alignItems : "center",justifyContent : "space-between",flexDirection : "row"}}>
                            <View style={{}}>
                            <Text style={styles.modalTitle}>{selectedItem.nom}</Text>
                            <Text style={styles.modalType}>{selectedItem.categorie}</Text>
                            </View>

                            {commander_button ?(
                            <HapticBounceable onPress={()=>Linking.openURL(data.lien_commande_mission)} style={{zIndex : 2}}>
                                <View style={{alignItems : "flex-end",zIndex : 2,backgroundColor : lightTheme.lightBackground,padding : 10,borderRadius : 20}}>
                                <Image source={require("../../assets/images/animaux/tigre.png")} style={{height : width * 0.2,zIndex : 2,width : width * 0.2}} />
                            <Text style={{color : "black",fontFamily : "JungleBold",fontSize : 15}}>Commander</Text>
                                </View>
                            </HapticBounceable>)
                            :
                            ( selectedItem.points &&
                                <HapticBounceable>
                                <View style={{aspectRatio : 1,zIndex  : 2,alignItems : "center",backgroundColor : lightTheme.lightBackground,padding : 10,borderRadius : 20}}>
                                <Text style={{textAlign : "center",color : lightTheme.background,fontSize : width*0.15,fontFamily : "JungleBold"}} >{selectedItem.points}</Text>
                                <Text style={{color : lightTheme.background,fontFamily : "JungleBold",fontSize : 15}}>points</Text>
                                </View>
                            </HapticBounceable>
                            )
}

                            </View>
                            <Text style={styles.modalDescription}>{selectedItem.description}</Text>
                            <HapticBounceable
                                style={styles.closeButton}
                                onPress={() => translateY.value = withSpring(collapsedHeight)}
                            >
                                <Text style={styles.closeButtonText}>FERMER</Text>
                            </HapticBounceable>
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
        paddingHorizontal: 10,
    },
    missionCard: {
        width: width / 2 - 20,
        height: 100,
        backgroundColor: "#2e4b2b",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 3,
        borderColor: "black",
        borderWidth: 1,
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
        zIndex  : 2,
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
