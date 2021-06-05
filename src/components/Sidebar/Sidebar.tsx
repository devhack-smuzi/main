import { Button, Menu, Space } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { FC } from "react";
import { SettingOutlined, MailOutlined } from "@ant-design/icons";

export type SidebarPropsType = {};

export const Sidebar: FC<SidebarPropsType> = (props) => {
  return (
    <Content>
      <Layout>
        <Sider width={200} style={{ height: "100vh" }}>
          <Menu
            mode="inline"
            style={{
              height: "100%",
              borderRight: 0,
              backgroundColor: "#323242",
              color: "white",
            }}
          >
            <Menu.Item key="1" style={{ height: "14vh", alignItems: "center" }}>
              <Space direction="horizontal">
                <Avatar
                  size={64}
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  style={{ display: "block", border: "3px solid white" }}
                />
                <Button
                  shape="circle"
                  style={{ backgroundColor: "white" }}
                  icon={<SettingOutlined />}
                />
                <Button
                  shape="circle"
                  style={{ backgroundColor: "white" }}
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
