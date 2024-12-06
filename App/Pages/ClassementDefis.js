import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList,Image } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { useIsFocused } from '@react-navigation/native'; // Importez cette dépendance
import lightTheme from '../Colors';
import { Dimensions } from 'react-native';
import { MurFeuillesDroite,MurFeuillesGauche,MurFeuillesHaut,HautLiane } from '../Components/Decoration';
import  EntetePage from '../Components/EntetePage';


const firebaseConfig = {
    apiKey: "AIzaSyCoKfJNHAnxRX__tH3B4d4OcPl_cC2oiLY",
    authDomain: "liste-phelma.firebaseapp.com",
    databaseURL: "https://liste-phelma-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "liste-phelma",
    storageBucket: "liste-phelma.firebasestorage.app",
    messagingSenderId: "553978967439",
    appId: "1:553978967439:web:457327f51f37e70ae547fa",
    measurementId: "G-H99T5HB83C"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


const { width, height } = Dimensions.get("window");



const renderItem = ({ item, index,data }) => {
    const minIndex = 0;
    const maxIndex = data.length - 1;
    
    // Calculer la position normalisée de l'élément dans la liste
    // const position = (index - minIndex) / (maxIndex - minIndex);
    // // Interpolation linéaire pour obtenir une couleur intermédiaire
    // const backgroundColor = interpolateColor(couleurs.buttonColor1, couleurs.buttonColor3, position);
  
    // const dynamicStyles = {
    //   backgroundColor: backgroundColor,
    // };

    if(item.point === "-1")
        {
            return(<View key={100000} style={{height : height/6}}/>)
        }


    let color1 = "transparent";
    let color2 = lightTheme.midBackground;
    if (index === 0) {
        color1 = "#FFD700";
        color2 = "#D3B206";
    }
    if (index === 1) {
        color1 = "#C0C0C0";
        color2 = "#A0A0A0";
    }
    if (index === 2) {
        color1 = "#CD7F32";
        color2 = "#A8702A";
    }
    
  
    return (
        <View style={styles.rectangle}>
        <View style={[styles.leftColumn,]}>
                {/* <View style={styles.medalContainer}>
            <Image
                source={require('../../assets/images/button/medaille-gold.png')} // Remplacez par le chemin de votre image
                style={styles.medalImage}
            />
            </View> */}
            {/* <Image source={require('../../assets/images/button/medaille-gold.png')} 
            style={{
            width : "100%", 
            position: 'absolute',
            alignSelf   : 'center',
            zIndex: 1,
            resizeMode : 'contain',
            height : "100%"}}/> */}

            <ColorCircle color={color1} taille={width * 0.13}>
                <ColorCircle color={color2} taille={width * 0.11}>
                <ColorCircle color={color1} taille={width * 0.09}>
                <Text style={[styles.position,{marginTop : width*0.01}]}>{index + 1}</Text>
                </ColorCircle>
                </ColorCircle>
            </ColorCircle>

          {/* <View style={styles.redCircle}>
            
            <Text style={styles.position}>{index + 1}</Text>
          </View> */}
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.textNom}>{item.prenom} {item.nom}</Text>
          <Text style={styles.textPoint}>Points : {item.point}</Text>
        </View>
      </View>
    );
  };

  const ColorCircle = ({color,taille, children}) => {
    


    return (
        <View style=
        {{
            backgroundColor : color,
            width : taille,
            height : taille,
            borderRadius : 100,
            justifyContent : 'center',
            alignItems : 'center',
            padding : width * 0.01,

        }}>
            {children}
        </View>
    )}

  
  const interpolateColor = (color1, color2, position) => {
    const interpolateChannel = (channel1, channel2) => Math.ceil(channel1 * (1 - position) + channel2 * position);
  
    const r1 = parseInt(color1.match(/\d+/g)[0], 10);
    const g1 = parseInt(color1.match(/\d+/g)[1], 10);
    const b1 = parseInt(color1.match(/\d+/g)[2], 10);
  
    const r2 = parseInt(color2.match(/\d+/g)[0], 10);
    const g2 = parseInt(color2.match(/\d+/g)[1], 10);
    const b2 = parseInt(color2.match(/\d+/g)[2], 10);
  
    const r = interpolateChannel(r1, r2);
    const g = interpolateChannel(g1, g2);
    const b = interpolateChannel(b1, b2);
  
    return `rgb(${r},${g},${b})`;
  };
  
    const ClassementListe = () => {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
    
      const fetchData = useCallback(async () => {
        try {
          const utilisateursRef = ref(db, 'utilisateurs');
          const utilisateursSnapshot = await get(utilisateursRef);
    
          if (utilisateursSnapshot.exists()) {
            const utilisateursData = utilisateursSnapshot.val();
            const newData = Object.entries(utilisateursData).map(([username, userData]) => {
              if (isNaN(userData.point)) {
                return null;
              }
              return {
                username,
                prenom: userData.prénom,
                nom: userData.nom,
                point: userData.point
              };
            }).filter(item => item !== null);
    
            newData.sort((a, b) => b.point - a.point);
            //ajouter 1 items avec -1 point
            newData.push({ prenom: "-1", nom: "-1", point: "-1",key : "111" });
            setData(newData);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        } 
      }, [setLoading]);
  
  
      
    
      const isFocused = useIsFocused(); // Récupérez l'état de focus de l'écran
    
      useEffect(() => {
        // Chargez les données lorsque le composant est monté
        fetchData();
      }, [fetchData]);
    
      useEffect(() => {
        // Rechargez les données lorsque l'écran est en focus
        if (isFocused) {
          fetchData();
        }
      }, [isFocused, fetchData]);
    

    
    //   if (!loaded || loading) {
    //     const dataNull = [
    //       { prenom: "Chargement", nom: "--", point: "0" },
    //       { prenom: "Chargement", nom: "--", point: "0" },
    //       { prenom: "Chargement", nom: "--", point: "0" },
    //       { prenom: "Chargement", nom: "--", point: "0" },
    //       { prenom: "Chargement", nom: "--", point: "0" },
    //       { prenom: "Chargement", nom: "--", point: "0" }
    //     ];
    //     return (
    //     <View>
    //     <Text style={{marginTop : 10, fontSize: 40, alignSelf: 'center',fontFamily:'JungleBold' }}>Chargement...</Text>
    //     <Text style={{margin : 0, fontSize: 20, alignSelf: 'center',fontFamily:'JungleBold' }}>Vérifie ta connexion</Text>
    //     </View>
    //     );
    //   }
    
      return (
        <View style={styles.container}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.username}
            renderItem={({ item, index }) => renderItem({ item, index, data })}
            style={{ height: '100%' }}
            />
          
        </View>
      );
    };
    
  
    
