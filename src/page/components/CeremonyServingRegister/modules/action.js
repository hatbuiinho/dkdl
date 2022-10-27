import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "./constant";
import Axios from "axios";

export const actFetchMemberDetail = (id) => {
  /**
   * Gọi api trong này
   */
  return (dispatch) => {
    dispatch(actMemberDetailRequest());
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`;
    Axios.get(url)
      .then((result) => {
        dispatch(actMemberDetailSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actMemberDetailFailed(error));
      });
  };
};

const actMemberDetailRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

const actMemberDetailSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

const actMemberDetailFailed = (error) => {
  return {
    type: REGISTER_FAILED,
    payload: error,
  };
};
