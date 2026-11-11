import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Plane,
  Navigation,
  Compass,
  Wind,
  Shield,
  Clock,
  MapPin,
  Radio,
  Eye,
  CheckCircle2,
  ChevronRight,
  Maximize2,
  Minimize2,
} from 'lucide-react';

interface FlightRadarViewerProps {
  onClose?: () => void;
  isEmbedded?: boolean;
}

export const FlightRadarViewer: React.FC<FlightRadarViewerProps> = ({ onClose, isEmbedded = false }) => {
  const [altitude, setAltitude] = useState(43000);
  const [groundSpeed, setGroundSpeed] = useState(512);
  const [machNumber, setMachNumber] = useState('0.88');
  const [outsideTemp, setOutsideTemp] = useState(-52);
  const [headwind, setHeadwind] = useState('+38 kts');
  const [elapsedMinutes, setElapsedMinutes] = useState(42);
  const [remainingMinutes, setRemainingMinutes] = useState(48);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Radar sweep animation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let angle = 0;
    let animationFrameId: number;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(centerX, centerY) - 20;

      // Clear with dark obsidian background
      ctx.fillStyle = '#080B10';
      ctx.fillRect(0, 0, width, height);

      // Radar Concentric Circles
      ctx.strokeStyle = 'rgba(207, 168, 94, 0.15)';
      ctx.lineWidth = 1;

      for (let r = radius / 4; r <= radius; r += radius / 4) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(centerX - radius, centerY);
      ctx.lineTo(centerX + radius, centerY);
      ctx.moveTo(centerX, centerY - radius);
      ctx.lineTo(centerX, centerY + radius);
      ctx.stroke();

      // Range labels
      ctx.fillStyle = 'rgba(207, 168, 94, 0.4)';
      ctx.font = '9px monospace';
      ctx.fillText('100 NM', centerX + radius * 0.25 + 4, centerY - 4);
      ctx.fillText('200 NM', centerX + radius * 0.5 + 4, centerY - 4);
      ctx.fillText('300 NM', centerX + radius * 0.75 + 4, centerY - 4);
      ctx.fillText('400 NM', centerX + radius - 35, centerY - 4);

      // Flight Vector Corridor (Northolt -> Florence)
      const startX = centerX - radius * 0.65;
      const startY = centerY - radius * 0.55;
      const endX = centerX + radius * 0.65;
      const endY = centerY + radius * 0.55;

      // Dashed corridor line
      ctx.strokeStyle = 'rgba(207, 168, 94, 0.45)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Current Aircraft Position (interpolated at ~52%)
      const curX = startX + (endX - startX) * 0.52;
      const curY = startY + (endY - startY) * 0.52;

      // Radar sweep beam
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, angle, angle + 0.35);
      ctx.closePath();

      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, 'rgba(207, 168, 94, 0.25)');
      gradient.addColorStop(1, 'rgba(207, 168, 94, 0.02)');
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();

      // Waypoint 1: RAF Northolt
      ctx.fillStyle = '#CFA85E';
      ctx.beginPath();
      ctx.arc(startX, startY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#E2E8F0';
      ctx.font = '10px monospace';
      ctx.fillText('EGWU (DEP)', startX - 25, startY - 8);

      // Waypoint 2: Mont Blanc Alps Corridor
      const midX = startX + (endX - startX) * 0.5;
      const midY = startY + (endY - startY) * 0.5;
      ctx.fillStyle = 'rgba(139, 168, 136, 0.8)';
      ctx.beginPath();
      ctx.arc(midX - 15, midY - 15, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#8BA888';
      ctx.font = '9px monospace';
      ctx.fillText('ALPS / WAYPOINT LULUS', midX - 60, midY - 22);

      // Waypoint 3: Florence Peretola
      ctx.fillStyle = '#10B981';
      ctx.beginPath();
      ctx.arc(endX, endY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#E2E8F0';
      ctx.font = '10px monospace';
      ctx.fillText('LIRQ (ARR)', endX + 8, endY + 4);

      // Aircraft Marker (G-TGLC)
      ctx.fillStyle = '#F4F1EA';
      ctx.shadowColor = '#CFA85E';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(curX, curY, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Pulse ring around aircraft
      const pulseRadius = 5 + (angle * 6) % 15;
      ctx.strokeStyle = 'rgba(207, 168, 94, 0.6)';
      ctx.beginPath();
      ctx.arc(curX, curY, pulseRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Aircraft Label
      ctx.fillStyle = '#CFA85E';
      ctx.font = 'bold 11px monospace';
      ctx.fillText('G-TGLC (GL7T)', curX + 10, curY - 6);
      ctx.fillStyle = '#94A3B8';
      ctx.font = '9px monospace';
      ctx.fillText('FL430 • 512 KTS • HDG 138°', curX + 10, curY + 6);

      angle += 0.025;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className={`bg-[#0A0D13] border border-[#202636] p-4 sm:p-6 space-y-6 ${isEmbedded ? '' : 'shadow-2xl'}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1E2432]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] px-2 py-0.5 bg-emerald-950/40 text-emerald-400 border border-emerald-800/50">
              Live ADS-B Telemetry
            </span>
            <span className="text-[10px] font-mono text-[#7B8599]">Transponder: 4421 Active</span>
          </div>
          <h3 className="font-serif text-lg sm:text-xl text-[#F4F1EA] font-normal">
            G-TGLC • Bombardier Global 7500 Air Corridor
          </h3>
          <p className="text-xs text-[#8A95A8] font-light mt-0.5">
            Routing: RAF Northolt (EGWU) ➔ Florence Peretola (LIRQ) • Cruising over Alpine Sector
          </p>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-300 font-mono text-sm self-start sm:self-center"
          >
            ✕ Close Radar
          </button>
        )}
      </div>

      {/* Canvas Radar Viewport */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] max-h-[360px] bg-[#080B10] border border-[#1A202D] overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={800}
          height={380}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-[#0B0F17]/80 backdrop-blur-xs px-2.5 py-1 border border-[#212A3A] text-[10px] font-mono text-[#CFA85E] flex items-center gap-1.5">
          <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
          SWEEP 120 RPM • RANGE 400 NM
        </div>
      </div>

      {/* Flight Telemetry KPI Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
        <div className="p-3 bg-[#11151E] border border-[#1E2432]">
          <span className="text-[9px] font-mono uppercase text-[#717C92] block">Cruising Altitude</span>
          <span className="text-base font-serif text-[#F4F1EA] font-medium block mt-0.5">
            {altitude.toLocaleString()} <span className="text-[10px] font-mono text-[#717C92]">ft</span>
          </span>
          <span className="text-[9px] font-mono text-emerald-400">FL430 Level</span>
        </div>

        <div className="p-3 bg-[#11151E] border border-[#1E2432]">
          <span className="text-[9px] font-mono uppercase text-[#717C92] block">Ground Speed</span>
          <span className="text-base font-serif text-[#CFA85E] font-medium block mt-0.5">
            {groundSpeed} <span className="text-[10px] font-mono text-[#717C92]">kts</span>
          </span>
          <span className="text-[9px] font-mono text-[#A3B8CC]">Mach {machNumber}</span>
        </div>

        <div className="p-3 bg-[#11151E] border border-[#1E2432]">
          <span className="text-[9px] font-mono uppercase text-[#717C92] block">Outside Air Temp</span>
          <span className="text-base font-serif text-[#F4F1EA] font-medium block mt-0.5">
            {outsideTemp}°C
          </span>
          <span className="text-[9px] font-mono text-[#717C92]">Tropopause</span>
        </div>

        <div className="p-3 bg-[#11151E] border border-[#1E2432]">
          <span className="text-[9px] font-mono uppercase text-[#717C92] block">Wind Vector</span>
          <span className="text-base font-serif text-[#F4F1EA] font-medium block mt-0.5 flex items-center gap-1">
            <Wind className="w-3 h-3 text-sky-400" /> {headwind}
          </span>
          <span className="text-[9px] font-mono text-[#717C92]">Bearing 310°</span>
        </div>

        <div className="p-3 bg-[#11151E] border border-[#1E2432]">
          <span className="text-[9px] font-mono uppercase text-[#717C92] block">Elapsed Flight</span>
          <span className="text-base font-serif text-[#F4F1EA] font-medium block mt-0.5">
            {elapsedMinutes}m
          </span>
          <span className="text-[9px] font-mono text-[#717C92]">Departed 09:30</span>
        </div>

        <div className="p-3 bg-[#11151E] border border-[#1E2432]">
          <span className="text-[9px] font-mono uppercase text-[#717C92] block">Estimated Arrival</span>
          <span className="text-base font-serif text-emerald-400 font-medium block mt-0.5">
            {remainingMinutes}m remaining
          </span>
          <span className="text-[9px] font-mono text-emerald-500">11:00 GMT / 12:00 CET</span>
        </div>
      </div>
    </div>
  );
};
