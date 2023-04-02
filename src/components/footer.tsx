import React from "react";
import { Footer as Down } from "antd/es/layout/layout";
import { PrimaryColor } from "../utils/colors";
import { Text } from "./text";

// type Props = {}

export const Footer: React.FC = () => {
  return (
    <Down
      style={{
        backgroundColor: PrimaryColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40% 20% 40%",
          width: "90%",
        }}
      >
        <div>
          <Text
            title="If you have an questions,"
            style={{
              fontcolor: "#fff",
              fontsize: "2.5vw",
            }}
          />
          <Text
            title="Let us help you!"
            style={{
              fontcolor: "#fff",
              marginBottom: "2vh",
              fontsize: "2.5vw",
            }}
          />
          <div>
            <Text
              title="If you have any questions or would like to book a tour with us, please don't hesitate to contact us."
              style={{
                fontcolor: "#fff",
                fontsize: "2vw",
              }}
            />
          </div>
        </div>
        <div></div>
      </div>
      <div style={{ display: "flex", margin: "15px 0px" }}>
        <Text title="&#169;" style={{ fontcolor: "#fff" }} />
        <Text
          title={`Africa Wizzy Safari ${new Date().getFullYear()}`}
          style={{ fontcolor: "#fff" }}
        />
      </div>
    </Down>
  );
};
