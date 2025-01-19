

import React,{useEffect,useState} from "react";
import { Text, View, StyleSheet, Dimensions,Image, FlatList } from "react-native";
import EntetePage from "../Components/EntetePage";
import { MurFeuillesHaut ,HautLiane, MurFeuillesDroite, MurFeuillesGauche} from "../Components/Decoration";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";
import data from "../Data";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedGestureHandler, useAnimatedStyle, withSpring } from "react-native-reanimated";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const { height, width } = Dimensions.get("window");
import lightTheme from "../Colors";
import HapticBounceable from "../Components/HapticBounceable";
import { ScrollView } from "react-native";

export default function WEL() {


    const navigation = useNavigation();

    const collapsedHeight2 = height; // Position de départ du modal (bas)
        const modalHeight2 = height * 0.4; // Hauteur du modal ouvert
        const translateY2 = useSharedValue(collapsedHeight2); // Position verticale animée du modal
    

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



    const RenderMenu = (data) => {


        return data.data.map((item, index) => (

            <RenderBouton key={index} item={item} right={index % 2 === 1} navigation={navigation} />
       
       
        ));
    };


    return (
        <View style={styles.container}>
        <EntetePage Titre={"La carte"} />
        <MurFeuillesHaut fg={true} />
        <MurFeuillesDroite petit={false}/>
        <MurFeuillesGauche petit={false}/>
        <HautLiane/>


        <HapticBounceable onPress={() => {
                translateY2.value = withSpring(0, { damping: 150, stiffness: 500 });
            }}  >
        <View style={[{alignItems : "center",justifyContent : "center",
            backgroundColor : lightTheme.lightBackground,

           
            alignSelf : "center",
            
            borderRadius : width * 0.03,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 1,
            shadowRadius: 3,
            borderColor: "black",
            borderWidth: 0,
            flexDirection : "row",
            top : height*0.03,
            position : "absolute",
            paddingLeft : width*0.02
        }]}>
          
            <FontAwesome5 name="map-marked-alt" size={24} color="black" />
            <Text style={{color : "#2e4b2b",fontFamily : "JungleBold",fontSize : 20,margin : 10}}>
            Carte
            </Text>
        </View>
        </HapticBounceable>


        <View style={{ height: height * 0.09,alignItems : "center" }} />

        


            <RenderMenu data={data.WEL} />

            


        <View style={{ height: height * 0.18,alignItems : "center" }} />
        <PanGestureHandler onGestureEvent={gestureHandler2}>
                <Animated.View style={[styles.modal, modalStyle2,{ zIndex: 1 } ]}>
                    <View style={styles.handleBar} />

                    <Image source={require("../../assets/images/carte-zone.png")} 

                    style={{height : width * 0.5,zIndex : 2,width : width * 0.9,
                        borderRadius : 10,
                        alignSelf : "center"
                    }} />

                    <Text style={{alignSelf : "center",marginTop : height*0.03, color : lightTheme.background,fontFamily : "JungleBold",fontSize : width*0.05}}>
                        Jeudi : 12h30 - 18h{"\n"}
                        Samedi : 9h - 17h{"\n"}
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


const RenderBouton = ({item,right,navigation}) => {


    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

    const hauteur = width * 1.6 / data.WEL.length;
    const largeur = width * 0.45;

    const lock = item.date_debut ? new Date(item.date_debut) > new Date() : false;
    const opacity = lock ? 0.5 : 1;

    const targetDate = item.date_debut ? item.date_debut : new Date();

    useEffect(() => {
        const now = new Date();
          const target = new Date(targetDate);
          const difference = target - now;
    
          if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
            setTimeLeft({ days, hours, minutes, seconds });
          } else {
            clearInterval(interval);
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          }
        const interval = setInterval(() => {
            
          const now = new Date();
          const target = new Date(targetDate);
          const difference = target - now;
    
          if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
            setTimeLeft({ days, hours, minutes, seconds });
          } else {
            clearInterval(interval);
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          }
        }, 1000);
    
        return () => clearInterval(interval); // Nettoyage de l'intervalle
      }, [targetDate]);


    console.log(lock);
    return (

        <View  style={{flex : 1,backgroundColor : "transparent", justifyContent : "center",width : width*0.7,alignSelf : "center",
            shadowColor: "#000",
            shadowOffset: { width: 2, height: 10 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
         }}>
            
        <HapticBounceable
            disabled={lock}
            onPress={() => {
                navigation.navigate('WELMenuPage', { data: item });
            }}            
            
            style={{
                justifyContent : 'center',
                alignItems : right ? 'flex-end' : 'flex-start'
            }}
          >
            <Image
              style={{
                width : largeur,
                height : hauteur/2,
                resizeMode : "stretch",
                position : "absolute",
                opacity : opacity
              }}
              source={
                //   ? require("../../assets/images/button/button-wood-pressed.png")
                   require("../../assets/images/button/button-wood.png")
              }
            />
            <View style={{width : largeur,height : hauteur/2,alignItems : "center",justifyContent : "center"}}>
            <Text style={{
                fontSize: width * 0.048,
                fontFamily: "JungleBold",
                color: "rgb(95,49,17)",
                textAlign: "center",
                zIndex: 2,
                width : largeur,
                //opacity : opacity*1.5
            }}>{lock ? "🔐" : item.titre}
            {lock ? "\n" + timeLeft.days + "j " + timeLeft.hours + "h " + timeLeft.minutes + "m "  : ""}
            
            

            </Text>
            </View>
          </HapticBounceable>

          </View>
    )
}


export const WELMenuPage = ({ route, navigation }) => {
    const { data } = route.params;


    


    const RenderBouton = ({item,navigation}) => {
        return (
            <HapticBounceable
                onPress={() => {
                    navigation.navigate('WELDescriptionMenuPage', { data: item });
                }}
                style={{
                    justifyContent : 'center',
                    width : width*0.8,
                    marginVertical : width*0.03,
                    alignItems : "center",
                    
                }}
              >
                <View  style={{
                    justifyContent : 'center',
                    width : width*0.8,
                    marginVertical : width*0.03,
                    alignItems : "center",
                    
                }}>
                <Image
                  style={{
                    width : "100%",
                    height : "100%",
                    resizeMode : "stretch",
                    position : "absolute"
                  }}
                  source={
                    //   ? require("../../assets/images/button/button-wood-pressed.png")
                       require("../../assets/images/button/button-wood.png")
                  }
                />
                <Text style={{
                    fontSize: width * 0.078,
                    fontFamily: "JungleBold",
                    color: "rgb(95,49,17)",
                    textAlign: "center",
                    zIndex: 2,
                    marginTop : width*0.04
                }}>{item.titre}</Text>

                <Image source={item.photo_principale} 
                style={{ 
                    marginBottom : width*0.1,
                    marginTop : width*0.01,
                    borderRadius : 10,
                    width:  width*0.4, height: width*0.2, resizeMode: "cover" }} 
                />
                </View>     
              </HapticBounceable>
        )
    }

    return (
        <View style={styles.container}>
            <EntetePage Titre={data.titre} />
            <MurFeuillesHaut fg={true} />
            <MurFeuillesDroite petit={true}/>
            <MurFeuillesGauche petit={true}/>
            <HautLiane/>
            <View style={{ height: height * 0.09,alignItems : "center" }} />

            <View style={{width : width, alignItems : "center"}} >
            
                <FlatList
                    data={data.items}
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <RenderBouton key={index} item={item} navigation={navigation} />
                    )}
                    contentContainerStyle={{
                        width : width*0.9, alignItems: "center", backgroundColor : "transparent" ,
                        justifyContent : "center",
                        height : height*0.6
                    }}
                />
            </View>

            
        </View>
    );
}



