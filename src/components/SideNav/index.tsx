// Import React to use JSX
import React from 'react';
import Styles from "./index.module.css";

const SideNav = () => {
  // Define the navigation items
  const navItems = Array.from({ length: 20 }, (_, i) => `Navigation`);

  return (
    <div className={Styles.SideNav}>
      <ul className={Styles.NavList}>
        {navItems.map((item, index) => (
          <li key={index} className={Styles.NavItem}>
            <button className={Styles.NavButton}>{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
