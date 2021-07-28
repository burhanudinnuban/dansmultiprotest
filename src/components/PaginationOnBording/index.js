import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, display} from '../../constants';
import Gap from '../Gap';

const PaginationOnBording = ({active1, active2, active3}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line(active1)} />
      <Gap wp={display.wp(2)} />
      <View style={styles.line(active2)} />
      <Gap wp={display.wp(2)} />
      <View style={styles.line(active3)} />
    </View>
  );
};

export default PaginationOnBording;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: active => ({
    width: active ? display.wp(8) : display.wp(5.5),
    height: active ? display.wp(8) : display.wp(5.5),
    borderRadius: active ? display.wp(8) / 2 : display.wp(5.5) / 2,
    backgroundColor: active ? colors.primary : colors.secondary,
  }),
});
