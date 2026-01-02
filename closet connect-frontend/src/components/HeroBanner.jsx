import "../styles/HeroBanner.css";
import bannerImg from "../assets/banner.jpg"; // put your image here

function HeroBanner() {
  return (
    <div className="hero-banner">
      <img src={bannerImg} alt="ClosetConnect Banner" />
    </div>
  );
}

export default HeroBanner;
