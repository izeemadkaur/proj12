import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import InfoBox from "../components/InfoBox";

const GtlTheme = {
  primaryColor: "#2f61ff",
  accentColor: "white",
  font: "Lato",
  // backgroundImage: `${GtlBackground}`,
  headerColor: "#252C43",
  footerColor: "rgb(47, 115, 349)",
};

const Theme = ({ children }: any) => {
  return (
    <div>
      <ThemeProvider theme={GtlTheme}>
        {" "}
        <Header />
        <div className="Page">
          <SideNav />
          <div className="Content">
            {children}
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Theme;
