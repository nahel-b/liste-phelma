import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import lightTheme from "../Colors";
import EntetePage from "../Components/EntetePage";
import MultipleMenu from "../Components/MultipleMenu";
import Data from "../Data";
import { Dimensions } from "react-native";
import HapticBounceable from "../Components/HapticBounceable";
import { ScrollView } from "react-native-gesture-handler";
import RenderOnglet from "../Components/RenderOnglet";
const { height,width } = Dimensions.get("window");
import { MurFeuillesDroite,MurFeuillesGauche,MurFeuillesHaut,HautLiane } from "../Components/Decoration";


export function SoireeZik() {
    const { titres_base } = Data;

    return (
        <View style={{flex : 1, backgroundColor : lightTheme.background}}>
            <EntetePage Titre="Soirée Zik" />
            <MurFeuillesHaut />
            <MurFeuillesDroite petit={true}/>
            <MurFeuillesGauche petit={true}/>
            <HautLiane petit={true}/>
            <View style={{ height: height * 0.01 }} />

            <MultipleMenu
                titles={titres_base}
                components={[
                    <RenderOnglet data={Data.SoireeZik.info_pratique} />,
                    <RenderOnglet data={Data.SoireeZik.au_programme} />,
                    <RenderOnglet data={Data.SoireeZik.au_menu} />
                ]}
            />
        </View>
        
    );
}

export function ApremBDA() {
    const { titres_base } = Data;

    return (
        <View style={{flex : 1, backgroundColor : lightTheme.background}}>
            <EntetePage Titre="Aprem BDA" />
            <MurFeuillesHaut/>
            <MurFeuillesDroite petit={true}/>
            <MurFeuillesGauche petit={true}/>
            <HautLiane petit={true}/>
            <View style={{ height: height * 0.01 }} />

            <MultipleMenu
                titles={titres_base}
                components={[
                    <RenderOnglet data={Data.ApremBDA.info_pratique} />,
                    <RenderOnglet data={Data.ApremBDA.au_programme} />,
                    <RenderOnglet data={Data.ApremBDA.au_menu} />
                ]}
            />
        </View>
        
    );
}

export function MINP() {
    const { titres_base } = Data;

    return (
        <View style={{flex : 1, backgroundColor : lightTheme.background}}>
            <EntetePage Titre="MINP" />
            <MurFeuillesHaut/>
            <MurFeuillesDroite petit={true}/>
            <MurFeuillesGauche petit={true}/>
            <HautLiane petit={true}/>
            <View style={{ height: height * 0.01 }} />

            <MultipleMenu
                titles={titres_base}
                components={[
                    <RenderOnglet data={Data.MINP.info_pratique} />,
                    <RenderOnglet data={Data.MINP.au_programme} />,
                    <RenderOnglet data={Data.MINP.au_menu} />
                ]}
            />
        </View>
        
    );
}


export function EventSportif() {
    const { titres_base } = Data;

    return (
        <View style={{flex : 1, backgroundColor : lightTheme.background}}>
            <EntetePage Titre="Event Sportif" />
            <MurFeuillesHaut/>
            <MurFeuillesDroite petit={true}/>
            <MurFeuillesGauche petit={true}/>
            <HautLiane petit={true}/>
            <View style={{ height: height * 0.01 }} />
            
            <MultipleMenu
                titles={titres_base}
                components={[
                    <RenderOnglet data={Data.EventSportif.info_pratique} />,
                    <RenderOnglet data={Data.EventSportif.au_programme} />,
                    <RenderOnglet data={Data.EventSportif.au_menu} />
                ]}
            />
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
