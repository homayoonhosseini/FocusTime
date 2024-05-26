import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import {spacing} from '../utils/sizes'

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton
            style={styles.button}
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:25
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
    fontSize: 12,
  },
  inputContainer: {
    padding: spacing.xl,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
