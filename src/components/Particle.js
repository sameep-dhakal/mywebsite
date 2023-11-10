import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: "#7a33d8", // Change the color to your preferred choice
          },
          shape: {
            type: "start",
          },
          line_linked: {
            enable: true,
            distance: 150,
            opacity: 0.2,
          },
          move: {
            direction: "none",
            speed: 0.05,
          },
          size: {
            value: 0.5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.01,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 150,
              line_linked: {
                opacity: 1,
              },
            },
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
