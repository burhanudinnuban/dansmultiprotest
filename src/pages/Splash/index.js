import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import pages from '../../configs/styles/pages';
import {texts} from '../../configs/styles/texts';
import {ICBooksPrimary} from '../../assets';
import {display} from '../../constants';
import {Gap} from '../../components';
import {useSelector} from 'react-redux';

const Splash = ({navigation}) => {
  const global = useSelector(state => state.global);
  useEffect(() => {
    setTimeout(() => {
      if (!global.first_launch) {
        navigation.replace('OnBoarding');
      } else {
        if (!global.isLogin) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('Login');
        }
      }
    }, 1000);
  }, [global.first_launch, global.isLogin, navigation]);

  return (
    <View style={{...pages.center, ...pages.flexWhite}}>
      <ICBooksPrimary width={display.wp(20)} height={display.wp(20)} />
      <Gap hp={5} />
      <Text allowFontScaling={false} style={texts.primaryExtraLargeBold}>
        DansMultiPro
      </Text>
    </View>
  );
};

export default Splash;
