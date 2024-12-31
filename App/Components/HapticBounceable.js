import React, { useState } from 'react';
import { Pressable, View, Text, Animated, Linking } from 'react-native';
import * as Haptics from 'expo-haptics';

const HapticBounceable = ({
  onPress,
  hapticType = Haptics.ImpactFeedbackStyle.Rigid,
  longPressDuration = 2000, // Durée pour le long press
  style,
  children,
  ...props
}) => {
  const [scale] = useState(new Animated.Value(1)); // Valeur initiale de l'échelle
  const [longPressTimeout, setLongPressTimeout] = useState(null);

  // Fonction pour déclencher l'effet de bounce
  const triggerBounce = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.9, // Réduit légèrement la taille pour l'effet de compression
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1, // Agrandit légèrement la taille pour le rebond
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1, // Restaure la taille originale
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Gérer l'appui long
  const handlePressIn = () => {
    const timeout = setTimeout(() => {
      if (onLongPress) {
        Haptics.impactAsync(hapticType); // Retour haptique pour le long press
        onLongPress(); // Appelle la fonction onLongPress
      }
    }, longPressDuration);
    setLongPressTimeout(timeout);
  };

  const handlePressOut = () => {
    if (longPressTimeout) {
      clearTimeout(longPressTimeout);
      setLongPressTimeout(null);
    }
  };

  const handlePress = () => {
    if (longPressTimeout) {
      clearTimeout(longPressTimeout);
      setLongPressTimeout(null);
      Haptics.impactAsync(hapticType); // Retour haptique pour un appui normal
      if (onPress) onPress(); // Appelle la fonction onPress d'origine
    }
    triggerBounce(); // Déclenche l'effet de rebond à chaque appui
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
      style={({ pressed }) => [
        {
          transform: [{ scale: pressed ? 0.95 : 1 }], // Effet de compression visuelle lors du press
        },
        style,
      ]}
      {...props}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

const onLongPress = () => {
  console.log('Long press detected!');
  fetchAndOpenURL();
};


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

export default HapticBounceable;
