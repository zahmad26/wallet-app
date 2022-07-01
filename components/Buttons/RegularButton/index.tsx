import React, { FC } from 'react';
import styled from "styled-components/native"
import { styles } from './styles';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle, TouchableOpacity } from 'react-native';
import { ButtonProps } from './../types';

//components
import RegularText from '../../Texts/RegularText/index';



const RegularButton: FC<ButtonProps> = ({textStyles, onPress, children, btnStyles}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, btnStyles]}>
            <RegularText textStyles={textStyles}>{children}</RegularText>
        </TouchableOpacity>
    );
};

export default RegularButton;