export default function ClassementDefis() {

    return(
                

        <View style={{flex:1,backgroundColor:lightTheme.midBackground}}>
            <EntetePage Titre={"Les Défis"}/>
            <MurFeuillesHaut fg={true}/>
            <MurFeuillesDroite petit={true} />
            <MurFeuillesGauche petit={true} />
            <HautLiane/>
            <View style={{ height: height * 0.05 }} />
            <View style={{ paddingTop : height * 0.0,flex : 1,backgroundColor : lightTheme.midBackground,marginHorizontal : width*0.05,borderRadius : 20}}>
            
            <ClassementListe/>
            </View>
        </View>
    )
}


  
const styles = StyleSheet.create({

    medalContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50, // Ajustez la taille pour votre cas
    height: 50, // Ajustez également ici
  },
  medalImage: {
    width: '100%', // L'image s'adapte au conteneur
    height: '100%',
    resizeMode: 'contain',
  },
    container: {
      marginTop: 0,
      padding: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,

    },
    rectangle: {
       // Prend presque toute la largeur
      marginVertical: 5,
      padding: 10,
      borderRadius: 25,
      flexDirection: 'row', // Ajoutez cette ligne pour assurer la disposition en colonne
      backgroundColor : lightTheme.background
    },
    leftColumn: {
      marginRight: 10,
      alignItems  : 'center',
        justifyContent : 'center'
    },
    rightColumn: {
        width: '80%',
        justifyContent: 'center'
    },
    position: {
      //fontWeight: 'bold',
      marginBottom: 0,
      color : 'white',
      fontSize : width * 0.06,
      fontFamily:'JungleBold',
      textAlign: 'center',
      textAlignVertical: 'center',
      
    },
    textNom: 
    {
        color : 'white',
        fontSize : 30,
        //fontWeight : 'bold',
        fontFamily:'JungleBold'
    },
    textPoint: 
    {
        color : 'white',
        fontSize : width * 0.05,
        //fontWeight : 'bold',
        fontFamily:'JungleBold'
    },
    redCircle: {
        width: width * 0.12,
        height: width * 0.12,
        borderRadius: 100, // Cercle parfait
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center', // Centrer le texte
        padding: width * 0.01,
        
      },
    image: { width: 40, height: 40 }
  });
  


