import React from "react";
import { Layout, Typography } from "antd";
import { Button } from "./button";
import "../styles/packages.css";

interface Props {
  title: string;
  description: string;
  image: string;
}

const PackageCard: React.FC<Props> = ({ title, description, image }) => {
  return (
    <Layout.Content className="card">
      <div className="card_image">
        <img
          src={
            image.startsWith("http") ? image : require("../assets/giraffe.jpeg")
          }
          alt=""
        />
      </div>
      <div className="card-content">
        <Typography className="card_title">{title}</Typography>
        <p className="card_description">{description}</p>
        <div className="card_btn">
          <Button title="Learn more" />
        </div>
      </div>
    </Layout.Content>
  );
};

export default PackageCard;
