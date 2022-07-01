import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import {styles} from "./styles";
import { Image, View } from "react-native";
//custom
// import { colors } from "../../../components/colors";
// import { Container } from "../../../components/Shared/shared";
import BigText from "components/Texts/BigText/index";
import SmallText from "components/Texts/SmallText/index";
import RegularButton from "components/Buttons/RegularButton/index";
//image
import background from "assets/bgs/background_v1.png";

const Welcome: FC = () => {
    return (
        <>
            <StatusBar style="light" />
            <View style={styles.welcomeContainer}>
                <View style={styles.topSection}>
                    <Image style={styles.topImage} source = {background} />
                </View>
                <View style= {styles.bottomSection}>
                    <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
                        Best way to track your money
                    </BigText> 
                    <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
                        Best payment method, connects your money to your friends, family.
                    </SmallText>
                    <RegularButton onPress={() => {}}>Get Started</RegularButton>
                </View>
                </View>
        </>
    )
};

export default Welcome;