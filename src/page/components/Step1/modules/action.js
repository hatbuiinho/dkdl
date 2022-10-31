import { CHECK_INFO_SUCCESS } from './constant';
import {
  REGISTER_REQUEST,
  REGISTER_FAILED,
} from '../../CeremonyServingRegister/modules/constant';
import Axios from 'axios';

export const actFetchCheckInfo = (values) => {
  /**
   * Gọi api trong này
   */
  return (dispatch) => {
    dispatch(actCheckInfoRequest());
    const { name, phone, citizenId } = values;
    const basicInfo = {
      hoTen: name,
      soDienThoai: phone,
      cccd: citizenId,
    };
    // console.log('data gửi api', basicInfo);
    // gọi api check xem Tên và CCCD đã đăng ký chưa
    const url = `https://apiv2.multiservices.tk/api/v1/Member/search`;
    Axios({
      url,
      method: 'POST',
      data: basicInfo,
    })
      .then((result) => {
        // console.log('kết nối thành công: ', result.data.data.data);
        dispatch(actCheckInfoSuccess(result.data.data.data ? result.data.data.data : values));
      })
      .catch((error) => {
        // console.log('lỗi kết nối: ', error.message);
        dispatch(actCheckInfoFailed(error.message));
      });
  };
};

const actCheckInfoRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

const actCheckInfoSuccess = (data) => {
  return {
    type: CHECK_INFO_SUCCESS,
    payload: data,
  };
};

const actCheckInfoFailed = (error) => {
  return {
    type: REGISTER_FAILED,
    payload: error,
  };
};
