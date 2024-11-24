import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Layout from './App/Components/Layout';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Acceuil from './App/Pages/Acceuil';
import Entete from './App/Components/Entete';
import Bottom from './App/Components/Bottom';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Entete />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Acceuil" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Acceuil" component={Acceuil} />
        </Stack.Navigator>
      </NavigationContainer>
      <Bottom/>
    </SafeAreaProvider>
  );
}