

import React from "react";
import { Text, View, StyleSheet, Dimensions,Image, FlatList } from "react-native";
import EntetePage from "../Components/EntetePage";
import { MurFeuillesHaut ,HautLiane, MurFeuillesDroite, MurFeuillesGauche} from "../Components/Decoration";
import { useNavigation } from "@react-navigation/native";

import data from "../Data";

const { height, width } = Dimensions.get("window");
import lightTheme from "../Colors";
import HapticBounceable from "../Components/HapticBounceable";
import { ScrollView } from "react-native";

export default function WEL() {


    const navigation = useNavigation();


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
        <View style={{ height: height * 0.09,alignItems : "center" }} />

            <RenderMenu data={data.WEL} />


        <View style={{ height: height * 0.18,alignItems : "center" }} />

        </View>
    );
}


const RenderBouton = ({item,right,navigation}) => {


    const hauteur = width * 1.6 / data.WEL.length;
    const largeur = width * 0.45;

    return (

        <View  style={{flex : 1,backgroundColor : "transparent", justifyContent : "center",width : width*0.7,alignSelf : "center",
            shadowColor: "#000",
            shadowOffset: { width: 2, height: 10 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
         }}>
        <HapticBounceable
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
                position : "absolute"
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
                width : largeur
            }}>{item.titre}</Text>
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

                <Text style={{ fontSize: width * 0.08, fontFamily: "JungleBold", color: lightTheme.text, textAlign: "center" }}>
                    { data.titre }
                </Text>


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
        }
       
    }
    )