import {
  REGISTER_ADD_INFO_STEP2
} from '../../CeremonyServingRegister/modules/constant';

export const actFetchAddInfoStep2 = (values) => {
  return (dispatch) => {
    dispatch(actAddInfoStep2Success(values));
  };
};

const actAddInfoStep2Success = (data) => {
  return {
    type: REGISTER_ADD_INFO_STEP2,
    payload: data,
  };
};
