import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const menuItems = ["MacBook", "HP Series", "MSI"];

export const NavBar = () => {
  const handleClick = () => {
    const menuList = document.getElementById("menuList");
    if (menuList.classList.contains("active")) {
      menuList.classList.remove("active");
    } else menuList.classList.add("active");
  };

  return (
    <div className="navbar">
      <a href="/">
        <img src="images/logo.png" className="logo" />
      </a>
      <nav>
        <ul id="menuList">
          {menuItems.map((item) => (
            <li key={item}>
              <a href={`/${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <MenuIcon className="menu-icon" onClick={handleClick} />
    </div>
  );
};
