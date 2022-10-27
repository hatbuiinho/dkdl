import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_ADD_INFO_STEP2,
  REGISTER_ADD_INFO_STEP3
} from './constant';

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      // state.loading = true;
      // state.data = null;
      // state.error = null;
      return { ...state, loading: true, data: null, error: null };

    case REGISTER_SUCCESS:
      // state.loading = false;
      // state.data = action.payload;
      // state.error = null;
      return { ...state, loading: false, data: action.payload, error: null };

    case REGISTER_FAILED:
      // state.loading = false;
      // state.data = null;
      // state.error = action.payload;
      return { ...state, loading: false, data: null, error: action.payload };

    case REGISTER_ADD_INFO_STEP2: {
      // let newData = {...state.data};
      const moreInfo = action.payload;
      let newData = { ...state.data, moreInfo };
      return { ...state, newData };
    }

    case REGISTER_ADD_INFO_STEP3: {
      // let newData = {...state.data};
      const moreInfo = action.payload;
      let newData = { ...state.data, moreInfo };
      return { ...state, newData };
    }

    default:
      return { ...state };
  }
};

export default registerReducer;
