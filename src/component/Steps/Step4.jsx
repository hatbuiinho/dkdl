import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Select, Layout, Tabs, Radio, Space, Rate, Checkbox, Col, Row, Form, Button, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';

// const { Content } = Layout;
// const { TabPane } = Tabs;
const { Option } = Select;
// số lần công quả
const numberOfServingList = [
    { id: 1, name: "Chưa có" },
    { id: 2, name: "1 lần" },
    { id: 3, name: "2 lần" },
    { id: 4, name: "3 lần" },
    { id: 5, name: "Trên 3 lần" }
];
// const descNumberOfServingList = ['Chưa lần nào', '1 lần', '2 lần', '3 lần', 'Trên 3 lần'];

// danh sách ban
const departmentList = [
    { id: 0, code: "chuaco", name: "Chưa có" },
    { id: 1, code: "BV", name: "bảo vệ" },
    { id: 2, code: "HD1", name: "hanh duong 1" },
    { id: 3, code: "HD2", name: "hanh duong 2" }
]

// kỹ năng
const skillList = [
    { id: 0, code: "Chưa có", name: "Chưa có" },
    { id: 1, code: "Cắm hoa", name: "Cắm hoa" },
    { id: 2, code: "Cắt tỉa trang trí món", name: "Cắt tỉa trang trí món" },
    { id: 3, code: "Chưng trái cây nghệ thuật", name: "Chưng trái cây nghệ thuật" },
    { id: 4, code: "Cơ khí", name: "Cơ khí" },
    { id: 5, code: "Cắt may cơ bản", name: "Cắt may cơ bản" },
    { id: 6, code: "Ngoại ngữ", name: "Ngoại ngữ" }
];

// nơi nhận thẻ
const receiveCardLocationList = [
    { id: 1, code: "HCMXL", name: "18h00 - 19h30, Thứ Tư (03/08/2022), Chùa Xá Lợi, 89 Bà Huyện Thanh Quan, P.7, Q.3" },
    { id: 2, code: "HCMNL", name: "18h00 - 19h30, Thứ Năm (04/08/2021), Chùa Định Phước Di Đà, Gần khu chợ nhỏ ĐH. Nông Lâm, Q.Thủ Đức" },
    { id: 3, code: "HCMBDT", name: "9h00 – 19h00, Thứ Sáu, Thứ Bảy, Chủ Nhật, Thứ Hai (05/08 - 08/08/2022) tại 47/96 Bùi Đình Túy - Q.Bình Thạnh" },
    { id: 999, code: "BD", name: "Gửi bưu điện" }
];

// const getBase64 = (img, callback) => {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
// };

