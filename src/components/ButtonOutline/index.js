import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, display} from '../../constants';

const ButtonOutline = ({
  title,
  onPress,
  borderRadius,
  titleColor,
  titleAlign,
  borderColor,
  height,
  disabled,
  width,
  backgroundColor,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.conatiner(
        borderRadius,
        borderColor,
        height,
        width,
        backgroundColor,
      )}
      onPress={onPress}>
      <Text
        allowFontScaling={false}
        style={styles.title(titleColor, titleAlign)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonOutline;

const styles = StyleSheet.create({
  title: (titleColor, titleAlign) => ({
    fontSize: display.wp(3.9),
    color: titleColor ? titleColor : colors.white,
    textAlign: titleAlign ? 'center' : null,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  }),
  conatiner: (borderRadius, borderColor, height, width, backgroundColor) => ({
    borderWidth: 1,
    paddingHorizontal: display.wp(3),
    paddingVertical: display.wp(1),
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor ? backgroundColor : colors.primary,
    borderRadius: borderRadius ? borderRadius : 10,
    borderColor: borderColor ? borderColor : colors.primary,
  }),
});
