import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Select, Layout, Tabs, Radio, Space, Form, Col, Row, Button } from 'antd';

// const { Content } = Layout;
// const { TabPane } = Tabs;
// const { Option } = Select;

// hình thức đăng ký
const registerTypeList = [
  { id: 0, name: "Cá nhân" },
  { id: 1, name: "Nhóm" },
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

const Step1 = (props) => {
  const { submitStep, title } = props;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('giá trị nhập: ', values);
    submitStep(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Xảy ra lỗi:', errorInfo);
  };

  return (
    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
      <strong style={{ fontSize: 16 }}>{title}</strong>
      {/* CeremonyServingRegister step 1 */}
      <Form
        name="CerSerRegStep1"
        form={form}
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          'registerType': 0,
        }}
        onFinishFailed={onFinishFailed}
        scrollToFirstError
      >
        <Form.Item
          label="Họ và tên"
          name="name"
          rules={[{ required: true, message: 'Xin hãy nhập họ và tên!' }]}
          tooltip="Bạn ghi đầy đủ dấu và viết IN HOA chữ cái đầu. Ví dụ: Trần Quốc Bảo"
        >
          <Input placeholder="Ví dụ: Trần Quốc Bảo" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[{ required: true, message: 'Xin hãy nhập số điện thoại!' }]}
          tooltip="Bạn nhập số điện thoại theo cú pháp viết liền KHÔNG CÁCH. Ví dụ: 0983336612"
        >
          <Input style={{ width: '100%' }} placeholder="Ví dụ: 0983336612" />
        </Form.Item>
        <Form.Item
          name="cccd"
          label="Số Căn Cước/Hộ Chiếu"
          rules={[{ required: true, message: 'Xin hãy nhập số Căn Cước/Hộ Chiếu!' }]}
          tooltip="Bạn nhập đầy đủ và chính xác Số CMND/Căn Cước/Hộ Chiếu của mình ạ. Ví dụ: 025312895"
        >
          <Input style={{ width: '100%' }} placeholder="Ví dụ: 025312895" />
        </Form.Item>
        <Form.Item
          name="registerType"
          label="Hình thức đăng ký"
          rules={[{ required: true, message: 'Xin hãy chọn hình thức đăng ký!' }]}
        >
          <Radio.Group buttonStyle="solid">
            {registerTypeList != null && registerTypeList.map(
              item => <Radio.Button value={item.id} key={item.id}>{item.name}</Radio.Button>
            )}
          </Radio.Group>
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

export default Step1;