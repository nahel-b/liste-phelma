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





function RenderOnglet(data){

        

    const renderSection = (item,index) => {
        
        if (item.type === "ligne") {
            return (
                <Ligne text={item.titre + (item.description ?  " : " : "") + item.description} emoji={item.emoji} />
            );
        } else if (item.type === "paragraphe") {
            return (
                <Paragraphe titre={item.titre + " :"} text={item.description} emoji={item.emoji} />
            );
        } else if (item.type === "liste") {
            
            return (
                <Liste element={item} index={index} />
            );
        } else if (item.type === "double") {
            return (
            <Double data={item} />
            );
        }
        return null;
        
    };


return (

<View style={[styles.PageCompContainer,{paddingVertical : height*0.03,paddingHorizontal : width* 0.04}]}>
    <ScrollView contentContainerStyle={{width : "100%"}} showsVerticalScrollIndicator={false}>
        <View contentContainerStyle={{backgroundColor : "transparent",alignItems : "flex-start",justifyContent : "flex-start",height : height}}>
        
            {data.data.map((section, index) => (
                <View key={index}>{renderSection(section,index)}</View>
            ))}
        

           <View style={{height : height * 0.3}}/>
     </View>
    </ScrollView>
</View>
);
}


function Double(data)  {

const renderItems = (items,index) => {
return items.map((item, index) => (

   
    <View
        key={index}
        style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: height * 0.006,
            marginLeft : width * 0.06,
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
}

return  (
    <View style={{ flex: 1, paddingRight: 10,marginBottom : height * 0.03 }}>
    <Text
        style={[
            styles.textPage,
            {fontSize: height * 0.03, marginBottom: height * 0.02, opacity: 1 },
        ]}
    >
        {data.data.emoji + " " + data.data.titre}
    </Text>
    {renderItems(data.data.items)}
    </View>
)
};

function Liste(element,index1){
    
console.log(element);
return(
<View key={index1} style={{marginBottom : height*0.04, flexDirection : "row",alignItems : "flex-start", justifyContent : "flex-start" }}>
    <Text style={{height : "100%",fontSize : width * 0.05}}>{element.element.emoji}{" "}</Text> 
    <View style={{flexDirection : "column"}}>
    <Text style={[styles.textPage,{marginBottom : height*0.02, fontSize :  height * 0.026,opacity : 0.9}]}>{element.element.titre}</Text>
    {element.element.items.map((item,index) => {
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
    backgroundColor : lightTheme.midBackground,
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


export default RenderOnglet;