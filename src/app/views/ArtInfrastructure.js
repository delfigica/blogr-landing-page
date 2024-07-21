import React from "react";
import "../styles/art-infrastructure.css";

export const ArtInfrastructure = () => {
  return (
    <div className="art-box">
      <div className="art-image-box">
        <div>
          <img src="./images/illustration-phones.svg" />
        </div>
      </div>
      <div className="art-box-text">
        <h3>State of the Art Infrastructure</h3>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
  );
};
