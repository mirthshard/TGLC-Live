/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { GoldDivider } from '../common/GoldDivider';
import { TGLC_CONTACT } from '../../data/tglcData';
import { simulatedSupabase } from '../../services/supabaseClient';
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
  Send,
  CheckCircle2,
  Clock,
  Car,
  Plane,
  Anchor,
  Wine,
  Radio,
  Sliders,
  DollarSign,
  ChevronRight,
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
  baseHours: number;
  baseDisbursement: number;
  deliverables: string[];
}

const SCENARIOS: CommissionScenario[] = [
  {
    id: 'sub-rosa-thames-vault',
    category: 'Sub-Rosa Nocturne',
    title: 'Thames Stealth Speed Run & 300-Yr Bullion Vault Dinner',
    kicker: 'Square Mile & River Thames',
    tagline: 'Midnight Thames sprint on a 45ft matte-black interceptor followed by private catacomb dining.',
    image: '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg',
    location: 'Wapping Pier to Bank Catacombs',
    duration: 'Evening (5 Hours)',
    baseHours: 8,
    baseDisbursement: 14500,
    deliverables: [
      'High-speed twin-engine Thames night run under Tower Bridge at 38 knots',
      'Unmarked vault descent through 20-ton steel circular bank bulkheads',
      'Private chef 6-course tasting menu paired with rare 19th-century Armagnacs',
      'Julian Sterling tactical plainclothes security team accompanying throughout'
    ],
  },
  {
    id: 'mayfair-sartorial-horology',
    category: 'Sartorial & Horology',
    title: 'Savile Row In-Suite Cut & Archival Horology Vault',
    kicker: 'Mayfair & St James’s',
    tagline: 'Senior head cutter attendance in your private residence paired with closed-door Patek & Rolex viewings.',
    image: '/assets/aistudio/savile_row_bespoke.jpg',
    location: '45 Albemarle Street & Eaton Square',
    duration: '4–6 Hours',
    baseHours: 6,
    baseDisbursement: 9500,
    deliverables: [
      'In-residence basted fitting with Huntsman or Anderson & Sheppard head cutter',
      'Private viewings of provenance-verified vintage chronographs from private vault',
      'Discreet white-glove packaging and home delivery with vault insurance',
    ],
  },
  {
    id: 'underground-combat-bermondsey',
    category: 'Combat & Arenas',
    title: 'Bermondsey Arch Unsanctioned Exhibition & Ringside Salon',
    kicker: 'Southwark & East End Archways',
    tagline: 'Fifty invited patrons, an elevated ring under Victorian soot bricks, and raw pugilism.',
    image: '/assets/aistudio/pt3_6ef34e91.jpg',
    location: 'Bermondsey Railway Arches',
    duration: 'Full Evening (6 Hours)',
    baseHours: 10,
    baseDisbursement: 18000,
    deliverables: [
      'Front-row ringside table directly adjacent to the red corner with personal security cordon',
      'Tactical advance sweep and plainclothes security escort from departure to return',
      'Caviar and vintage scotch service served ringside during the 6-fight exhibition card',
      'Private post-match introduction with corner trainers and fighters'
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
    duration: '3 Days / 72 Hours',
    baseHours: 24,
    baseDisbursement: 42000,
    deliverables: [
      'Bombardier Challenger 350 private charter with dedicated captain and flight steward',
      'Pre-cleared diplomatic passport handling and customs clearance on tarmac',
      'Florence private Renaissance palazzo villa staffed and fires lit before arrival',
      'Helicopter transfer ready at Florence tarmac for Chianti vineyard landings'
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
    baseHours: 16,
    baseDisbursement: 28500,
    deliverables: [
      'Full manor house buyout with live-in butler, sommelier, and estate staff',
      'Clays and game field sports with certified master instructors and bespoke Purdey guns',
      'Twin-engine Agusta 109 helicopter transfer from Battersea Heliport in 24 minutes',
      'Evening hearth tasting menu prepared over applewood coals by Michelin guest chef'
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
    duration: 'Half Day (4 Hours)',
    baseHours: 6,
    baseDisbursement: 8000,
    deliverables: [
      'Private salon unlock after normal retail trading hours with champagne reception',
      'Untreated Burma ruby, Colombian emerald, and Kashmir sapphire inspection table',
      'Diplomatic courier export and insured safe staging directly to private residence',
      'Dedicated gemologist appraisal briefing and provenance documentation'
    ],
  },
];

const FLEET_OPTIONS = [
  {
    id: 'rolls-cullinan',
    name: 'Rolls-Royce Cullinan Series II',
    type: 'High-Ground Luxury Sanctuary',
    category: 'Chauffeur',
    hourlyCost: 280,
    desc: 'Bespoke shooting kit, dual champagne cooler, deep lambswool carpets, discrete privacy glass.',
    image: '/assets/aistudio/rolls-cullian-featured_a41abfa9.webp',
  },
  {
    id: 'rolls-phantom',
    name: 'Rolls-Royce Phantom VIII Extended',
    type: 'The Sovereign Flagship',
    category: 'Chauffeur',
    hourlyCost: 320,
    desc: 'Acoustic privacy partition, starlight headliner, electro-tint rear glass, unhurried Mayfair transit.',
    image: '/assets/aistudio/rolls-royce-cullinan-chauffeur-service-events_d3e6e421.webp',
  },
  {
    id: 'range-rover-armoured',
    name: 'Range Rover SV Intrepid (Armoured B6)',
    type: 'Ballistic Tactical Discretion',
    category: 'Tactical',
    hourlyCost: 450,
    desc: 'Certified ballistic glass, run-flat tyres, floor blast protection, covert tactical communications.',
    image: '/assets/aistudio/best-luxury-cars-2024_ab87bb7b.webp',
  },
  {
    id: 'luxury-sprinter-jetvan',
    name: 'Mercedes-Benz VIP Sprinter JetVan',
    type: 'Executive Mobile Command Suite',
    category: 'Tactical',
    hourlyCost: 380,
    desc: 'Four reclining first-class sleeper seats, encrypted satellite Wi-Fi, Apple TV, wardrobe, and washroom.',
    image: '/assets/aistudio/luxury_sprinter_jetvan.jpg',
  },
  {
    id: 'stealth-boat',
    name: '45ft Nocturne Matte-Black Thames Interceptor',
    type: 'River Stealth Interceptor',
    category: 'Maritime',
    hourlyCost: 850,
    desc: 'Twin Mercury Racing outboards, FLIR thermal night optics, PLA cleared 40kt transit, heated teak deck.',
    image: '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg',
  },
  {
    id: 'challenger-350',
    name: 'Bombardier Challenger 350',
    type: 'Super-Midsize Private Jet',
    category: 'Aviation',
    hourlyCost: 4200,
    desc: 'Ten-passenger stand-up cabin, flat-floor design, KA-band high-speed connectivity, London City cleared.',
    image: '/assets/aistudio/698157105b08bd0b828e954b_file_k95qb05z_c7bc7f74.png',
  },
];

const SECURITY_PROTOCOLS = [
  {
    id: 'covert-diplomatic',
    name: 'Covert Diplomatic Discretion',
    desc: 'Need-to-know operational authority, unmarked vehicles, zero digital telemetry, plainclothes advance.',
    level: 'Tier 1 Standard',
    costPerHour: 95,
  },
  {
    id: 'close-protection',
    name: 'Dedicated Close Protection Detail (Julian Sterling Team)',
    desc: 'Two SIA-licensed protection officers with British Special Forces background, counter-surveillance.',
    level: 'Tier 2 Tactical',
    costPerHour: 220,
  },
  {
    id: 'faraday-rf-shield',
    name: 'RF Faraday Enclosure & Anti-Surveillance',
    desc: 'Full electronic sweep of private meeting enclaves, sealed device lockboxes, RF jamming in transit.',
    level: 'Tier 3 Classified',
    costPerHour: 340,
  },
  {
    id: 'shielded-billing',
    name: 'Shielded Family Office Billing & Escort',
    desc: 'Confidential ledger invoicing via anonymised trust accounts without merchant logs, armed lead scout.',
    level: 'Fiscal & Tactical',
    costPerHour: 480,
  },
];

const SPEC_OPTIONS = {
  armourLevels: [
    { id: 'standard', name: 'Standard Discreet Tint', adder: 0 },
    { id: 'b6', name: 'VPAM B6 Ballistic & Blast Floor', adder: 850 },
    { id: 'vr10', name: 'VR10 Heavy Military Ballistic & Run-Flat', adder: 1600 },
  ],
  apronHandling: [
    { id: 'raf-northolt', name: 'RAF Northolt Gate 4 Diplomatic Apron', adder: 1200 },
    { id: 'farnborough', name: 'TAG Farnborough VIP Lounge & Apron Transfer', adder: 950 },
    { id: 'battersea', name: 'Battersea London Heliport VIP Gate', adder: 650 },
    { id: 'thames-pier', name: 'Private Pier Key (Chelsea / Tower Pier)', adder: 500 },
  ],
  sommelierAllocations: [
    { id: 'curated-cellar', name: 'Curated Grand Cru Burgundy & Champagne', adder: 1500 },
    { id: 'drc-petrus', name: 'DRC & Château Pétrus Library Vintages', adder: 6500 },
    { id: 'pre-embargo', name: 'Pre-1900 Cognac & Pre-Embargo Havanas', adder: 4200 },
    { id: 'none', name: 'Principal’s Own Cellar Transported', adder: 250 },
  ],
  householdStaffing: [
    { id: 'concierge-lead', name: 'Dedicated Senior Lifestyle Manager (Camilla Vance-Moreau)', adder: 0 },
    { id: 'michelin-brigade', name: 'Michelin-Trained Private Chef & Sommelier Brigade', adder: 2400 },
    { id: 'royal-butler', name: 'English Live-in Butler & Valet Service', adder: 1200 },
  ]
};

const OPERATIONAL_ROADMAP = [
  { phase: 'T-72h', title: 'Advance Reconnaissance', desc: 'Julian Sterling team conducts route drive, venue keyholder check, and acoustic sweep.' },
  { phase: 'T-24h', title: 'Logistics & Apron Lock', desc: 'Flight plans filed, apron security passes pre-cleared, rare vintages decanted to cellar vault.' },
  { phase: 'T-2h', title: 'Lead Scout Staging', desc: 'Chase car checks route traffic; vehicle air filters engaged; primary vehicle staged at residence.' },
  { phase: 'T-0h', title: 'Flawless Execution', desc: 'Direct encrypted radio link between lead driver, principal security escort, and Mayfair duty desk.' },
  { phase: 'T+2h', title: 'Post-Mission Protocol', desc: 'Confidential ledger reconciliation, vault storage of acquisitions, and encrypted mission report.' },
];

export const CommissionStudio: React.FC = () => {
  const { navigateTo, openIntroductionModal } = useNavigation();

  // Step state (0: Scenario, 1: Fleet, 2: Security Protocol, 3: Tactical Specs, 4: Logistics & Submission)
  const [currentStep, setCurrentStep] = useState(0);

  const [selectedScenario, setSelectedScenario] = useState<CommissionScenario>(SCENARIOS[0]);
  const [selectedFleet, setSelectedFleet] = useState(FLEET_OPTIONS[0]);
  const [selectedProtocol, setSelectedProtocol] = useState(SECURITY_PROTOCOLS[1]);

  // Tactical specifications
  const [armourLevel, setArmourLevel] = useState(SPEC_OPTIONS.armourLevels[1]);
  const [apronHandling, setApronHandling] = useState(SPEC_OPTIONS.apronHandling[0]);
  const [cellarAlloc, setCellarAlloc] = useState(SPEC_OPTIONS.sommelierAllocations[0]);
  const [staffing, setStaffing] = useState(SPEC_OPTIONS.householdStaffing[1]);

  // Schedule & details
  const [departurePoint, setDeparturePoint] = useState('Eaton Square Residence, Belgravia, London SW1W');
  const [guestCount, setGuestCount] = useState('2 Principals + 1 Executive Guest');
  const [targetDate, setTargetDate] = useState('Friday, 21 November 2026');
  const [cellarDietary, setCellarDietary] = useState('Domaine Dujac Clos de la Roche 2010, wild turbot, ambient 20.5°C, acoustic isolation.');
  const [codename, setCodename] = useState('MAYFAIR-RESOLUTE');

  // Interactive hours slider
  const [retainedHours, setRetainedHours] = useState(selectedScenario.baseHours);

  const [isCopied, setIsCopied] = useState(false);
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isTransmitted, setIsTransmitted] = useState(false);
  const [generatedMandateId, setGeneratedMandateId] = useState('');

  // Cost calculation
  const totalEstimatedCost =
    selectedScenario.baseDisbursement +
    selectedFleet.hourlyCost * (retainedHours || 8) +
    selectedProtocol.costPerHour * (retainedHours || 8) +
    armourLevel.adder +
    apronHandling.adder +
    cellarAlloc.adder +
    staffing.adder;

  const dossierRef = `CMD-TGLC-${selectedScenario.id.substring(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

  const handleCopyManifest = () => {
    const manifest = `=== THE GLOBAL LUXURY CONSORTIUM · CONFIDENTIAL COMMISSION DOSSIER ===
Mandate Reference: ${dossierRef}
Codename: ${codename}
Objective: ${selectedScenario.title}
Enclave: ${selectedScenario.location}
Duration: ${selectedScenario.duration}
Retained Director Hours: ${retainedHours}h
Assigned Fleet: ${selectedFleet.name} (${selectedFleet.type})
Security Protocol: ${selectedProtocol.name} (${selectedProtocol.level})
Ballistic Spec: ${armourLevel.name}
Air/Maritime Gate: ${apronHandling.name}
Cellar Allocation: ${cellarAlloc.name}
Staffing Detail: ${staffing.name}
Departure Staging: ${departurePoint}
Party: ${guestCount}
Target Window: ${targetDate}
Standing Briefing: ${cellarDietary}
Estimated Pass-Through Disbursement: £${totalEstimatedCost.toLocaleString('en-GB')} (0% markup)
Duty Desk: TGLC House, 3rd Floor, 45 Albemarle Street, Mayfair London W1S 4JL
Direct Phone: ${TGLC_CONTACT.telephone}
======================================================================`;

    navigator.clipboard?.writeText(manifest);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleTransmit = async () => {
    setIsTransmitting(true);
    try {
      const mandateId = `CMD-${Date.now().toString().slice(-4)}`;
      setGeneratedMandateId(mandateId);

      // Insert directly into simulatedSupabase
      await simulatedSupabase.from('concierge_requests').insert({
        id: mandateId,
        userId: 'usr-client-01',
        title: `[Mandate] ${selectedScenario.title}`,
        category: selectedScenario.category,
        priority: 'Urgent',
        status: 'Received',
        submittedDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
        assignedTo: 'Camilla Vance-Moreau & Julian Sterling',
        notes: `Codename: ${codename}. Fleet: ${selectedFleet.name}. Protocol: ${selectedProtocol.name}. Staging: ${departurePoint}. Specs: ${armourLevel.name}, ${apronHandling.name}. Cellar: ${cellarAlloc.name}.`,
        estimatedCost: `£${totalEstimatedCost.toLocaleString('en-GB')}`
      });

      // Also record direct message notification in portal
      await simulatedSupabase.from('direct_messages').insert({
        id: `msg-${Date.now()}`,
        userId: 'usr-client-01',
        senderName: 'Mayfair Triage Desk',
        senderRole: 'Automated Ingestion',
        timestamp: 'Just now',
        text: `Encrypted mandate [${mandateId}] "${selectedScenario.title}" received via Commission Studio. Assigned to Camilla Vance-Moreau and Julian Sterling for immediate reconnaissance.`,
        isStaff: true
      });

      setIsTransmitting(false);
      setIsTransmitted(true);
    } catch {
      setIsTransmitting(false);
      setIsTransmitted(true);
    }
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
                Configure your confidential lifestyle scenario—selecting private domains, armoured or chauffeur fleet, discretion protocols, tactical specifications, and household briefings. Real-time cost estimates reflect pure pass-through disbursements with 0% consortium markup.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#11131A] border border-[#232634] text-right">
                <span className="text-[10px] uppercase tracking-wider text-[#9C968A] block">Pass-Through Disbursement</span>
                <span className="font-serif text-2xl text-[#CFA85E] font-semibold tabular-nums">
                  £{totalEstimatedCost.toLocaleString('en-GB')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Progress Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {[
            { num: '01', label: '1. Objective & Scenario' },
            { num: '02', label: '2. Fleet & Mobility' },
            { num: '03', label: '3. Security Protocol' },
            { num: '04', label: '4. Tactical Specifications' },
            { num: '05', label: '5. Logistics & Dispatch' },
          ].map((step, idx) => {
            const isActive = currentStep === idx;
            const isCompleted = currentStep > idx;
            return (
              <button
                key={step.num}
                onClick={() => setCurrentStep(idx)}
                className={`p-3 text-left border transition-all cursor-pointer ${
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
                        onClick={() => {
                          setSelectedScenario(scenario);
                          setRetainedHours(scenario.baseHours);
                        }}
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
                          <span className="tabular-nums font-mono">From £{scenario.baseDisbursement.toLocaleString('en-GB')}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="btn-gold px-7 py-3 text-xs flex items-center gap-2 cursor-pointer"
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
                    className="text-xs text-[#9C968A] hover:text-[#CFA85E] cursor-pointer"
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
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] tracking-wider uppercase text-[#CFA85E] block">
                              {fleet.category} · {fleet.type}
                            </span>
                            <span className="text-[11px] font-mono text-[#CFA85E] tabular-nums">
                              £{fleet.hourlyCost}/hr
                            </span>
                          </div>
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
                    className="text-xs uppercase tracking-wider text-[#9C968A] hover:text-white cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="btn-gold px-7 py-3 text-xs flex items-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Security Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#08090C]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Security Protocol */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0.9, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#CFA85E] font-medium">
                    Step 3 · Discretion & Tactical Protection Protocol
                  </span>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-xs text-[#9C968A] hover:text-[#CFA85E] cursor-pointer"
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
                          <span className="text-[11px] text-[#CFA85E] font-mono pl-6 block">
                            +£{protocol.costPerHour}/hour security officer allocation
                          </span>
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
                    className="text-xs uppercase tracking-wider text-[#9C968A] hover:text-white cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="btn-gold px-7 py-3 text-xs flex items-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Tactical Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#08090C]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Tactical Specifications Picker */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0.9, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#CFA85E] font-medium">
                    Step 4 · Tactical Specifications & Curated Allocations
                  </span>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="text-xs text-[#9C968A] hover:text-[#CFA85E] cursor-pointer"
                  >
                    ← Back to Protocol
                  </button>
                </div>

                <div className="bg-[#0E1016] border border-[#20222E] p-5 space-y-5 text-xs">
                  {/* Armour Level */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-2 flex items-center justify-between">
                      <span>Ballistic Armour Spec</span>
                      <span className="text-[#CFA85E] font-mono">+£{armourLevel.adder}</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {SPEC_OPTIONS.armourLevels.map((lvl) => (
                        <button
                          key={lvl.id}
                          type="button"
                          onClick={() => setArmourLevel(lvl)}
                          className={`p-2.5 text-left border cursor-pointer transition-all ${
                            armourLevel.id === lvl.id
                              ? 'bg-[#181A24] border-[#CFA85E] text-[#F4F1EA]'
                              : 'bg-[#111319] border-[#222530] text-[#9C968A] hover:text-[#F4F1EA]'
                          }`}
                        >
                          <span className="block font-medium truncate">{lvl.name}</span>
                          <span className="text-[10px] text-[#CFA85E] font-mono">
                            {lvl.adder === 0 ? 'Included' : `+£${lvl.adder}`}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Apron Handling Gate */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-2 flex items-center justify-between">
                      <span>Apron / Maritime VIP Gate Handling</span>
                      <span className="text-[#CFA85E] font-mono">+£{apronHandling.adder}</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SPEC_OPTIONS.apronHandling.map((gate) => (
                        <button
                          key={gate.id}
                          type="button"
                          onClick={() => setApronHandling(gate)}
                          className={`p-2.5 text-left border cursor-pointer transition-all ${
                            apronHandling.id === gate.id
                              ? 'bg-[#181A24] border-[#CFA85E] text-[#F4F1EA]'
                              : 'bg-[#111319] border-[#222530] text-[#9C968A] hover:text-[#F4F1EA]'
                          }`}
                        >
                          <span className="block font-medium truncate">{gate.name}</span>
                          <span className="text-[10px] text-[#CFA85E] font-mono">+£{gate.adder}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sommelier Allocation */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-2 flex items-center justify-between">
                      <span>Sommelier & Cellar Allocation</span>
                      <span className="text-[#CFA85E] font-mono">+£{cellarAlloc.adder}</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SPEC_OPTIONS.sommelierAllocations.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setCellarAlloc(c)}
                          className={`p-2.5 text-left border cursor-pointer transition-all ${
                            cellarAlloc.id === c.id
                              ? 'bg-[#181A24] border-[#CFA85E] text-[#F4F1EA]'
                              : 'bg-[#111319] border-[#222530] text-[#9C968A] hover:text-[#F4F1EA]'
                          }`}
                        >
                          <span className="block font-medium truncate">{c.name}</span>
                          <span className="text-[10px] text-[#CFA85E] font-mono">+£{c.adder}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Household & Concierge Staffing */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D9D4CA] mb-2 flex items-center justify-between">
                      <span>Household & Dedicated Staffing Brigade</span>
                      <span className="text-[#CFA85E] font-mono">+£{staffing.adder}</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {SPEC_OPTIONS.householdStaffing.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setStaffing(s)}
                          className={`p-2.5 text-left border cursor-pointer transition-all ${
                            staffing.id === s.id
                              ? 'bg-[#181A24] border-[#CFA85E] text-[#F4F1EA]'
                              : 'bg-[#111319] border-[#222530] text-[#9C968A] hover:text-[#F4F1EA]'
                          }`}
                        >
                          <span className="block font-medium truncate">{s.name}</span>
                          <span className="text-[10px] text-[#CFA85E] font-mono">
                            {s.adder === 0 ? 'Included' : `+£${s.adder}`}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="text-xs uppercase tracking-wider text-[#9C968A] hover:text-white cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="btn-gold px-7 py-3 text-xs flex items-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Logistics & Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#08090C]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Schedule, Criteria & Confirmation */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0.9, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#CFA85E] font-medium">
                    Step 5 · Schedule, Logistics & Direct Dispatch
                  </span>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="text-xs text-[#9C968A] hover:text-[#CFA85E] cursor-pointer"
                  >
                    ← Back to Specifications
                  </button>
                </div>

                {/* Retained Hours Slider */}
                <div className="bg-[#0E1016] border border-[#20222E] p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="uppercase tracking-wider text-[#D9D4CA] flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#CFA85E]" />
                      <span>Retained Director Hours</span>
                    </span>
                    <span className="font-mono text-sm text-[#CFA85E] font-bold">{retainedHours} Hours</span>
                  </div>
                  <input
                    type="range"
                    min={4}
                    max={48}
                    step={2}
                    value={retainedHours}
                    onChange={(e) => setRetainedHours(Number(e.target.value))}
                    className="w-full accent-[#CFA85E] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#7E7A73] font-mono">
                    <span>4 Hours (Briefing)</span>
                    <span>16 Hours (Full Day)</span>
                    <span>48 Hours (Multi-Day Operation)</span>
                  </div>
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

                {/* Operational Roadmap Preview */}
                <div className="bg-[#0B0D13] border border-[#20222B] p-5 space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#CFA85E] font-medium block">
                    Operational Execution Roadmap
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
                    {OPERATIONAL_ROADMAP.map((step) => (
                      <div key={step.phase} className="p-2.5 bg-[#12141C] border border-[#232532] space-y-1">
                        <span className="text-[10px] font-mono text-[#CFA85E] block">{step.phase}</span>
                        <strong className="text-[11px] text-[#F4F1EA] block">{step.title}</strong>
                        <p className="text-[10px] text-[#8E8A83] font-light leading-snug">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="text-xs uppercase tracking-wider text-[#9C968A] hover:text-white cursor-pointer"
                  >
                    ← Back to Specs
                  </button>

                  <button
                    onClick={handleTransmit}
                    disabled={isTransmitting}
                    className="btn-gold px-8 py-3.5 text-xs flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5 text-[#08090C]" />
                    <span>{isTransmitting ? 'Transmitting Mandate...' : 'Transmit Instruction to Mayfair Desk'}</span>
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
                    {codename || 'MAYFAIR-RESOLUTE'}
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

                {/* Tactical Specs Summary */}
                <div className="p-3 bg-[#11131A] border border-[#20222B] space-y-1.5 text-[11px]">
                  <span className="text-[10px] uppercase tracking-wider text-[#CFA85E] block font-semibold">
                    Configured Specifications
                  </span>
                  <div className="flex justify-between text-[#B5AFA3]">
                    <span>Ballistic Protection:</span>
                    <span className="text-[#F4F1EA]">{armourLevel.name}</span>
                  </div>
                  <div className="flex justify-between text-[#B5AFA3]">
                    <span>Apron / Marine Gate:</span>
                    <span className="text-[#F4F1EA]">{apronHandling.name}</span>
                  </div>
                  <div className="flex justify-between text-[#B5AFA3]">
                    <span>Cellar Allocation:</span>
                    <span className="text-[#F4F1EA]">{cellarAlloc.name}</span>
                  </div>
                  <div className="flex justify-between text-[#B5AFA3]">
                    <span>Staffing Brigade:</span>
                    <span className="text-[#F4F1EA]">{staffing.name}</span>
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

                {/* Cost Breakdown */}
                <div className="p-4 bg-[#141620] border border-[#8B672B] space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[11px] text-[#A6A095]">
                    <span>Base Scenario Disbursement</span>
                    <span className="font-mono text-[#F4F1EA]">£{selectedScenario.baseDisbursement.toLocaleString('en-GB')}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#A6A095]">
                    <span>Fleet & Security ({retainedHours}h)</span>
                    <span className="font-mono text-[#F4F1EA]">
                      £{((selectedFleet.hourlyCost + selectedProtocol.costPerHour) * retainedHours).toLocaleString('en-GB')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#A6A095]">
                    <span>Tactical Specifications & Cellar</span>
                    <span className="font-mono text-[#F4F1EA]">
                      £{(armourLevel.adder + apronHandling.adder + cellarAlloc.adder + staffing.adder).toLocaleString('en-GB')}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-[#2B2D3A] flex items-center justify-between font-serif text-sm">
                    <span className="text-[#F4F1EA]">Estimated Pass-Through Total</span>
                    <span className="text-[#CFA85E] font-bold text-base font-mono">
                      £{totalEstimatedCost.toLocaleString('en-GB')}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8E8A83] block italic">
                    0% Consortium Markup · Pass-through direct ledger debit
                  </span>
                </div>
              </div>

              {/* Dossier Actions */}
              <div className="pt-3 border-t border-[#1E202B] flex items-center justify-between gap-3">
                <button
                  onClick={handleCopyManifest}
                  className="flex-1 py-2 px-3 bg-[#151722] hover:bg-[#1E202D] border border-[#2B2D3A] text-xs text-[#D9D4CA] hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5 text-[#CFA85E]" />
                  <span>{isCopied ? 'Manifest Copied!' : 'Copy Cipher'}</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="py-2 px-3 bg-[#151722] hover:bg-[#1E202D] border border-[#2B2D3A] text-xs text-[#D9D4CA] hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
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
                className="btn-outline-gold px-4 py-2 text-xs shrink-0 whitespace-nowrap cursor-pointer"
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
                Instruction Logged · Mandate Reference {generatedMandateId || dossierRef}
              </span>

              <h3 className="font-serif text-3xl text-[#F4F1EA]">
                Commission Transmitted to Mayfair Duty Desk
              </h3>

              <p className="text-xs text-[#9C968A] leading-relaxed font-light max-w-md mx-auto">
                Your bespoke instructions for <strong className="text-[#F4F1EA] font-normal">{selectedScenario.title}</strong> with <strong className="text-[#F4F1EA] font-normal">{selectedFleet.name}</strong> under <strong className="text-[#F4F1EA] font-normal">{selectedProtocol.name}</strong> have been securely staged into the live Member Portal triage queue.
              </p>

              <div className="p-4 bg-[#14161F] border border-[#222430] text-left text-xs space-y-1.5 font-light">
                <div className="flex justify-between text-[#8E8A83]">
                  <span>Mandate Reference:</span>
                  <span className="font-mono text-[#CFA85E]">{generatedMandateId || dossierRef}</span>
                </div>
                <div className="flex justify-between text-[#8E8A83]">
                  <span>Operational Codename:</span>
                  <span className="font-mono text-[#F4F1EA]">{codename}</span>
                </div>
                <div className="flex justify-between text-[#8E8A83]">
                  <span>Estimated Total (0% Markup):</span>
                  <span className="font-mono text-[#CFA85E] font-bold">£{totalEstimatedCost.toLocaleString('en-GB')}</span>
                </div>
                <div className="flex justify-between text-[#8E8A83]">
                  <span>Assigned Duty Directors:</span>
                  <span className="text-[#F4F1EA]">Camilla Vance-Moreau & Julian Sterling</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <button
                  onClick={() => setIsTransmitted(false)}
                  className="btn-gold px-7 py-3 text-xs cursor-pointer"
                >
                  Return to Studio
                </button>
                <button
                  onClick={() => {
                    setIsTransmitted(false);
                    navigateTo('member-portal');
                  }}
                  className="btn-outline-gold px-6 py-3 text-xs flex items-center gap-1.5 cursor-pointer"
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
