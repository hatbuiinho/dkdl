import {
  REGISTER_STEP2_REQUEST,
  REGISTER_STEP2_SUCCESS,
  REGISTER_STEP2_FAILED,
} from './constant';

let initialState = {
  loading: false,
  data: {
    id: 1234567,
    name: 'quynh van a',
    phone: '1234567890',
    citizenId: '1234567890',
    registerType: 1,
    roleInGroup: 1,
    citizenIdOfLeader: '1234567890',
    nameOfLeader: 'pham van b',
    buddhistName: 'a b c',
    gender: 0,
    dayOfBirth: '1991',
    email: 'abc@gmail.com',
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
    group: 1,
    departLocation: 1,
    timeToStart: 1,
    timeToReturn: 1,
    numberOfServing: 5,
    skill: 4,
    experienceDept: 2,
    aspirationDept: 2,
    receiveCardLocation: 1,
    uploadImage: 'anh',
    note: 'thắc mắc',
  },
  // {
  //   name: "quynh van a",
  //   phone: "1234567890",
  //   citizenId: "1234567890",
  //   registerType: 1,
  //   roleInGroup: 1,
  // },
  error: null,
};

const registerStep2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_STEP2_REQUEST:
      // state.loading = true;
      // state.data = null;
      // state.error = null;
      return { ...state, loading: true, data: null, error: null };

    case REGISTER_STEP2_SUCCESS:
      // state.loading = false;
      // state.data = action.payload;
      // state.error = null;
      return { ...state, loading: false, data: action.payload, error: null };

    case REGISTER_STEP2_FAILED:
      // state.loading = false;
      // state.data = null;
      // state.error = action.payload;
      return { ...state, loading: false, data: null, error: action.payload };

    default:
      return { ...state };
  }
};

export default registerStep2Reducer;
