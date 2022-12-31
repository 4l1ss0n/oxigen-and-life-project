import React from "react";

import "./Styles.css";
import Logo from "../../assets/logo.svg";
import List from "../../assets/list.svg";
import Information from "../../assets/information.svg";
import Contact from "../../assets/contact.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="header-buttons-and-profile">
        <img src={List} alt="List" className="button"/>
        <img src={Contact} alt="Contact" className="button"/>
        <img src={Information} alt="Information" className="button"/>
        <div className="profile-view">
          <img src="https://github.com/Alisson-Py.png" alt="Profile" className="profile-img" />
          <div className="profile-content-view">
            <p className="profile-name">Alisson Silva</p>
            <p className="profile-interprise">Balancas e Cia</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;