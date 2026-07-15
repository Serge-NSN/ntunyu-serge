import { useEffect, useRef } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let width, height;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Particles
    const PARTICLE_COUNT = 80;
    const particles = [];

    const colors = [
      'rgba(124, 58, 237, ',   // violet
      'rgba(6, 182, 212, ',    // cyan
      'rgba(249, 115, 22, ',   // orange
      'rgba(236, 72, 153, ',   // pink
      'rgba(245, 158, 11, ',   // gold
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.1,
      });
    }

    // Floating orbs
    const orbs = [
      { x: 0.15, y: 0.3, r: 280, color: 'rgba(124, 58, 237, 0.06)', speed: 0.0003, phase: 0 },
      { x: 0.8, y: 0.6, r: 320, color: 'rgba(6, 182, 212, 0.05)', speed: 0.0004, phase: Math.PI },
      { x: 0.5, y: 0.8, r: 200, color: 'rgba(249, 115, 22, 0.04)', speed: 0.0005, phase: Math.PI / 2 },
    ];

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      t += 1;

      // Draw orbs
      orbs.forEach(orb => {
        const ox = orb.x * width + Math.sin(t * orb.speed + orb.phase) * 60;
        const oy = orb.y * height + Math.cos(t * orb.speed * 1.3 + orb.phase) * 40;
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        grad.addColorStop(0, orb.color.replace('0.0', '0.12'));
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default ParticleCanvas;
