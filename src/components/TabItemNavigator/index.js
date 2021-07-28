import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, display} from '../../constants';
import {
  ICBooksPrimary,
  ICBooksSecondary,
  ICHomePrimary,
  ICHomeSecondary,
  ICSearchPrimary,
  ICSearchSecondary,
  ICWritingPrimary,
  ICWritingSecondary,
  ICBellPrimary,
  ICBellSecondary,
} from '../../assets';

const TabItemNavigator = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    switch (title) {
      case 'Home':
      default:
        return (
          <ICHomePrimary width={display.hp(3.5)} height={display.hp(3.5)} />
        );
      case 'Searching':
        return (
          <ICSearchPrimary width={display.hp(3.5)} height={display.hp(3.5)} />
        );
      case 'Write':
        return (
          <ICWritingPrimary width={display.hp(3.5)} height={display.hp(3.5)} />
        );
      case 'Jobs':
        return (
          <ICBooksPrimary width={display.hp(3.5)} height={display.hp(3.5)} />
        );
      case 'Notification':
        return (
          <ICBellPrimary width={display.hp(3.5)} height={display.hp(3.5)} />
        );
    }
  };

  const IconSelected = () => {
    switch (title) {
      case 'Home':
      default:
        return (
          <ICHomeSecondary width={display.hp(4.5)} height={display.hp(4.5)} />
        );
      case 'Searching':
        return (
          <ICSearchSecondary width={display.hp(4.5)} height={display.hp(4.5)} />
        );
      case 'Write':
        return (
          <ICWritingSecondary
            width={display.hp(4.5)}
            height={display.hp(4.5)}
          />
        );
      case 'Jobs':
        return (
          <ICBooksSecondary width={display.hp(4.5)} height={display.hp(4.5)} />
        );
      case 'Notification':
        return (
          <ICBellSecondary width={display.hp(4.5)} height={display.hp(4.5)} />
        );
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container(active)}>
      {active && <View style={styles.backCircle(active)} />}
      {!active ? Icon() : IconSelected()}
      {/* <Text
        style={styles.text(active)}
        numberOfLines={1}
        ellipsizeMode={'tail'}
        allowFontScaling={false}>
        {title}
      </Text> */}
    </TouchableOpacity>
  );
};

export default TabItemNavigator;

const styles = StyleSheet.create({
  container: active => ({
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    bottom: active ? display.hp(1) : 0,
    flex: 1,
  }),
  backCircle: active => ({
    backgroundColor: active ? colors.primary : colors.secondary,
    width: display.hp(7),
    height: display.hp(7),
    borderBottomLeftRadius: display.wp(4),
    borderBottomRightRadius: display.wp(4),
    borderTopLeftRadius: display.wp(10),
    borderTopRightRadius: display.wp(10),
    position: 'absolute',
  }),
  text: active => ({
    fontSize: display.wp(4.2),
    color: active ? colors.secondary : colors.white,
    // fontFamily: fonts.MontserratBold,
    textAlign: 'center',
  }),
});
