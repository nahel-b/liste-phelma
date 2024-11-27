import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import lightTheme from "../Colors";
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");



export default function EntetePage({Titre}) {

    const navigation = useNavigation();

    return (
        <View>
            <View style={[{  backgroundColor: lightTheme.barBackground }]} />
            <View
                style={{
                    alignItems: "center",
                    backgroundColor: lightTheme.barBackground,
                    flexDirection: "row",
                    zIndex: 2,
                    paddingBottom : height * 0.005,
                }}
            >


                    <View style={{ position : "absolute", left : 0,bottom : height * 0.0025 }}>
                    <RNBounceable onPress={() => { navigation.goBack() }} style={{ }}>

                        <Entypo name="chevron-left" size={35} color="black" style={{ margin: 0 }} />
                        </RNBounceable>

                    </View>
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <Text style={{ color: "white",opacity : 0.8, fontSize: 30, fontFamily: "JungleBold", }}>{Titre}</Text>
                </View>
            </View>
        </View>
    );
}