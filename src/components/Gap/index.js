import React from 'react';
import {StyleSheet, View} from 'react-native';

const Gap = ({wp, hp}) => {
  return <View style={styles.gap(hp, wp)} />;
};

export default Gap;

const styles = StyleSheet.create({
  gap: (hp, wp) => ({
    width: wp,
    height: hp,
  }),
});
