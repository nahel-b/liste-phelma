import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import lightTheme from "../Colors";
import EntetePage from "../Components/EntetePage";
import MultipleMenu from "../Components/MultipleMenu";
import Data from "../Data";
import { Dimensions } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { ScrollView } from "react-native-gesture-handler";

const { height,width } = Dimensions.get("window");



export default function SoireeBDE() {
    const { titres_base } = Data;

    return (
        <View style={{flex : 1, backgroundColor : lightTheme.background}}>
            <EntetePage Titre="Soirée BDE" />
            <View style={{ height: height * 0.01 }} />

            <MultipleMenu
                titles={titres_base}
                components={[
                    <InfoPratique  />,
                    <AuProgramme />,
                    <AuMenu />
                ]}
            />
        </View>
    );
}


function AuMenu() {
    const { au_menu } = Data.SoireeBDE;

    const renderItems = (items) => {
        return items.map((item, index) => (
            <View
                key={index}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: height * 0.02,
                }}
            >
                <Text style={{color : "white",fontFamily : "JungleBold", fontSize: width * 0.05,height : "100%" }}>{item.emoji}

                <Text
                    style={[
                        styles.textPage,
                        {fontFamily : "Black",  marginLeft: 10, fontSize: height * 0.019, opacity: 0.8 },
                    ]}
                >
                    {" " +item.nom}
                </Text>
                </Text>
                
            </View>
        ));
    };

    return (
        <View style={[styles.PageCompContainer,{paddingVertical : height*0.02, paddingHorizontal : width* 0.03}]}>
            <ScrollView contentContainerStyle={{ width: "100%" }} showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                        
                    }}
                >
                    {/* Colonne de gauche : Manger */}
                    <View style={{ flex: 1, paddingRight: 10 }}>
                        <Text
                            style={[
                                styles.textPage,
                                {fontSize: height * 0.03, marginBottom: height * 0.02, opacity: 1 },
                            ]}
                        >
                            🍽️ A manger
                        </Text>
                        {renderItems(au_menu.manger)}
                    </View>

                    {/* Colonne de droite : Boire */}
                    <View style={{ flex: 1, paddingLeft: 10 }}>
                        <Text
                            style={[
                                styles.textPage,
                                { fontSize: height * 0.03, marginBottom: height * 0.02, opacity: 1 },
                            ]}
                        >
                            🍹 A boire
                        </Text>
                        {renderItems(au_menu.boire)}
                    </View>
                </View>
                <View style={{ height: height * 0.3 }} />
            </ScrollView>
        </View>
    );
}

function AuProgramme()
{
    const {au_programme} = Data.SoireeBDE;

    const renderElement = (element,index1) => {
        

        return(
        <View key={index1} style={{marginBottom : height*0.04, flexDirection : "row",alignItems : "flex-start", justifyContent : "flex-start" }}>
            <Text style={{height : "100%",fontSize : width * 0.05}}>{element.emoji}{" "}</Text> 
            <View style={{flexDirection : "column"}}>
            <Text style={[styles.textPage,{marginBottom : height*0.02, fontSize :  height * 0.026,opacity : 0.9}]}>{element.titre}</Text>
            {element.items.map((item,index) => {
                return (
                <View key={index} style={{marginBottom : height*0.008, flexDirection : "row",alignItems : "flex-start", justifyContent : "flex-start" }}>

                <Text style={[styles.textPage,{marginLeft : 20,marginBottom : 0, fontSize :  height * 0.023,opacity : 0.7}]}>{item.titre}</Text>
                <Text  style={[styles.textPage,{marginLeft : 0,marginBottom : 0, fontSize :  height * 0.023,opacity : 0.7}]}>{" "}{item.description}</Text>
                {item.lien_insta && 
                <RNBounceable onPress={() => { Linking.openURL(item.lien) }} style={{ }}>
                    <Text style={[styles.textPage,{opacity : 0.8,marginBottom : 0, fontSize :  height * 0.023,opacity : 0.5, color : "blue"}]}>{"  (lien)"}</Text>
                </RNBounceable>
                }
                </View>
            )   
            })}
            </View>
            {/* <Text style={[styles.textPage,{marginLeft : 12, fontSize :  height * 0.023,opacity : 0.6}]}>{text}</Text> */}
        </View>
        )
            
    }

    return (
        
        <View style={[styles.PageCompContainer,{paddingVertical : height*0.03,paddingHorizontal : width* 0.04}]}>
            <ScrollView contentContainerStyle={{width : "100%"}} showsVerticalScrollIndicator={false}>
            <View contentContainerStyle={{backgroundColor : "transparent",alignItems : "flex-start",justifyContent : "flex-start",height : height}}>
            
            {au_programme.map((element,index) => 
            {
                return ( renderElement(element,index) )
            }
            )}
            

            <View style={{height : height * 0.3}}/>
            </View>
            </ScrollView>
        </View>
    );

}

