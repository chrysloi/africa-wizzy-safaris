import { Layout } from "antd";
import React from "react";
import { Footer, Header, Loading } from "../common";
import { HomePage } from "../pages/home/homePage";

export const MainLayout: React.FC<any> = ({ children }) => {
  const [load, setLoad] = React.useState(false);
  React.useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);
  return (
    <Layout>
      {load ? (
        <Loading />
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </Layout>
  );
};
