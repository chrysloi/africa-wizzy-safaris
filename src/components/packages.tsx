import React from "react";
import PackageCard from "./packageCard";
import "../styles/packages.css";
import { Layout } from "antd";

interface Package {
  image: string;
}

interface Props {
  packages: Array<Package>;
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
            // <div
            //   style={{
            //     // backgroundColor: "red",
            //     marginRight: "10px",
            //     marginBottom: "10px",
            //     borderWidth: "10px",
            //     borderColor: "#fff",
            //   }}
            // >
            <PackageCard
              title="Akagera National Park"
              description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks. Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks. Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
              image={item.image}
            />
            // </div>
          );
        })}
      </div>
    </Layout.Content>
  );
};

export default Packages;
