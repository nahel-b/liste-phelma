


import React from 'react';
import { View,Image } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

export default function Bottom() {

    return (
        <View pointerEvents='none'>
        <Image
          source={require("../../assets/images/liane/leaf-frame-3.png")}
          style={{
            height: height * 0.45,
            width: width,
            position: "absolute",
            bottom: -width * 0.05,
            zIndex: 1,
          }}
        />
      </View>
    )
}