// const beforeUpload = (file) => {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//         message.error('You can only upload JPG/PNG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//         message.error('Image must smaller than 2MB!');
//     }
//     return isJpgOrPng && isLt2M;
// };

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

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const Step4 = (props) => {
    const history = useHistory();
    const { title } = props;
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('giá trị nhập: ', values);
        history.push('/login');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Xảy ra lỗi:', errorInfo);
    };
    // số lần về chùa công quả
    // const [numberOfServing, setNumberOfServing] = useState(0);
    // // console.log("numberOfServing:", numberOfServing);
    // // các kỹ năng, sở trường
    // const [skills, setSkills] = useState([]);
    // // console.log("skills:", skills);
    // // ban kinh nghiệm
    // const [experienceDept, setExperienceDept] = useState(departmentList[0].id);
    // // console.log("experienceDept", experienceDept);
    // // ban nguyện vọng
    // const [aspirationDept, setAspirationDept] = useState(departmentList[0].id);
    // // console.log("aspirationDept", aspirationDept);
    // // nơi nhận thẻ
    // const [receiveCardLocation, setReceiveCardLocation] = useState({});
    // console.log("receiveCardLocation", receiveCardLocation);
    // // upload hình ảnh
    // const [loading, setLoading] = useState(false);
    // const [imageUrl, setImageUrl] = useState();

    // // handle event start
    // const handleChangeNumberOfServing = (e) => {
    //     console.log("số lần về chùa", e);
    //     setNumberOfServing(e);
    // }

    // const handleChangeSkills = (checkedValues) => {
    //     console.log('kỹ năng sở trường checked', checkedValues);
    //     setSkills(checkedValues);
    // };

    // const handleChangeExperienceDept = (value) => {
    //     console.log("ban kinh nghiệm", value);
    //     setExperienceDept(value);
    // };

    // const handleChangeAspirationDept = (value) => {
    //     console.log("ban nguyện vọng", value);
    //     setAspirationDept(value);
    // }

    // const handleChangeReceiveCardLocation = (e) => {
    //     console.log("địa điểm nhận thẻ", e.target.value);
    //     setReceiveCardLocation(e.target.value);
    // }

    // const handleChangeAvatar = (info) => {
    //     if (info.file.status === 'uploading') {
    //         setLoading(true);
    //         return;
    //     }
    //     if (info.file.status === 'done') {
    //         // Get this url from response in real world.
    //         getBase64(info.file.originFileObj, url => {
    //             setLoading(false);
    //             setImageUrl(url);
    //         });
    //     }
    // };

    // const uploadButton = (
    //     <div>
    //         {loading ? <LoadingOutlined /> : <PlusOutlined />}
    //         <div style={{ marginTop: 8 }}>Upload</div>
    //     </div>
    // );
    // // handle event end

    return (
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <strong style={{ fontSize: 16 }}>{title}</strong>
            {/* CeremonyServingRegister step 4 */}
            <Form
                name="CerSerRegStep4"
                form={form}
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    // 'numberOfServing': 1,
                }}
                onFinishFailed={onFinishFailed}
                scrollToFirstError
            >
                <Form.Item
                    name="numberOfServing"
                    label="Số lần đã về chùa công quả"
                    rules={[{ required: true, message: 'Xin hãy chọn số lần về chùa công quả!' }]}
                >
                    <Radio.Group>
                        {numberOfServingList != null && numberOfServingList.map(
                            item => <Radio value={item.id} key={item.id}>{item.name}</Radio>
                        )}
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="skill"
                    label="Kỹ năng, sở trường"
                    hasFeedback
                    rules={[{ required: true, message: 'Xin hãy chọn kỹ năng, sở trường!' }]}
                >
                    <Select placeholder="Chọn kỹ năng, sở trường">
                        {skillList != null && skillList.map(
                            item => <Option value={item.id} key={item.id}>{item.name}</Option>
                        )}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="experienceDept"
                    label="Có kinh nghiệm"
                    hasFeedback
                    rules={[{ required: true, message: 'Xin hãy chọn ban đã có kinh nghiệm!' }]}
                    tooltip="Huynh đệ có kinh nghiệm làm ở công việc (BAN) nào?"
                >
                    <Select placeholder="Chọn ban đã có kinh nghiệm">
                        {departmentList != null && departmentList.map(
                            item => <Option key={item.id} value={item.id}>{item.name}</Option>
                        )}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="aspirationDept"
                    label="Có nguyện vọng"
                    hasFeedback
                    rules={[{ required: true, message: 'Xin hãy chọn ban nguyện vọng!' }]}
                    tooltip="Huynh đệ có nguyện vọng làm ở công việc (BAN) nào?"
                >
                    <Select placeholder="Chọn ban có nguyện vọng">
                        {departmentList != null && departmentList.map(
                            item => <Option key={item.id} value={item.id}>{item.name}</Option>
                        )}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="receiveCardLocation"
                    label="Nơi nhận thẻ"
                    hasFeedback
                    rules={[{ required: true, message: 'Xin hãy chọn nơi nhận thẻ!' }]}
                    tooltip="Huynh đệ vui lòng đến ĐÚNG KHUNG GIỜ như thông báo bên dưới ạ"
                >
                    <Select placeholder="Chọn nơi nhận thẻ">
                        {receiveCardLocationList != null && receiveCardLocationList.map(
                            item => <Option value={item.id} key={item.id}>{item.name}</Option>
                        )}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Ảnh làm thẻ"
                >
                    <Form.Item
                        name="upload"
                        noStyle
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Chọn ảnh tải lên</Button>
                        </Upload>
                        <span>Ảnh chụp chân dung bằng điện thoại với nền đơn sắc, rõ nét, chính diện hoặc ảnh chụp hình thẻ 3x4 (mới nhất)</span>
                    </Form.Item>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Hoàn thành
                    </Button>
                </Form.Item>
            </Form>
            {/* <form style={{ marginTop: 10 }}>
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
            </div> */}
        </div>
    );
};

// const WrappedDynamicRule = Form.create({ name: "dynamic_rule" })(Step3);

export default Step4;
