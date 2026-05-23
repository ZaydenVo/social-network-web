import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

function ParticlesBg() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = {
    background: {
      color: {
        value: '#020204',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'attract',
        },
      },
      modes: {
        push: { quantity: 4 },
        attract: { distance: 200, duration: 0.4, factor: 3 },
      },
    },
    particles: {
      color: {
        value: '#00ffff',
      },
      links: {
        enable: true,
        distance: 150,
        color: '#00cccc',
        opacity: 0.25,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2,
        outModes: { default: 'bounce' },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 75,
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 3.5 },
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      className="particles-canvas-background"
      init={particlesInit}
      options={options}
    />
  );
}

export default ParticlesBg;
