import { Tabs } from 'antd';
// import React from 'react';
import './style.scss';
import { Typography, Button } from 'antd';
const { Title } = Typography;
import fest_infos from '../../configs/festival';
// import '../../../assets/images/layouts/festival/BAN_MT.jpg'
export const Festival = () => {
  return (
    <div style={{}}>
      {/* <Title style={{ padding: '10px 40px' }}>
        Giới thiệu các ban tham gia Công quả Đại Lễ!
      </Title> */}
      <Tabs defaultActiveKey="0">
        {fest_infos.map((data, i) => (
          <Tabs.TabPane tab={data.tab} key={i}>
            <div className="festival_item">
              <Title
                style={{
                  textAlign: 'center',
                }}
              >{`BAN ${data.tab}`}</Title>

              <div className="festival_item_body">
                <div className="container_img">
                  <img style={{ width: '40%' }} src="/images/festival/BAN_MT.jpg"></img>
                </div>
                <div
                  className="container_content"
                  style={{
                    textAlign: 'justify',
                  }}
                >
                  {data.content}
                </div>
                <div
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <Button shape="round" style={{ background: 'green', height: '60px' }}>
                    <Title style={{ color: 'white' }}>Đăng ký ngay!</Title>
                  </Button>
                </div>
              </div>
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};
