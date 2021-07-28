import React from 'react';
import {View, Text} from 'react-native';
import pages from '../../configs/styles/pages';
import {texts} from '../../configs/styles/texts';

const Loading = ({text}) => {
  return (
    <View style={pages.center}>
      <Text allowFontScaling={false} style={texts.primaryLargeBold}>
        Loading...
      </Text>
      <Text allowFontScaling={false} style={texts.secondaryBoldMedium}>
        {text}
      </Text>
    </View>
  );
};

export default Loading;
