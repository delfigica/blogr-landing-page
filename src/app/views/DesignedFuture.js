import React from "react";
import "../styles/designed-future.css";

export const DesignedFuture = () => {
  return (
    <div className="designed-box">
      <h3 className="designed-title">Designed for the future</h3>
      <div className="box-image-mobile"></div>
      <div className="designed-text-box">
        <div >
          <h4>Introducing an extensible editor</h4>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            ofmultiple blogs and allows easy manipulation of embeds such as
            imagines, videos, and Markdown. Extensibility with plugins and theme
            provide easy ways to add funcionality or change the looks of a blog.
          </p>
        </div>
        <div>
          <h4>Robust content management</h4>
          <p>
            Flexible content management enables users to easily move through
            post. Increase the usability yo your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you're in full control.
          </p>
        </div>
      </div>
    </div>
  );
};
