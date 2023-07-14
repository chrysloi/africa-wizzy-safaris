import React from "react";
import { Footer } from "../componentsOld/footer";
import { Text } from "../componentsOld/text";
import "../styles/main.css";
import Packages from "../componentsOld/packages";
import { destination, packages } from "../utils/data";
import { SectionTitle } from "../componentsOld/sectionTitle";
import { Destinations } from "../componentsOld/destinations";

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
      {/* <div className="title">
        <Text
          title=""
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
          
        </Typography>
      </div> */}
      <SectionTitle
        title="Choose your Package"
        subTitle="Select your Best Package for your Travel"
      />
      <Packages packages={packages} />
      <SectionTitle
        title="Popular Destinations"
        subTitle="Select Our Best Popular Destinations"
      />
      <Destinations destinations={destination} />
      <Footer />
    </div>
  );
};
