import React from "react";
import "../styles/footer.css";

export const Footer = () => {
  const links = [
    {
      title: "Product",
      items: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
    },
    {
      title: "Company",
      items: ["About", "Team", "Blog", "Careers"],
    },
    {
      title: "Connect",
      items: ["Contact", "Newsletter", "Linkedin"],
    },
  ];
  return (
    <div className="footer-box">
      <div className="logo-footer">
        <img src="./images/logo.svg" />
      </div>

      {
        links.map(link => (
            <div key={link.title} className="footer-links-box">
                <p className="footer-link-title">{link.title}</p>
                <div>
                    {
                        link.items.map(item => (
                            <p key={item} className="footer-link">{item}</p>
                        ))
                    }
                </div>
            </div>
        ))
      }
    </div>
  );
};
