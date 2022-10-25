import { Empty } from 'antd';
import React from 'react';

const NotFound = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center min-vh-100">
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        description="Page Not Found (404)"
        imageStyle={{
          height: 200,
        }}
      />
    </div>
  );
};

export default NotFound;
