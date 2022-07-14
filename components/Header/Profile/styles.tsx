import {
    StyleSheet,
    ViewStyle,
    TextStyle,
    ImageStyle
} from 'react-native';

import { colors } from "components/colors";

interface Style {
    profileContainer: ViewStyle;
    profileImage: ImageStyle;
}

export const styles = StyleSheet.create<Style>({
    profileContainer: {
        flexDirection: "column",
        height: 45,
        width: 45,
        borderRadius: 15,
    },
    profileImage: {
        resizeMode: "cover",
        height: "100%",
        width: "100%",
        borderRadius: 15,
        backgroundColor: colors.tertiary
    }
});
