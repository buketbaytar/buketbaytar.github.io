import React, { useEffect, useRef } from 'react';

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: null,
      y: null,
      radius: 120,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Particle Class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.2 + 1.2; // 1.2px - 3.4px
        this.vx = (Math.random() - 0.5) * 0.55;
        this.vy = (Math.random() - 0.5) * 0.55;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 20 + 5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#f43f5e'; // Rose-red accent
        ctx.globalAlpha = 0.35;
        ctx.fill();
      }

      update() {
        // Wall bounce
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse interaction (repulsion)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;

            this.x -= directionX * 0.15;
            this.y -= directionY * 0.15;
          }
        }

        this.x += this.vx;
        this.y += this.vy;
        this.draw();
      }
    }

    let particles = [];
    const initParticles = () => {
      particles = [];
      const count = Math.floor((width * height) / 14000); // Dynamic responsive count
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    // Connect particles with faint lines
    const connect = () => {
      const maxDistance = 115;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22; // subtle opacity
            ctx.beginPath();
            ctx.strokeStyle = '#ef4444'; // Red line
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.85;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Floating Animated Background Blobs */}
      <div className="absolute top-1/6 left-1/12 w-80 h-80 rounded-full bg-red-200/25 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-2/4 right-1/12 w-96 h-96 rounded-full bg-rose-200/20 blur-3xl animate-blob [animation-delay:3s] pointer-events-none" />
      <div className="absolute bottom-1/6 left-1/4 w-88 h-88 rounded-full bg-pink-100/30 blur-3xl animate-blob [animation-delay:6s] pointer-events-none" />

      {/* Floating Rotating Code Badges & Snippets */}
      <div className="relative w-full h-full max-w-7xl mx-auto">
        
        {/* Code Snippet 1: Python Pandas */}
        <div className="hidden md:flex absolute top-28 left-4 lg:left-8 items-center gap-2 px-3 py-1.5 rounded-xl bg-white/60 backdrop-blur-xs border border-red-200/60 shadow-xs shadow-red-100/50 animate-float-slow opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[11px] font-mono text-slate-500">
            <span className="text-red-500 font-semibold">import</span> pandas{' '}
            <span className="text-rose-600 font-semibold">as</span> pd
          </span>
        </div>

        {/* Code Snippet 2: ML Model Fit */}
        <div className="hidden lg:flex absolute top-56 right-8 lg:right-16 items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/60 backdrop-blur-xs border border-rose-200/60 shadow-xs shadow-rose-100/50 animate-float-reverse opacity-60">
          <span className="text-[11px] font-mono text-slate-600">
            model.<span className="text-red-600 font-semibold">fit</span>(X_train, y_train)
          </span>
        </div>

        {/* Code Snippet 3: SQL Query */}
        <div className="hidden md:flex absolute top-[38%] left-8 lg:left-14 items-center gap-2 px-3 py-1.5 rounded-xl bg-white/55 backdrop-blur-xs border border-red-200/60 shadow-xs animate-float-slow [animation-delay:2s] opacity-50">
          <span className="text-[11px] font-mono text-slate-600">
            <span className="text-red-500 font-bold">SELECT</span> *{' '}
            <span className="text-red-500 font-bold">FROM</span> mis_data;
          </span>
        </div>

        {/* Code Snippet 4: React JSX Component */}
        <div className="hidden lg:flex absolute top-[48%] right-6 lg:right-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-white/55 backdrop-blur-xs border border-red-100 shadow-xs animate-float-reverse [animation-delay:4s] opacity-50">
          <span className="text-[11px] font-mono text-slate-500">
            &lt;<span className="text-red-600 font-semibold">DecisionTree</span>{' '}
            <span className="text-rose-500">recall</span>=&#123;
            <span className="text-red-700 font-bold">0.78</span>&#125; /&gt;
          </span>
        </div>

        {/* Code Snippet 5: Streamlit / API */}
        <div className="hidden md:flex absolute top-[68%] left-10 lg:left-16 items-center gap-2 px-3 py-1.5 rounded-xl bg-white/50 backdrop-blur-xs border border-red-200/50 shadow-xs animate-float-slow [animation-delay:3s] opacity-45">
          <span className="text-[11px] font-mono text-slate-500">
            st.<span className="text-red-500 font-semibold">success</span>("İşlem Onaylandı")
          </span>
        </div>

        {/* Code Snippet 6: Git commit */}
        <div className="hidden lg:flex absolute top-[78%] right-10 lg:right-24 items-center gap-2 px-3 py-1.5 rounded-xl bg-white/55 backdrop-blur-xs border border-rose-200/50 shadow-xs animate-float-reverse [animation-delay:1.5s] opacity-50">
          <span className="text-[11px] font-mono text-slate-500">
            git <span className="text-rose-600 font-semibold">commit</span> -m{' '}
            <span className="text-slate-700 font-medium">"feat: fraud-analysis"</span>
          </span>
        </div>

        {/* Rotating Circular Code Rings in Corners */}
        <div className="hidden md:block absolute top-16 right-1/4 w-20 h-20 rounded-full border border-dashed border-red-300/40 animate-spin-slow pointer-events-none opacity-40">
          <div className="w-full h-full flex items-center justify-center font-mono text-xs text-red-500 font-bold">
            {`{ }`}
          </div>
        </div>

        <div className="hidden md:block absolute bottom-24 left-1/3 w-24 h-24 rounded-full border border-dashed border-rose-300/40 animate-spin-slow [animation-duration:35s] pointer-events-none opacity-40">
          <div className="w-full h-full flex items-center justify-center font-mono text-xs text-rose-500 font-bold">
            &lt;/&gt;
          </div>
        </div>

      </div>
    </div>
  );
}
