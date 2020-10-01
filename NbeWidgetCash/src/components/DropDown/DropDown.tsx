import React from 'react';
import { Menu, Dropdown } from 'antd';
import { useIntl } from 'umi';
import './Dropdown.css';

const DropDown: React.FC<any> = ({ setDrop }) => {
  const handleKey = ({ key }: any) => {
    setDrop(key);
  };
  const intl = useIntl();

  const menu = (
    <Menu className="drop" onClick={handleKey}>
      <Menu.Item key="1">
        {intl.formatMessage({
          id: 'cash.month',
        })}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        {intl.formatMessage({
          id: 'cash.bimester',
        })}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        {intl.formatMessage({
          id: 'cash.trimester',
        })}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4">
        {intl.formatMessage({
          id: 'cash.semester',
        })}
      </Menu.Item>
    </Menu>
  );

  return <Dropdown.Button overlay={menu} placement="bottomCenter" />;
};

export default DropDown;
