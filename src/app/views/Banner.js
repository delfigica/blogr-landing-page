import "../styles/banner.css";
import { Header } from "./Header";
import { HeaderResponsive } from "./HeaderResponsive";

export const Banner = () => {
  return (
    <div className="banner-box">
        <div className="banner-image-box">
        <Header />
        <HeaderResponsive />
        <div className="banner-text-box">
          <h3>A modern publishing plarform</h3>
          <p className="banner-subtitle">
            Grow your audience and build your online brand
          </p>
          <div>
            <p className="btn-with-color">Start for Free</p>
            <p className="btn-without-color">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
};
