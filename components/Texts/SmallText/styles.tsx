import {
    StyleSheet,
    TextStyle
} from 'react-native';

import { colors } from "../../colors";

interface Style {
    smallText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
    smallText: {
        fontSize: 13,
        color: `${colors.gray}`,
        textAlign: "left",
        fontFamily: "Lato-Regular"
    },
});