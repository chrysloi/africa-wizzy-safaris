import React from "react";
import { Image, Layout, Menu } from "antd";
import Logo from "../assets/Logo.svg";
import "../styles/appheader.css";
import { Button } from "./button";
import { Link } from "react-router-dom";

export const AppHeader: React.FC = () => {
  return (
    <Layout.Header
      style={{
        width: "100%",
        height: "10vh",
        backgroundColor: "#fff",
      }}
    >
      <div className="navbar-container">
        <Image src={Logo} height={"100%"} width="50px" preview={false} />
        <Menu mode="horizontal" className="titles" defaultActiveFirst>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">About us</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/tourpackage">Tour Package</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/gallery">Gallery</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/blog">Blog</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="contact">Contact us</Link>
          </Menu.Item>
        </Menu>
        <div className="btn">
          <Button title="Sign in" />
        </div>
      </div>
    </Layout.Header>
  );
};
