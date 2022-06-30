import {
    StyleSheet,
    TextStyle
} from 'react-native';

import { colors } from "../../colors";

interface Style {
    bigText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
    bigText: {
        fontSize: 37,
        color: `${colors.white}`,
        textAlign: "left",
        fontFamily: "Lato-Bold"
    },
});