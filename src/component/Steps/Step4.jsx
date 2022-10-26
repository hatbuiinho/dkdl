import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Select, Layout, Tabs, Radio, Space, Rate, Checkbox } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
// import type { UploadChangeParam } from 'antd/es/upload';
// import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import departments from './departments.json';
const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

// số lần về chùa công quả
const descNumberOfServing = ['Chưa lần nào', '1 lần', '2 lần', '3 lần', 'Trên 3 lần'];

// kỹ năng sở trường
const skillOptions = [
    // { id: 0, label: 'Không có', value: 'Không có' },
    { id: 1, label: 'Cắm hoa', value: 'Cắm hoa' },
    { id: 2, label: 'Chưng trái cây nghệ thuật', value: 'Chưng trái cây nghệ thuật' },
    { id: 3, label: 'Cắt tỉa trang trí món', value: 'Cắt tỉa trang trí món' },
    { id: 4, label: 'Cơ khí', value: 'Cơ khí' },
    { id: 5, label: 'Cắt may cơ bản', value: 'Cắt may cơ bản' },
    { id: 6, label: 'Ngoại ngữ', value: 'Ngoại ngữ' },
];

// danh sách ban
// const departments = [
//     {id: 1, code: "BV", name: "bảo vệ"},
//     {id: 2, code: "HD1", name: "hành đường 1"},
//     {id: 3, code: "HD2", name: "hành đường 2"},
// ]

const Step4 = (props) => {
    const history = useHistory();
    const { title } = props;
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    // số lần về chùa công quả
    const [numberOfServing, setNumberOfServing] = useState(1);

    
//     const departments = [
//         {id: 1, code: "BV", name: "bảo vệ"},
//         {id: 2, code: "HD1", name: "hành đường 1"},
//         {id: 3, code: "HD2", name: "hành đường 2"},
//     ]
console.log(departments);
    // handle event start
    const handleChangeSkillOptions = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

    const handleChangeExpDept = (value) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    };
      
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, url => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    // handle event end

    return (
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <strong style={{ fontSize: 16 }}>{title}</strong>
            <form style={{ marginTop: 10 }}>
                <div className="row g-3">
                    <div className="col-md-12">
                        <div className='fw-bold'>Số lần Huynh Đệ đã về chùa công quả *</div>
                        <span>
                            <Rate
                                allowClear={false}
                                tooltips={descNumberOfServing}
                                onChange={setNumberOfServing}
                                value={numberOfServing}
                                defaultValue={1}
                            />
                            {numberOfServing ? <span className="ant-rate-text">{descNumberOfServing[numberOfServing - 1]}</span> : ''}
                        </span>
                    </div>
                    <div className="col-md-12">
                        <div className='fw-bold'>KỸ NĂNG, SỞ TRƯỜNG *</div>
                        <div>
                            <Checkbox.Group options={skillOptions} defaultValue={[]} onChange={handleChangeSkillOptions} />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='fw-bold'>HUYNH ĐỆ CÓ KINH NGHIỆM Ở CÔNG VIỆC (BAN) NÀO? *</div>
                        <div>
                            <Select size='large' className='typeof' defaultValue="0">
                                {/* <Option value="0">Không có</Option> */}
                                {/* <Option value="1">Cắm hoa</Option>
                                <Option value="2">Chưng trái cây nghệ thuật</Option>
                                <Option value="3">Cắt tỉa trang trí món</Option>
                                <Option value="4">Cơ khí</Option>
                                <Option value="5">Cắt may cơ bản</Option>
                                <Option value="6">Ngoại ngữ</Option> */}
                                {departments != null && departments.map((dept)=>{
                                    <Option value={dept.code}>{dept.name}</Option>
                                })}
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
                            {/* <Select size='large' className='typeof' defaultValue="0">
                                <Option value="0">18h00 - 19h30, Thứ Tư (03/08/2022), Chùa Xá Lợi, 89 Bà Huyện Thanh Quan, P.7, Q.3</Option>
                                <Option value="1">18h00 - 19h30, Thứ Năm (04/08/2021), Chùa Định Phước Di Đà, Gần khu chợ nhỏ ĐH. Nông
                                    Lâm, Q.Thủ Đức</Option>
                                <Option value="2">9h00 – 19h00, Thứ Sáu, Thứ Bảy, Chủ Nhật, Thứ Hai (05/08 - 08/08/2022) tại 47/96 Bùi Đình
                                    Túy - Q.Bình Thạnh</Option>
                            </Select> */}
                            <Radio.Group>
                                <Space direction="vertical">
                                    <Radio value="{1}">18h00 - 19h30, Thứ Tư (03/08/2022), Chùa Xá Lợi, 89 Bà Huyện Thanh Quan, P.7, Q.3</Radio>
                                    <Radio value="{2}">18h00 - 19h30, Thứ Năm (04/08/2021), Chùa Định Phước Di Đà, Gần khu chợ nhỏ ĐH. Nông Lâm, Q.Thủ Đức</Radio>
                                    <Radio value="{3}">9h00 – 19h00, Thứ Sáu, Thứ Bảy, Chủ Nhật, Thứ Hai (05/08 - 08/08/2022) tại 47/96 Bùi Đình Túy - Q.Bình Thạnh</Radio>
                                    <Radio value="{4}">
                                        Gửi bưu điện
                                        {"value" === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                                    </Radio>
                                </Space>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='fw-bold'>HUYNH ĐỆ BỔ SUNG ẢNH CHỤP CHÂN DUNG ĐỂ LÀM THẺ CÔNG QUẢ</div>
                        <div>Ảnh chụp chân dung bằng điện thoại với nền đơn sắc, rõ nét, chính diện hoặc ảnh chụp hình thẻ 3x4 (mới
                            nhất)</div>
                        <div className="col-12">
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
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

export default Step4;
