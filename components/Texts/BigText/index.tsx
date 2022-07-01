import React, { FC } from 'react';
import { TextProps } from '../types';
import { styles } from './styles';
import { Text } from 'react-native';

const BigText: FC<TextProps> = ({textStyles, children}) => {
    return <Text style={[styles.bigText, textStyles]}>{children}</Text>
}

export default BigText;