import React from "react";
import { Text } from "./text";

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
}

const PackageCard: React.FC<Props> = ({ title, description, style }) => {
  return (
    <div style={{ width: "32%", borderWidth: "10px", borderColor: "red" }}>
      <Text title={title} style={{}} />
      <Text title={description} />
    </div>
  );
};

export default PackageCard;
