import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Select, Layout, Tabs, Radio, Space, Rate, Checkbox, Col, Row } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
// import type { UploadChangeParam } from 'antd/es/upload';
// import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import departmentList from './data/departments.json';
import skillList from "./data/skills.json";
import numberOfServingList from "./data/numberOfServing.json";
import receiveCardLocationList from './data/receiveCardLocations.json';

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

const Step4 = (props) => {
    console.log("bắt đầu--------------");
    const history = useHistory();
    const { title } = props;

    // số lần về chùa công quả
    const [numberOfServing, setNumberOfServing] = useState(numberOfServingList[0]);
    // console.log("numberOfServing:", numberOfServing);
    // các kỹ năng, sở trường
    const [skills, setSkills] = useState([]);
    // console.log("skills:", skills);
    // ban kinh nghiệm
    const [experienceDept, setExperienceDept] = useState(departmentList[0].id);
    // console.log("experienceDept", experienceDept);
    // ban nguyện vọng
    const [aspirationDept, setAspirationDept] = useState(departmentList[0].id);
    // console.log("aspirationDept", aspirationDept);
    // nơi nhận thẻ
    const [receiveCardLocation, setReceiveCardLocation] = useState({});
    console.log("receiveCardLocation", receiveCardLocation);
    // upload hình ảnh
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    // handle event start
    const handleChangeNumberOfServing = (e) => {
        console.log("số lần về chùa", e.target.value);
        setNumberOfServing(e.target.value);
    }

    const handleChangeSkills = (checkedValues) => {
        console.log('kỹ năng sở trường checked', checkedValues);
        setSkills(checkedValues);
    };

    const handleChangeExperienceDept = (value) => {
        console.log("ban kinh nghiệm", value);
        setExperienceDept(value);
    };

    const handleChangeAspirationDept = (value) => {
        console.log("ban nguyện vọng", value);
        setAspirationDept(value);
    }

    const handleChangeReceiveCardLocation = (e) => {
        console.log("địa điểm nhận thẻ", e.target.value);
        setReceiveCardLocation(e.target.value);
    }

    const handleChangeAvatar = (info) => {
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
                        <Radio.Group
                            defaultValue={numberOfServing}
                            buttonStyle="solid"
                            size="large"
                            onChange={handleChangeNumberOfServing}>
                            {numberOfServingList != null && numberOfServingList.map(
                                item => <Radio.Button key={item.id} value={item}>{item.name}</Radio.Button>
                            )}
                        </Radio.Group>
                    </div>
                    <div className="col-md-12 mt-3">
                        <div className='fw-bold'>KỸ NĂNG, SỞ TRƯỜNG *</div>
                        <div>
                            <Checkbox.Group style={{ width: '100%' }} onChange={handleChangeSkills}>
                                <Row>
                                    {skillList != null && skillList.map(item => {
                                        return (
                                            <Col span={8} key={item.id}>
                                                <Checkbox value={item}>{item.label}</Checkbox>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Checkbox.Group>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className='fw-bold'>HUYNH ĐỆ CÓ KINH NGHIỆM Ở CÔNG VIỆC (BAN) NÀO? *</div>
                        <div>
                            <Select
                                size='large'
                                className='typeof'
                                defaultValue={experienceDept}
                                style={{ width: 240 }}
                                onChange={handleChangeExperienceDept}
                            >
                                {departmentList != null && departmentList.map(
                                    item => <Option key={item.id} value={item.id}>{item.name}</Option>
                                )}
                            </Select>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className='fw-bold'>HUYNH ĐỆ CÓ NGUYỆN VỌNG LÀM VIỆC Ở (BAN) NÀO? *</div>
                        <div>
                            <Select
                                size='large'
                                className='typeof'
                                defaultValue={aspirationDept}
                                style={{ width: 240 }}
                                onChange={handleChangeAspirationDept}
                            >
                                {departmentList != null && departmentList.map(
                                    item => <Option key={item.id} value={item.id}>{item.name}</Option>
                                )}
                            </Select>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className='fw-bold'>Nơi Nhận Thẻ</div>
                        <div>Huynh đệ vui lòng đến ĐÚNG KHUNG GIỜ như thông báo bên dưới ạ</div>
                        <div>
                            <Radio.Group onChange={handleChangeReceiveCardLocation}>
                                <Space direction="vertical">
                                    {receiveCardLocationList != null && receiveCardLocationList.map(
                                        item => <Radio value={item.id} key={item.id}>{item.name}</Radio>
                                    )}
                                </Space>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className='fw-bold'>HUYNH ĐỆ BỔ SUNG ẢNH CHỤP CHÂN DUNG ĐỂ LÀM THẺ CÔNG QUẢ</div>
                        <div>Ảnh chụp chân dung bằng điện thoại với nền đơn sắc, rõ nét, chính diện hoặc ảnh chụp hình thẻ 3x4 (mới nhất)</div>
                        <div className="col-12">
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={handleChangeAvatar}
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
