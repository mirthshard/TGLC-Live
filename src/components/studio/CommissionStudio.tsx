/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { GoldDivider } from '../common/GoldDivider';
import { TGLC_CONTACT } from '../../data/tglcData';
import {
  Shield,
  ArrowRight,
  ArrowUpRight,
  Check,
  Calendar,
  MapPin,
  Users,
  Copy,
  Printer,
  Sparkles,
  Lock,
  ChevronRight,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CommissionScenario {
  id: string;
  category: string;
  title: string;
  kicker: string;
  tagline: string;
  image: string;
  location: string;
  duration: string;
  deliverables: string[];
}

const SCENARIOS: CommissionScenario[] = [
  {
    id: 'mayfair-sartorial-horology',
    category: 'Sartorial & Horology',
    title: 'Savile Row In-Suite Cut & Archival Horology Vault',
    kicker: 'Mayfair & St James’s',
    tagline: 'Senior head cutter attendance in your private residence paired with closed-door Patek & Rolex viewings.',
    image: '/assets/aistudio/savile_row_bespoke.jpg',
    location: '45 Albemarle Street & Eaton Square',
    duration: '4–6 Hours',
    deliverables: [
      'In-residence basted fitting with Savile Row head cutter',
      'Private viewings of provenance-verified vintage chronographs',
      'Discreet white-glove packaging and home delivery',
    ],
  },
  {
    id: 'sub-rosa-thames-vault',
    category: 'Sub-Rosa Nocturne',
    title: 'Thames Stealth Speed Run & 300-Yr Bullion Vault Dinner',
    kicker: 'Square Mile & River Thames',
    tagline: 'Midnight Thames sprint on a 45ft matte-black interceptor followed by private catacomb dining.',
    image: '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg',
    location: 'Wapping Pier to Bank Catacombs',
    duration: 'Evening (5 Hours)',
    deliverables: [
      'High-speed twin-engine Thames night run under Tower Bridge',
      'Unmarked vault descent through 20-ton steel bulkheads',
      'Private chef 6-course tasting menu paired with rare Armagnacs',
    ],
  },
  {
    id: 'ufc-cageside-access',
    category: 'Sport & Combat Arenas',
    title: 'UFC London Championship Cageside & Athlete Warmup Suite',
    kicker: 'The O2 Arena & Greenwich',
    tagline: 'Octagon front-row seats with backstage tunnel credentials and fighter warmup room access.',
    image: '/assets/aistudio/ufc_arena_ringside.jpg',
    location: 'The O2 Arena VIP Security Portal',
    duration: 'Full Evening Event',
    deliverables: [
      'Front-row cageside seats with accredited tunnel pass',
      'Exclusive access to athlete warmup holding rooms',
      'Dedicated close-protection escort and private exit lane',
    ],
  },
  {
    id: 'aviation-florence-transfer',
    category: 'Aviation & Global Mobility',
    title: 'RAF Northolt Challenger 350 Charter to Florence Villa',
    kicker: 'London to Tuscany',
    tagline: '30-second apron handover from Rolls-Royce directly to Bombardier cabin stairs.',
    image: '/assets/aistudio/698157105b08bd0b828e954b_file_k95qb05z_c7bc7f74.png',
    location: 'RAF Northolt (EGWU) to Florence (LIRQ)',
    duration: '3 Days / Flexible',
    deliverables: [
      'Bombardier Challenger 350 private charter with full crew',
      'Pre-cleared diplomatic passport handling on tarmac',
      'Florence private palazzo villa staffed and fires lit before arrival',
    ],
  },
  {
    id: 'cotswolds-manor-estate',
    category: 'Residences & Field Sports',
    title: 'Cotswolds Historic Manor Shoot & Michelin Hearth Feast',
    kicker: 'Oxfordshire & Cotswolds',
    tagline: '3,000-acre private estate with dedicated gamekeepers and in-residence woodfire tasting menu.',
    image: '/assets/aistudio/cotswolds_manor_estate.jpg',
    location: 'Private Cotswolds Valley Estate',
    duration: 'Weekend / 48 Hours',
    deliverables: [
      'Full manor house buyout with live-in butler and sommelier',
      'Clays and game field sports with certified master instructors',
      'Twin-engine helicopter transfer from Battersea Heliport',
    ],
  },
  {
    id: 'bond-street-closed-doors',
    category: 'Haute Joaillerie & Culture',
    title: 'Closed-Door Old Bond Street Salons & Natural Gemstones',
    kicker: 'Old Bond Street & Burlington Arcade',
    tagline: 'After-hours access to heritage jewel vaults and private penthouse styling suites in Knightsbridge.',
    image: '/assets/aistudio/bond_street_jewellery.jpg',
    location: 'Old Bond Street, Mayfair',
    duration: 'Half Day',
    deliverables: [
      'Private salon unlock after normal retail trading hours',
      'Untreated Burma ruby and Kashmir sapphire inspection table',
      'Diplomatic courier export and insured safe staging',
    ],
  },
];

const FLEET_OPTIONS = [
  {
    id: 'rolls-cullinan',
    name: 'Rolls-Royce Cullinan Series II',
    type: 'High-Ground Luxury Sanctuary',
    desc: 'Bespoke shooting kit, dual champagne cooler, deep lambswool carpets.',
    image: '/assets/aistudio/rolls-cullian-featured_a41abfa9.webp',
  },
  {
    id: 'rolls-phantom',
    name: 'Rolls-Royce Phantom VIII Extended',
    type: 'The Sovereign Flagship',
    desc: 'Acoustic privacy partition, starlight headliner, unhurried Mayfair transit.',
    image: '/assets/aistudio/rolls-royce-cullinan-chauffeur-service-events_d3e6e421.webp',
  },
  {
    id: 'range-rover-armoured',
    name: 'Range Rover SV Intrepid (Armoured B6)',
    type: 'Ballistic Tactical Discretion',
    desc: 'Certified ballistic glass, run-flat tyres, covert communications suite.',
    image: '/assets/aistudio/best-luxury-cars-2024_ab87bb7b.webp',
  },
  {
    id: 'stealth-boat',
    name: '45ft Nocturne Matte-Black Thames Interceptor',
    type: 'River Stealth Mobility',
    desc: 'Twin Mercury Racing outboards, FLIR thermal night optics, heated leather deck.',
    image: '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg',
  },
];

const SECURITY_PROTOCOLS = [
  {
    id: 'covert-diplomatic',
    name: 'Covert Diplomatic Discretion',
    desc: 'Need-to-know operational authority, unmarked vehicles, zero digital telemetry.',
    level: 'Tier 1 Standard',
  },
  {
    id: 'close-protection',
    name: 'Dedicated Close Protection Detail',
    desc: 'Two SIA-licensed protection officers with British Special Forces background.',
    level: 'Tier 2 Tactical',
  },
  {
    id: 'faraday-rf-shield',
    name: 'RF Faraday Enclosure & Anti-Surveillance',
    desc: 'Full electronic sweep of private meeting enclaves and sealed device lockboxes.',
    level: 'Tier 3 Classified',
  },
  {
    id: 'shielded-billing',
    name: 'Shielded Family Office Billing',
    desc: 'Confidential ledger invoicing via anonymised trust accounts without merchant logs.',
    level: 'Fiscal Discretion',
  },
];

export const CommissionStudio: React.FC = () => {
  const { navigateTo, openIntroductionModal } = useNavigation();

  // Step state (0: Scenario, 1: Fleet, 2: Protocol, 3: Schedule & Notes, 4: Confirmed)
  const [currentStep, setCurrentStep] = useState(0);

  const [selectedScenario, setSelectedScenario] = useState<CommissionScenario>(SCENARIOS[0]);
  const [selectedFleet, setSelectedFleet] = useState(FLEET_OPTIONS[0]);
  const [selectedProtocol, setSelectedProtocol] = useState(SECURITY_PROTOCOLS[0]);

  const [departurePoint, setDeparturePoint] = useState('Eaton Square Residence, Belgravia');
  const [guestCount, setGuestCount] = useState('2 Principals');
  const [targetDate, setTargetDate] = useState('Friday, 21 November 2026');
  const [cellarDietary, setCellarDietary] = useState('Rare vintage champagne, zero shellfish, room ambient 20°C');
  const [codename, setCodename] = useState('ALBEMARLE-NOCTURNE');

  const [isCopied, setIsCopied] = useState(false);
  const [isTransmitted, setIsTransmitted] = useState(false);

  const dossierRef = `TGLC-MSN-${selectedScenario.id.substring(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

  const handleCopyManifest = () => {
    const manifest = `=== THE GLOBAL LUXURY CONSORTIUM · CONFIDENTIAL COMMISSION DOSSIER ===
Reference: ${dossierRef}
Codename: ${codename}
Objective: ${selectedScenario.title}
Enclave: ${selectedScenario.location}
Duration: ${selectedScenario.duration}
Assigned Fleet: ${selectedFleet.name} (${selectedFleet.type})
Security Protocol: ${selectedProtocol.name} (${selectedProtocol.level})
Departure Point: ${departurePoint}
Principals / Party: ${guestCount}
Target Window: ${targetDate}
Standing Instructions: ${cellarDietary}
Duty Desk: TGLC House, 3rd Floor, 45 Albemarle Street, Mayfair London W1S 4JL
Direct Phone: ${TGLC_CONTACT.telephone}
======================================================================`;

    navigator.clipboard?.writeText(manifest);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleTransmit = () => {
    setIsTransmitted(true);
  };

  return (
    <div className="bg-[#08090C] text-[#F4F1EA] min-h-screen py-10 sm:py-14 select-none">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-10">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-3 border-b border-[#1E202B] pb-6">
          <div className="flex items-center gap-2 text-xs text-[#CFA85E]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-[0.25em] font-medium">The Private Commission Studio</span>
            <span className="text-[#666]">/</span>
            <span className="text-[#9C968A]">Bespoke London & Global Itinerary Engine</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
                Orchestrate a Bespoke Commission
              </h1>
              <p className="text-xs sm:text-sm text-[#9C968A] max-w-2xl mt-2 leading-relaxed font-light">
                Configure your confidential lifestyle scenario—selecting private domains, armoured or chauffeur fleet, discretion protocols, and household briefings. Our Mayfair directors receive your dispatch with immediate priority.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#8E8A83] font-mono tabular-nums">TGLC HOUSE · MAYFAIR W1S</span>
            </div>
          </div>
        </div>

        {/* 4-Step Progress Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { num: '01', label: '1. Objective & Scenario' },
            { num: '02', label: '2. Fleet & Mobility' },
            { num: '03', label: '3. Discretion Protocol' },
            { num: '04', label: '4. Manifest & Dispatch' },
          ].map((step, idx) => {
            const isActive = currentStep === idx;
            const isCompleted = currentStep > idx;
            return (
              <button
                key={step.num}
                onClick={() => setCurrentStep(idx)}
                className={`p-3.5 text-left border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#141620] border-[#B98633] text-[#CFA85E]'
                    : isCompleted
                    ? 'bg-[#0E1017] border-[#2B2D3A] text-[#F4F1EA]'
                    : 'bg-[#0A0C11] border-[#181A22] text-[#6E6A63] hover:text-[#9C968A]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1 font-mono">
                  <span>{step.num}</span>
                  {isCompleted && <Check className="w-3.5 h-3.5 text-[#CFA85E]" />}
                </div>
                <span className="text-xs font-serif block truncate">{step.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Split Layout: Left Editor / Right Live Dossier Manifest */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Configuration Area */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Scenario Selection */}
            {currentStep === 0 && (
              <motion.div
                initial={{ opacity: 0.9, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#CFA85E] font-medium">
                    Step 1 · Select Sovereign Scenario
                  </span>
                  <span className="text-xs text-[#8E8A83]">6 curated London disciplines</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SCENARIOS.map((scenario) => {
                    const isSelected = selectedScenario.id === scenario.id;
                    return (
                      <div
                        key={scenario.id}
                        onClick={() => setSelectedScenario(scenario)}
                        className={`p-4 border transition-all cursor-pointer flex flex-col justify-between group ${
                          isSelected
                            ? 'bg-[#151722] border-[#CFA85E] shadow-xl'
                            : 'bg-[#0E1016] border-[#20222E] hover:border-[#8B672B]'
                        }`}
                      >
                        <div>
                          <div className="aspect-[16/10] w-full overflow-hidden mb-3 bg-black relative">
                            <img
                              src={scenario.image}
                              alt={scenario.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-105"
                            />
                            {isSelected && (
                              <div className="absolute top-2 right-2 bg-[#B98633] text-[#08090C] p-1 rounded-full">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                            )}
                          </div>
                          <span className="text-[10px] tracking-wider uppercase text-[#CFA85E] block">
                            {scenario.category}
                          </span>
                          <h3 className="font-serif text-lg text-[#F4F1EA] mt-1 mb-1 leading-snug">
                            {scenario.title}
                          </h3>
                          <p className="text-xs text-[#9C968A] font-light line-clamp-2 leading-relaxed">
                            {scenario.tagline}
                          </p>
                        </div>

                        <div className="mt-4 pt-2.5 border-t border-[#1E202B] flex items-center justify-between text-[11px] text-[#C4933F]">
                          <span>{scenario.location}</span>
                          <span className="tabular-nums">{scenario.duration}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="btn-gold px-7 py-3 text-xs flex items-center gap-2"
                  >
                    <span>Proceed to Fleet & Mobility</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#08090C]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Fleet & Mobility */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0.9, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#CFA85E] font-medium">
                    Step 2 · Select Fleet & Mobility Sanctuary
                  </span>
                  <button
                    onClick={() => setCurrentStep(0)}
                    className="text-xs text-[#9C968A] hover:text-[#CFA85E]"
                  >
                    ← Back to Scenario
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FLEET_OPTIONS.map((fleet) => {
                    const isSelected = selectedFleet.id === fleet.id;
                    return (
                      <div
                        key={fleet.id}
                        onClick={() => setSelectedFleet(fleet)}
                        className={`p-4 border transition-all cursor-pointer flex flex-col justify-between group ${
                          isSelected
                            ? 'bg-[#151722] border-[#CFA85E] shadow-xl'
                            : 'bg-[#0E1016] border-[#20222E] hover:border-[#8B672B]'
                        }`}
                      >
                        <div>
                          <div className="aspect-[16/10] w-full overflow-hidden mb-3 bg-black relative">
                            <img
                              src={fleet.image}
                              alt={fleet.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-105"
                            />
                            {isSelected && (
                              <div className="absolute top-2 right-2 bg-[#B98633] text-[#08090C] p-1 rounded-full">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                            )}
                          </div>
                          <span className="text-[10px] tracking-wider uppercase text-[#CFA85E] block">
                            {fleet.type}
                          </span>
                          <h3 className="font-serif text-lg text-[#F4F1EA] mt-1 mb-1">
                            {fleet.name}
                          </h3>
                          <p className="text-xs text-[#9C968A] font-light leading-relaxed">
                            {fleet.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    onClick={() => setCurrentStep(0)}
                    className="text-xs uppercase tracking-wider text-[#9C968A] hover:text-white"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="btn-gold px-7 py-3 text-xs flex items-center gap-2"
                  >
                    <span>Proceed to Discretion Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#08090C]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Discretion Protocol */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0.9, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#CFA85E] font-medium">
                    Step 3 · Discretion & Security Protocol
                  </span>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-xs text-[#9C968A] hover:text-[#CFA85E]"
                  >
                    ← Back to Fleet
                  </button>
                </div>

                <div className="space-y-3">
                  {SECURITY_PROTOCOLS.map((protocol) => {
                    const isSelected = selectedProtocol.id === protocol.id;
                    return (
                      <div
                        key={protocol.id}
                        onClick={() => setSelectedProtocol(protocol)}
                        className={`p-4 border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                          isSelected
                            ? 'bg-[#151722] border-[#CFA85E] shadow-xl'
                            : 'bg-[#0E1016] border-[#20222E] hover:border-[#8B672B]'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Shield className={`w-4 h-4 ${isSelected ? 'text-[#CFA85E]' : 'text-[#6E6A63]'}`} />
                            <h3 className="font-serif text-lg text-[#F4F1EA]">{protocol.name}</h3>
                            <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-[#181A22] text-[#C4933F] border border-[#2B2D3A]">
                              {protocol.level}
                            </span>
                          </div>
                          <p className="text-xs text-[#9C968A] font-light pl-6">{protocol.desc}</p>
                        </div>

                        {isSelected && (
                          <div className="bg-[#B98633] text-[#08090C] p-1 rounded-full shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-xs uppercase tracking-wider text-[#9C968A] hover:text-white"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="btn-gold px-7 py-3 text-xs flex items-center gap-2"
                  >
                    <span>Proceed to Schedule & Criteria</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#08090C]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Schedule, Criteria & Confirmation */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0.9, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#CFA85E] font-medium">
                    Step 4 · Schedule, Logistics & Standing Briefing
                  </span>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="text-xs text-[#9C968A] hover:text-[#CFA85E]"
                  >
                    ← Back to Protocol
                  </button>
                </div>

                <div className="bg-[#0E1016] border border-[#20222E] p-6 space-y-4 text-xs">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1">
                      Departure Point & Staging Mews
                    </label>
                    <input
                      type="text"
                      value={departurePoint}
                      onChange={(e) => setDeparturePoint(e.target.value)}
                      className="w-full bg-[#181A22] border border-[#2A2D38] px-3.5 py-2.5 text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1">
                        Principal & Guest Count
                      </label>
                      <input
                        type="text"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full bg-[#181A22] border border-[#2A2D38] px-3.5 py-2.5 text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1">
                        Target Date / Operation Window
                      </label>
                      <input
                        type="text"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        className="w-full bg-[#181A22] border border-[#2A2D38] px-3.5 py-2.5 text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1">
                      Cellar, Culinary & Acoustic Criteria
                    </label>
                    <textarea
                      rows={3}
                      value={cellarDietary}
                      onChange={(e) => setCellarDietary(e.target.value)}
                      className="w-full bg-[#181A22] border border-[#2A2D38] px-3.5 py-2.5 text-[#F4F1EA] focus:outline-none focus:border-[#CFA85E] resize-none font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-1">
                      Mission Codename (Discretion Alias)
                    </label>
                    <input
                      type="text"
                      value={codename}
                      onChange={(e) => setCodename(e.target.value.toUpperCase())}
                      className="w-full bg-[#181A22] border border-[#2A2D38] px-3.5 py-2.5 font-mono text-[#CFA85E] tracking-wider focus:outline-none focus:border-[#CFA85E]"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="text-xs uppercase tracking-wider text-[#9C968A] hover:text-white"
                  >
                    ← Back to Protocol
                  </button>

                  <button
                    onClick={handleTransmit}
                    className="btn-gold px-8 py-3.5 text-xs flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#08090C]" />
                    <span>Transmit Instruction to Mayfair Desk</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Confidential Live Mission Dossier */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#0C0E14] border border-[#262835] p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              {/* Gold watermark crest background */}
              <div className="absolute top-0 right-0 w-36 h-36 opacity-5 pointer-events-none">
                <img
                  src="/assets/aistudio/tglc_crest_transparent.png"
                  alt="Crest watermark"
                  className="w-full h-full object-contain filter invert"
                />
              </div>

              {/* Dossier Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1E202B]">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[#CFA85E]" />
                  <span className="text-[11px] font-mono tracking-wider text-[#CFA85E]">
                    {dossierRef}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#8E8A83] px-2 py-0.5 bg-[#14161F] border border-[#20222E]">
                  CONFIDENTIAL
                </span>
              </div>

              {/* Summary Body */}
              <div className="py-4 space-y-4 text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8A83] block">
                    Commission Codename
                  </span>
                  <span className="font-mono text-sm text-[#F4F1EA] font-semibold tracking-wider">
                    {codename || 'ALBEMARLE-NOCTURNE'}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8A83] block">
                    Sovereign Objective
                  </span>
                  <h4 className="font-serif text-lg text-[#F4F1EA] mt-0.5">
                    {selectedScenario.title}
                  </h4>
                  <p className="text-[11px] text-[#C4933F] mt-0.5">{selectedScenario.location} · {selectedScenario.duration}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#1E202B]">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8E8A83] block">
                      Assigned Fleet
                    </span>
                    <p className="font-medium text-[#F4F1EA] mt-0.5 truncate">{selectedFleet.name}</p>
                    <span className="text-[10px] text-[#9C968A]">{selectedFleet.type}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8E8A83] block">
                      Security Protocol
                    </span>
                    <p className="font-medium text-[#F4F1EA] mt-0.5 truncate">{selectedProtocol.name}</p>
                    <span className="text-[10px] text-[#CFA85E] font-mono">{selectedProtocol.level}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1E202B] space-y-2 text-[11px]">
                  <div className="flex items-start gap-2 text-[#D9D4CA]">
                    <MapPin className="w-3.5 h-3.5 text-[#CFA85E] shrink-0 mt-0.5" />
                    <span>Staging: <strong className="text-[#F4F1EA] font-normal">{departurePoint}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-[#D9D4CA]">
                    <Calendar className="w-3.5 h-3.5 text-[#CFA85E] shrink-0" />
                    <span>Target: <strong className="text-[#F4F1EA] font-normal">{targetDate}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-[#D9D4CA]">
                    <Users className="w-3.5 h-3.5 text-[#CFA85E] shrink-0" />
                    <span>Party: <strong className="text-[#F4F1EA] font-normal">{guestCount}</strong></span>
                  </div>
                </div>

                <div className="p-3 bg-[#12141C] border border-[#20222E] space-y-1 text-[11px]">
                  <span className="text-[10px] uppercase text-[#8E8A83] block">Lead Duty Directors</span>
                  <div className="flex items-center justify-between text-[#F4F1EA]">
                    <span>Mickell Washington</span>
                    <span className="text-[#CFA85E]">Founder & MD</span>
                  </div>
                  <div className="flex items-center justify-between text-[#F4F1EA]">
                    <span>Camilla Vance-Moreau</span>
                    <span className="text-[#CFA85E]">Head of Client Relations</span>
                  </div>
                </div>
              </div>

              {/* Dossier Actions */}
              <div className="pt-3 border-t border-[#1E202B] flex items-center justify-between gap-3">
                <button
                  onClick={handleCopyManifest}
                  className="flex-1 py-2 px-3 bg-[#151722] hover:bg-[#1E202D] border border-[#2B2D3A] text-xs text-[#D9D4CA] hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5 text-[#CFA85E]" />
                  <span>{isCopied ? 'Manifest Copied!' : 'Copy Cipher'}</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="py-2 px-3 bg-[#151722] hover:bg-[#1E202D] border border-[#2B2D3A] text-xs text-[#D9D4CA] hover:text-white transition-colors flex items-center justify-center gap-1.5"
                  title="Print Manifest"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print</span>
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1A1C24] text-[10px] text-[#7A756C] flex items-center justify-between">
                <span>Direct Telephone: {TGLC_CONTACT.telephone}</span>
                <span>London W1S 4JL</span>
              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className="p-5 bg-[#0E1016] border border-[#20222E] flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-serif text-[#F4F1EA] block">Need direct human consultation?</span>
                <span className="text-[11px] text-[#9C968A] font-light">Our Mayfair salon receives principals by confidential appointment.</span>
              </div>
              <button
                onClick={() => openIntroductionModal('Bespoke Commission Inquiry')}
                className="btn-outline-gold px-4 py-2 text-xs shrink-0 whitespace-nowrap"
              >
                Inquire
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal when transmitted */}
      <AnimatePresence>
        {isTransmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-lg bg-[#0E1016] border border-[#8B672B] p-8 shadow-2xl relative text-center space-y-5"
            >
              <div className="w-12 h-12 rounded-full border border-[#CFA85E] bg-[#161822] flex items-center justify-center mx-auto text-[#CFA85E]">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C4933F] font-medium block">
                Instruction Logged · Reference {dossierRef}
              </span>

              <h3 className="font-serif text-3xl text-[#F4F1EA]">
                Commission Transmitted to Mayfair Duty Desk
              </h3>

              <p className="text-xs text-[#9C968A] leading-relaxed font-light max-w-md mx-auto">
                Your bespoke instructions for <strong className="text-[#F4F1EA] font-normal">{selectedScenario.title}</strong> with <strong className="text-[#F4F1EA] font-normal">{selectedFleet.name}</strong> under <strong className="text-[#F4F1EA] font-normal">{selectedProtocol.name}</strong> have been securely staged. Camilla Vance-Moreau or Mickell Washington will acknowledge through encrypted line.
              </p>

              <div className="p-4 bg-[#14161F] border border-[#222430] text-left text-xs space-y-1.5 font-light">
                <div className="flex justify-between text-[#8E8A83]">
                  <span>Staging Location:</span>
                  <span className="text-[#F4F1EA]">{departurePoint}</span>
                </div>
                <div className="flex justify-between text-[#8E8A83]">
                  <span>Operational Codename:</span>
                  <span className="font-mono text-[#CFA85E]">{codename}</span>
                </div>
                <div className="flex justify-between text-[#8E8A83]">
                  <span>Discretion Line:</span>
                  <span className="text-[#F4F1EA] tabular-nums">{TGLC_CONTACT.telephone}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <button
                  onClick={() => setIsTransmitted(false)}
                  className="btn-gold px-7 py-3 text-xs"
                >
                  Return to Studio
                </button>
                <button
                  onClick={() => {
                    setIsTransmitted(false);
                    navigateTo('member-portal');
                  }}
                  className="btn-outline-gold px-6 py-3 text-xs flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-[#CFA85E]" />
                  <span>View in Member Portal</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
