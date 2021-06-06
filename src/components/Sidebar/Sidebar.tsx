import { Button, Menu, Space } from 'antd';
import { Avatar, Layout } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';

import React, { FC } from 'react';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import MailOutlined from '@ant-design/icons/MailOutlined';

const { Sider, Content } = Layout;

type Props = {
  onChange?: (name: string) => void;
};

const Sidebar = ({ onChange }: Props) => {
  const handleOnClick = (e: MenuInfo) => {
    onChange && onChange(e.key);
  };

  return (
    <Sider width={200} style={{ height: '100vh' }}>
      <Menu
        mode="inline"
        onClick={handleOnClick}
        style={{
          height: '100%',
          borderRight: 0,
          backgroundColor: '#323242',
          color: 'white',
        }}>
        <Menu.Item key="home" style={{ height: '14vh', alignItems: 'center' }}>
          <Space direction="horizontal">
            <Avatar
              size={64}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              style={{ display: 'block', border: '3px solid white' }}
            />
            <Button
              shape="circle"
              style={{ backgroundColor: 'white' }}
              icon={<SettingOutlined />}
            />
            <Button
              shape="circle"
              style={{ backgroundColor: 'white' }}
              icon={<MailOutlined />}
            />
          </Space>
        </Menu.Item>
        <Menu.Item key="cards">Карты</Menu.Item>
        <Menu.Item key="account">Вклады и счета</Menu.Item>
        <Menu.Item key="credits">Кредиты</Menu.Item>
        <Menu.Item key="invest">Инвестиции</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
