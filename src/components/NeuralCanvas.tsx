import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
  pulseSpeed: number;
}

const NeuralCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame = 0;

    // ── Config ──────────────────────────────────────────────────────
    const NODE_COUNT      = 42;
    const CONNECT_DIST    = 150;   // px — max distance for a connection line
    const CONNECT_CHANCE  = 0.55;  // fraction of eligible pairs that draw (performance)
    const SPEED           = 0.22;  // base drift speed
    const CURSOR_RADIUS   = 180;   // px — glow radius around cursor
    const CURSOR_STRENGTH = 0.12;  // opacity of cursor glow

    const nodes: Node[] = [];

    // ── Resize ──────────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    // ── Init nodes ──────────────────────────────────────────────────
    const init = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x:          Math.random() * canvas.width,
          y:          Math.random() * canvas.height,
          vx:         (Math.random() - 0.5) * SPEED,
          vy:         (Math.random() - 0.5) * SPEED,
          radius:     Math.random() * 1.4 + 0.7,
          opacity:    Math.random() * 0.35 + 0.18,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.008 + Math.random() * 0.012,
        });
      }
    };

    // ── Draw ─────────────────────────────────────────────────────────
    const draw = () => {
      frame++;
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      // ─ 1. Dark gradient background ─────────────────────────────
      const bgGrad = ctx.createLinearGradient(0, 0, W, H);
      bgGrad.addColorStop(0,   "hsl(228, 14%, 9%)");
      bgGrad.addColorStop(0.5, "hsl(235, 12%, 8%)");
      bgGrad.addColorStop(1,   "hsl(240, 10%, 7%)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // ─ 2. Ambient orbs (slow drift, GPU-cheap radial grads) ─────
      const orbA = ctx.createRadialGradient(W * 0.2, H * 0.3, 0, W * 0.2, H * 0.3, W * 0.32);
      orbA.addColorStop(0, "hsla(220, 90%, 58%, 0.055)");
      orbA.addColorStop(1, "hsla(220, 90%, 58%, 0)");
      ctx.fillStyle = orbA;
      ctx.fillRect(0, 0, W, H);

      const orbB = ctx.createRadialGradient(W * 0.82, H * 0.7, 0, W * 0.82, H * 0.7, W * 0.28);
      orbB.addColorStop(0, "hsla(260, 70%, 58%, 0.045)");
      orbB.addColorStop(1, "hsla(260, 70%, 58%, 0)");
      ctx.fillStyle = orbB;
      ctx.fillRect(0, 0, W, H);

      // ─ 3. Cursor glow ────────────────────────────────────────────
      const { x: mx, y: my } = mouseRef.current;
      if (mx > 0 && my > 0) {
        const cursorGrad = ctx.createRadialGradient(mx, my, 0, mx, my, CURSOR_RADIUS);
        cursorGrad.addColorStop(0, `hsla(220, 90%, 65%, ${CURSOR_STRENGTH})`);
        cursorGrad.addColorStop(0.5, `hsla(240, 70%, 60%, ${CURSOR_STRENGTH * 0.4})`);
        cursorGrad.addColorStop(1, "hsla(220, 90%, 65%, 0)");
        ctx.fillStyle = cursorGrad;
        ctx.fillRect(0, 0, W, H);
      }

      // ─ 4. Update node positions ──────────────────────────────────
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.x = Math.max(0, Math.min(W, n.x));
        n.y = Math.max(0, Math.min(H, n.y));
      }

      // ─ 5. Connection lines (occasional, glowing) ─────────────────
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          // Skip some pairs for perf
          if (Math.random() > CONNECT_CHANCE) continue;

          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DIST) {
            const strength = (1 - dist / CONNECT_DIST);
            const alpha = strength * 0.13;

            // Occasionally brighten a line (every ~120 frames, random pair)
            const pulse = (frame % 120 < 8 && i % 7 === 0) ? alpha * 2.5 : alpha;

            const lineGrad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            lineGrad.addColorStop(0, `hsla(220, 90%, 65%, ${pulse})`);
            lineGrad.addColorStop(0.5, `hsla(245, 75%, 65%, ${pulse * 1.3})`);
            lineGrad.addColorStop(1, `hsla(260, 70%, 65%, ${pulse})`);

            ctx.beginPath();
            ctx.strokeStyle = lineGrad;
            ctx.lineWidth   = strength * 0.7;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // ─ 6. Nodes ───────────────────────────────────────────────────
      for (const n of nodes) {
        const pulse = Math.sin(frame * n.pulseSpeed + n.pulsePhase) * 0.12;
        const op    = Math.max(0.08, Math.min(0.55, n.opacity + pulse));
        const r     = n.radius;

        // Soft outer glow
        const gGlow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 5);
        gGlow.addColorStop(0, `hsla(220, 90%, 70%, ${op * 0.7})`);
        gGlow.addColorStop(0.4, `hsla(240, 80%, 68%, ${op * 0.25})`);
        gGlow.addColorStop(1,   "hsla(220, 90%, 70%, 0)");
        ctx.beginPath();
        ctx.fillStyle = gGlow;
        ctx.arc(n.x, n.y, r * 5, 0, Math.PI * 2);
        ctx.fill();

        // Crisp bright core
        ctx.beginPath();
        ctx.fillStyle = `hsla(215, 95%, 80%, ${op})`;
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // ─ 7. Vignette overlay ────────────────────────────────────────
      const vignette = ctx.createRadialGradient(W / 2, H / 2, H * 0.2, W / 2, H / 2, H * 0.85);
      vignette.addColorStop(0, "hsla(0,0%,0%,0)");
      vignette.addColorStop(1, "hsla(228,14%,6%, 0.65)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, W, H);

      // ─ 8. Top + bottom edge fades ────────────────────────────────
      const topFade = ctx.createLinearGradient(0, 0, 0, H * 0.18);
      topFade.addColorStop(0, "hsl(228, 14%, 9%)");
      topFade.addColorStop(1, "hsla(228, 14%, 9%, 0)");
      ctx.fillStyle = topFade;
      ctx.fillRect(0, 0, W, H * 0.18);

      const botFade = ctx.createLinearGradient(0, H * 0.78, 0, H);
      botFade.addColorStop(0, "hsla(228, 14%, 9%, 0)");
      botFade.addColorStop(1, "hsl(228, 14%, 9%)");
      ctx.fillStyle = botFade;
      ctx.fillRect(0, H * 0.78, W, H * 0.22);

      animId = requestAnimationFrame(draw);
    };

    // ── Mouse tracking ───────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    // ── ResizeObserver ───────────────────────────────────────────────
    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    // Also track mouse on window so cursor glow works even when
    // hovering over the text content above the canvas
    const onWindowMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    window.addEventListener("mousemove", onWindowMouseMove);

    resize();
    init();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousemove", onWindowMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default NeuralCanvas;
