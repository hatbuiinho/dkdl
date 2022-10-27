import { Card, Form, Input } from 'antd';
import React from 'react';
import FloatingLabelInput from '../../../../component/Form/FloatingLabel';
import Info from './Info';

type Props = {
  noOfServing?: number;
  experienceJob?: string;
  expectationJob?: string;
  className?: string;
};

const { Item } = Form;
const JobInfo = (props: Props) => {
  const { noOfServing, expectationJob, experienceJob, className } = props;
  const data = [
    {
      name: 'noOfServing',
      label: 'Số lần công quả',
      value: noOfServing,
    },
    {
      name: 'experienceJob',
      label: 'Kinh nghiệm ở ban',
      value: experienceJob,
    },
    {
      name: 'expectationJob',
      label: 'Nguyện vọng vào ban',
      value: expectationJob,
    },
  ];

  return (
    <Info title="Thông tin công việc" data={data} className={className} />
  );
};

export default JobInfo;
