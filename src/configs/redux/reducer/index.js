import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import global from './global';

const reducer = {global: global};

const configReduxPersist = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['global'],
};

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;
