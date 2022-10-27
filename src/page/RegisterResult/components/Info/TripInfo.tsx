import { Card, Form, Input } from 'antd';
import React from 'react';
import FloatingLabelInput from '../../../../component/Form/FloatingLabel';
import CustomList from '../../../container/Lists/ItemList';
import Info from './Info';

/*
startPlace
returnPlace
camePagodaTime
*/
type Props = {
  startPlace?: string;
  returnPlace?: string;
  camePagodaTime?: string;
  className?: string;
};
const { Item } = Form;
const TripInfo = (props: Props) => {
  const { startPlace, returnPlace, camePagodaTime, className } = props;
  const data = [
    {
      name: 'startPlace',
      label: 'Địa điểm xuất phát',
      value: startPlace,
    },
    {
      name: 'returnPlace',
      label: 'Thời gian về lại nơi xuất phát',
      value: returnPlace,
    },
    {
      name: 'camePagodaTime',
      label: 'Thời gian về chùa',
      value: camePagodaTime,
    },
  ];
  return <Info data={data} title="Thông tin chuyến đi" className={className} />;
};

export default TripInfo;

/*

*/
