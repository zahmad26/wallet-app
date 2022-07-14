import React, { FC } from 'react';
import { CardProps } from '../types';
import { styles } from './styles';
import { ImageBackground, View, TouchableOpacity, Image } from 'react-native';
import card_bg from "assets/bgs/background_transparent.png";
import { TouchableHighlight } from 'react-native-gesture-handler';
import { colors } from '../../colors';
import RegularText from 'components/Texts/RegularText';
import SmallText from 'components/Texts/SmallText';

const CardItem: FC<CardProps> = ({ accountNo, balance, logo }) => {

    const handlePress = () => { };

    return (
        <>
            <ImageBackground
                style={styles.cardBackground}
                source={card_bg}>
                <TouchableHighlight
                    style={styles.cardTouchable}
                    underlayColor={colors.secondary}
                    onPress={handlePress}
                >
                    <TouchableOpacity
                        style={styles.touchableView}>
                        <View style={styles.cardRow}>
                            <RegularText
                                textStyles={styles.accountNo}
                            >
                                *********{accountNo.slice(9,13)}
                            </RegularText>
                        </View>
                        <View style={[styles.cardRow]}>
                            <View style={{flex:3}}>
                                <SmallText
                                    textStyles={styles.balance}
                                >
                                    Total Balance
                                </SmallText>
                                <RegularText textStyles={{fontSize: 19}}>
                                    ${balance}
                                </RegularText>
                            </View>
                            <Image 
                                style={styles.logo}
                                source={logo}
                            />
                        </View>
                    </TouchableOpacity>
                </TouchableHighlight>
            </ImageBackground>
        </>
    );
};

export default CardItem;