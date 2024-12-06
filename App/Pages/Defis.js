import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import lightTheme from '../Colors';
import EntetePage from "../Components/EntetePage"; 
import { Dimensions } from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { useNavigation } from "@react-navigation/native";
const { height,width } = Dimensions.get('window');
import { MurFeuillesDroite, MurFeuillesGauche,HautLiane,MurFeuillesHaut } from '../Components/Decoration';

import Data from "../Data";


const Defis = () => {
    const targetDate = Data.date_fin_defi;

    const navigation = useNavigation();
    
    return (
        <View style={{flex : 1, backgroundColor : lightTheme.background}}>
            <EntetePage Titre={"Les Défis"}/>
            <MurFeuillesHaut fg={true}/>
            <MurFeuillesDroite petit={true} />
            <MurFeuillesGauche petit={true} />
            <HautLiane/>
            <View style={{ height: height * 0.05 }} />
            <View style={{ paddingTop : height * 0.035,flex : 1,backgroundColor : lightTheme.midBackground,marginHorizontal : width*0.05,borderRadius : 20}}>
            
            <Text style={{fontFamily : "SemiBold",textAlign : "center",}}>Temps avant la fin des défis :</Text>
            

        <Countdown targetDate={targetDate} />


                <RNBounceable onPress={()=>{navigation.navigate("ClassementDefis")}} style={{ flex : 1, width : "100%",justifyContent : "center",alignItems : "center",backgroundColor : "transparent"}}>
                <Image source={require('../../assets/images/button/button-wood.png')} style={{
                    width: width * 0.7, height: width * 0.3, resizeMode: 'stretch',
                    position: "absolute",
                    }} />
                <Text style={{fontFamily : "JungleBold",color : lightTheme.barBackground,textAlign : "center",fontSize : width * 0.08}}>Classements</Text>

            </RNBounceable>
            <RNBounceable onPress={()=>{navigation.navigate("ListeDefis")}} style={{ flex : 1, width : "100%",justifyContent : "center",alignItems : "center",backgroundColor : "transparent"}}>
                <Image source={require('../../assets/images/button/button-wood.png')} style={{
                    width: width * 0.7, height: width * 0.3, resizeMode: 'stretch',
                    position: "absolute",
                    }} />
                <Text style={{fontFamily : "JungleBold",color : lightTheme.barBackground,textAlign : "center",fontSize : width * 0.08}}>Liste des {"\n"}Défis</Text>

            </RNBounceable>
            </View>
            <View style={{ height: height * 0.25 }} />
        </View>
    );
    }





const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  

  useEffect(() => {
    const now = new Date();
      const target = new Date(targetDate);
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    const interval = setInterval(() => {
        
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [targetDate]);

  return (
    <View style={[styles.container,{padding: 10,}]}>
      <Text style={[{
        fontSize: width * 0.09,
        fontFamily: 'JungleBold',}]}>
        {timeLeft.days} j {timeLeft.hours} h {timeLeft.minutes} m {timeLeft.seconds} s
      </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
  },
 
});

export default Defis;
