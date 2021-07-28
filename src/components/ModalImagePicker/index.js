import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {
  ICAlbumPrimary,
  ICCameraPrimary,
  ICCameraWhite,
  ICRemoveRed,
} from '../../assets';
import {texts} from '../../configs/styles/texts';
import {colors, display} from '../../constants';
import ButtonOutline from '../ButtonOutline';
import Gap from '../Gap';

const ModalImagePicker = ({
  isVisible,
  onPressClose,
  onPressCamera,
  onPressGallery,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onPressClose}
      onBackButtonPress={onPressClose}
      useNativeDriver={true}
      animationIn="slideInLeft"
      animationOut="slideOutRight">
      <View style={styles.conatinerModal}>
        <View style={styles.header}>
          <Text allowFontScaling={false} style={styles.title}>
            Tambah foto
          </Text>
          <TouchableOpacity onPress={onPressClose}>
            <ICRemoveRed width={display.wp(7)} height={display.wp(7)} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity onPress={onPressCamera} style={styles.contentImage}>
            <ICCameraPrimary width={display.wp(40)} height={display.wp(20)} />
            <Gap height={20} />
            <Text allowFontScaling={false} style={texts.primaryBold}>
              Take Photo
            </Text>
          </TouchableOpacity>
          <Gap width={10} />
          <TouchableOpacity
            onPress={onPressGallery}
            style={styles.contentImage}>
            <ICAlbumPrimary width={display.wp(40)} height={display.wp(20)} />
            <Gap height={20} />
            <Text allowFontScaling={false} style={texts.primaryBold}>
              Open Jobs
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalImagePicker;

const styles = StyleSheet.create({
  conatinerModal: {
    backgroundColor: colors.white,
    height: display.hp(30),
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: display.hp(6),
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: display.wp(3.9),
    color: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentImage: {
    alignItems: 'center',
  },
});
