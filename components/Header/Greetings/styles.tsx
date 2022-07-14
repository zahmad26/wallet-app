import {
    StyleSheet,
    ViewStyle,
    TextStyle
} from 'react-native';

import { colors } from "components/colors";

interface Style {
    greetingContainer: ViewStyle;
    greetingMainText: TextStyle;
    greetingSubText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
    greetingContainer: {
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
    },
    greetingMainText: {
        fontSize: 22,
        color: colors.secondary
    },
    greetingSubText: {
        color: colors.graydark
    }
});
