import { Typography } from "antd";
import React from "react";
import { Footer } from "../components/footer";
import { Text } from "../components/text";
import "../styles/main.css";
import { SecondaryColor } from "../utils/colors";
import PackageCard from "../components/packageCard";
import Packages from "../components/packages";

export const HomePage: React.FC = () => {
  return (
    <div>
      <div className="banner">
        <div className="barnner-shadow">
          <Text
            title="Experience the beauty of Rwanda with us"
            style={{
              maxWidth: "50vw",
              fontcolor: "#fff",
              fontweight: "bolder",
              fontsize: "4vw",
            }}
          />
          <Text
            title="Discover a land of a thousand hills"
            style={{
              fontcolor: "#fff",
              fontsize: "1.5vw",
            }}
          />
        </div>
      </div>
      <div className="title">
        <Text
          title="Choose your Package"
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
          Select your Best Package for your Travel
        </Typography>
      </div>
      <Packages packages={[{ name: 1 }, { name: 2 }, { name: 3 }]} />
      <Footer />
    </div>
  );
};
