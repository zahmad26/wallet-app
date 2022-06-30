import {
    StyleSheet,
    ViewStyle
} from 'react-native';

import { colors } from "../../colors";

interface Style {
    button: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
    button: {
        alignItems: "center",
        backgroundColor: `${colors.primary}`,
        width: "100%",
        padding: 20,
        borderRadius: 20,
    },
});