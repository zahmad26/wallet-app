import React, { FC } from 'react';
import { StyleProp, TextStyle, View } from 'react-native';
import RegularText from 'components/Texts/RegularText/index';
import SmallText from 'components/Texts/SmallText/index';
import { styles } from './styles';

interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FC<GreetingProps> = ({ mainText, mainTextStyles, subText, subTextStyles }) => {
    return (
        <View style={styles.greetingContainer}>
            <RegularText
                textStyles={[styles.greetingMainText, mainTextStyles]}
            >
                {mainText}
            </RegularText>
            <SmallText
                textStyles={[styles.greetingSubText, subTextStyles]}
            >
                {subText}
            </SmallText>
        </View>
    );
};

export default Greeting;