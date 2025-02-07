import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  MoneyCollectOutlined,
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import Icon from "../Images/cryptocurrency.png";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={Icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"> </Button> */}
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/News">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
