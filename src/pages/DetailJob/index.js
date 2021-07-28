import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
} from 'react-native';
import {ICArrowBackPrimary} from '../../assets';
import {Gap} from '../../components';
import BarView from '../../components/BarView';
import pages from '../../configs/styles/pages';
import {texts} from '../../configs/styles/texts';
import {colors, display} from '../../constants';

const DetailJob = ({navigation, route}) => {
  const [item, setitem] = useState(route.params.dataJob);

  var description = item.description.replace(/<[^>]+>/g, '');

  function openBrowser() {
    Linking.canOpenURL(item.company_url).then(supported => {
      if (supported) {
        Linking.openURL(item.company_url);
      } else {
        console.log("Don't know how to open URI: " + item.company_url);
      }
    });
  }

  console.log(item);

  return (
    <ScrollView>
      <BarView
        componentLeft={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ICArrowBackPrimary width={display.wp(8)} height={display.wp(8)} />
          </TouchableOpacity>
        }
        componentCenter={
          <Text allowFontScaling={false} style={texts.primaryLargeBold}>
            Job Detail
          </Text>
        }
      />
      <View style={pages.padding10}>
        <Text style={texts.secondaryBoldMedium}>Company</Text>
        <View
          style={{
            ...pages.padding5,
            ...pages.roundedBg(colors.secondary, null, 5, 15, null),
            ...pages.rowCenterBetween,
          }}>
          <Image
            source={{uri: item.company_logo}}
            style={{
              ...pages.hpwp(display.wp(15), display.wp(15)),
            }}
          />
          <Gap wp={display.wp(5)} />
          <View style={pages.flex}>
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={texts.secondaryBold}>
              {item.title}
            </Text>
            <Text
              allowFontScaling={false}
              style={texts.secondary}
              numberOfLines={1}>
              {item.company}
            </Text>
            <TouchableOpacity onPress={openBrowser}>
              <Text style={texts.blueBold}>Go to Website</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Gap hp={display.hp(2)} />
        <Text style={texts.secondaryBoldMedium}>Job Specification</Text>
        <View
          style={{
            ...pages.padding5,
            ...pages.roundedBg(colors.secondary, null, 5, 15, null),
          }}>
          <Text allowFontScaling={false} style={texts.secondary}>
            Title
          </Text>
          <Text allowFontScaling={false} style={texts.secondaryBold}>
            {item.title}
          </Text>
          <Gap hp={display.hp(2)} />
          <Text allowFontScaling={false} style={texts.secondary}>
            Full Time
          </Text>
          <Text allowFontScaling={false} style={texts.secondaryBold}>
            {item.type ? 'yes' : 'no'}
          </Text>
          <Gap hp={display.hp(2)} />
          <Text allowFontScaling={false} style={texts.secondary}>
            Description
          </Text>
          <Text allowFontScaling={false} style={texts.secondaryBold}>
            {description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailJob;
