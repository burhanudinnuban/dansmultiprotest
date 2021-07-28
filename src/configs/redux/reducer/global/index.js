import {reducer} from '../../../../constants';

const initialStateRoot = {
  loading: false,
  refresh: false,
  isLogin: false,
  first_launch: false,
  data_login: {},
};

export const setDataLogin = data_login => ({
  type: reducer.DATA_LOGIN,
  value: data_login,
});

const global = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducer.LOADING:
      return {
        ...state,
        loading: action.value,
      };
    case reducer.REFRESH:
      return {
        ...state,
        refresh: action.value,
      };
    case reducer.ISLOGIN:
      return {
        ...state,
        data_login: action.value,
      };
    case reducer.FIRST_LAUNCH:
      return {
        ...state,
        first_launch: action.value,
      };
    case reducer.DATA_LOGIN:
      return {
        ...state,
        data_login: action.value,
      };
    default:
      return state;
  }
};

export default global;
