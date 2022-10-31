import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Select, Layout, Tabs, Radio, Button, Space, Cascader } from 'antd';
import { REGEX_PHONE, REGEX_YEAR } from "../../../utils/common";
import { useDispatch, useSelector } from 'react-redux';
import { actFetchAddInfoStep2 } from "./modules/action";
import Axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';

// const { Content } = Layout;
// const { TabPane } = Tabs;
const { Option } = Select;

// hình thức đăng ký
const roleInGroupList = [
  { id: 0, name: "Đăng ký lẻ" },
  { id: 1, name: "Nhóm trưởng" },
  { id: 2, name: "Nhóm phó" },
  { id: 3, name: "Thành viên" },
];

// giới tính
const genderList = [
  { id: 0, name: "Nam" },
  { id: 1, name: "Nữ" },
];

// năm sinh
const dayOfBirth = [
  { id: 1, year: 1991 },
  { id: 2, year: 1992 },
  { id: 3, year: 1993 },
  { id: 4, year: 1994 },
  { id: 5, year: 1995 },
];

// địa chỉ
const addressList = [
  {
    id: 'HoChiMinh',
    name: 'Hồ Chí Minh',
    district: [
      {
        id: 'Quan1',
        name: 'Quận 1',
        village: [
          {
            id: 'phuong1',
            name: 'Phường 1',
          },
          {
            id: 'phuong2',
            name: 'Phường 2',
          },
        ],
      },
      {
        id: 'Quan2',
        name: 'Quận 2',
        village: [
          {
            id: 'phuong1',
            name: 'Phường 1',
          },
          {
            id: 'phuong2',
            name: 'Phường 2',
          },
        ],
      },
    ],
  },
  {
    id: 'HaNoi',
    name: 'Hà Nội',
    district: [
      {
        id: 'BaDinh',
        name: 'Ba Đình',
        village: [
          {
            id: 'DienBien',
            name: 'Điện Biên',
          },
        ],
      },
    ],
  },
];

