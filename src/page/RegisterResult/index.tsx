import React from 'react';
import { Typography, Row, Col, Form } from 'antd';
import { JobInfo, UserAvatar, PersonalInfo, TripInfo } from './components';
import ExtraInfo from './components/Info/ExtraInfo';
import { Box, Fade, Flex, Image } from '@chakra-ui/react';
import { Variants } from 'framer-motion';
import FadeIn from '../../component/Common/Animation/FadeInUp';
import App from './components/Transition';

const result = {
  name: 'Đặng Thị Mỹ Trinh',
  buddaName: 'Thể Nguyệt Chơn',
  gender: 'Nữ',
  yob: 1999,
  cccd: '077199003258',
  phone: '0898683018',
  email: 'tringdang1999@gmail.com',
  workPlace: 'TP Bà Rịa',
  registerType: 'Cá nhân',
};
const res = {
  id: 0,
  maSo: 'string',
  memberId: 0,
  noiXuatPhat: 'nơi xuất phát',
  thoiDiemVeChua: 'thời điểm về chùa',
  thoiDiemVeNoiXuatPhat: 'thời điểm về nơi xuất phát',
  noiNhanThe: 'Nơi nhận thẻ',
  trangThaiIn: 0,
  trangThaiNhanThe: 0,
  dotDangKy: 'đợt đăng ký',
  khuVuc: 'string',
  nhomTruongKhuVuc: 'trưởng nhóm khu vực',
  hdChamSoc: 'HD chăm sóc',
  thongTinThayDoi: 'thông tin thay đổi',
  diaChi_IDQuocGia: 0,
  diaChi_IDTinh: 0,
  diaChi_IDHuyen: 0,
  diaChi_IDXa: 0,
  diaChi_SoNha: 'string',
  idDaiLe: 0,
  vaiTro: 'vai trò',
  tuNgay: '2022-10-20T10:58:13.444Z',
  denNgay: '2022-10-20T10:58:13.444Z',
  ghiChu: 'ghi chú',
  trangThai: 0,
  inUsed: true,
  createdBy: 0,
  createdAt: '2022-10-20T10:58:13.445Z',
  updatedBy: 0,
  updatedAt: '2022-10-20T10:58:13.445Z',
  isDuyet: false,
  isChinhSua: 0,
  teamLeader: 'tên trưởng nhóm',
  phanLoaiThanhNien: 0,
  brmMemberId: 0,
  ma: 'string',
  maBanKinhNghiem: 'mã ban kinh nghiệm',
  maBanNguyenVong: 'mã ban nguyện vọng',
  tenBanKinhNghiem: 'tên ban kinh nghiệm',
  tenBanNguyenVong: 'Tên ban nguyện vọng',
  thoiGianVeChua: '2022-10-20T10:58:13.445Z',
  thoiGianVeDiemXuatPhat: '2022-10-20T10:58:13.445Z',
  maChuyenBayDen: 'mã chuyến bay đến',
  maChuyenBayVe: 'mã chuyến bay về',
};
/* 
Nơi sinh hoạt
Họ tên
Giới tính
Năm sinh
CCCD
SDT
Địa điểm xuất phát
Thời gian về chùa

 */

const fadeInVariants: Variants = {
  start: {
    opacity: 0,
    translateY: 5,
  },
  end: {
    opacity: 1,
    translateY: 0,
  },
};
const { Title } = Typography;

const RegisterResult = (props) => {
  return (
    <div className="container-fluid">
      <Title className="text-center my-3">Thông tin đăng ký và kết quả phân ban</Title>

      <Form
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={24} md={8} lg={6}>
            <UserAvatar name="Tên Huynh Đệ" />
          </Col>
          <Col xs={24} md={16} lg={18}>
            <Row gutter={10}>
              <Col>
                <JobInfo className="d-flex flex-column border rounded" />
              </Col>
              <Col>
                <TripInfo className="d-flex flex-column border rounded" />
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Form>
      {/* <Testimo /> */}
      <FadeIn>
        <ExtraInfo />
      </FadeIn>
      <App />
    </div>
  );
};

export default RegisterResult;
