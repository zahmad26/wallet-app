import {
    StyleSheet,
    ViewStyle
} from 'react-native';

import { colors } from "../colors";

interface Style {
    container: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
    container: {
        alignItems: "center",
        backgroundColor: `${colors.white}`,
        flex: 1
    },
});