import { Button, Menu, Space } from 'antd';
import { Avatar, Layout } from 'antd';
import React, { FC } from 'react';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import MailOutlined from '@ant-design/icons/MailOutlined';

const { Sider, Content } = Layout;

const Sidebar = () => {
  return (
    <Content>
      <Layout>
        <Sider width={200} style={{ height: '100vh' }}>
          <Menu
            mode="inline"
            style={{
              height: '100%',
              borderRight: 0,
              backgroundColor: '#323242',
              color: 'white',
            }}>
            <Menu.Item key="1" style={{ height: '14vh', alignItems: 'center' }}>
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
            <Menu.Item key="2">Карты</Menu.Item>
            <Menu.Item key="3">Вклады и счета</Menu.Item>
            <Menu.Item key="4">Кредиты</Menu.Item>
            <Menu.Item key="5">Инвестиции</Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    </Content>
  );
};

export default Sidebar;
