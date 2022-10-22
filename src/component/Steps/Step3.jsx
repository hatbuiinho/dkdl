import React from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Select, Layout, Tabs } from 'antd';

const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

const Step3 = (prop) => {
  const history = useHistory();
  return (
    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
      <strong style={{ fontSize: 16 }}>Thông tin cập nhật</strong>
      <form style={{ marginTop: 10 }}>
        <div className="row g-3">
          <div className="col-md-12">
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
        </div>
      </form>
      <div className="col-12" style={{ marginTop: 10 }}>
        <button
          className="btn btn-primary w-100 py-3"
          type="submit"
          onClick={() => {
            history.push('/login');
            // this.props.redirect({
            //   redirectTo: submitTarget,
            // });
          }}
        >
          Hoàn thành
        </button>
      </div>
    </div>
  );
};

// const WrappedDynamicRule = Form.create({ name: "dynamic_rule" })(Step3);

export default Step3;
