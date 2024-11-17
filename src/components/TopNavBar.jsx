import React from "react";
import { Layout, Menu, Avatar, Dropdown, Button } from "antd";
import { useNavigate, Link } from "react-router-dom";

import {
  UserOutlined,
  MoreOutlined,
  QuestionCircleTwoTone,
  MessageTwoTone,
  BellTwoTone,
} from "@ant-design/icons";
import "../styles/header.css";

const { Header } = Layout;

const TopNavBar = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Settings</Menu.Item>
      <Menu.Item key="2">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header className="header">
      <Link to="/">
        <div className="logo">
          <img src="../assets/laara.svg" alt="Logo" />
        </div>
      </Link>
      <Menu theme="light" mode="horizontal" className="navbar-menu">
        <Menu.Item key="1">List A Property</Menu.Item>
        <Menu.Item key="2">
          <Button
            icon={<QuestionCircleTwoTone style={{ fontSize: "24px" }} />}
            shape="default"
          />
        </Menu.Item>
        <Menu.Item key="3">
          <Button
            icon={<MessageTwoTone style={{ fontSize: "24px" }} />}
            shape="default"
          />
        </Menu.Item>
        <Menu.Item key="4">
          <Button
            icon={<BellTwoTone style={{ fontSize: "24px" }} />}
            shape="default"
          />
        </Menu.Item>
      </Menu>
      <div className="profile-avatar">
        <Avatar size="large" icon={<UserOutlined />} />
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button
            icon={<MoreOutlined />}
            shape="circle"
            onClick={(e) => e.preventDefault()}
          />
        </Dropdown>
      </div>
    </Header>
  );
};

export default TopNavBar;
