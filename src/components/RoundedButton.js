import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ts = (size / 4),
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size,ts).radius, style]} onPress={props.onPress}>
      <Text style={[styles(size,ts).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size,ts) => ({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: "center",
      borderColor: colors.white,
      borderWidth: 2
    },
    text: { color: colors.white, fontSize: ts},
  });