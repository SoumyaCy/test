const particleConfig={
    background: {
    
      color: {
        value: "#fcfcfc"
      },
      position: "50% 50%",
      repeat: "no-repeat",
      size: "20%"
      
    },
    fullScreen: {
       yIndex:100,
      zIndex: -999
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse"
        },
        onHover: {
          enable: true,
          mode: "bubble"
        }
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          opacity: 0,
          size: 0
        },
        grab: {
          distance: 400
        },
        repulse: {
          distance: 200
        }
      }
    },
   
    motion: {
      disable: true
    },
    particles: {
        shape:{
            type:"star"
            },
        number:100000,
      color: {
        value: "#aaaaaa"
      },
      links: {
        color: {
          value: "#ffffff"
        },
        distance: 100,
        opacity: 0.4
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 600
          }
        },
        enable: true,
        path: {},
        outModes: {
          bottom: "out",
          left: "out",
          right: "out",
          top: "out"
        },
        random: true,
        speed: 1,
        spin: {}
      },
      number: {
        density: {
          enable: true
        },
        value: 160
      },
      opacity: {
        random: {
          enable: true
        },
        value: {
          min: 0,
          max: 1
        },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0
        }
      },
      shadow: {
        color: {
          value: "#3c3939"
        }
      },
      size: {
        random: {
          enable: true
        },
        value: {
          min: 5,
          max: 6
        },
        animation: {
          speed: 4,
          minimumValue: 0.3
        }
      }
    }
  };

  export default particleConfig;