function InfoPratique() {

    const SoireeBDE = Data.SoireeBDE;
    const { info_pratique } = Data.SoireeBDE;


    
    return (
        
        <View style={styles.PageCompContainer}>
            <ScrollView  showsVerticalScrollIndicator={false} > 
            <View contentContainerStyle={{backgroundColor : "transparent",alignItems : "flex-start",justifyContent : "flex-start",height : height}}>
            {/* <View style={{ width : "100%",justifyContent : "flex-start" }} > */}
                <Ligne text={"Theme : " + info_pratique.theme} emoji="🎉" />
                <Ligne text={"Date : " + info_pratique.jour} emoji="📅" />
                <Ligne text={"Lieu : " + info_pratique.lieu} emoji="🪩" lien={info_pratique.lien_lieu_google} />
                <Ligne text={"Prix : " + info_pratique.prix} emoji="💸" />
                <Paragraphe titre={"Transport aller : " } text={info_pratique.transport_aller} emoji="🚍" />
                <Paragraphe titre={"Transport retour : " } text={info_pratique.transport_retour} emoji="🥱" />

            {/* </View> */}
            </View>
            </ScrollView>
        </View>
    );
}

function Ligne ({text, emoji,lien}) {
    return(
        <View style={{ flexDirection : "row",alignItems : "flex-start", justifyContent : "flex-start" }}>
            <Text style={{height : "100%",fontSize : width * 0.05}}>{emoji}</Text>
            <Text style={[styles.textPage,{ fontSize :  height * 0.026,opacity : 0.9}]}>{" "}{text}</Text>
            {lien && 
            <RNBounceable onPress={() => { Linking.openURL(lien) }} style={{  alignItems : "center"}}>
            <Text style={[styles.textPage,{alignSelf : "center", fontSize :  height * 0.022,opacity : 0.6, color : "blue"}]}>{"  (maps)"}</Text>
            </RNBounceable>
            }
        </View>
    )
}

function Paragraphe({titre, text , emoji}) {

    
    return (
        <View style={{ flexDirection : "row",alignItems : "flex-start", justifyContent : "flex-start" }}>
            <Text style={{height : "100%",fontSize : width * 0.05}}>{emoji}</Text>
            <View style={{flexDirection : "column"}}>
            <Text style={[styles.textPage,{marginBottom : 5, fontSize :  height * 0.026,opacity : 0.9}]}>{" "}{titre}</Text>
            <Text style={[styles.textPage,{marginLeft : 12, fontSize :  height * 0.023,opacity : 0.7}]}>{text}</Text>
            </View>
        </View>
    );

}

function PageComp({ message }) {
    return (
        <View style={styles.PageCompContainer}>
            <View style={{ width : "100%",flexDirection : "row" }} >
            <Text style={styles.textPage}>{ message}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    PageCompContainer   : {
        justifyContent : "flex-start",
        padding : width * 0.05,
        paddingVertical : height * 0.04,
        alignItems : "flex-start",
        width : width*0.9,
        height : height*0.9,
        borderRadius : 20,
        //backgroundColor : lightTheme.lightBackground,
        backgroundColor : "rgb(118,91,60)",
        alignSelf : "center",
    },
    textPage : {
        color : "white",
        opacity : 1,
        fontSize : width * 0.05,
        fontFamily : "JungleBold",
        textAlign : "left",
        marginBottom : height * 0.04,
    }
});
