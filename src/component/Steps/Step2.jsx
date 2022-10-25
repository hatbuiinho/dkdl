import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Select, Layout, Tabs, Radio } from 'antd';

const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

const Step2 = (props) => {
  const { submitStep, title } = props;
  return (
    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
      <strong style={{ fontSize: 16 }}>{title}</strong>
      <form style={{ marginTop: 10 }}>
          <div className="row g-3">
            <div className="col-12 col-md-12">
            <div className='fw-bold'>Vai trò trong nhóm *</div>
            <Radio.Group defaultValue="0" buttonStyle="solid" size="large">
              <Radio.Button value="0">Nhóm Trưởng</Radio.Button>
              <Radio.Button value="1">Nhóm Phó</Radio.Button>
              <Radio.Button value="2">Thành viên</Radio.Button>
            </Radio.Group>
            </div>
            <div className="col-12 col-md-12">
              <div className="form-floating">
                <Input
                  type="text"
                  className="form-control bg-light border-0"
                  id="name"
                  placeholder="CCCD nhóm trưởng"
                />
                <label htmlFor="name">CCCD Nhóm Trưởng</label>
                <div className="form-text">Nguyễn Văn An (tên nhóm trưởng hiện ra khi check cccd)</div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating">
                <Input
                  type="text"
                  className="form-control bg-light border-0"
                  id="name"
                  placeholder="Họ & Tên"
                />
                <label htmlFor="name">Họ & Tên</label>
                <div className="form-text">Bạn ghi đầy đủ dấu và viết IN HOA chữ cái đầu. Ví dụ: Trần Quốc Bảo</div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating">
                <Input
                  type="text"
                  className="form-control bg-light border-0"
                  id="phapDanh"
                  placeholder="Pháp Danh (nếu có)"
                />
                <label htmlFor="name">Pháp Danh (nếu có)</label>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <Radio.Group defaultValue="nam" buttonStyle="solid" size="large">
                <Radio.Button value="nam">Nam</Radio.Button>
                <Radio.Button value="nu">Nữ</Radio.Button>
              </Radio.Group>
            </div>
            <div className="col-6 col-md-6">
              <Select size='large' className='typeof' defaultValue="1991">
                <Option value="namSinh">1991</Option>
                <Option value="namSinh">1992</Option>
                <Option value="namSinh">1993</Option>
                <Option value="namSinh">1994</Option>
                <Option value="namSinh">1995</Option>
                <Option value="namSinh">1996</Option>
                <Option value="namSinh">1997</Option>
                <Option value="namSinh">1998</Option>
                <Option value="namSinh">1999</Option>
                <Option value="namSinh">2000</Option>
              </Select>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating">
                <Input
                  type="email"
                  className="form-control bg-light border-0"
                  id="email"
                  placeholder="Email"
                />
                <label htmlFor="email">Email</label>
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
                <label htmlFor="phone">Số Điện Thoại (Viết liền không cách)</label>
                {/* <div class="form-text">Bạn nhập số điện thoại theo cú pháp viết liền KHÔNG CÁCH. VD: 0983336612</div> */}
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="form-floating">
                <Input
                  type="text"
                  className="form-control bg-light border-0"
                  id="cccd"
                  placeholder="Căn cước công dân"
                />
                <label htmlFor="cccd">SỐ CĂN CƯỚC/HỘ CHIẾU *</label>
                {/* <div className="form-text">Bạn nhập đầy đủ và chính xác Số Căn Cước/Hộ Chiếu của mình ạ. VD: 025312895</div> */}
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <Input
                  type="text"
                  className="form-control bg-light border-0"
                  id="diaChiThuongTru"
                  placeholder="ĐỊA CHỈ THƯỜNG TRÚ? (ghi theo CCCD) *"
                />
                <label htmlFor="diaChiThuongTru">ĐỊA CHỈ THƯỜNG TRÚ? (theo CCCD) *</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <Input
                  type="text"
                  className="form-control bg-light border-0"
                  id="diaChiCuTru"
                  placeholder="ĐỊA CHỈ CƯ TRÚ? (nơi ở hiện tại: ghi rõ xã, huyện, tỉnh đang ở) *"
                />
                <label htmlFor="diaChiCuTru">ĐỊA CHỈ CƯ TRÚ? (nơi ở hiện tại: xã, huyện, tỉnh) *</label>
              </div>
            </div>
            <div className="col-12">
              {/* <Select size='large' className='typeof' defaultValue="Cá Nhân">
                <Option value="lucy">Cá nhân</Option>
                <Option value="lucy">Theo nhóm</Option>
              </Select> */}
              
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
