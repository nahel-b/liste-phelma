import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import EntetePage from "../Components/EntetePage";
import { MurFeuillesHaut, HautLiane, MurFeuillesDroite, MurFeuillesGauche } from "../Components/Decoration";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, useDerivedValue, runOnJS } from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";
import data from "../Data";
const { height, width } = Dimensions.get("window");
import lightTheme from "../Colors";
import HapticBounceable from "../Components/HapticBounceable";
import { ScrollView } from "react-native";

export default function Carte() {
    const [isBack, setIsBack] = useState(false); // État pour suivre si on est sur le verso
    const rotation = useSharedValue(0); // Valeur animée pour la rotation

    // Déclencher le changement d'état à la moitié de l'animation
    useDerivedValue(() => {
        if (rotation.value >= 90 && !isBack) {
            runOnJS(setIsBack)(true); // Utilise runOnJS pour exécuter une fonction JavaScript dans un thread JS
        } else if (rotation.value < 90 && isBack) {
            runOnJS(setIsBack)(false);
        }
    }, [isBack]);

    // Style animé basé sur la rotation
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotation.value}deg` }],
    }));

    // Fonction pour gérer le clic sur la carte
    const handlePress = () => {
        // Alterner entre 0 et 180 degrés
        rotation.value = withTiming(isBack ? 0 : 180, { duration: 500 });
    };

    // Utiliser useFocusEffect pour lancer l'animation lorsque la page reçoit le focus
    useFocusEffect(
        React.useCallback(() => {
           

            const timeout2 = setTimeout(() => {

                handlePress();
                console.log("Animation terminée");
            }, 900); // 400ms + 500ms

            return () => {
                clearTimeout(timeout2);
            };
        }, [])
    );

    return (
        <View style={styles.container}>
            <EntetePage Titre={"La carte"} />
            <MurFeuillesHaut fg={true} />
            <MurFeuillesDroite petit={true} />
            <MurFeuillesGauche petit={true} />
            <HautLiane />
            <View style={{ height: height * 0.03 }} />

            <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
                <View style={{ height: height * 0.01 }} />

                <View style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 2, height: 10 },
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                }}>
                    <HapticBounceable onPress={handlePress}>
                        <Animated.View style={[styles.cardContainer, animatedStyle]}>
                            {isBack ? (
                                <Image
                                    source={require("../../assets/images/recto-carte.png")} // Remplace avec ton verso
                                    style={{ width: width * 0.7, transform: [{ scaleX: -1 }], height: width * 0.4, resizeMode: "stretch", borderRadius: 7, }}
                                />
                            ) : (
                                <Image
                                    source={require("../../assets/images/verso-carte.png")} // Recto
                                    style={{ width: width * 0.7, height: width * 0.4, resizeMode: "stretch", borderRadius: 7, }}
                                />
                            )}
                        </Animated.View>
                    </HapticBounceable>
                </View>

                <View style={{ height: height * 0.03 }} />

                <View style={{ width: width * 0.8, flex: 1, borderRadius: 10, backgroundColor: lightTheme.midBackground }} >
                    <RenderPromotion data={data.avantage_carte} />
                </View>
            </View>
        </View>
    );
}

const RenderPromotion = (data) => {
    const styles = StyleSheet.create({
        texteTitre: {
            fontFamily: "JungleBold",
            fontSize: 20,
            color: "black",
            textAlign: "center",
            opacity: 0.75,
        },
        texteCommerce: {
            fontFamily: "JungleBold",
            fontSize: width * 0.04,
            color: "white",
            textAlign: "left",
            opacity: 1,
        },
        textePromotion: {
            fontFamily: "JungleBold",
            fontSize: width * 0.04,
            color: "white",
            textAlign: "left",
            opacity: 1,
        },
        separationItem: {
            alignSelf: "center",
            height: height * 0.005, borderRadius: 100,
            opacity: 0.3,
            width: width * 0.7, backgroundColor: lightTheme.background
        }
    });

    return (
        <View style={{ padding: 10 }}>
            <View style={{ height: height * 0.015 }} />
            <Text style={styles.texteTitre}>Les avantages de la carte : </Text>
            <View style={{ height: height * 0.03 }} />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", padding: 10 }}>
                <View style={{ flex: 1 }} >
                    <Text style={[styles.texteCommerce, { opacity: 0.9 }]}>Commerce</Text>
                </View>
                <View style={{ flex: 1.4 }} >
                    <Text style={[styles.textePromotion, { opacity: 0.9 }]}>Promo</Text>
                </View>
            </View>
            <ScrollView>
                {data.data.map((item, index) => {
                    return (
                        <View key={index}  >
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", padding: 10 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.texteCommerce}>{item.commerce}</Text>
                                </View>
                                <View style={{ flex: 1.4 }}>
                                    <Text style={styles.textePromotion}>{item.promotion}{" "}
                                        <Text style={{ opacity: 0 }}>😀</Text>
                                    </Text>
                                </View>
                            </View>
                            {index != data.data.length - 1 ?
                                <View style={{ width: width * 0.76, justifyContent: "center" }}>
                                    <View style={styles.separationItem} />
                                </View>
                                : null}
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightTheme.background,
    },
    cardContainer: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
})
