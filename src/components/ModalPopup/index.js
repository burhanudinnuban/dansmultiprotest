import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import pages from '../../configs/styles/pages';

const ModalPopup = ({onPressClose, isVisible, content}) => {
  return (
    <Modal
      useNativeDriver={true}
      style={pages.center}
      isVisible={isVisible}
      onBackdropPress={onPressClose}
      onBackButtonPress={onPressClose}
      animationIn="slideInUp"
      animationOut="slideOutDown">
      {content}
    </Modal>
  );
};

export default ModalPopup;
