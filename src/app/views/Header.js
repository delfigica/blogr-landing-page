"use client";
import { useState } from "react";
import "../styles/header.css";

export const Header = () => {
  const links = ["Product", "Company", "Connect"];
  const modalLinks = ["Contact", "Newsletter", "Linkedin"];
  const [openConnectModal, setOpenConnectModal] = useState(false);

  const handleToggleModal = () => {
    setOpenConnectModal(!openConnectModal)
  }
  return (
    <div className="header-box">
      <div className="header-left">
        <div className="logo-header">
          <img src="./images/logo.svg" />
        </div>
        <div className="links-menu-box">
          <div className="links-group-box">
            {links.map((link, i) => (
              <div className="link-header-box"  key={i}>
                <p onClick={handleToggleModal}>{link}</p>
                <div>
                  <img src="./images/icon-arrow-light.svg" />
                </div>
              </div>
            ))}
          </div>
          {openConnectModal && (
            <div className="modal-connect-header-box">
              {modalLinks.map((link, i) => (
                <p key={i}>{link}</p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="header-btns-box">
        <p>Login</p>
        <p id="btn-header-sign">Sign Up</p>
      </div>
    </div>
  );
};
