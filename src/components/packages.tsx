import React from "react";
import PackageCard from "./packageCard";
import "../styles/packages.css";
import { Layout } from "antd";

interface Package {
  image: string;
  description: string;
  title: string;
}

interface Props {
  packages: Array<Package>;
}

const Packages: React.FC<Props> = ({ packages }) => {
  return (
    <Layout.Content className="packages-container">
      <div className="container">
        {packages.map((item) => {
          return (
            <PackageCard
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </Layout.Content>
  );
};

export default Packages;
