import {Alert, Platform} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const ImageOptions = {
  maxWidth: 75,
  maxHeight: 125,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export const openCamera = async onImageSaved => {
  let permissionGranted;
  switch (Platform.OS) {
    case 'ios':
      await request(PERMISSIONS.IOS.CAMERA);
      permissionGranted = await check(PERMISSIONS.IOS.CAMERA);
      break;
    case 'android':
    default:
      await request(PERMISSIONS.ANDROID.CAMERA);
      permissionGranted = await check(PERMISSIONS.ANDROID.CAMERA);
      break;
  }
  let imgaeBase64 = null;
  let source = null;
  if (
    permissionGranted === RESULTS.GRANTED ||
    permissionGranted === RESULTS.LIMITED
  ) {
    launchCamera(ImageOptions, response => {
      if (response.didCancel) {
        // showError('Oops, anda batal melakukan foto');
      } else if (response.error) {
        Alert.alert('Warning', 'Failed to get photo from camera');
      } else {
        source = {uri: response.assets[0].uri};
        imgaeBase64 = `data:${response.assets[0].type};base64, ${response.assets[0].base64}`;
      }
      onImageSaved(source);
    });
  } else {
    onImageSaved(source);
    Alert.alert('Warning', 'Please allow permission camera');
  }
};

export const openPenyimpanan = async onImageSaved => {
  let permissionGranted;
  switch (Platform.OS) {
    case 'ios':
      await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      permissionGranted = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      break;
    case 'android':
    default:
      await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
      permissionGranted = await check(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      );
      break;
  }
  let imgaeBase64 = null;
  let source = null;
  if (
    permissionGranted === RESULTS.GRANTED ||
    permissionGranted === RESULTS.LIMITED
  ) {
    launchImageLibrary(ImageOptions, response => {
      if (response.didCancel) {
        // showError('Oops, anda batal dan tidak memilih foto apapun');
      } else if (response.error) {
        Alert.alert('Warning', 'Failed to get photo from storage');
      } else {
        source = {uri: response.assets[0].uri};
        imgaeBase64 = `data:${response.assets[0].type};base64, ${response.assets[0].base64}`;
      }
      onImageSaved(source);
    });
  } else {
    onImageSaved(source);
    Alert.alert('Warning', 'Please allow permission storage');
  }
};
