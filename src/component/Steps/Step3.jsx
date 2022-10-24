import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Select, Layout, Tabs, Radio, Space } from 'antd';

const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

const Step3 = (props) => {
  // const history = useHistory();
  const { submitStep, title } = props;
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
      <strong style={{ fontSize: 16 }}>{title}</strong>
      <form style={{ marginTop: 10 }}>
        <div className="row g-3">
          <div className="col-12 col-md-12">
            <div className='fw-bold'>ĐỊA ĐIỂM XUẤT PHÁT *</div>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={1}>Bến xe buýt Trường Đại học Nông Lâm</Radio>
                <Radio value={2}>Cầu Bùi Đình Túy, số 47 Bùi Đình Túy, P.24, Q. Bình Thạnh, Tp.HCM</Radio>
                <Radio value={3}>Tự túc</Radio>
                <Radio value={4}>
                  khác...
                  {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                </Radio>
              </Space>
            </Radio.Group>
          </div>
          <div className="col-12 col-md-12 mt-3">
            <div className='fw-bold'>THỜI GIAN KHỞI HÀNH VỀ CHÙA</div>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="{1}">Đợt 1: 19h45 Thứ hai, ngày 08/08/2022</Radio>
                <Radio value="{2}">Đợt 2: 19h45 Thứ ba, ngày 09/08/2022 (Đợt chính thức)</Radio>
                <Radio value="{3}">Đợt 3: 06h00 Thứ tư, ngày 10/08/2022</Radio>
              </Space>
            </Radio.Group>
          </div>
          <div className="col-12 col-md-12 mt-3">
            <div className='fw-bold'>THỜI GIAN VỀ LẠI TP.HCM CÙNG CTN</div>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="{1}">Đợt 1: 18h00 Thứ sáu, ngày 12/08/2022</Radio>
                <Radio value="{2}">Đợt 2: 18h00 Chủ nhật, ngày 14/08/2022</Radio>
                <Radio value="{3}">
                  khác...
                  {"value" === 3
                    ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                </Radio>
              </Space>
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

// const WrappedDynamicRule = Form.create({ name: "dynamic_rule" })(Step3);

export default Step3;
