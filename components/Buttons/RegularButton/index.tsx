import React, { FunctionComponent } from 'react';
import styled from "styled-components/native"
import { styles } from './styles';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle, TouchableOpacity } from 'react-native';
import { ButtonProps } from './../types';

//components
import RegularText from '../../Texts/RegularText/index';

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.button, props.btnStyles]}>
            <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
        </TouchableOpacity>
    );
};

export default RegularButton;