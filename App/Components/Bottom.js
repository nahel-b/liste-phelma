


import React from 'react';
import { View,Image } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

export default function Bottom() {

    return (
        <View pointerEvents='none'>
        <Image
          source={require("../../assets/images/liane/leaf-frame.png")}
          style={{
            height: height * 0.15,
            width: width,
            position: "absolute",
            bottom: 0,
            zIndex: 1,
          }}
        />
      </View>
    )
}