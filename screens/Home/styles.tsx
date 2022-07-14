import {
    StyleSheet,
    ViewStyle,
    ImageStyle
} from 'react-native';

import { colors } from "components/colors";

interface Style {
    homeContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
    homeContainer: {
        width: "100%",
        backgroundColor: `${colors.graylight}`,
        flex: 1,
    },
});
