/* PARTICULAS */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#444";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animate);
}

animate();

/* FADE-IN */
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});

faders.forEach(el => observer.observe(el));

/* GSAP + SCROLLTRIGGER */
gsap.registerPlugin(ScrollTrigger);

/* HERO */
gsap.from("#hero .hero-content", {
  opacity: 0,
  y: 40,
  duration: 1.2,
  ease: "power3.out"
});

/* ECOSISTEMA */
gsap.utils.toArray("#ecosistema .card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: i * 0.05,
    ease: "power2.out"
  });
});

/* STACKS */
gsap.from("#stacks .stack-item", {
  scrollTrigger: {
    trigger: "#stacks",
    start: "top 80%"
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out"
});

/* AGENTES */
gsap.from("#agentes .agente", {
  scrollTrigger: {
    trigger: "#agentes",
    start: "top 80%"
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out"
});

/* TECNOLOGÍA */
gsap.from("#tecnologia .tech", {
  scrollTrigger: {
    trigger: "#tecnologia",
    start: "top 85%"
  },
  opacity: 0,
  y: 30,
  duration: 0.7,
  stagger: 0.1,
  ease: "power2.out"
});

/* CIERRE */
gsap.from("#cierre", {
  scrollTrigger: {
    trigger: "#cierre",
    start: "top 85%"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power3.out"
});
