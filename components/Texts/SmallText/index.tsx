import React, { FunctionComponent } from 'react';
import { TextProps } from '../types';
import { styles } from './styles';
import { Text } from 'react-native';

const SmallText: FunctionComponent<TextProps> = (props) => {
    return <Text style={[styles.smallText, props.textStyles]}>{props.children}</Text>
}

export default SmallText;