import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_ADD_INFO_STEP2,
  REGISTER_ADD_INFO_STEP3,
  REGISTER_STEP4_SUCCESS,
} from './constant';
import { CHECK_INFO_SUCCESS } from '../../Step1/modules/constant';

let initialState = {
  loading: false,
  data: null,
  // data: {
  //     id: 0,
  //     name: '',
  //     phone: '',
  //     citizenId: '',
  //     registerType: 0,
  //     roleInGroup: 2,
  //     citizenIdOfLeader: '',
  //     nameOfLeader: '',
  //     buddhistName: '',
  //     gender: 0,
  //     dayOfBirth: '',
  //     email: '',
  //     permanentAddress: 0,
  //     temporaryAddress: 0,
  //     youthAssociation: 0,
  //     groupOfYouthAssociation: 0,
  //     departLocation: 0,
  //     timeToStart: 0,
  //     timeToReturn: 0,
  //     numberOfServing: 0,
  //     skill: 0,
  //     experienceDept: 0,
  //     aspirationDept: 0,
  //     receiveCardLocation: 0,
  //     uploadImage: null,
  //     note: '',
  // },
  error: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true, data: null, error: null };

    // step 1
    case CHECK_INFO_SUCCESS: {
      console.log("payload", action.payload);
      const { name, phone, citizenId, registerType } = action.payload;
      const newData = { name, phone, citizenId, registerType };
      return { ...state, loading: false, data: newData, error: null };
    }

    case REGISTER_ADD_INFO_STEP2: {
      const {
        roleInGroup,
        citizenIdOfLeader,
        nameOfLeader,
        buddhistName,
        gender,
        dayOfBirth,
        email,
        permanentAddress,
        temporaryAddress,
        youthAssociation,
        groupOfYouthAssociation,
      } = action.payload;

      const newData = {
        ...state.data,
        roleInGroup,
        citizenIdOfLeader,
        nameOfLeader,
        buddhistName,
        gender,
        dayOfBirth,
        email,
        permanentAddress,
        temporaryAddress,
        youthAssociation,
        groupOfYouthAssociation,
      };
      console.log('newData', newData);
      return { ...state, loading: false, data: newData, error: null };
    }

    case REGISTER_ADD_INFO_STEP3: {
      const { departLocation, timeToStart, timeToReturn } = action.payload;

      const newData = { ...state.data, departLocation, timeToStart, timeToReturn };
      console.log('newData', newData);

      return { ...state, loading: false, data: newData, error: null };
    }

    case REGISTER_STEP4_SUCCESS: {
      const {
        numberOfServing,
        skill,
        experienceDept,
        aspirationDept,
        receiveCardLocation,
        uploadImage,
        note,
      } = action.payload;

      const newData = {
        ...state.data,
        numberOfServing,
        skill,
        experienceDept,
        aspirationDept,
        receiveCardLocation,
        uploadImage,
        note,
      };
      console.log('newData', newData);

      return { ...state, loading: false, data: newData, error: null };
    }

    case REGISTER_FAILED:
      return { ...state, loading: false, data: null, error: action.payload };

    default:
      return { ...state };
  }
};

export default registerReducer;
