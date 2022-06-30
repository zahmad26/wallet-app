import React, { FunctionComponent } from 'react';
import { TextProps } from '../types';
import { styles } from './styles';
import { Text } from 'react-native';

const BigText: FunctionComponent<TextProps> = (props) => {
    return <Text style={[styles.bigText, props.textStyles]}>{props.children}</Text>
}

export default BigText;