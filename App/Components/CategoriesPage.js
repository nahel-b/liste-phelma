import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Image, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedGestureHandler, useAnimatedStyle, withSpring } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import lightTheme from "../Colors";
import EntetePage from "../Components/EntetePage";
import MultipleMenu from "../Components/MultipleMenu";
import HapticBounceable from "../Components/HapticBounceable";
import { MurFeuillesHaut ,HautLiane, MurFeuillesDroite, MurFeuillesGauche} from "../Components/Decoration";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';import { Linking } from "react-native";
import data from "../Data";

const liens_telephones = data.liens_telephones_sos;


const { width, height } = Dimensions.get("window");

export default function CategoriesPage({items,categories_item,commander_button,nom,head_item}) {

  


    const [selectedItem, setSelectedItem] = useState(null);
    const collapsedHeight = height; // Position de départ du modal (bas)
    const modalHeight = height * 0.4; // Hauteur du modal ouvert
    const translateY = useSharedValue(collapsedHeight); // Position verticale animée du modal
    const [modalVisible, setModalVisible] = useState(false);

    const collapsedHeight2 = height; // Position de départ du modal (bas)
    const modalHeight2 = height * 0.4; // Hauteur du modal ouvert
    const translateY2 = useSharedValue(collapsedHeight2); // Position verticale animée du modal


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

    const gestureHandler2 = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = translateY2.value;
        },
        onActive: (event, ctx) => {
            translateY2.value = ctx.startY + event.translationY;
            if (translateY2.value < 0) translateY2.value = 0; // Empêche de dépasser le haut
        },
        onEnd: () => {
            if (translateY2.value > modalHeight2 / 2) {
                translateY2.value = withSpring(collapsedHeight2); // Fermer le modal
            } else {
                translateY2.value = withSpring(0); // Ouvrir le modal
            }
        },
    });

    const modalStyle2 = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY2.value }],
    }));

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
            <View style={{ height: height * 0.3 }} />
          </ScrollView>
        );
      };

      const renderHead = (filter) => {


        const filteredItems = filter === "Tout" ? items : items.filter((item) => item.categorie === filter);
        
        const filteredIndex = categories_item.indexOf(filter);
        let text = data.description_mission_catégorie[filteredIndex];
        
        return (


            <HapticBounceable onPress={() => {
                translateY2.value = withSpring(0, { damping: 150, stiffness: 500 });
            }}  >
        <View style={[{alignItems : "center",justifyContent : "center",
            backgroundColor : lightTheme.lightBackground,

           
            alignSelf : "center",
            marginTop : height * 0.02,
            borderRadius : width * 0.03,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 1,
            shadowRadius: 3,
            borderColor: "black",
            borderWidth: 0,
            flexDirection : "row",
            paddingLeft : width*0.02
        }]}>
          
            <FontAwesome5 name="map-marked-alt" size={24} color="black" />
            <Text style={{color : "#2e4b2b",fontFamily : "JungleBold",fontSize : 20,margin : 10}}>
            Carte
            </Text>
        </View>
        </HapticBounceable>
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
                            <View style={{width : width * 0.6}}>
                            <Text style={styles.modalTitle}>{selectedItem.nom}</Text>
                            <Text style={styles.modalType}>{selectedItem.categorie}</Text>
                            </View>

                            {commander_button ?(
                            <HapticBounceable onPress={()=>
                                
                                {
                                    translateY.value = withSpring(collapsedHeight);
                                    translateY2.value = withSpring(0, { damping: 150, stiffness: 500 });
                                }

                            } style={{zIndex : 2}}>
                                <View style={{alignItems : "flex-end",zIndex : 2,backgroundColor : lightTheme.lightBackground,padding : 10,borderRadius : 20}}>
                                <Image source={require("../../assets/images/animaux/tigre.png")} style={{height : width * 0.2,zIndex : 2,width : width * 0.2}} />
                            <Text style={{color : "black",fontFamily : "JungleBold",fontSize : 15}}>Commander</Text>
                                </View>
                            </HapticBounceable>)
                            :
                            ( selectedItem.points &&
                                <HapticBounceable>
                                <View style={{aspectRatio : 1,zIndex  : 2,alignItems : "center",backgroundColor : lightTheme.lightBackground,padding : 10,borderRadius : 20}}>
                                <Text style={{textAlign : "center",color : lightTheme.background,fontSize : width*0.15,fontFamily : "JungleBold"}} >
                                    {typeof selectedItem.points === 'string' && selectedItem.points.includes('/') ? selectedItem.points.split('/')[0] : selectedItem.points}
                                    
                                    </Text>
                                <Text style={{color : lightTheme.background,fontFamily : "JungleBold",fontSize : 15}}>
                                    
                                    {typeof selectedItem.points === 'string' && selectedItem.points && selectedItem.points.includes('/') ? "/" + selectedItem.points.split('/')[1] : 'points'}
                                    </Text>
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

            

            <PanGestureHandler onGestureEvent={gestureHandler2}>
            <Animated.View style={[styles.modal, modalStyle2,{ zIndex: 3 } ]}>
                
                {/* gauche */}
                
                <View style={styles.handleBar} />   

                <View style={{flexDirection : "row",justifyContent : "space-around",alignItems : "center"}}>
                <Image source={require("../../assets/images/carte-zone-sos-carree.jpeg")} 

                style={{height : width * 0.5,zIndex : 2,width : width * 0.5,
                    borderRadius : 10,
                    alignSelf : "center",
                    zIndex : -1
                }} />
                <View>
                <HapticBounceable onPress={() => {Linking.openURL(liens_telephones[0])}}  >
                <View style={[{alignItems : "center",justifyContent : "center",
                    backgroundColor : lightTheme.lightBackground,

                    width : width*0.4,
                    alignSelf : "center",  zIndex : 4,  borderRadius : width * 0.03, shadowColor: 'black',
                    shadowOffset: {width: 0, height: 1},  shadowOpacity: 1, shadowRadius: 3, borderColor: "black",
                    borderWidth: 0,
                    flexDirection : "row",  paddingLeft : width*0.02, marginVertical : height*0.01
                }]}>
                
                <FontAwesome5 name="phone-alt" size={18} color="black" />
                <Text style={{color : "rgb(80,100,190)",fontFamily : "JungleBold",fontSize : width*0.055,margin : 8}}>
                    Zone bleu
                    </Text>
                </View>
                </HapticBounceable>
                <HapticBounceable onPress={() => {Linking.openURL(liens_telephones[1])}}  >
                <View style={[{alignItems : "center",justifyContent : "center",
                    backgroundColor : lightTheme.lightBackground,

                    width : width*0.4,
                    alignSelf : "center",  zIndex : 4,  borderRadius : width * 0.03, shadowColor: 'black',
                    shadowOffset: {width: 0, height: 1},  shadowOpacity: 1, shadowRadius: 3, borderColor: "black",
                    borderWidth: 0,
                    flexDirection : "row",  paddingLeft : width*0.02, marginVertical : height*0.01
                }]}>
                
                <FontAwesome5 name="phone-alt" size={18} color="black" />
                <Text style={{color : "rgb(120,120,120)",fontFamily : "JungleBold",fontSize : width*0.055,margin : 8}}>
                    Zone grise
                    </Text>
                </View>
                </HapticBounceable>
                <HapticBounceable onPress={() => {Linking.openURL(liens_telephones[2])}}  >
                <View style={[{alignItems : "center",justifyContent : "center",
                    backgroundColor : lightTheme.lightBackground,

                    width : width*0.4,
                    alignSelf : "center",  zIndex : 4,  borderRadius : width * 0.03, shadowColor: 'black',
                    shadowOffset: {width: 0, height: 1},  shadowOpacity: 1, shadowRadius: 3, borderColor: "black",
                    borderWidth: 0,
                    flexDirection : "row",  paddingLeft : width*0.02, marginVertical : height*0.01
                }]}>
                
                    <FontAwesome5 name="phone-alt" size={18} color="black" />
                    <Text style={{color : "rgb(80,140,70)",fontFamily : "JungleBold",fontSize : width*0.055,margin : 8}}>
                    Zone verte
                    </Text>
                </View>
                </HapticBounceable>
                <HapticBounceable onPress={() => {Linking.openURL(liens_telephones[3])}}  >
                <View style={[{alignItems : "center",justifyContent : "center",
                    backgroundColor : lightTheme.lightBackground,

                    width : width*0.4,
                    alignSelf : "center",  zIndex : 4,  borderRadius : width * 0.03, shadowColor: 'black',
                    shadowOffset: {width: 0, height: 1},  shadowOpacity: 1, shadowRadius: 3, borderColor: "black",
                    borderWidth: 0,
                    flexDirection : "row",  paddingLeft : width*0.02, marginVertical : height*0.01
                }]}>
                
                <FontAwesome5 name="phone-alt" size={18} color="black" />
                <Text style={{color : "rgb(200,130,60)",fontFamily : "JungleBold",fontSize : width*0.05,margin : 8}}>
                    Zone orange
                    </Text>
                </View>
                </HapticBounceable>

                </View>
                </View>

                <Text style={{alignSelf : "center",marginTop : height*0.03, color : lightTheme.background,fontFamily : "JungleBold",fontSize : width*0.05}}>
                    Vendredi : 16h - 19h{"\n"}
                    Samedi : 8h - 18h{"\n"}
                    Dimanche : 9h - 0h{"\n"}
                </Text>
                    <View
                        style={{height : height*0.5}}
                    >


                </View>
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
        paddingHorizontal : width * 0.05,
    },
    missionText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "JungleBold",
        alignSelf : "center",
        textAlign : "center",
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