// nơi sinh hoạt
// const youthAssociationList = [
//   { id: 1, code: "ctn-hcm", name: "CTN HCM" },
//   { id: 2, code: "ctn-ag", name: "CTN Ang Giang" },
//   { id: 3, code: "ctn-bd", name: "CTN Bình Dương" },
//   { id: 999, code: "khongchon", name: "Chưa có" },
// ];
// tổ
const groupOfYouthAssociationList = [
  { id: 1, code: "to1", name: "Tổ 1" },
  { id: 2, code: "to2", name: "Tổ 2" },
  { id: 3, code: "to3", name: "Tổ 3" },
  { id: 4, code: "to4", name: "Tổ 4" },
  { id: 5, code: "to5", name: "Tổ 5" },
  { id: 6, code: "to6", name: "Tổ 6" },
  { id: 999, code: "chuavaoto", name: "Chưa vào tổ" },
];

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const Step2 = (props) => {
  const { submitStep, title } = props;
  const [form] = Form.useForm();
  const [youthAssociationList, setYouthAssociationList] = useState([]);
  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [villageList, setVillageList] = useState([]);

  // lấy data từ redux
  const memberInfo = useSelector(state => state.registerReducer.data);
  console.log("state.registerReducer.data step2: ", memberInfo);
  const loading = useSelector(state => state.registerReducer.loading);
  console.log("loading: ", loading);

  const dispatch = useDispatch();
  // const roleInGroup = memberInfo.registerType === 1 ? memberInfo.roleInGroup : null;
  const citizenIdOfLeader = memberInfo?.citizenIdOfLeader ? memberInfo.citizenIdOfLeader : '';
  const registerType = memberInfo?.registerType ? memberInfo.registerType : 0;

  useEffect(() => {
    let urlCTN = `http://apibrm.thientonphatquang.vn/api/cong-khai/danh-muc/co-cau-to-chuc/chung-thanh-nien`;
    let urlTinh = `https://apiv2.multiservices.tk/api/v1/Address/ds-tinh`;
    let urlHuyen = `https://apiv2.multiservices.tk/api/v1/Address/ds-tinh`;
    let urlXa = `https://apiv2.multiservices.tk/api/v1/Address/ds-tinh`;
    
    const requestCTN = Axios.get(urlCTN);
    const requestTinh = Axios.get(urlTinh);
    const requestHuyen = Axios.get(urlHuyen);
    const requestXa = Axios.get(urlXa);

    Axios.all([requestCTN, requestTinh, requestHuyen, requestXa])
      .then(
        Axios.spread((...responses) => {
          const responseCTN = responses[0];
          const responseTinh = responses[1];
          const responseHuyen = responses[2];
          const responseXa = responses[3];

          console.log(responseCTN);
          console.log(responseTinh);
          console.log(responseHuyen);
          console.log(responseXa);

          setYouthAssociationList(responseCTN);
          setProvinceList(responseTinh);
          setDistrictList(responseHuyen);
          setVillageList(responseXa);
        })
      )
      .catch((errors) => {
        console.log('lỗi kết nối: ', errors);
      });
  }, []);

  const onFinish = (values) => {
    console.log('giá trị nhập: ', values);
    const action = actFetchAddInfoStep2(values);
    dispatch(action);
    if (!loading) {
      submitStep();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Xảy ra lỗi:', errorInfo);
  };

  return (
    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
      <strong style={{ fontSize: 16 }}>{title}</strong>
      {/* CeremonyServingRegister step 2 */}
      <Form
        name="CerSerRegStep2"
        form={form}
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          'roleInGroup': registerType === 1 ? 3 : 0,
          'citizenIdOfLeader': citizenIdOfLeader ? citizenIdOfLeader : '',
          // 'name': memberInfo ? memberInfo.name : '',
          'buddhistName': memberInfo ? memberInfo.buddhistName : '',
          'gender': memberInfo ? memberInfo.gender : 0,
          'dayOfBirth': memberInfo ? memberInfo.dayOfBirth : '',
          'email': memberInfo ? memberInfo.email : '',
          // 'phone': memberInfo ? memberInfo.phone : '',
          // 'permanentAddress': memberInfo ? memberInfo.permanentAddress : '',
          // 'temporaryAddress': memberInfo ? memberInfo.temporaryAddress : '',
          'youthAssociation': memberInfo ? memberInfo.youthAssociation : '',
          'groupOfYouthAssociation': memberInfo ? memberInfo.groupOfYouthAssociation : '',
          'note': ''
        }}
        onFinishFailed={onFinishFailed}
        scrollToFirstError
      >
        <Form.Item
          name="roleInGroup"
          label="Vai trò trong nhóm"
          rules={[{ required: registerType === 1 ? true : false, message: 'Xin hãy chọn hình thức đăng ký!' }]}
          hidden={registerType === 0 ? true : false}
        >
          <Radio.Group buttonStyle="solid">
            {roleInGroupList != null && roleInGroupList.map(item => {
              if (item.id != 0) {
                return <Radio.Button value={item.id} key={item.id}>{item.name}</Radio.Button>
              }
            }
            )}
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Số Căn Cước/Hộ Chiếu"
          tooltip="Bạn nhập số CMND/Căn Cước/Hộ Chiếu của NHÓM TRƯỞNG ạ"
          required={registerType === 1 ? true : false}
          hidden={registerType === 0 ? true : false}
        >
          <Form.Item
            name="citizenIdOfLeader"
            noStyle
            hasFeedback
            rules={[{ required: registerType === 1 ? true : false, message: 'Xin hãy nhập số Căn Cước/Hộ Chiếu của NHÓM TRƯỞNG ạ!' }]}
          >
            <Input style={{ width: '60%' }} placeholder="Ví dụ: 025312895" />
          </Form.Item>
          <span className="ant-form-text" style={{ marginLeft: 5 }}>{memberInfo ? memberInfo.nameOfLeader : ''}</span>
        </Form.Item>
        {/* <Form.Item
          label="Họ và tên"
          name="name"
          rules={[{ required: true, message: 'Xin hãy nhập họ và tên!' }]}
          tooltip="Bạn ghi đầy đủ dấu và viết IN HOA chữ cái đầu. Ví dụ: Trần Quốc Bảo"
        >
          <Input placeholder="Ví dụ: Trần Quốc Bảo" />
        </Form.Item> */}
        <Form.Item
          label="Pháp danh"
          name="buddhistName"
          tooltip="Bạn ghi đầy đủ dấu và viết IN HOA chữ cái đầu. Ví dụ: Trần Quốc Bảo"
        >
          <Input placeholder="Ví dụ: Trần Quốc Bảo" />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Giới tính"
          rules={[{ required: true, message: 'Xin hãy chọn giới tính!' }]}
        >
          <Radio.Group buttonStyle="solid">
            {genderList != null && genderList.map(
              item => <Radio.Button value={item.id} key={item.id}>{item.name}</Radio.Button>
            )}
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="dayOfBirth"
          label="Năm sinh"
          hasFeedback
          rules={[
            { required: true, message: 'Xin hãy nhập năm sinh!' },
            { pattern: REGEX_YEAR, message: 'Năm sinh không hợp lệ!' },
          ]}
        >
          {/* <Select placeholder="Chọn năm sinh">
            {dayOfBirth != null && dayOfBirth.map(
              item => <Option key={item.id} value={item.id}>{item.year}</Option>
            )}
          </Select> */}
          <Input placeholder="Nhập năm sinh" />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          hasFeedback
          rules={[
            {
              type: 'email',
              message: 'E-mail không hợp lệ!',
            },
            {
              required: true,
              message: 'Xin hãy nhập E-mail của bạn!',
            },
          ]}
        >
          <Input placeholder='ví dụ: abc@gmail.com' />
        </Form.Item>
        {/* <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[
            { required: true, message: 'Xin hãy nhập số điện thoại!' },
            { pattern: REGEX_PHONE, message: 'Số điện thoại không hợp lệ!' },
          ]}
          tooltip="Bạn nhập số điện thoại theo cú pháp viết liền KHÔNG CÁCH. Ví dụ: 0983336612"
        >
          <Input style={{ width: '100%' }} placeholder="Ví dụ: 0983336612" />
        </Form.Item> */}
        <Form.Item
          name="permanentAddress"
          label="Địa chỉ thường trú"
          tooltip="Địa chỉ theo CCCD"
          rules={[
            { type: 'array', required: true, message: 'Xin hãy chọn địa chỉ thường trú!' },
          ]}
        >
          {/* <Cascader options={addressList} placeholder="Chọn địa chỉ thường trú" /> */}
          <Select placeholder="Chọn tỉnh">
            {provinceList?.map(
              item => <Option key={item.id} value={item.id}>{item.ten}</Option>
            )}
          </Select>
        </Form.Item>
        <Form.Item
          name="temporaryAddress"
          label="Địa chỉ tạm trú"
          rules={[
            { type: 'array', required: true, message: 'Xin hãy chọn địa chỉ tạm trú!' },
          ]}
        >
          {/* <Cascader options={addressList} placeholder="Chọn địa chỉ tạm trú" /> */}
        </Form.Item>
        <Form.Item
          name="youthAssociation"
          label="Nơi sinh hoạt"
          hasFeedback
          rules={[{ required: true, message: 'Xin hãy chọn nơi sinh hoạt!' }]}
        >
          <Select placeholder="Chọn nơi sinh hoạt">
            {youthAssociationList && youthAssociationList.map(
              item => <Option value={item.id} key={item.id}>{item.ten}</Option>
            )}
          </Select>
        </Form.Item>
        <Form.Item
          name="groupOfYouthAssociation"
          label="Tổ"
          hasFeedback
          rules={[{ required: false }]}
        >
          <Select placeholder="Chọn tổ">
            {groupOfYouthAssociationList != null && groupOfYouthAssociationList.map(
              item => <Option value={item.id} key={item.id}>{item.name}</Option>
            )}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {loading ? <LoadingOutlined style={{ paddingLeft: 22, paddingRight: 22 }} /> : 'Tiếp theo'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Step2;
