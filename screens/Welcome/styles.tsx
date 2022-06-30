import {
    StyleSheet,
    ViewStyle,
    ImageStyle
} from 'react-native';

import { colors } from "../../components/colors";

interface Style {
    welcomeContainer: ViewStyle;
    topSection: ViewStyle;
    topImage: ImageStyle;
    bottomSection: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
    welcomeContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: `${colors.secondary}`,
        justifyContent: "space-between",
    },
    topSection: {
        width: "100%",
        flex: 1,
        maxHeight: "55%",
    },
    topImage: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
    },
    bottomSection: {
        width: "100%",
        flex: 1,
        padding: "25px",
        justifyContent: "flex-end"
    },
});
