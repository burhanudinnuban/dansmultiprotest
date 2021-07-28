import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';
import BarView from '../../components/BarView';
import pages from '../../configs/styles/pages';
import {texts} from '../../configs/styles/texts';
import {useDispatch} from 'react-redux';
import jobs from '../../constants/jobs/jobs.json';
import {colors, display, reducer} from '../../constants';
import {ButtonOutline, Gap, TextInputCustom} from '../../components';
import {ICArrowRightPrimary, ICSearchSecondary} from '../../assets';

const Jobs = ({navigation}) => {
  const dispatch = useDispatch();
  const [jobss, setjobss] = useState(jobs);
  const [fulltime, setfulltime] = useState(false);
  const [location, setlocation] = useState('');
  const [locationPick, setlocationPick] = useState(
    jobs.map(item => item.location),
  );
  const [modalLocation, setmodalLocation] = useState(false);

  function didDetailJob(params) {
    navigation.navigate('DetailJob', {dataJob: params});
  }

  function didLogout() {
    dispatch({type: reducer.ISLOGIN, value: false});
    navigation.replace('Login');
  }

  function filterCompanybyName(keyword) {
    let filteredData = jobs.filter(option => {
      return option.title.toLowerCase().includes(keyword.toLowerCase());
    });
    setjobss(filteredData);
  }

  function filterCompanybyLocandFT() {
    let filteredData = jobs.filter(option => {
      return option.title.toLowerCase().includes(location.toLowerCase());
    });
    if (fulltime) {
      const newJob = filteredData.filter(item => {
        if (item.type === 'Full Time') {
          return item;
        }
      });
      setjobss(newJob);
    }
    setjobss(filteredData);
  }

  console.log(location);

  return (
    <View style={pages.flexWhite}>
      <BarView
        componentLeft={
          <Text allowFontScaling={false} style={texts.primaryLargeBold}>
            Jobs
          </Text>
        }
        componentCenter={
          <View style={{...pages.hpwp(display.hp(5), display.wp(65))}}>
            <TextInputCustom
              iconLeft={
                <ICSearchSecondary
                  width={display.wp(5)}
                  height={display.wp(5)}
                />
              }
              onChangeText={e => {
                filterCompanybyName(e);
              }}
              placeholder={'Search jobs'}
            />
          </View>
        }
        componentRight={
          <TouchableOpacity onPress={didLogout}>
            <Text allowFontScaling={false} style={texts.redBold}>
              Logout
            </Text>
          </TouchableOpacity>
        }
      />

      <FlatList
        data={jobss}
        ListHeaderComponent={() => (
          <View
            style={{
              ...pages.padding5,
              ...pages.roundedBg(colors.secondary, null, 5, null, null),
              ...pages.rowCenterBetween,
            }}>
            <View style={pages.hpwp(null, display.wp(30))}>
              <Text allowFontScaling={false} style={texts.secondaryBoldMedium}>
                Fulltime
              </Text>
              <Gap hp={display.hp(3)} />
              <Text allowFontScaling={false} style={texts.secondaryBoldMedium}>
                Location
              </Text>
              <Gap hp={display.hp(8)} />
            </View>
            <View style={pages.hpwp(display.hp(18), display.wp(50))}>
              <Switch
                value={fulltime}
                onChange={() => setfulltime(!fulltime)}
              />
              <Gap hp={display.hp(1)} />
              <TextInputCustom
                value={e => setlocation(e)}
                numberOfLines={1}
                // onChangeText={e => setlocation(e)}
                placeholder={'type location'}
                onPressIconRight={() => setlocation('')}
              />

              <Gap hp={display.hp(2)} />
              <ButtonOutline
                title={'Apply Filter'}
                onPress={filterCompanybyLocandFT}
              />
            </View>
          </View>
        )}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              ...pages.flex,
              ...pages.rowCenter,
              ...pages.padding5,
              ...pages.roundedBg(colors.secondary, null, 5, null, null),
            }}
            onPress={() => didDetailJob(item)}>
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
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                style={texts.primary}>
                {item.location}{' '}
                <Text style={texts.secondary}>({item.type})</Text>
              </Text>
            </View>
            <Gap wp={display.wp(5)} />
            <ICArrowRightPrimary width={display.wp(5)} height={display.wp(5)} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Jobs;
