import React, {useState, useEffect} from 'react';
import {useIntl} from 'umi';
import './index.less';
import { Dropdown, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { PeriodEnum } from './period.enum';
interface props {
  selected?: Function;
}

const PeriodBlock: React.FC<props> =  ({selected}) => {
  const intl = useIntl();

  const onSelected = (event: any) => {
    const {key} = event;
    selected && selected(key);
  }
  const menu = (
    <Menu onClick={onSelected}>
      <Menu.Item key={PeriodEnum[PeriodEnum.month]} >{intl.formatMessage({id: 'periodBlock.month'})} </Menu.Item>
      <Menu.Item key={PeriodEnum[PeriodEnum.bimester]} >{intl.formatMessage({id: 'periodBlock.bimester'})} </Menu.Item>
      <Menu.Item key={PeriodEnum[PeriodEnum.trimester]} >{intl.formatMessage({id: 'periodBlock.trimester'})} </Menu.Item>
      <Menu.Item key={PeriodEnum[PeriodEnum.semester]} >{intl.formatMessage({id: 'periodBlock.semester'})} </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Dropdown.Button overlay={menu} icon={<EllipsisOutlined />}></Dropdown.Button>
    </>
  );
}

export default PeriodBlock;