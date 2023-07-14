import React from "react";
import { Button as Btn } from "antd";
import { SecondaryColor } from "../utils/colors";

interface Props {
  title: string;
}

export const Button: React.FC<Props> = ({ title }) => {
  return (
    <Btn
      style={{
        backgroundColor: SecondaryColor,
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        borderRadius: "5px",
        // fontFamily: "monospace",
      }}
    >
      {title}
    </Btn>
  );
};
