import {
    REGISTER_ADD_INFO_STEP3
  } from '../../CeremonyServingRegister/modules/constant';
  
  export const actFetchAddInfoStep3 = (values) => {
    return (dispatch) => {
      // console.log("action step3 data", values);
      dispatch(actAddInfoStep3Success(values));
    };
  };
  
  const actAddInfoStep3Success = (data) => {
    return {
      type: REGISTER_ADD_INFO_STEP3,
      payload: data,
    };
  };
  