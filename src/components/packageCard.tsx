import React from "react";
import { Text } from "./text";
import { Layout } from "antd";
import "../styles/packageCard.css";

interface Props {
  title: string;
  description: string;
  style?: {
    fontsize?: string;
    fontweight?: string;
    fontcolor?: string;
    maxWidth?: string;
    marginBottom?: string;
  };
  image: string;
}

const PackageCard: React.FC<Props> = ({ title, description, style, image }) => {
  return (
    <Layout.Content className="card">
      <img
        src={
          image.startsWith("http") ? image : require("../assets/giraffe.jpeg")
        }
        className="card_image"
        alt=""
      />
      <div className="card_overlay">
        <div className="card_header">
          <svg className="card_arc" xmlns="http://www.w3.org/2000/svg">
            <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
          </svg>
          <div className="card_header-text">
            <h3 className="card_title">{title}</h3>
            {/* <span className="card_status">1 hour ago</span> */}
          </div>
        </div>
        <p className="card_description">{description}</p>
      </div>
      {/* <Text title={title} style={{}} />
      <Text title={description} /> */}
    </Layout.Content>
  );
};

export default PackageCard;
