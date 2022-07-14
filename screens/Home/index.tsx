import React, { FC } from 'react';
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { Image, View } from "react-native";
import CardSection from 'components/Cards/CardSection';
import logo1 from "assets/cards/mc.png";
import logo2 from "assets/cards/visa_white.png";

const Home: FC = () => {
    const cardsData = [
        {
            id: 1,
            accountNo: "4245929292322",
            balance: 200000,
            alias: "Work Debit",
            logo: logo1
        },
        {
            id: 2,
            accountNo: "4234789292322",
            balance: 7540000,
            alias: "Personal Debit",
            logo: logo2
        },
    ]
    return (
        <View style={styles.homeContainer}>
            <StatusBar style='dark' />
            <CardSection data={cardsData} />
        </View>
    );
};

export default Home;