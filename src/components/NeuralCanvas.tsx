import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const NeuralCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const NODE_COUNT = 38;
    const CONNECTION_DIST = 160;
    const nodes: Node[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          radius: Math.random() * 1.5 + 0.8,
          opacity: Math.random() * 0.4 + 0.2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const strength = 1 - dist / CONNECTION_DIST;
            // Gradient line: blue → violet
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `hsla(220,90%,65%,${strength * 0.18})`);
            grad.addColorStop(1, `hsla(260,70%,65%,${strength * 0.18})`);
            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.lineWidth = strength * 0.8;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 3);
        grad.addColorStop(0, `hsla(220,90%,70%,${n.opacity})`);
        grad.addColorStop(1, `hsla(260,70%,65%,0)`);
        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(n.x, n.y, n.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Crisp center dot
        ctx.beginPath();
        ctx.fillStyle = `hsla(220,90%,80%,${n.opacity * 0.9})`;
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);

    resize();
    init();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default NeuralCanvas;
