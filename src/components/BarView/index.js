import React from 'react';
import {View} from 'react-native';
import pages from '../../configs/styles/pages';

const BarView = ({componentLeft, componentCenter, componentRight}) => {
  return (
    <View style={pages.barView}>
      <View style={pages.flexStartRow}>{componentLeft}</View>
      <View style={pages.flexCenterRow}>{componentCenter}</View>
      <View style={pages.flexEndRow}>{componentRight}</View>
    </View>
  );
};

export default BarView;
