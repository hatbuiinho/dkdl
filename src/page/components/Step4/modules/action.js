import {
    REGISTER_REQUEST,
    REGISTER_STEP4_SUCCESS,
    REGISTER_FAILED,
  } from '../../CeremonyServingRegister/modules/constant';
  import Axios from 'axios';
  
  export const actFetchRegisterStep4 = (values) => {
    /**
     * Gọi api trong này
     */
    return (dispatch) => {
      dispatch(actRegisterStep4Request());
      // console.log('action step4 data', values);
      // gọi api đăng ký đại lễ
      const url = `http://apiv2.multiservices.tk/api/v1/Member/add`;
      Axios({
        url,
        method: 'POST',
        data: values,
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,
        // },
      })
        .then((result) => {
          dispatch(actRegisterStep4Success(result.data));
        })
        .catch((error) => {
          dispatch(actRegisterStep4Failed(error));
        });
        // TODO dòng này sau khi code xong thì xoá
      // dispatch(actRegisterStep4Success(values));
    };
  };
  
  const actRegisterStep4Request = () => {
    return {
      type: REGISTER_REQUEST,
    };
  };
  
  const actRegisterStep4Success = (data) => {
    return {
      type: REGISTER_STEP4_SUCCESS,
      payload: data,
    };
  };
  
  const actRegisterStep4Failed = (error) => {
    return {
      type: REGISTER_FAILED,
      payload: error,
    };
  };
  