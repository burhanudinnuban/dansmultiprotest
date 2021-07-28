import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ICBooksPrimary, ICWritingPrimary, ICSearchPrimary} from '../../assets';
import {ButtonOutline, Gap, PaginationOnBording} from '../../components';
import {texts} from '../../configs/styles/texts';
import {colors, display, reducer} from '../../constants';

const {width} = Dimensions.get('window');

const OnBoarding = ({navigation}) => {
  const dispatch = useDispatch();
  const global = useSelector(state => state.global);

  const onSelesai = () => {
    dispatch({type: reducer.FIRST_LAUNCH, value: true});
    if (global.isLogin) {
      navigation.replace('MainApp');
    } else {
      navigation.replace('Login');
    }
  };

  const [sliderState, setSliderState] = useState({currentPage: 0});
  const indexPage = sliderState.currentPage;
  const setSliderPage = event => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / ((width * 80) / 100));
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
    if (sliderState.currentPage === 3) {
      onSelesai();
    }
  };

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        style={styles.scroll}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          setSliderPage(event);
        }}>
        <View style={styles.conatiner}>
          <View style={styles.content}>
            {/* <Image source={LSOnBoarding1} style={styles.imageIlustasi} /> */}
            <ICBooksPrimary width={display.wp(50)} height={display.wp(50)} />
            <Gap hp={display.hp(5)} />
            <Text allowFontScaling={false} style={styles.title2()}>
              Welcome to
            </Text>
            <Text allowFontScaling={false} style={texts.primaryExtraLargeBold}>
              DansMultiPro
            </Text>
          </View>
        </View>
        <View style={styles.conatiner}>
          <View style={styles.content}>
            {/* <Image source={LSOnBoarding2} style={styles.imageIlustasi} /> */}
            <ICWritingPrimary width={display.wp(50)} height={display.wp(50)} />
            <Gap hp={25} />
            <Text allowFontScaling={false} style={styles.title}>
              You can search jobs and company
            </Text>
            <Text allowFontScaling={false} style={texts.primaryExtraLargeBold}>
              DansMultiPro
            </Text>
          </View>
        </View>
        <View style={styles.conatiner}>
          <View style={styles.content}>
            {/* <Image source={LSOnBoarding3} style={styles.imageIlustasi} /> */}
            <ICSearchPrimary width={display.wp(50)} height={display.wp(50)} />
            <Gap hp={25} />
            <Text allowFontScaling={false} style={styles.title}>
              You can apply to every jobs open
            </Text>
            <Text allowFontScaling={false} style={texts.primaryExtraLargeBold}>
              DansMultiPro
            </Text>
          </View>
        </View>
        <View style={styles.conatiner} />
      </ScrollView>
      <View style={styles.absolute}>
        <View style={styles.pagination}>
          {indexPage === 0 && (
            <>
              <ButtonOutline title="LEWATI" onPress={onSelesai} />
              <PaginationOnBording active1 />
              <Gap wp={display.wp(16)} />
            </>
          )}
          {indexPage === 1 && (
            <>
              <ButtonOutline title="LEWATI" onPress={onSelesai} />
              <PaginationOnBording active2 />
              <Gap wp={display.wp(16)} />
            </>
          )}
          {indexPage === 2 && (
            <>
              <Gap wp={display.wp(21)} />
              <PaginationOnBording active3 />
              <ButtonOutline title="SELESAI" onPress={onSelesai} />
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flex: 1,
  },
  conatiner: {
    height: display.hp('100%'),
    width: display.wp('100%'),
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIlustasi: {
    width: '90%',
    height: '50%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: display.wp(5),
    color: colors.primary,
    textAlign: 'center',
    maxWidth: display.wp(70),
  },
  title2: fontSize => ({
    fontSize: fontSize ? fontSize : display.wp(5),
    color: colors.primary,
    textAlign: 'center',
    maxWidth: '85%',
  }),
  logoName: {
    width: '50%',
    height: '7%',
    resizeMode: 'contain',
  },
  pagination: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: display.wp(5),
    width: display.wp(100),
    paddingBottom: 15,
  },
  absolute: {
    position: 'absolute',
    bottom: 10,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
