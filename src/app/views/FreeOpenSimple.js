import React from "react";
import "../styles/free-open-simple.css";

export const FreeOpenSimple = () => {
  return (
    <div className="free-open-simple-box">
      <div className="free-opem-simple-text-box">
        <div>
          <h3>Free, open, simple</h3>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration, thid-party
            commenting tools, and works seamlesslyy with Google Analytics. The
            architecture is clean and is relatively easy to learn.
          </p>
        </div>
        <div>
          <h3>Powerful tooling</h3>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
};
