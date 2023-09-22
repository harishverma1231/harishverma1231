import ParticlesComponent from "./ParticlesComponent";
import { heroOptions } from "./particlesOptions";
import HomeInfo from "./BannerInfo";

const HomeBanner = () => {
  return (
    <section className="section_banner">
      <HomeInfo/>
      <ParticlesComponent
        id="hero-particles hero"
        className="banner_container"
        particlesOptions={heroOptions}
      />
    </section>
  );
};

export default HomeBanner;
