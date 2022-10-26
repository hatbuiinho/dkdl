import { Form, Input } from 'antd';
import React from 'react';

type Props = {
  noOfServing?: number;
  experienceJob?: string;
  expectationJob?: string;
};

const { Item } = Form;
const JobInfo = (props: Props) => {
  const { noOfServing, expectationJob, experienceJob } = props;
  const JOB_INFO = [
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
    <div className="d-flex flex-column">
      {JOB_INFO.map((job) => (
        <Item key={job.name} name={job.name}>
          <div className="form-floating">
            <Input
              size="small"
              className="form-control form-control-sm"
              placeholder={job.label}
              value={job.value}
              id={job.name}
            />
            <label htmlFor={job.name}>{job.label}</label>
          </div>
        </Item>
      ))}
    </div>
  );
};

export default JobInfo;
