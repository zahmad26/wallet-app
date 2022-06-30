import {
    StyleSheet,
    TextStyle
} from 'react-native';

import { colors } from "../../colors";

interface Style {
    regularText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
    regularText: {
        fontSize: 15,
        color: `${colors.white}`,
        textAlign: "left",
        fontFamily: "Lato-Bold"
    },
});