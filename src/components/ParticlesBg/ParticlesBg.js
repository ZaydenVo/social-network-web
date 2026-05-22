import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

function ParticlesBg() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = {
    background: {
      color: {
        value: '#0d1117',
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
          mode: 'grab',
        },
      },
      modes: {
        push: { quantity: 4 },
        grab: { distance: 140, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: {
        value: '#58a6ff',
      },
      links: {
        enable: true,
        distance: 150,
        color: '#58a6ff',
        opacity: 0.25,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        outModes: { default: 'bounce' },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 70,
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 3 },
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
