import React from "react";
import { Layout, Typography } from "antd";
// import "../styles/packageCard.css";
import "../styles/packages.css";
import { Button } from "./button";

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
          // className="card_image"
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
      {/* <div className="card_header-text">
        <h3 className="card_title">{title}</h3>
      </div> */}
    </Layout.Content>
  );
  // return (
  //   <Layout.Content className="card">
  //     <img
  //       src={
  //         image.startsWith("http") ? image : require("../assets/giraffe.jpeg")
  //       }
  //       className="card_image"
  //       alt=""
  //     />
  //     <div className="card_overlay">
  //       <div className="card_header">
  //         <svg className="card_arc" xmlns="http://www.w3.org/2000/svg">
  //           <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
  //         </svg>
  //         <div className="card_header-text">
  //           <h3 className="card_title">{title}</h3>
  //         </div>
  //       </div>
  //       <p className="card_description">{description}</p>
  //     </div>
  //   </Layout.Content>
  // );
};

export default PackageCard;
