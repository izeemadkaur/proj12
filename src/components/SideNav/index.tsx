// Import React to use JSX
import React from "react";
import Styles from "./index.module.css";
import { useNavigate } from "@/util/util";

const SideNav = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Coverage", path: "/application-coverage" },
    { label: "Underwriting", path: "/underwriting-questions" },
  ];

  return (
    <div className={Styles.SideNav}>
      <ul className={Styles.NavList}>
        {navItems.map((nav, index) => (
          <li
            key={index}
            className={Styles.NavItem}
            onClick={() => navigate(nav.path)}
          >
            <button className={Styles.NavButton}>{nav.label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