export const WELDescriptionMenuPage = ({ route, navigation }) => {
    const { data } = route.params;

     
    console.log(data);

    const RenderItems = ({item}) => {
        return (
            <View style={{ width: width * 0.7, alignItems: "center", justifyContent: "center", marginVertical: width * 0.05 }}>
                
                <View style={{flexDirection : "row", width : "100%", backgroundColor : "transparent",alignItems : "center",justifyContent : "space-around" }} >
                <View >
                <Text style={{ fontSize: width * 0.06, fontFamily: "JungleBold", color: lightTheme.text, textAlign: "center" }}>
                    {item.nom}
                    <Text style={{  fontFamily: "JungleBold", color: lightTheme.text, textAlign: "center",
                        color : "#D3B206"
                        // color2 = "#D3B206";
                     }}>
                        {" paf: "}
                    </Text>
                </Text>
                </View>
                <View style={{backgroundColor : "#D3B206",paddingHorizontal : width*0.02,padding : width*0.01,borderRadius : 10}}>
                        <Text style={{ fontSize: width * 0.07, fontFamily: "JungleBold", color: "white", textAlign: "center" }}>
                              {item.prix}
                            </Text>
                        </View>
                <View style={{backgroundColor : "transparent"}}>
                        <Image   
                        
                        style={{ 
                           
                            borderRadius : 10,
                            width:  width*0.2, height: width*0.1, resizeMode: "cover" }} 
                        
                        source={item.photo} />
                </View>     
                </View>
                <View style={{ marginTop : height * 0.01,width : "90%"}} >
                <Text style={{ fontSize: width * 0.04, fontFamily: "SemiBold", color: lightTheme.text, textAlign: "left" }}>
                    <Text style={{  fontFamily: "Black", color: lightTheme.text, fontSize: width * 0.035
                    }} >
                        {"Ingrédients : "}
                        </Text>
                    { item.ingredients}
                </Text>
                </View>

            </View>
        )
    }


    return (
        <View style={styles.container}>
            <EntetePage Titre={"WEL"} />
            <MurFeuillesHaut fg={true} />
            <MurFeuillesDroite petit={true}/>
            <MurFeuillesGauche petit={true}/>
            <HautLiane/>
            <View style={{ height: height * 0.09,alignItems : "center" }} />

            <View style={{width : width, alignItems : "center"}} >
            <Image source={require("../../assets/images/WEL/parchemin.png")} 

                style={{ position: "absolute", width: width*0.8,
                height: height, resizeMode: "stretch" }} />

            </View>

            {/* <ScrollView scrollEnabled={false} > */}
            <View style={{ height: height * 0.12,alignItems : "center" }} />

            <View style={{width : width*0.7,alignSelf : "center", flexDirection : "row", alignItems: "center", justifyContent: "space-around", }}>
                <Text style={{ fontSize: width * 0.08, fontFamily: "JungleBold", color: lightTheme.text, textAlign: "center" }}>
                    { data.titre }
                </Text>

                <HapticBounceable onPress={()=>Linking.openURL(data.commander_lien)} style={{zIndex : 2,justifyContent : "center",alignItems : "center"}}>
                                <View style={{alignItems : "center",zIndex : 2,backgroundColor : lightTheme.lightBackground,padding : 10,borderRadius : 20}}>
                                <Image source={require("../../assets/images/animaux/tigre.png")} style={{height : width * 0.15,zIndex : 2,width : width * 0.15}} />
                            <Text style={{color : "black",fontFamily : "JungleBold",fontSize : width*0.035}}>Commander</Text>
                                </View>
                </HapticBounceable>
            </View>


            {/* <View style={{ height: height * 0.02,alignItems : "center" }} /> */}

            <FlatList
                    data={data.items}
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <RenderItems key={index} item={item} navigation={navigation} />
                    )}
                    contentContainerStyle={{
                        alignItems: "center", backgroundColor : "transparent" ,
                        justifyContent : "flex-start",
                        height : height*0.6
                    }}
                />
           
                

            {/* </ScrollView> */}

            
        </View>
    );
}





const styles = StyleSheet.create(
    {
        container : 
        {
            flex: 1,
            backgroundColor: lightTheme.background,
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
       
    }
    )