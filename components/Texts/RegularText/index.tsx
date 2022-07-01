import React, { FC } from 'react';
import { TextProps } from '../types';
import { styles } from './styles';
import { Text } from 'react-native';

const RegularText: FC<TextProps> = ({textStyles, children}) => {
    return <Text style={[styles.regularText, textStyles]}>{children}</Text>
}

export default RegularText;