import {
    StyleSheet,
    ViewStyle,
    TextStyle
} from 'react-native';

import { colors } from "components/colors";

interface Style {
    cardList: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
    cardList: {
        width: "100%",
        flex: 1,
        paddingLeft: 25,
        paddingBottom: 15
    }
});
