import React from "react";
import type { FC } from "react";
import { ConfigProvider } from "antd";
import "antd/dist/antd";
import "./App.css";
import "typeface-poppins";
import { PrimaryColor } from "./utils/colors";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { AppHeader } from "./components/appheader";

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
      <Router>
        <AppHeader />
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.Element} />
          ))}
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;
