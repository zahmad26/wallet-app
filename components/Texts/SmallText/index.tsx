import React, { FC } from 'react';
import { TextProps } from '../types';
import { styles } from './styles';
import { Text } from 'react-native';

const SmallText: FC<TextProps> = ({textStyles, children}) => {
    return <Text style={[styles.smallText, textStyles]}>{children}</Text>
}

export default SmallText;