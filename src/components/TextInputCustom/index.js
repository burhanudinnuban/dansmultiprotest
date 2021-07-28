import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import pages from '../../configs/styles/pages';
import {texts} from '../../configs/styles/texts';
import {colors, display} from '../../constants';
import Gap from '../Gap';

const TextInputCustom = ({
  value,
  onChangeText,
  numberOfLines,
  multiline,
  placeholder,
  placeholderTextColor,
  iconLeft,
  iconRight,
  onPressIn,
  onPressOut,
  onPress,
  editable,
  onPressIconRight,
  onPressIconLeft,
  onEndEditing,
}) => {
  return (
    <View
      style={{
        ...pages.roundedBg(colors.primary, 0, 0, 10),
        ...pages.rowCenter,
        // ...pages.flex,
      }}>
      <TouchableOpacity
        onPress={onPressIconLeft}
        style={pages.padding(0, display.wp(1))}>
        {iconLeft && iconLeft}
      </TouchableOpacity>

      {editable === false || onPress ? (
        <TouchableOpacity onPress={onPress && onPress} style={pages.flex}>
          <TextInput
            onEndEditing={onEndEditing}
            editable={false}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            allowFontScaling={false}
            style={texts.secondary}
            placeholder={placeholder ? placeholder : 'type in here...'}
            placeholderTextColor={
              placeholderTextColor ? placeholderTextColor : colors.silver
            }
            onChangeText={onChangeText}
            value={value}
            numberOfLines={numberOfLines}
            multiline={numberOfLines ? false : multiline ? multiline : true}
          />
        </TouchableOpacity>
      ) : (
        <View style={pages.flex}>
          <TextInput
            editable={
              onPressIn || onPressOut ? true : editable ? editable : true
            }
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            allowFontScaling={false}
            style={texts.secondary}
            placeholder={placeholder ? placeholder : 'type in here...'}
            placeholderTextColor={
              placeholderTextColor ? placeholderTextColor : colors.silver
            }
            onChangeText={onChangeText}
            value={value}
            numberOfLines={numberOfLines}
            multiline={numberOfLines ? false : multiline ? multiline : true}
          />
        </View>
      )}

      <TouchableOpacity
        onPress={onPressIconRight}
        style={pages.padding(0, display.wp(1))}>
        {iconRight && iconRight}
      </TouchableOpacity>
    </View>
  );
};

export default TextInputCustom;
