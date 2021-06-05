import React, { FC } from "react";
import { Header as AntdHeader } from "antd/lib/layout/layout";
import { Menu } from "antd";
import "./Header.css";

export type HeaderPropsType = {};
export const Header: FC<HeaderPropsType> = (props) => {
  return (
    <AntdHeader className="header">
      ПСБ
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">Главная</Menu.Item>
        <Menu.Item key="2">Платежи</Menu.Item>
        <Menu.Item key="3">История</Menu.Item>
        <Menu.Item key="4">Каталог</Menu.Item>
        <Menu.Item key="5">Настройки</Menu.Item>
      </Menu>
    </AntdHeader>
  );
};
