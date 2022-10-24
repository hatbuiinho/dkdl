import React from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Select, Layout, Tabs, Radio, Space } from 'antd';

const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

const Step4 = (props) => {
    const history = useHistory();
    const { title } = props;
    return (
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <strong style={{ fontSize: 16 }}>{title}</strong>
            <form style={{ marginTop: 10 }}>
                <div className="row g-3">
                    <div className="col-md-12">
                        <div className='fw-bold'>Số lần Huynh Đệ đã về chùa công quả *</div>
                        <div>
                        <Select size='large' className='typeof' defaultValue="0">
                            <Option value="0">Chưa lần nào</Option>
                            <Option value="1">1 lần</Option>
                            <Option value="2">2 lần</Option>
                            <Option value="3">3 lần</Option>
                            <Option value="4">Trên 3 lần</Option>
                        </Select>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className='fw-bold'>KỸ NĂNG, SỞ TRƯỜNG *</div>
                        <div>
                            <Select size='large' className='typeof' defaultValue="0">
                            <Option value="0">Không có</Option>
                            <Option value="1">Cắm hoa</Option>
                            <Option value="2">Chưng trái cây nghệ thuật</Option>
                            <Option value="3">Cắt tỉa trang trí món</Option>
                            <Option value="4">Cơ khí</Option>
                            <Option value="5">Cắt may cơ bản</Option>
                            <Option value="6">Ngoại ngữ</Option>
                        </Select>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='fw-bold'>HUYNH ĐỆ CÓ KINH NGHIỆM Ở CÔNG VIỆC (BAN) NÀO? *</div>
                        <div>
                            <Select size='large' className='typeof' defaultValue="0">
                            <Option value="0">Không có</Option>
                            <Option value="1">Cắm hoa</Option>
                            <Option value="2">Chưng trái cây nghệ thuật</Option>
                            <Option value="3">Cắt tỉa trang trí món</Option>
                            <Option value="4">Cơ khí</Option>
                            <Option value="5">Cắt may cơ bản</Option>
                            <Option value="6">Ngoại ngữ</Option>
                        </Select>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='fw-bold'>HUYNH ĐỆ CÓ NGUYỆN VỌNG LÀM VIỆC Ở (BAN) NÀO? *</div>
                        <div>
                            <Select size='large' className='typeof' defaultValue="0">
                            <Option value="0">Không có</Option>
                            <Option value="1">Cắm hoa</Option>
                            <Option value="2">Chưng trái cây nghệ thuật</Option>
                            <Option value="3">Cắt tỉa trang trí món</Option>
                            <Option value="4">Cơ khí</Option>
                            <Option value="5">Cắt may cơ bản</Option>
                            <Option value="6">Ngoại ngữ</Option>
                        </Select>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='fw-bold'>Nơi Nhận Thẻ</div>
                        <div>Huynh đệ vui lòng đến ĐÚNG KHUNG GIỜ như thông báo bên dưới ạ</div>
                        <div>
                            <Select size='large' className='typeof' defaultValue="0">
                            <Option value="0">18h00 - 19h30, Thứ Tư (03/08/2022), Chùa Xá Lợi, 89 Bà Huyện Thanh Quan, P.7, Q.3</Option>
                            <Option value="1">18h00 - 19h30, Thứ Năm (04/08/2021), Chùa Định Phước Di Đà, Gần khu chợ nhỏ ĐH. Nông
                                Lâm, Q.Thủ Đức</Option>
                            <Option value="2">9h00 – 19h00, Thứ Sáu, Thứ Bảy, Chủ Nhật, Thứ Hai (05/08 - 08/08/2022) tại 47/96 Bùi Đình
                                Túy - Q.Bình Thạnh</Option>
                        </Select>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='fw-bold'>HUYNH ĐỆ BỔ SUNG ẢNH CHỤP CHÂN DUNG ĐỂ LÀM THẺ CÔNG QUẢ</div>
                        <div>Ảnh chụp chân dung bằng điện thoại với nền đơn sắc, rõ nét, chính diện hoặc ảnh chụp hình thẻ 3x4 (mới
                            nhất)</div>
                        <div className="col-12">upload</div>
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

export default Step4;
