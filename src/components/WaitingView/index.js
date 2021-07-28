import React from 'react';
import {View, Text} from 'react-native';
import pages from '../../configs/styles/pages';
import {texts} from '../../configs/styles/texts';

const WaitingView = () => {
  return (
    <View style={{...pages.centerAbsolute, ...pages.transparant}}>
      <Text allowFontScaling={false} style={texts.primaryExtraLargeBold}>
        Please wait...
      </Text>
    </View>
  );
};

export default WaitingView;
