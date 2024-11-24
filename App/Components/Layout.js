import { View, Image, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import lightTheme from "../Colors";
import Entete from "./Entete";
import Acceuil from "../Pages/Acceuil";

const { width, height } = Dimensions.get("window");

export default function Layout({ children }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={[{ height: insets.top, backgroundColor: lightTheme.barBackground }]} />
      <Entete />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        {children}
      </View>
      <View style={{ height: insets.bottom, backgroundColor: lightTheme.background }} />
      <View
        pointerEvents="none"
        style={{
          height: height * 0.1,
          width: width,
          position: "absolute",
          bottom: 0,
          zIndex: 1,
        }}
      >
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
    </View>
  );
}