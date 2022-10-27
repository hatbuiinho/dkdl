import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "./constant";
import Axios from "axios";

export const actFetchRegister = (values) => {
  /**
   * Gọi api trong này
   */
  return (dispatch) => {
    dispatch(actRegisterRequest());
    console.log("action tổng data", values);
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
        dispatch(actRegisterFailed(error.message));
      });
  };
};

const actRegisterRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

const actRegisterSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

const actRegisterFailed = (error) => {
  return {
    type: REGISTER_FAILED,
    payload: error,
  };
};
