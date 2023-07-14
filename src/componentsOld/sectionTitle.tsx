import React from "react";
import { Text } from "./text";
import { Typography } from "antd";
import { SecondaryColor } from "../utils/colors";

interface Props {
  title: string;
  subTitle: string;
}

export const SectionTitle: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <div
      className="title"
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text
        title={title}
        style={{
          fontcolor: SecondaryColor,
          fontsize: "2vw",
          fontweight: "bold",
        }}
      />
      <Typography
        style={{
          color: "#000",
          maxWidth: "30vw",
          fontWeight: "bold",
          fontSize: "2.5vw",
          fontFamily: "serif",
          textAlign: "center",
        }}
      >
        {subTitle}
      </Typography>
    </div>
  );
};
