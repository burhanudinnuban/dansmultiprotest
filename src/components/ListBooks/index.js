import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ICDislikeWhite,
  ICDownloadSecondary,
  ICLoveWhite,
  ICShareWhite,
  ICStarWhite,
  ICVisibilitySecondary,
} from '../../assets';
import pages from '../../configs/styles/pages';
import {texts} from '../../configs/styles/texts';
import {colors, display} from '../../constants';
import Gap from '../Gap';

const ListBooks = ({
  data,
  onPressShare,
  onPressDownload,
  onPressLove,
  onPressDislike,
  onPressStar,
  onPress,
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => item.idContents.toString()}
      horizontal={true}
      renderItem={({item, index}) => (
        <TouchableOpacity
          style={{
            ...pages.roundedBg(null, null, display.wp(2), 10, colors.secondary),
            ...pages.hpwp(display.wp(70), display.wp(35)),
            ...pages.flex,
          }}
          onPress={onPress}>
          <View style={pages.rowCenterBetween}>
            {item.image ? (
              <Image
                source={{uri: item.image}}
                style={pages.roundedBg(
                  null,
                  null,
                  null,
                  10,
                  colors.secondary,
                  display.wp(35),
                  display.wp(50),
                )}
              />
            ) : (
              <View style={styles.coverStory(colors.silver)}>
                <>
                  <View style={pages.rowCenterBetween}>
                    <View style={pages.rowCenter}>
                      <Gap wp={display.wp(1)} />
                      <ICVisibilitySecondary
                        width={display.wp(7)}
                        height={display.wp(7)}
                      />
                      <Gap wp={display.wp(1)} />
                      <Text allowFontScaling={false} style={texts.whiteBold}>
                        5k
                      </Text>
                    </View>
                    {onPressShare && (
                      <TouchableOpacity
                        onPress={onPressShare}
                        style={pages.padding5}>
                        <ICShareWhite
                          width={display.wp(7)}
                          height={display.wp(7)}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                  {onPressDownload && (
                    <View style={pages.centerAbsolute}>
                      <TouchableOpacity
                        onPress={onPressDownload}
                        style={pages.padding5}>
                        <ICDownloadSecondary
                          width={display.wp(7)}
                          height={display.wp(7)}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                </>
              </View>
            )}
          </View>
          <View style={pages.padding(3)}>
            <View style={pages.hpwp(null, display.wp(33))}>
              <Text
                allowFontScaling={false}
                style={{...texts.whiteBold, ...texts.center}}
                numberOfLines={2}>
                {item.title}
              </Text>
            </View>
            <Gap hp={display.hp(1)} />
            <View style={pages.rowCenterBetween}>
              {onPressLove && (
                <TouchableOpacity
                  onPress={onPressLove}
                  style={pages.rowCenterBetween}>
                  <ICLoveWhite width={display.wp(5)} height={display.wp(5)} />
                  <Gap wp={display.wp(0.5)} />
                  <Text allowFontScaling={false} style={texts.white}>
                    4.5
                  </Text>
                </TouchableOpacity>
              )}
              {onPressStar && (
                <TouchableOpacity onPress={onPressStar}>
                  <ICStarWhite width={display.wp(5)} height={display.wp(5)} />
                </TouchableOpacity>
              )}
              {onPressDislike && (
                <TouchableOpacity onPress={onPressDislike}>
                  <View style={pages.rowCenterBetween}>
                    <ICDislikeWhite
                      width={display.wp(5)}
                      height={display.wp(5)}
                    />
                    <Gap wp={display.wp(0.5)} />
                    <Text allowFontScaling={false} style={texts.white}>
                      1k
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default ListBooks;

const styles = StyleSheet.create({
  coverStory: coverColor => ({
    width: display.wp(35),
    height: display.wp(50),
    backgroundColor: coverColor ? coverColor : colors.silver,
    borderColor: colors.secondary,
    borderRadius: 10,
  }),
});
