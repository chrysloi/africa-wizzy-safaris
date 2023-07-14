import React from "react";
import PackageCard from "./packageCard";
import "../styles/packages.css";
import { Layout } from "antd";
import { MySwipe } from "./swiper";

interface Package {
  image: string;
  description: string;
  title: string;
}

interface Props {
  packages: Array<Package>;
}

const Packages: React.FC<Props> = ({ packages }) => {
  // const slides = [
  //   { imageUrl: "https://picsum.photos/200/300?random=1" },
  //   { imageUrl: "https://picsum.photos/200/300?random=2" },
  //   { imageUrl: "https://picsum.photos/200/300?random=3" },
  // ];
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
        {/* <MySwipe slides={packages} /> */}
      </div>
    </Layout.Content>
  );
};

export default Packages;
