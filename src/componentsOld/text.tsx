import { Typography } from "antd";
import React from "react";
import "typeface-poppins";

interface Props {
  title: string;
  style?: {
    fontsize?: string;
    fontweight?: string;
    fontcolor?: string;
    maxWidth?: string;
    marginBottom?: string;
  };
  type?: string;
}

export const Text: React.FC<Props> = ({ title, style, type }) => {
  return (
    <Typography
      style={{
        color: style?.fontcolor,
        maxWidth: style?.maxWidth,
        fontWeight: style?.fontweight,
        fontSize: style?.fontsize,
        marginBottom: style?.marginBottom,
        fontFamily: "serif",
      }}
    >
      {title}
    </Typography>
  );
};
