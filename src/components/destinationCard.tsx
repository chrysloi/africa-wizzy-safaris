import React from "react";
import "../styles/destinations.css";

interface Props {
  title: string;
  description: string;
  image: string;
}

export const DestinationCard: React.FC<Props> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="">
      <img
        src={
          image.startsWith("http") ? image : require("../assets/giraffe.jpeg")
        }
        alt=""
        className="image"
      />
    </div>
  );
};
