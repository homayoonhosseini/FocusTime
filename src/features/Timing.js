import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
export const Timing = ({onChangeTime}) => {
  return (
    <>
    <View style={styles.timingButton}>
      <RoundedButton ts={12} size={75} title="12 sec" onPress={() => onChangeTime(0.2)} />
    </View>
    
    <View style={styles.timingButton}>
      <RoundedButton size={75} title="5" onPress={() => onChangeTime(5)} />
    </View>
    
    <View style={styles.timingButton}>
      <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
