import {
  REGISTER_STEP1_REQUEST,
  REGISTER_STEP1_SUCCESS,
  REGISTER_STEP1_FAILED,
} from './constant';

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const registerStep1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_STEP1_REQUEST:
      // state.loading = true;
      // state.data = null;
      // state.error = null;
      return { ...state, loading: true, data: null, error: null };

    case REGISTER_STEP1_SUCCESS:
      // state.loading = false;
      // state.data = action.payload;
      // state.error = null;
      return { ...state, loading: false, data: action.payload, error: null };

    case REGISTER_STEP1_FAILED:
      // state.loading = false;
      // state.data = null;
      // state.error = action.payload;
      return { ...state, loading: false, data: null, error: action.payload };

    default:
      return { ...state };
  }
};

export default registerStep1Reducer;
