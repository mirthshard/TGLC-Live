import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Car,
  ShieldAlert,
  Plane,
  Radio,
  MapPin,
  CheckCircle2,
  AlertOctagon,
  Users,
  Compass,
  FileCheck,
  Fuel,
  Wind,
} from 'lucide-react';
import { PortalUser } from '../../services/supabaseClient';
import { FlightRadarViewer } from './FlightRadarViewer';

interface SecurityDashboardProps {
  user: PortalUser;
}

export const SecurityDashboard: React.FC<SecurityDashboardProps> = ({ user }) => {
  const [showRadar, setShowRadar] = useState(false);
  const [vehicles, setVehicles] = useState([
    {
      id: 'FLT-01',
      model: 'Range Rover SV Sentinel Armoured',
      registration: 'LX24 TGL',
      ballisticRating: 'VPAM BRV 2009 (VR8 / B6)',
      assignedDriver: 'Julian Sterling (Lead CP)',
      location: 'Eaton Square Mews, Belgravia',
      status: 'Staged for Departure',
      passenger: 'James Ashford',
      fuel: '98%',
      telemetry: '51.4947° N, 0.1524° W',
    },
    {
      model: 'Mercedes-Maybach S680 Guard',
      id: 'FLT-02',
      registration: 'MA23 ROY',
      ballisticRating: 'VPAM VR10 Certified',
      assignedDriver: 'Marcus Webb (Tactical CP)',
      location: 'Farnborough Airport TAG Terminal',
      status: 'Airside Staged',
      passenger: 'Elena Rostova',
      fuel: '92%',
      telemetry: '51.2758° N, 0.7763° W',
    },
    {
      model: 'Mercedes-Benz Sprinter VIP Jet Class',
      id: 'FLT-03',
      registration: 'LD24 EXC',
      ballisticRating: 'Floor Blast & Armoured Bulkhead',
      assignedDriver: 'Tariq Al-Mansoor',
      location: '45 Albemarle Street, Mayfair',
      status: 'Standby / Immediate Callout',
      passenger: 'Sovereign Delegation',
      fuel: '100%',
      telemetry: '51.5089° N, 0.1425° W',
    },
    {
      model: 'Bentley Flying Spur Azure',
      id: 'FLT-04',
      registration: 'BX73 LUX',
      ballisticRating: 'Discreet Armoured Glazing',
      assignedDriver: 'Paul Henderson',
      location: 'Battersea London Heliport',
      status: 'Holding',
      passenger: 'Lord Alistair Sterling',
      fuel: '85%',
      telemetry: '51.4705° N, 0.1776° W',
    },
  ]);

  const [activeFlights, setActiveFlights] = useState([
    {
      tailNumber: 'G-TGLC (Global 7500)',
      route: 'RAF Northolt (EGWU) ➔ Florence Peretola (LIRQ)',
      slotTime: '09:30 GMT Departure',
      airsideStatus: 'Tarmac Cleared • Luggage Pre-Loaded',
      pax: 'James Ashford + 3 Guests',
      fbo: 'Northolt VIP Apron Gate 4',
      weather: 'EGWU 110820Z 24008KT 9999 FEW030 14/09 Q1018 NOSIG',
    },
    {
      tailNumber: '9H-VJO (Gulfstream G650ER)',
      route: 'Farnborough (EGLF) ➔ Geneva Cointrin (LSGG)',
      slotTime: '16:00 GMT Departure',
      airsideStatus: 'Flight Plan Filed • Crew Briefed',
      pax: 'Elena Rostova & Family Office Counsel',
      fbo: 'TAG Aviation Farnborough FBO',
      weather: 'EGLF 110850Z 23011KT CAVOK 13/08 Q1019 NOSIG',
    },
  ]);

  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const triggerSecurityProtocol = (title: string) => {
    setActionNotice(title);
    setTimeout(() => setActionNotice(null), 3500);
  };

  return (
    <div className="space-y-8">
      {/* Tactical Operations Banner */}
      <div className="bg-[#0E1117] border border-[#232731] p-6 lg:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#1E222D]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8BA888] px-2.5 py-0.5 bg-[#141B15] border border-[#233825]">
                Tactical Security & Mobility Command
              </span>
              <span className="text-[11px] font-mono text-[#7D879C]">Farnborough & Mayfair Watch Desk</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA] font-light tracking-wide">
              {user.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#8B95A8] font-light flex items-center gap-2">
              <Car className="w-3.5 h-3.5 text-[#8BA888]" /> Armoured Fleet Logistics, VIP Airside Escort & Close Protection Grid
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => triggerSecurityProtocol('DEFCON Alpha: Eaton Square to RAF Northolt convoy pre-cleared with Met Police escort advisory.')}
              className="px-4 py-3 bg-[#1C271E] hover:bg-[#253729] text-[#8BA888] border border-[#2D4532] text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <Radio className="w-4 h-4" /> Airside Departure Sync
            </button>
            <button
              onClick={() => triggerSecurityProtocol('Emergency Protocol Check: Extraction vehicles at Battersea Heliport and Farnborough verified.')}
              className="px-4 py-3 bg-[#241A1B] hover:bg-[#342426] text-[#F39DA2] border border-[#52292C] text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <AlertOctagon className="w-4 h-4" /> Extraction Test
            </button>
          </div>
        </div>

        {/* Action Notice */}
        <AnimatePresence>
          {actionNotice && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mt-4 p-3.5 bg-[#152219] border border-[#2B5435] text-emerald-300 text-xs font-mono flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{actionNotice}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Armoured Fleet Matrix */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#1E222D]">
          <div>
            <h2 className="font-serif text-xl text-[#F4F1EA] font-light">Armoured Transport & Executive Fleet Roster</h2>
            <p className="text-xs text-[#8B95A8] font-light mt-0.5">
              Live telemetry, driver tactical certifications, and ballistic specs.
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#8BA888] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> 4 Assets Operational
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vehicles.map((v) => (
            <div
              key={v.id}
              className="bg-[#0E1117] border border-[#202530] p-5 hover:border-[#2D3E30] transition-all space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#8BA888] block">
                    {v.id} • {v.registration}
                  </span>
                  <h3 className="font-serif text-base text-[#F4F1EA] font-medium mt-0.5">{v.model}</h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#17221A] text-emerald-400 border border-[#27402C]">
                  {v.status}
                </span>
              </div>

              <div className="space-y-2 text-xs bg-[#12161F] p-3.5 border border-[#1A202C]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-[#737E94]">Armour Rating</span>
                  <span className="font-mono text-[11px] text-[#F4F1EA] font-medium">{v.ballisticRating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-[#737E94]">Tactical Driver</span>
                  <span className="text-[#C2CAD8]">{v.assignedDriver}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-[#737E94]">Assigned Principal</span>
                  <span className="text-[#D4AF37] font-serif">{v.passenger}</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-[#1C222E]">
                  <span className="text-[10px] font-mono text-[#6A7486]">Location: {v.location}</span>
                  <span className="text-[10px] font-mono text-[#8BA888]">GPS: {v.telemetry}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] font-mono text-[#768095] flex items-center gap-1.5">
                  <Fuel className="w-3 h-3 text-[#CFA85E]" /> Fuel Range: {v.fuel}
                </span>
                <button
                  onClick={() => triggerSecurityProtocol(`Status ping sent to ${v.assignedDriver} for vehicle ${v.id}.`)}
                  className="text-[10px] font-mono uppercase tracking-wider text-[#8BA888] hover:underline"
                >
                  Direct Comms Ping
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Aviation Apron & Flight Telemetry */}
      <div className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#1E222D]">
          <div>
            <h2 className="font-serif text-xl text-[#F4F1EA] font-light">Aviation Apron Telemetry & Airside Handshake</h2>
            <p className="text-xs text-[#8B95A8] font-light mt-0.5">
              Live private aviation operations with RAF Northolt and Farnborough airport clearance.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowRadar(!showRadar)}
              className="px-3.5 py-1.5 bg-[#171E2B] hover:bg-[#202B3D] text-[#CFA85E] border border-[#2C3B54] text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              {showRadar ? 'Close Tactical Radar' : 'Open Tactical Radar'}
            </button>
            <span className="text-[10px] font-mono uppercase text-[#CFA85E] hidden sm:inline">VIP Diplomatic Apron Slots</span>
          </div>
        </div>

        <AnimatePresence>
          {showRadar && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <FlightRadarViewer onClose={() => setShowRadar(false)} isEmbedded={true} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeFlights.map((flt, idx) => (
            <div
              key={idx}
              className="bg-[#0E1117] border border-[#202530] p-5 hover:border-[#354054] transition-all space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#CFA85E] block">
                    {flt.tailNumber}
                  </span>
                  <h3 className="font-serif text-base text-[#F4F1EA] font-medium mt-0.5">{flt.route}</h3>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-800/40 px-2 py-0.5">
                  {flt.slotTime}
                </span>
              </div>

              <div className="space-y-1.5 text-xs bg-[#12161F] p-3.5 border border-[#1A202C]">
                <p className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-[#737E94]">FBO Apron Gate:</span>
                  <span className="text-[#F4F1EA] font-mono text-[11px]">{flt.fbo}</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-[#737E94]">Manifest:</span>
                  <span className="text-[#C2CAD8]">{flt.pax}</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-[#737E94]">Security Clearance:</span>
                  <span className="text-emerald-400 font-mono text-[11px]">{flt.airsideStatus}</span>
                </p>
                <div className="pt-1.5 border-t border-[#1C222E]">
                  <span className="text-[9px] font-mono text-[#6A7486] block">METAR / TAF Observation:</span>
                  <span className="text-[9px] font-mono text-[#8C98AC] block truncate">{flt.weather}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
