import {
  REGISTER_STEP1_REQUEST,
  REGISTER_STEP1_SUCCESS,
  REGISTER_STEP1_FAILED,
} from "./constant";
import Axios from "axios";

export const actFetchRegister = (values) => {
  /**
   * Gọi api trong này
   */
  return (dispatch) => {
    dispatch(actRegisterRequest());
    console.log("reducer data", values);
    const url = `http://apiv2.multiservices.tk/api/v1/Member/add`;
    Axios({
      url,
      method: "POST",
      data: values,
      // headers: {
      //   Authorization: `Bearer ${accessToken}`,
      // },
    })
      .then((result) => {
        dispatch(actRegisterSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actRegisterFailed(error));
      });
  };
};

const actRegisterRequest = () => {
  return {
    type: REGISTER_STEP1_REQUEST,
  };
};

const actRegisterSuccess = (data) => {
  return {
    type: REGISTER_STEP1_SUCCESS,
    payload: data,
  };
};

const actRegisterFailed = (error) => {
  return {
    type: REGISTER_STEP1_FAILED,
    payload: error,
  };
};
