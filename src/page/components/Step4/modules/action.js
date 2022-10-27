import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
  } from '../../CeremonyServingRegister/modules/constant';
  import Axios from 'axios';
  
  export const actFetchRegisterMember = (values) => {
    /**
     * Gọi api trong này
     */
    return (dispatch) => {
      dispatch(actRegisterMemberRequest());
      console.log('action step4 data', values);
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
          dispatch(actRegisterMemberSuccess(result.data));
        })
        .catch((error) => {
          dispatch(actRegisterMemberFailed(error));
        });
      // test
      const resultTest = {
        id: 1234567,
        name: 'quynh van a',
        phone: '1234567890',
        citizenId: '1234567890',
        registerType: 0,
        roleInGroup: 2,
        citizenIdOfLeader: '1234567890',
        nameOfLeader: 'pham van b',
        buddhistName: 'a b c',
        gender: 1,
        dayOfBirth: '1993',
        email: 'quynhvana@gmail.com',
        permanentAddress: {
          value: 'HoChiMinh',
          label: 'Hồ Chí Minh',
          children: [
            {
              value: 'Quan1',
              label: 'Quận 1',
              children: [
                {
                  value: 'phuong1',
                  label: 'Phường 1',
                },
              ],
            },
          ],
        },
        temporaryAddress: {
          value: 'HoChiMinh',
          label: 'Hồ Chí Minh',
          children: [
            {
              value: 'Quan1',
              label: 'Quận 1',
              children: [
                {
                  value: 'phuong1',
                  label: 'Phường 1',
                },
              ],
            },
          ],
        },
        youthAssociation: 1,
        groupOfYouthAssociation: 1,
        // departLocation: 1,
        // timeToStart: 1,
        // timeToReturn: 1,
        // numberOfServing: 5,
        // skill: 4,
        // experienceDept: 2,
        // aspirationDept: 2,
        // receiveCardLocation: 1,
        // uploadImage: 'anh',
        // note: 'thắc mắc',
      };
      dispatch(actRegisterMemberSuccess(resultTest));
    };
  };
  
  const actRegisterMemberRequest = () => {
    return {
      type: REGISTER_REQUEST,
    };
  };
  
  const actRegisterMemberSuccess = (data) => {
    return {
      type: REGISTER_SUCCESS,
      payload: data,
    };
  };
  
  const actCheckInfoFailed = (error) => {
    return {
      type: REGISTER_FAILED,
      payload: error,
    };
  };
  