import { Col, Row, Form, Input, Button, Checkbox } from 'antd';
import React from 'react';
/*
Noi sinh hoat
To
Ho va ten
Phap danh
Gioi tinh
Nam sinh
CCCD
SDT
Email
Noi sinh song/lam viec
FB
Ky nang/so truong

*/
const { Item } = Form;

const PersonalInfo = (props) => {
  const {
    cultivatingPlace, //text
    group, //text
    name, //text
    BuddhaName, //text
    gender, //select option
    dob, //date picker
    cccd, //text
    phone, //text
    email, //text
    birthPlace, //text
    fb, //text
    skill, //text
  } = props;
  return (
    <>
      <Row>
        <Col xs={24}>
          <Item
            // label="Username"
            name="cultivatingPlace"
            rules={[
              { required: true, message: 'Please input your username!' },
              { max: 5, message: 'Max length is 5' },
              { pattern: /\d+/ },
            ]}
          >
            <Input size="large" />
          </Item>
        </Col>
      </Row>
    </>
  );
};

export default PersonalInfo;
