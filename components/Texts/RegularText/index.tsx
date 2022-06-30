import React, { FunctionComponent } from 'react';
import { TextProps } from '../types';
import { styles } from './styles';
import { Text } from 'react-native';

const RegularText: FunctionComponent<TextProps> = (props) => {
    return <Text style={[styles.regularText, props.textStyles]}>{props.children}</Text>
}

export default RegularText;