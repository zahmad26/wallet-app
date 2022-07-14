import {
    StyleSheet,
    ViewStyle,
    ImageStyle,
    TextStyle
} from 'react-native';

import { colors } from "components/colors";
import { ScreenWidth, ScreenHeight } from "components/Shared/shared";


interface Style {
    cardBackground: ImageStyle;
    cardTouchable: ViewStyle;
    touchableView: ViewStyle;
    cardRow: ViewStyle;
    logo: ImageStyle;
    accountNo: TextStyle;
    balance: TextStyle;
}

export const styles = StyleSheet.create<Style>({
    cardBackground: {
        height: "75%",
        width: ScreenWidth * 0.67,
        resizeMode: "cover",
        backgroundColor: colors.accent,
        borderRadius: 25,
        marginRight: 25,
        overflow: "hidden"
    },
    cardTouchable: {
        height: "100%",
        borderRadius: 25
    },
    touchableView: {
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30,
        flex: 1
    },
    cardRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    logo: {
        height: ScreenHeight*0.05,
        width: ScreenWidth*0.09,
        resizeMode: "contain",
        flex: 1
    },
    accountNo: {
        color: colors.white,
        marginBottom: 25,
    },
    balance: {
        marginBottom: 5,
        color: colors.graylight
    }
});
