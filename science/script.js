particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#6a11cb"
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.5,
      width: 1
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,  // Disable hover interaction
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  retina_detect: true
});

document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}

document.getElementById('special-card').addEventListener('mousemove', function(e) {
  const rect = this.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;


  const deltaX = (x - centerX) / centerX; 
  const deltaY = (y - centerY) / centerY; 


  const rotateY = deltaX * 10; 
  const rotateX = -deltaY * 10;


  this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});


document.getElementById('special-card').addEventListener('mouseleave', function(e) {
  this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

function adjustZoomAndCenterHorizontally() {
  const baseWidth = 1920;
  const currentWidth = window.innerWidth;
  const scale = currentWidth / baseWidth;

  const contentWidth = document.documentElement.offsetWidth * scale;
  const offsetX = (currentWidth - contentWidth) / 2;

  document.documentElement.style.transform = `scale(${scale}) translateX(${offsetX}px)`;
  document.documentElement.style.transformOrigin = 'top left';
}

window.addEventListener('DOMContentLoaded', adjustZoomAndCenterHorizontally);
window.addEventListener('resize', adjustZoomAndCenterHorizontally);

function adjustPaddingLeft() {
  const screenWidth = window.innerWidth;
  const slope = 35 / 384;
  const intercept = 330 - slope * 1536; 

  const paddingLeft = slope * screenWidth + intercept; 

  const container = document.querySelector('.container');
  if (container) {
      container.style.paddingLeft = `${paddingLeft}px`; 
  }
}


window.addEventListener('DOMContentLoaded', adjustPaddingLeft);
window.addEventListener('resize', adjustPaddingLeft);