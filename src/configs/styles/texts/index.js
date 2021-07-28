import {StyleSheet} from 'react-native';
import {colors, display} from '../../../constants';

export const texts = StyleSheet.create({
  capitalize: {textTransform: 'capitalize'},
  uppercase: {textTransform: 'uppercase'},
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  left: {textAlign: 'left'},
  lineThrough: {textDecorationLine: 'line-through'},
  // textInput: {},
  silver: {
    color: colors.silver,
    fontSize: display.wp(3.9),
  },
  silverBold: {
    color: colors.silver,
    fontSize: display.wp(3.9),
    fontWeight: 'bold',
  },
  secondary: {
    color: colors.secondary,
    fontSize: display.wp(3.9),
  },
  secondaryMedium: {
    color: colors.secondary,
    fontSize: display.wp(4.9),
  },
  secondarySmall: {
    color: colors.secondary,
    fontSize: display.wp(2.8),
  },
  secondaryBold: {
    color: colors.secondary,
    fontSize: display.wp(3.9),
    fontWeight: 'bold',
  },
  secondaryBoldCenter: {
    color: colors.secondary,
    fontSize: display.wp(3.9),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondaryExtraBold: {
    color: colors.secondary,
    fontSize: display.wp(8),
    fontWeight: 'bold',
  },
  secondaryBoldMedium: {
    color: colors.secondary,
    fontSize: display.wp(4.9),
    fontWeight: 'bold',
  },
  red: {
    color: colors.red,
    fontSize: display.wp(3.9),
  },
  redMedium: {
    color: colors.red,
    fontSize: display.wp(4.9),
  },
  redSmall: {
    color: colors.red,
    fontSize: display.wp(2.8),
  },
  redBold: {
    color: colors.red,
    fontSize: display.wp(3.9),
    fontWeight: 'bold',
  },
  redLargeBold: {
    color: colors.red,
    fontSize: display.wp(5.9),
    fontWeight: 'bold',
  },
  primary: {
    color: colors.primary,
    fontSize: display.wp(3.9),
  },
  primarySmall: {
    color: colors.primary,
    fontSize: display.wp(2.8),
  },
  primaryBold: {
    color: colors.primary,
    fontSize: display.wp(3.9),
    fontWeight: 'bold',
  },
  primaryLargeBold: {
    color: colors.primary,
    fontSize: display.wp(5.9),
    fontWeight: 'bold',
  },
  primaryExtraLargeBold: {
    color: colors.primary,
    fontSize: display.wp(8),
    fontWeight: 'bold',
  },
  blue: {
    color: colors.blue,
    fontSize: display.wp(3.9),
  },
  blueSmall: {
    color: colors.blue,
    fontSize: display.wp(2.8),
  },
  blueBold: {
    color: colors.blue,
    fontSize: display.wp(3.9),
    fontWeight: 'bold',
  },
  blueMedium: {
    color: colors.blue,
    fontSize: display.wp(4.9),
    marginHorizontal: 10,
  },
  blueMediumBold: {
    color: colors.blue,
    fontSize: display.wp(4.9),
    fontWeight: 'bold',
  },
  blueLarge: {
    color: colors.blue,
    fontSize: display.wp(5.9),
  },
  blueLargeBold: {
    color: colors.blue,
    fontSize: display.wp(5.9),
    fontWeight: 'bold',
  },
  blueExtraLargeBold: {
    color: colors.blue,
    fontSize: display.wp(8),
    fontWeight: 'bold',
  },
  whiteBoldMedium: {
    fontSize: display.wp(4.9),
    color: colors.white,
    fontWeight: 'bold',
  },
  white: {
    fontSize: display.wp(3.9),
    color: colors.white,
  },

  whiteBold: {
    fontSize: display.wp(3.9),
    color: colors.white,
    fontWeight: 'bold',
  },
  whiteBoldBig: {
    fontSize: display.wp(5.9),
    color: colors.white,
    fontWeight: 'bold',
  },
});
