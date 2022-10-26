import React from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Select, Layout, Tabs, Radio, Space } from 'antd';

const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

const Step1 = (props) => {
  const { submitStep, title } = props;

  return (
    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
      <strong style={{ fontSize: 16 }}>{title}</strong>
      <form style={{ marginTop: 10 }}>
        <div className="row g-3">
          <div className="col-12">
            <div className="form-floating">
              <Input
                type="text"
                className="form-control bg-light border-0"
                id="name"
                placeholder="Họ Và Tên"
              />
              <label htmlFor="name">Họ Và Tên *</label>
              <div className="form-text">Bạn ghi đầy đủ dấu và viết IN HOA chữ cái đầu. Ví dụ: Trần Quốc Bảo</div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <Input
                type="text"
                className="form-control bg-light border-0"
                id="phone"
                placeholder="Số điện thoại"
              />
              <label htmlFor="phone">Số Điện Thoại</label>
              <div className="form-text">Bạn nhập số điện thoại theo cú pháp viết liền KHÔNG CÁCH. VD: 0983336612</div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-floating">
              <Input
                type="text"
                className="form-control bg-light border-0"
                id="cccd"
                placeholder="Căn cước công dân"
              />
              <label htmlFor="phone">SỐ CMND/CĂN CƯỚC/HỘ CHIẾU *</label>
              <div className="form-text">Bạn nhập đầy đủ và chính xác Số CMND/Số Căn Cước/Hộ Chiếu của mình ạ. VD: 025312895</div>
            </div>
          </div>
          <div className="col-12">
            <Radio.Group defaultValue="0" buttonStyle="solid" size="large">
              <Radio.Button value="0">Cá nhân</Radio.Button>
              <Radio.Button value="1">Nhóm</Radio.Button>
            </Radio.Group>
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

export default Step1;