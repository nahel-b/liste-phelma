import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Layout from './App/Components/Layout';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Acceuil from './App/Pages/Acceuil';
import Entete from './App/Components/Entete';
import Bottom from './App/Components/Bottom';
import Calendrier from './App/Pages/Calendrier';
import SOS from './App/Pages/SOS';
import {SoireeBDE,DD} from './App/Pages/BDE';
import { SoireeZik,ApremBDA,MINP,EventSportif } from './App/Components/BDABDS';
import Defis from './App/Pages/Defis';
import Carte from './App/Pages/Carte';
import ListeDefis from './App/Pages/ListeDefis';
import ClassementDefis from './App/Pages/ClassementDefis';
import WEL,{WELMenuPage,WELDescriptionMenuPage} from './App/Pages/WEL';

import DefisCache from './App/Pages/DefisCache';

import React,{useEffect} from 'react';
import { ShakeEventExpo } from './App/Components/Shake';

import { useFonts } from 'expo-font';
import { Linking } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const Stack = createStackNavigator();



export default function App() {


  useEffect(() => {
    // Ajouter l'écouteur pour l'événement de secousse
    ShakeEventExpo.addListener(() => {
      console.log('Shake detected!');
      fetchAndOpenURL(); // Appeler la fonction lorsque secoué
    });

    // Nettoyer l'écouteur lorsque le composant est démonté
    return () => {
      ShakeEventExpo.removeListener(); // Assurez-vous que removeListener existe dans votre bibliothèque
    };
  }, []);

  const [loaded, error] = useFonts({
    'JungleBold': require('./assets/fonts/Jungle-Bold.ttf'),
    'JungleRegular': require('./assets/fonts/Jungle-Regular.otf'),
    'Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Black': require('./assets/fonts/Inter-Black.ttf'),
    'SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Medium': require('./assets/fonts/Inter-Medium.ttf'),

  });

  if (!loaded) {
    return null;
  }



  return (
    <SafeAreaProvider>
          <Entete />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Acceuil" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Acceuil" component={Acceuil} />
          <Stack.Screen name="Calendrier" component={Calendrier} />
          <Stack.Screen name="SOS" component={SOS} />
          <Stack.Screen name="SoireeBDE" component={SoireeBDE} />
          <Stack.Screen name="SoireeZik" component={SoireeZik} />
          <Stack.Screen name="ApremBDA" component={ApremBDA} />
          <Stack.Screen name="MINP" component={MINP} />
          <Stack.Screen name="EventSportif" component={EventSportif} />
          <Stack.Screen name="Defis" component={Defis} />
          <Stack.Screen name="Carte" component={Carte} />
          <Stack.Screen name="ListeDefis" component={ListeDefis} />
          <Stack.Screen name="ClassementDefis" component={ClassementDefis} />
          <Stack.Screen name="WEL" component={WEL} />
          <Stack.Screen name="WELMenuPage" component={WELMenuPage} />
          <Stack.Screen name="WELDescriptionMenuPage" component={WELDescriptionMenuPage} />
          <Stack.Screen name="DD" component={DD} />
          <Stack.Screen name="DefisCache" component={DefisCache} />
        </Stack.Navigator>
      </NavigationContainer>
      <Bottom/>
    </SafeAreaProvider>
  );
}



const fetchAndOpenURL = async () => {
  try {
    const response = await fetch('http://34.123.23.174:3000/liste-phelma/geturl');
    if (!response.ok) {
      throw new Error(`Erreur serveur : ${response.status}`);
    }

    let url = await response.json(); // Si le serveur retourne une simple chaîne
    console.log("URL récupérée :", url.url);
    url = url.url;
    if (url && url !== 'null') {
      const canOpen = await Linking.canOpenURL(url);
      if (canOpen && canOpen !== 'null') {
        await Linking.openURL(url);
        
      } else {
      }
    } else {
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'URL :", error);
  }
};