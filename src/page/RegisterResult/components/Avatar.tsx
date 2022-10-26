import { UserOutlined } from '@ant-design/icons';
import { Avatar, Input } from 'antd';
import React from 'react';

const NoBoderInput = (props) => (
  <Input {...props} className={`border-0 bg-light ${props.className}`} />
);

type Props = {
  name?: string;
  link?: string;
};

const UserAvatar = (props: Props) => {
  const { name, link } = props;
  return (
    <div className="mb-2 d-flex align-items-center flex-column">
      <Avatar src={link} size={100} icon={<UserOutlined />} className="mb-2" />
      <NoBoderInput value={name} className="text-center bg-light" />
    </div>
  );
};

export default UserAvatar;
