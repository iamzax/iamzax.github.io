// Shooting Stars Canvas Animation
const canvas = document.getElementById("shooting-stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function random(min, max) {
  return Math.random() * (max - min) + min;
}

class ShootingStar {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(canvas.width / 2, canvas.width);
    this.y = random(0, canvas.height / 2);
    this.len = random(100, 300);
    this.speed = random(1, 4);
    this.angle = random(0, Math.PI);
    this.alpha = 1;
  }

  update() {
    this.x -= this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);
    this.alpha -= 0.005;

    if (this.alpha <= 0) this.reset();
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.len * -Math.cos(this.angle), this.y + this.len * Math.sin(this.angle));
    ctx.stroke();
    ctx.restore();
  }
}

const stars = Array.from({ length: Math.floor(Math.random() * 1) + 1 }, () => new ShootingStar());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    star.update();
    star.draw();
  });
  requestAnimationFrame(animate);
}

animate();

// Initialize Particles.js
particlesJS("particles-js", {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.5,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.5,
        sync: false
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false
      }
    }
  },
  retina_detect: true
});