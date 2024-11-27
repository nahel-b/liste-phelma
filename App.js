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
  });

  return (
    <SafeAreaProvider>
          <Entete />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Acceuil" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Acceuil" component={Acceuil} />
          <Stack.Screen name="Calendrier" component={Calendrier} />
          <Stack.Screen name="SOS" component={SOS} />
        </Stack.Navigator>
      </NavigationContainer>
      <Bottom/>
    </SafeAreaProvider>
  );
}