import { Layout } from "antd";
import React from "react";
import { Footer, Header, Loading } from "../common";
import { HomePage } from "../pages/home/homePage";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Link } from "react-router-dom";

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
          {/* <FloatingWhatsApp phoneNumber={"+250787039222"} accountName={"Eloi Chrysanthe"} /> */}
          <Link
            id="whatsapp-button"
            to={`https://web.whatsapp.com/send?phone=+250786384595&text=Hello%21+I+have+a+question.&type=phone_number&app_absent=0`}
            target="_blank"
          />
          <Footer />
        </>
      )}
    </Layout>
  );
};
