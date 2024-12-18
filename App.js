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

import { useFonts } from 'expo-font';


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
        </Stack.Navigator>
      </NavigationContainer>
      <Bottom/>
    </SafeAreaProvider>
  );
}