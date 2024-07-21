"use client";
import { useState } from "react";
import "../styles/header-responsive.css";

export const HeaderResponsive = () => {
  const [openModalMenu, setOpenModalMenu] = useState(false);

  const links = ["Product", "Company", "Connect"];
  const linkConnect = ["Contact", "Newsletter", "Linkedin"];

  const [connectModal, setConnectModal] = useState(false);
  const handleOpenConnect = (link) => {
    if (link === "Connect") {
      setConnectModal(!connectModal);
    }
  };

  const handleToggleMenu = () => {
    setOpenModalMenu(!openModalMenu);
  };
  return (
    <div className="header-responsive">
      <div className="header-rs-menu-box">
        <div className="header-rs-logo">
          <img src="/images/logo.svg" />
        </div>
        <div className="header-rs-menu" onClick={handleToggleMenu}>
          {!openModalMenu ? (
            <img src="/images/icon-hamburger.svg" />
          ) : (
            <img src="/images/icon-close.svg" />
          )}
        </div>
      </div>
      {openModalMenu && (
        <div className="header-rs-links-box">
          {links.map((link, i) => (
            <div className="header-rs-link" key={i} onClick={ () => handleOpenConnect(link)}>
              <p>{link}</p>
              <div>
                <img src="/images/icon-arrow-dark.svg" />
              </div>
            </div>
          ))}
          {connectModal && (
            <div className="links-connect-menu">
              {linkConnect.map((link, i) => (
                <p key={i}>{link}</p>
              ))}
            </div>
          )}

          <hr className="hr-header-menu" />
          <div className="header-rs-btns-box">
            <p>Login</p>
            <p id="btn-header-rs-sign">Sign Up</p>
          </div>
        </div>
      )}
    </div>
  );
};
