import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Select, Layout, Tabs, Radio, Space, Form, Button } from 'antd';

const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
// nơi xuất phát
const departLocationList = [
  { id: 0, code: "tutuc", name: "Tự túc" },
  { id: 1, code: "hcm-nonglam", name: "Bến xe buýt Trường Đại học Nông Lâm" },
  { id: 2, code: "hcm-bdt", name: "Cầu Bùi Đình Túy, số 47 Bùi Đình Túy, P.24, Q. Bình Thạnh, Tp.HCM" }
];
// thời điểm khởi hành
const timeToStartList = [
  { id: 0, code: "tutuc", name: "Tự túc" },
  { id: 1, code: "dot1", name: "Đợt 1: 19h45 Thứ hai, ngày 08/08/2022" },
  { id: 2, code: "dot2", name: "Đợt 2: 19h45 Thứ ba, ngày 09/08/2022 (Đợt chính thức)" },
  { id: 3, code: "dot3", name: "Đợt 3: 06h00 Thứ tư, ngày 10/08/2022" }
];

// thời điểm về lại nơi xuất phát
const timeToReturnList = [
  { id: 0, code: "tutuc", name: "Tự túc" },
  { id: 1, code: "dot1", name: "Đợt 1: 18h00 Thứ sáu, ngày 12/08/2022" },
  { id: 2, code: "dot2", name: "Đợt 2: 18h00 Chủ nhật, ngày 14/08/2022" }
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

const Step3 = (props) => {
  // const history = useHistory();
  const { submitStep, title } = props;
  // nơi xuất phát
  // const [departLocation, setDepartLocation] = useState(departLocationList[0].id);
  // const [timeToStart, setTimeToStart] = useState(0);
  // const [timeToReturn, setTimeToReturn] = useState(0);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('giá trị nhập: ', values);
    submitStep(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Xảy ra lỗi:', errorInfo);
  };

  // handle event start
  // const handleChangeDepartLocation = (value) => {
  //   console.log('departLocation', value);
  //   setDepartLocation(value);
  // };

  // const handleChangeTimeToStart = (value) => {
  //   console.log('timeToStart', value);
  //   setTimeToStart(value);
  // };

  // const handleChangesTimeToReturn = (value) => {
  //   console.log('timeToReturn', value);
  //   setTimeToReturn(value);
  // };
  // handle event end

  return (
    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
      <strong style={{ fontSize: 16 }}>{title}</strong>
      {/* CeremonyServingRegister step 3 */}
      <Form
        name="CerSerRegStep3"
        form={form}
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          // 'registerType': 0,
        }}
        onFinishFailed={onFinishFailed}
        scrollToFirstError
      >
        <Form.Item
          name="departLocation"
          label="Nơi xuất phát"
          hasFeedback
          rules={[{ required: true, message: 'Xin hãy chọn nơi xuất phát!' }]}
        >
          <Select placeholder="Chọn nơi xuất phát">
            {departLocationList != null && departLocationList.map(
              item => <Option key={item.id} value={item.id}>{item.name}</Option>
            )}
          </Select>
        </Form.Item>
        <Form.Item
          name="timeToStart"
          label="Thời gian khởi hành về chùa"
          hasFeedback
          rules={[{ required: true, message: 'Xin hãy chọn thời gian khởi hành!' }]}
        >
          <Select placeholder="Chọn thời gian khởi hành">
            {timeToStartList != null && timeToStartList.map(
              item => <Radio value={item.id} key={item.id}>{item.name}</Radio>
            )}
          </Select>
        </Form.Item>
        <Form.Item
          name="timeToReturn"
          label="Thời gian trở về nơi xuất phát"
          hasFeedback
          rules={[{ required: true, message: 'Xin hãy chọn thời gian trở về!' }]}
        >
          <Select placeholder="Chọn thời gian trở về">
            {timeToReturnList != null && timeToReturnList.map(
              item => <Radio value={item.id} key={item.id}>{item.name}</Radio>
            )}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Tiếp theo
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Step3;
