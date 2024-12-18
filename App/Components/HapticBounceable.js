import React from 'react';
import * as Haptics from 'expo-haptics';

import RNBounceable from '@freakycoder/react-native-bounceable';

const HapticBounceable = ({ onPress, hapticType = Haptics.ImpactFeedbackStyle.Rigid, ...props }) => {
  const handlePress = () => {
    Haptics.impactAsync(hapticType); // Déclenche le retour haptique
    if (onPress) onPress(); // Appelle la fonction onPress d'origine
  };

  return <RNBounceable  {...props} onPress={handlePress} />;
};

export default HapticBounceable;
