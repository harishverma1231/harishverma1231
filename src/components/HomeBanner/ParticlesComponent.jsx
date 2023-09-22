import { useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesComponent = (props) => {
  const { particlesOptions, className, id } = props;

  const [isInitialized,initialize] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    if(!isInitialized) {
      await loadFull(engine);
      initialize(true);
    }

  }, [isInitialized]);

  const particlesLoaded = useCallback(async (container) => {
      await container
  }, []);

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticlesComponent;
