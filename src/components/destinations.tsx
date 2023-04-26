import React from "react";
import "../styles/destinations.css";
import { Layout } from "antd";
import { DestinationCard } from "./destinationCard";

interface Destination {
  image: string;
  description: string;
  title: string;
}

interface Props {
  destinations: Array<Destination>;
}

export const Destinations: React.FC<Props> = ({ destinations }) => {
  return (
    <Layout.Content className="main-container">
      <div className="destination_container">
        {destinations.map((item) => {
          return (
            <DestinationCard
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
