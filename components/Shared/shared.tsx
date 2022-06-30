
import { Dimensions, View } from "react-native";
import { styles } from "./styles"

export const Container = () =>
    <View style={styles.container}></View>

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;
