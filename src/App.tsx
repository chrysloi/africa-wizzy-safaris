import React from "react";
import type { FC } from "react";
import { ConfigProvider, Switch } from "antd";
import "antd/dist/antd";
import "./App.css";
import "typeface-poppins";
import { PrimaryColor } from "./utils/colors";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { HomePage } from "./components/pages/home/homePage";
import { Packages } from "./components/pages/packages/packages";
import { Contact } from "./components/pages/contact/contact";
import { PackageDetails } from "./components/pages/packageDetails/packageDetails";

const App: FC = () => {
  // const history = createBrowserHistory();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PrimaryColor,
        },
      }}
    >
      <Router basename="/">
        <MainLayout>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/package" Component={Packages} />
            <Route path="/package-details" Component={PackageDetails} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        </MainLayout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
