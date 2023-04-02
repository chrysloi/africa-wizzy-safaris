import React from "react";
import PackageCard from "./packageCard";
import "../styles/packages.css";
import { Layout } from "antd";

interface Props {
  packages: Array<Object>;
  // description: string;
  // style?: {
  //   fontsize?: string;
  //   fontweight?: string;
  //   fontcolor?: string;
  //   maxWidth?: string;
  //   marginBottom?: string;
  // };
}

const Packages: React.FC<Props> = ({ packages }) => {
  console.log(Array.isArray(packages));

  return (
    <Layout.Content className="main-container">
      <div className="container">
        {packages.map((item) => {
          return (
            <PackageCard
              title="Akagera National Park"
              description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
            />
          );
        })}
      </div>
    </Layout.Content>
  );
};

export default Packages;
