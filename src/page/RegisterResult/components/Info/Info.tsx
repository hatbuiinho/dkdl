import { Card, Form, Input } from 'antd';
import React from 'react';

type Item = {
  name: string;
  label: string;
  value?: any;
};
type Data = Array<Item>;
type InfoProps = {
  data: Data;
  title: string;
  className?: string;
};

const { Item } = Form;
const Info = (props: InfoProps) => {
  const { data, title, className } = props;
  return (
    <Card size="small" title={title} className={className}>
      {data.map((input) => (
        <Input {...input} />
      ))}
    </Card>
  );
};

export default Info;
