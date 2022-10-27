import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Select, Layout, Tabs, Radio, Space, Rate, Checkbox, Col, Row, Form, Button, Upload, message, Image } from 'antd';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';

// const { Content } = Layout;
// const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;
// số lần công quả
const numberOfServingList = [
    { id: 0, name: "Chưa có" },
    { id: 1, name: "1 lần" },
    { id: 2, name: "2 lần" },
    { id: 3, name: "3 lần" },
    { id: 4, name: "Trên 3 lần" }
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
                        name="uploadImage"
                        noStyle
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Chọn ảnh tải lên</Button>
                        </Upload>
                        <span>Ảnh chụp chân dung bằng điện thoại với nền đơn sắc, rõ nét, chính diện hoặc ảnh chụp hình thẻ 3x4 (mới nhất)</span>
                        <Image width={200} src="/images/anh-mau.png" alt='ảnh mẫu'/>
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    label="Ghi chú"
                    name="note"
                >
                    <TextArea rows={5} placeholder="Huynh đệ có thắc mắc gì không ạ?" maxLength={255} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Hoàn thành
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Step4;
