import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Select, Layout, Tabs } from 'antd';

const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

const Step2 = (props) => {
  const { submitStep } = props;
  return (
    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
      <strong style={{ fontSize: 16 }}>Thông tin cập nhật</strong>
      <form style={{ marginTop: 10 }}>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <Input
                type="text"
                className="form-control bg-light border-0"
                id="name"
                placeholder="Họ & Tên"
              />
              <label for="name">Họ & Tên</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <Input
                type="email"
                className="form-control bg-light border-0"
                id="email"
                placeholder="Email"
              />
              <label for="email">Email</label>
            </div>
          </div>
          <div className="col-12">
            <Select size="large" className="typeof" defaultValue="Cá Nhân">
              <Option value="lucy">Cá nhân</Option>
              <Option value="lucy">Theo nhóm</Option>
            </Select>
          </div>
        </div>
      </form>
      <div className="col-12" style={{ marginTop: 10 }}>
        <button
          className="btn btn-primary w-100 py-3"
          type="submit"
          onClick={() => {
            submitStep();
          }}
        >
          Tiếp Tục
        </button>
      </div>
    </div>
  );
};

export default Step2;
