import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigation } from '../../context/NavigationContext';
import { TGLC_CONTACT } from '../../data/tglcData';
import { GoldDivider } from '../common/GoldDivider';
import {
  ArrowUpRight,
  Zap,
  Key,
  Compass,
  Flame,
  Lock,
  CheckCircle2,
  Clock,
  Radio,
  Crosshair,
  FileText,
} from 'lucide-react';

export type SubRosaCategory = 'all' | 'subterranean' | 'industrial' | 'counter-culture' | 'after-hours' | 'itinerary';

interface ClandestineDossier {
  id: string;
  category: 'subterranean' | 'industrial' | 'counter-culture' | 'after-hours';
  categoryLabel: string;
  title: string;
  kicker: string;
  tagline: string;
  image: string;
  gridCoordinates: string;
  clearanceLevel: string;
  dressCode: string;
  securityProtocol: string;
  intelBrief: string;
  deepNarrative: string[];
  deliverables: string[];
  insiderWhisper: string;
}

const CLANDESTINE_DOSSIERS: ClandestineDossier[] = [
  {
    id: 'paddock-bunker',
    category: 'subterranean',
    categoryLabel: 'Subterranean Sanctums & Bunkers',
    title: 'Paddock Citadel: Churchill’s Sub-Level War Rooms',
    kicker: 'Citadel 01 · North London Sub-Terrain',
    tagline: 'Forty feet beneath London clay lies the alternate war fortress history forgot.',
    image: '/assets/aistudio/hidden_subterranean_vault_1794295323175.jpg',
    gridCoordinates: '51.5542° N, 0.2520° W · Neasden Sub-Terrain',
    clearanceLevel: 'Level 3 Sovereign Introduction',
    dressCode: 'Dark Tailoring / Tactical Formal',
    securityProtocol: 'RF Shielded Faraday Enclosure · Zero Telemetry',
    intelBrief: 'Constructed in 1939 as the classified alternate cabinet war bunker for Winston Churchill, fortified behind 5-foot blast walls and gas filtration locks.',
    deepNarrative: [
      'While millions tour Westminster, Paddock stands closed to the general public beneath unmarked grounds in North-West London. The historic map room and original cipher rooms remain preserved in deep silence.',
      'Through custodial stewardship, TGLC coordinates private evening briefings, intimate dining beside original oak map tables, and confidential sessions where total acoustic and signal isolation matters.'
    ],
    deliverables: [
      'Private custodial unlock and escorted descent past blast bulkheads',
      '12-guest candlelit banquet prepared privately inside the map room',
      'Full RF check and secure device lockbox storage upon arrival',
      'Curated architectural briefing with specialist archival historian'
    ],
    insiderWhisper: 'Enter beside the unmarked brick substation; the main bulkhead opens via a three-stage key sequence.'
  },
  {
    id: 'kingsway-tunnels',
    category: 'subterranean',
    categoryLabel: 'Subterranean Sanctums & Bunkers',
    title: 'Kingsway Deep Intelligence Tunnels & Cold War Vaults',
    kicker: 'Citadel 02 · Holborn Deep Sub-Level',
    tagline: 'The mile-long subterranean corridor where Britain kept its Cold War hotlines.',
    image: '/assets/aistudio/01-Neo-Bankside-Luxury-Penthouse-London-England-UK-640x360_c8f27abb.jpg',
    gridCoordinates: '51.5173° N, 0.1189° W · High Holborn 100ft Below',
    clearanceLevel: 'Level 3 Sovereign Introduction',
    dressCode: 'Structured Monochrome / Discreet Outerwear',
    securityProtocol: 'Pre-vetted Security Escort & Air-Quality Clear',
    intelBrief: 'One hundred feet below Chancery Lane lies an 8,000-square-metre labyrinth that once housed wartime intelligence communications and the original Transatlantic hotline terminus.',
    deepNarrative: [
      'Untouched by the frantic pace of High Holborn overhead, Kingsway retains its own artesian well, timber generator galleries, and historic cable vaults.',
      'Principals gather here for private acoustic performances, closed contemporary art previews, and completely confidential conversations away from electronic intrusion.'
    ],
    deliverables: [
      'Discrete arrival through an unmarked street shaft and private goods lift',
      'Guided architectural tour led by veteran specialist engineers',
      'Private vintage single-malt tasting inside the former switchroom',
      'Chauffeured pickup coordinated in the alleyways off Furnival Street'
    ],
    insiderWhisper: 'The ambient temperature remains steady year-round; once the upper hatch seals, traffic noise vanishes entirely.'
  },
  {
    id: 'city-bullion-vaults',
    category: 'subterranean',
    categoryLabel: 'Subterranean Sanctums & Bunkers',
    title: 'The 300-Year-Old Bullion Vaults & Sub-Thames Catacombs',
    kicker: 'Citadel 03 · Square Mile Catacombs',
    tagline: 'Heavy circular steel vault doors guarding quiet cigar rooms and 18th-century cellars.',
    image: '/assets/aistudio/hidden_subterranean_vault_1794295323175.jpg',
    gridCoordinates: '51.5134° N, 0.0889° W · City of London Sub-Vault',
    clearanceLevel: 'Level 2 Biometric Access',
    dressCode: 'Black Tie Optional / Savile Row Tailoring',
    securityProtocol: 'Biometric Palm Verification & Keyholder Escort',
    intelBrief: 'Deep beneath Lombard Street sit brick catacombs built three centuries ago to store bullion and East India trade reserves.',
    deepNarrative: [
      'Hidden behind twenty-ton circular bank doors lie private vintage spirit lockers and unadvertised drawing rooms furnished for serene conversation.',
      'Pour pre-phylloxera Cognac under arched brickwork while bespoke ventilation keeps cigar smoke crisp and unintrusive.'
    ],
    deliverables: [
      'Private vault buyout secured behind locked 20-ton circular doors',
      'Curated tasting of pre-1900 Armagnac and pre-embargo vintages',
      'Resident master sommelier and cigar steward in attendance',
      'Subterranean private exit directly to waiting Mayfair transport'
    ],
    insiderWhisper: 'Ask for Vault 04—an original 1888 brass locker still houses private consortium reserves.'
  },
  {
    id: 'barbican-skystudio',
    category: 'industrial',
    categoryLabel: 'Industrial & Brutalist Enclaves',
    title: 'The Barbican Brutalist Sky-Sanctum & Concrete Terraces',
    kicker: 'Enclave 01 · City High-Elevation',
    tagline: 'High above London rooftops, textured granite meets mid-century radical design.',
    image: '/assets/aistudio/hidden_brutalist_penthouse_1794295322915.jpg',
    gridCoordinates: '51.5204° N, 0.0928° W · Barbican Tower Top Tier',
    clearanceLevel: 'Level 2 Biometric Access',
    dressCode: 'Architectural Minimalist',
    securityProtocol: 'Resident Key Fob & Private Express Lift',
    intelBrief: 'Perched at the crown of the Barbican Estate, this private duplex blends bush-hammered concrete, warm Brazilian rosewood, and sweeping panoramas over St Paul’s.',
    deepNarrative: [
      'Away from the classical townhouses of W1, London’s creative patrons retreat here for post-war art viewings, unhurried dinners, and open-air winter nightcaps.',
      'Every terrace angle shelters you from London breezes while framing the lit spires of Wren churches across the Square Mile.'
    ],
    deliverables: [
      'Full evening use of a landmark high-floor Barbican duplex penthouse',
      'Private salon walkthrough of post-war British modernism and sculpture',
      'Dedicated house bartender serving seasonal botanical infusions',
      'Discreet basement garage arrival with direct private lift ascent'
    ],
    insiderWhisper: 'Vinyl played through the studio valve amplifiers here fills the concrete gallery with concert-hall warmth.'
  },
  {
    id: 'bermondsey-armory',
    category: 'industrial',
    categoryLabel: 'Industrial & Brutalist Enclaves',
    title: 'Bermondsey Tanneries & Bespoke Leather Armory',
    kicker: 'Enclave 02 · Southwark Industrial Arches',
    tagline: 'Heritage English leathercraft and custom automotive luggage built behind unmarked arches.',
    image: '/assets/aistudio/SSB7Se1D48BQSnNL_dd2452d5.png',
    gridCoordinates: '51.4988° N, 0.0772° W · Bermondsey Victorian Arches',
    clearanceLevel: 'Level 1 Discretion',
    dressCode: 'Smart Casual / Heritage Wool',
    securityProtocol: 'Appointment Only · Private Bench Briefing',
    intelBrief: 'Beneath Southwark’s Victorian brick railway arches, third-generation saddlers hand-stitch custom luggage sets contoured exactly to collectors’ aircraft and coachbuilt boot spaces.',
    deepNarrative: [
      'Here you step straight from Regent’s Park noise into the honest fragrance of vegetable-tanned bridle hide, beeswax thread, and brass hardware.',
      'Select single hides from Tuscan and Devon tanneries to commission custom flight duffles, watch rolls, and shooting cases.'
    ],
    deliverables: [
      'Closed-workshop consultation with Britain’s master saddlers',
      'Bespoke hide grading and hand-burnished edge specifications',
      'Custom luggage tailored to specific aircraft cabins and supercar boots',
      'Private small-batch tasting in the mezzanine pattern library'
    ],
    insiderWhisper: 'The head cutter honed his craft fitting ceremonial saddles in Knightsbridge before establishing this private studio.'
  },
  {
    id: 'hackney-horology',
    category: 'industrial',
    categoryLabel: 'Industrial & Brutalist Enclaves',
    title: 'Hackney Canal Secret Precision Horology Laboratory',
    kicker: 'Enclave 03 · East Canal Basin',
    tagline: 'Cleanroom micro-mechanics inside an unmarked Regent’s Canal warehouse.',
    image: '/assets/aistudio/About-Luxury-Watches_77cb4520.jpg',
    gridCoordinates: '51.5372° N, 0.0558° W · Regent’s Canal Basin',
    clearanceLevel: 'Level 2 Biometric Access',
    dressCode: 'Discreet Smart · Lab Coats Provided',
    securityProtocol: 'Cleanroom Airlock Access',
    intelBrief: 'Behind a weathered red-brick canal facade lies an ISO Class 5 watchmaking cleanroom devoted to independent tourbillons and museum movement restoration.',
    deepNarrative: [
      'Sit at high-magnification benches alongside master watchmakers to see hand-bevelled bridges shaped with gentian wood and rare complications regulated in real time.',
      'Arrive by narrow-beam electric launch along the canal right up to the private waterside loading bay.'
    ],
    deliverables: [
      'Private laboratory session with independent British watchmakers',
      'Microscope inspection of rare minute repeaters and prototype movements',
      'Custom enamel dial and hand-engraved rotor commissions',
      'Quiet canal boat transfer to the warehouse dock'
    ],
    insiderWhisper: 'Look past the industrial brick exterior—the filtration system inside equals Swiss valley ateliers.'
  },
  {
    id: 'dalston-omakase',
    category: 'counter-culture',
    categoryLabel: 'Counter-Culture Gastronomy & Speakeasies',
    title: 'The 8-Seat Subterranean Omakase Behind a Record Shop',
    kicker: 'Gastronomy 01 · Dalston Unmarked Basement',
    tagline: 'Eight hinoki seats, zero online listings, and day-boat catches from Cornwall and Toyosu.',
    image: '/assets/aistudio/hidden_secret_gastronomy_1794295323821.jpg',
    gridCoordinates: '51.5471° N, 0.0754° W · Dalston Underground',
    clearanceLevel: 'Level 2 Biometric Access',
    dressCode: 'Understated Evening Attire · No Strong Scents',
    securityProtocol: 'Host Greeting via Vinyl Counter',
    intelBrief: 'Entered behind stacked wooden crates at an independent Japanese record shop, this acoustic basement counter is presided over by a third-generation Tokyo sushi shokunin.',
    deepNarrative: [
      'Far removed from flash bulbs and velvet ropes, dinner unfolds in hushed intimacy: aged red akasu rice, Hokkaido uni, and line-caught Channel turbot served slice by slice.',
      'TGLC reserves complete eight-seat buyouts paired with unlisted Niigata sakes.'
    ],
    deliverables: [
      'Complete 8-seat private counter evening',
      '22-course seasonal omakase curated directly by the head itamae',
      'Rare micro-brewery Daiginjo and artisanal tea flights',
      'Private post-dinner vinyl listening session in the front room'
    ],
    insiderWhisper: 'Mention the 1974 blue-sleeve jazz pressing at the counter and the shelving swings open quietly.'
  },
  {
    id: 'soho-freezer-vault',
    category: 'counter-culture',
    categoryLabel: 'Counter-Culture Gastronomy & Speakeasies',
    title: 'The Soho Butcher Freezer Door Clandestine Cocktail Lab',
    kicker: 'Gastronomy 02 · Soho Cobbled Alleys',
    tagline: 'Step past stainless butcher hooks into an amber-lit drawing room from 1924.',
    image: '/assets/aistudio/Copper-Club_b58a00e9.jpg',
    gridCoordinates: '51.5138° N, 0.1340° W · Soho Alleys Sub-Level',
    clearanceLevel: 'Level 1 Discretion',
    dressCode: 'Sartorial Evening',
    securityProtocol: 'Weekly Rotating Password · Strictly No Flash Photography',
    intelBrief: 'Concealed behind heavy stainless cold-room hinges at the rear of an operating Soho purveyor, this thirty-seat sanctuary protects privacy with quiet grace.',
    deepNarrative: [
      'Past the frost curtain, heavy green velvet booths and an open coal grate invite unhurried late conversations.',
      'House botanicalists clarify wild English hedgerow distillates into featherlight vintage pours for your booth alone.'
    ],
    deliverables: [
      'Direct passage past the shop counter via private cold door',
      'Reserved rear velvet corner banquette all evening',
      'Custom cocktails balanced by personal palate profile',
      'Private back-lane exit directly into waiting chauffeur transport'
    ],
    insiderWhisper: 'Ask your Lifestyle Manager for the Thursday phrase before setting off from Mayfair.'
  },
  {
    id: 'wapping-powerhouse',
    category: 'counter-culture',
    categoryLabel: 'Counter-Culture Gastronomy & Speakeasies',
    title: 'The Decommissioned Victorian Hydraulic Powerhouse Banquet',
    kicker: 'Gastronomy 03 · Wapping Riverfront',
    tagline: 'Ten-ton cast-iron turbines framing candlelit private banquets.',
    image: '/assets/aistudio/01-Lethbridge-House-20-Cornwall-Terrace-Marylebone-London-UK-640x360_b59e806c.jpg',
    gridCoordinates: '51.5061° N, 0.0573° W · Wapping Dock Basin',
    clearanceLevel: 'Level 2 Biometric Access',
    dressCode: 'Black Tie / Dramatic Evening',
    securityProtocol: 'Gated River Compound',
    intelBrief: 'Built in 1890 to pump high-pressure river water under London, this glazed-brick cathedral of turbines opens exclusively for TGLC private celebrations.',
    deepNarrative: [
      'Twenty-four guests gather down a single steel banquet table illuminated by candlelight glinting across brass steam gauges.',
      'Michelin-trained visiting chefs cook over birch embers while chamber musicians play to thirty-foot vaulted brickwork.'
    ],
    deliverables: [
      'Exclusive evening use of the Wapping turbine hall',
      'Open-fire bespoke feast arranged with guest chefs and sommeliers',
      'Candlelight architectural design highlighting historic brass accumulators',
      'Private tender docking straight from Embankment piers'
    ],
    insiderWhisper: 'Standing beside the old accumulator tower with midnight champagne under the vaulted skylights feels cinematic.'
  },
  {
    id: 'thames-stealth-launch',
    category: 'after-hours',
    categoryLabel: 'After-Hours Speed & Stealth',
    title: 'The 02:00 AM Thames Stealth Launch Sprints',
    kicker: 'Tactical 01 · River Thames Nocturne Corridor',
    tagline: 'When river traffic halts, matte-black hulls plane past illuminated bridges.',
    image: '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg',
    gridCoordinates: '51.5055° N, 0.0754° W · Tower Pier to Canary Wharf',
    clearanceLevel: 'Level 2 Biometric Access',
    dressCode: 'Cashmere Outerwear / Night Casual',
    securityProtocol: 'PLA Cleared Passage & FLIR Thermal Navigation',
    intelBrief: 'After midnight, the Thames belongs to quiet waters and floodlit stone landmarks. Our 45-foot carbon tenders offer swift, peaceful passage clear of road congestion.',
    deepNarrative: [
      'Step aboard directly at private pontoons in Chelsea or Greenwich after the opera or dinner.',
      'Heated aft seating, heavy cashmere throws, and chilled vintage champagne accompany the glide beneath Tower Bridge.'
    ],
    deliverables: [
      'Private charter of our matte-black carbon stealth river launch',
      'Cleared high-speed transit passing Parliament and Tower Bridge',
      'Discreet embarks at private Chelsea and Docklands steps',
      'Heated decks with midnight caviar and champagne service'
    ],
    insiderWhisper: 'Passing directly beneath Tower Bridge at 2:30 AM without another boat in sight leaves every first-time guest breathless.'
  },
  {
    id: 'tunnel-sprints',
    category: 'after-hours',
    categoryLabel: 'After-Hours Speed & Stealth',
    title: 'Midnight Limehouse & Rotherhithe Tunnel Supercar Runs',
    kicker: 'Tactical 02 · East River Corridors',
    tagline: 'Late-night acoustic drives through tiled sub-Thames arteries with scout coordination.',
    image: '/assets/aistudio/01_BUGATTI-SOC2022_6775a49f.jpg',
    gridCoordinates: '51.5115° N, 0.0381° W · Limehouse to Rotherhithe',
    clearanceLevel: 'Level 2 Biometric Access',
    dressCode: 'Driving Gloves & Casual Tailoring',
    securityProtocol: 'Lead Scout Vehicles & Dedicated Support Crew',
    intelBrief: 'At midnight, small owner groups depart Mayfair with route scouts ahead to ensure clear stretches through London’s most resonant historic river tunnels.',
    deepNarrative: [
      'Coordinated carefully for lawful safety and pure mechanical theatre, V12 and flat-twelve exhaust notes reverberate gently along curved tiled walls.',
      'Concludes with private midnight espresso and warm croissants inside a lit hangar overlooking London City runway lights.'
    ],
    deliverables: [
      'Pre-checked late-night driving loop through Limehouse and Rotherhithe',
      'Qualified chase crew carrying tools and emergency recovery gear',
      'Heated secure subterranean detailing bay parking in SW1',
      'Closed runway-view coffee lounge waiting at completion'
    ],
    insiderWhisper: 'Dropping a gear just past the dip in Rotherhithe’s brick arch gives the purest acoustic note in the capital.'
  },
  {
    id: 'ufc-cageside',
    category: 'after-hours',
    categoryLabel: 'After-Hours Speed & Stealth',
    title: 'UFC London Cageside & Athlete Locker-Room Sanctum',
    kicker: 'Tactical 03 · Arena Cageside Supremacy',
    tagline: 'Front-row Octagon access where every corner instruction is heard clearly.',
    image: '/assets/aistudio/ufc_arena_ringside.jpg',
    gridCoordinates: '51.5030° N, 0.0032° E · The O2 Arena Cordon',
    clearanceLevel: 'Level 3 Sovereign Introduction',
    dressCode: 'Sharp Evening Tailoring',
    securityProtocol: 'Promotion Accreditation & Personal Escort',
    intelBrief: 'Beyond hospitality suites, TGLC arranges true floor-level Row 1 Octagon placements alongside championship teams and promotion principals.',
    deepNarrative: [
      'Step behind arena curtains to observe pre-fight wrapping, soak up the electricity of the walkout tunnel, and watch championship rounds inches from the canvas.',
      'Following the final bell, join small private post-fight gatherings in Mayfair drawing rooms.'
    ],
    deliverables: [
      'Row 1 floor-level cageside seats beside commentary tables',
      'Back-of-house promotion pass with host accompaniment',
      'Private weigh-in suite viewing prior to fight night',
      'Post-event chauffeur return and private Mayfair table reservations'
    ],
    insiderWhisper: 'Broadcast-side placements let you hear every tactical whisper from world-champion corner teams.'
  },
  {
    id: 'bethnal-boxing',
    category: 'after-hours',
    categoryLabel: 'After-Hours Speed & Stealth',
    title: 'Bethnal Green Unlisted Underground Sparring Sanctum',
    kicker: 'Tactical 04 · East End Boxing Heritage',
    tagline: 'Authentic British pugilism beneath 1890s brick arches behind locked shutters.',
    image: '/assets/aistudio/pt3_6ef34e91.jpg',
    gridCoordinates: '51.5290° N, 0.0560° W · Bethnal Green Arch Vaults',
    clearanceLevel: 'Level 1 Discretion',
    dressCode: 'Technical Training Kit',
    securityProtocol: 'Private Ring Closure · Zero Spectators',
    intelBrief: 'Tucked under Bethnal Green railway arches, this storied East End gym locks its steel shutters privately for morning or midnight one-on-one sessions with former champions.',
    deepNarrative: [
      'No posing, no photography, no crowded group classes—just honest leather bags, seasoned ring coaches, and demanding round work tailored to your conditioning.',
      'End with deep-tissue sports physio, contrast plunge recovery, and quiet Mayfair return transfers.'
    ],
    deliverables: [
      'Private closure of the historic brick boxing arch for solo training',
      'One-on-one padwork with decorated British and Olympic trainers',
      'Sports physiotherapy and cold plunge recovery corner on site',
      'Door-to-door discreet return transfer back to SW1'
    ],
    insiderWhisper: 'The seasoned oak ring perimeter was rebuilt from the original 1920s York Hall floorboards.'
  }
];

interface RogueScheduleItem {
  time: string;
  codename: string;
  location: string;
  action: string;
  detail: string;
  asset: string;
}

const ROGUE_ITINERARY: RogueScheduleItem[] = [
  {
    time: '21:00',
    codename: 'Phase 01 · Mayfair Departure',
    location: 'TGLC House, 3rd Floor, 45 Albemarle Street, Mayfair W1S 4JL',
    action: 'Discreet Departure in Black Rolls-Royce Cullinan',
    detail: 'Evening brief handed over in wax-sealed folio. Experienced driver navigates quiet backstreets through Burlington Gardens, Piccadilly, and Soho.',
    asset: '/assets/aistudio/rolls-cullian-featured_a41abfa9.webp'
  },
  {
    time: '21:45',
    codename: 'Phase 02 · Freezer Door Ingress',
    location: 'Unmarked Alleys, Soho',
    action: 'Clandestine Cocktail Laboratory Aperitifs',
    detail: 'Step past steel butcher hooks into velvet candlelight. Botanical infusions shaken to your precise spirit and aroma profile.',
    asset: '/assets/aistudio/Copper-Club_b58a00e9.jpg'
  },
  {
    time: '23:00',
    codename: 'Phase 03 · Sub-Level Omakase',
    location: 'Dalston Underground Vault',
    action: 'Private 8-Seat Hinoki Counter Banquet',
    detail: 'Complete buyout behind the record racks. 20 courses of Cornish turbot and wild bluefin paired with rare Niigata Daiginjo.',
    asset: '/assets/aistudio/hidden_secret_gastronomy_1794295323821.jpg'
  },
  {
    time: '01:15',
    codename: 'Phase 04 · Tunnel Acoustic Sprint',
    location: 'Limehouse to Rotherhithe Sub-River Corridors',
    action: 'Midnight V12 Supercar Transit',
    detail: 'Join scouted Bugatti and Koenigsegg convoy through cleared sub-Thames tiled arches to a private Docklands hangar.',
    asset: '/assets/aistudio/01_BUGATTI-SOC2022_6775a49f.jpg'
  },
  {
    time: '02:30',
    codename: 'Phase 05 · Nocturne Stealth Launch',
    location: 'Wapping Private Pier to Tower Bridge',
    action: 'Matte-Black Carbon Tender River Run',
    detail: 'Glide at 35 knots beneath illuminated Parliament and Tower Bridge while vintage Champagne and caviar arrive on heated aft teak.',
    asset: '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg'
  },
  {
    time: '04:00',
    codename: 'Phase 06 · Barbican Dawn Nightcap',
    location: 'Barbican High-Elevation Duplex Penthouse',
    action: 'Single-Cask Whiskies Over First Light',
    detail: 'Express lift up to panoramic brutalist terraces as sunlight wakes St Paul’s dome across the silent City skyline.',
    asset: '/assets/aistudio/hidden_brutalist_penthouse_1794295322915.jpg'
  }
];

const SUBPAGE_META: Record<
  string,
  {
    title: string;
    kicker: string;
    tagline: string;
    heroImage: string;
    coordinates: string;
    lead: string;
  }
> = {
  subterranean: {
    title: 'Subterranean Sanctums & Bunkers',
    kicker: 'Sub-Rosa Sector 01 · London Sub-Terrain',
    tagline: 'Forty to one hundred feet beneath London clay lies a hidden kingdom of citadels and bullion vaults.',
    heroImage: '/assets/aistudio/hidden_subterranean_vault_1794295323175.jpg',
    coordinates: '51.5542° N, 0.2520° W · Deep Subterranean Grid',
    lead: 'Sealed behind five-foot blast bulkheads and unlisted doors, these historic underground spaces now welcome trusted TGLC gatherings, private candlelight dinners, and wholly unmonitored briefings.'
  },
  industrial: {
    title: 'Brutalist & Industrial Enclaves',
    kicker: 'Sub-Rosa Sector 02 · City Skyline & Docklands',
    tagline: 'Fluted concrete sky-studios and Southwark heritage ateliers far from commercial Mayfair.',
    heroImage: '/assets/aistudio/hidden_brutalist_penthouse_1794295322915.jpg',
    coordinates: '51.5204° N, 0.0928° W · City Skyline & Docklands',
    lead: 'Whether admiring post-war art from a Barbican penthouse terrace or fitting bespoke aircraft luggage under Bermondsey railway arches, we connect you directly with London’s quiet masters.'
  },
  'counter-culture': {
    title: 'Counter-Culture Gastronomy & High-Table Vaults',
    kicker: 'Sub-Rosa Sector 03 · East & Soho Backstreets',
    tagline: 'Eight-seat cellar omakases, vinyl salons, and heritage riverfront powerhouses with zero signboards.',
    heroImage: '/assets/aistudio/Copper-Club_b58a00e9.jpg',
    coordinates: '51.5465° N, 0.0754° W · East & Soho Network',
    lead: 'True culinary theatre thrives away from paparazzi pavements. Step behind cold-room doors and vinyl stacks for intimate counter meals and woodfired architectural feasts.'
  },
  'after-hours': {
    title: 'After-Hours Speed, Stealth & Combat',
    kicker: 'Sub-Rosa Sector 04 · Thames & Arena',
    tagline: 'Carbon stealth launches at 02:00, sub-Thames driving runs, and Row 1 Octagon passes.',
    heroImage: '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg',
    coordinates: '51.5030° N, 0.0032° E · Thames to Greenwich',
    lead: 'Once midnight calms the city streets, private water tenders, scouted tunnel runs, and championship cageside seats deliver London at its boldest.'
  },
  itinerary: {
    title: '007 Rogue 24-Hour London Mission Plan',
    kicker: 'Sub-Rosa Sector 05 · Dusk-to-Dawn Choreography',
    tagline: 'A complete overnight movement from Mayfair through Soho cellars to Barbican heights.',
    heroImage: '/assets/aistudio/01_BUGATTI-SOC2022_6775a49f.jpg',
    coordinates: 'London Metropolitan Area · 21:00 to 04:30',
    lead: 'Every handover, cold-room password, supercar scout, river boat captain, and dawn whisky pour synchronised to the minute by our senior directors.'
  }
};

export const HiddenLondonPage: React.FC<{ initialSubPage?: SubRosaCategory }> = ({ initialSubPage }) => {
  const { openIntroductionModal, navigateTo, route } = useNavigation();
  const [activeCategory, setActiveCategory] = useState<SubRosaCategory>(
    initialSubPage || (route.subSection as SubRosaCategory) || 'all'
  );
  const [detailModalDossier, setDetailModalDossier] = useState<ClandestineDossier | null>(null);

  useEffect(() => {
    if (initialSubPage) {
      setActiveCategory(initialSubPage);
    } else if (
      route.subSection &&
      ['all', 'subterranean', 'industrial', 'counter-culture', 'after-hours', 'itinerary'].includes(route.subSection)
    ) {
      setActiveCategory(route.subSection as SubRosaCategory);
    }
  }, [initialSubPage, route.subSection]);

  const filteredDossiers =
    activeCategory === 'all'
      ? CLANDESTINE_DOSSIERS
      : CLANDESTINE_DOSSIERS.filter((d) => d.category === activeCategory);

  const currentMeta = activeCategory !== 'all' ? SUBPAGE_META[activeCategory] : null;

  return (
    <div className="bg-[#08090C] text-[#F4F1EA] min-h-screen selection:bg-[#B98633]/30 selection:text-[#F4F1EA] pb-14">
      {/* 1. Hero Header */}
      {currentMeta ? (
        <section className="relative min-h-[46vh] sm:min-h-[56vh] flex items-center justify-center overflow-hidden border-b border-[#20222B] pt-14 sm:pt-18 pb-12">
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.05, opacity: 0.92 }}
              animate={{ scale: [1.05, 1, 1.04], opacity: 1 }}
              transition={{
                scale: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
                opacity: { duration: 0.9 },
              }}
              src={currentMeta.heroImage}
              alt={currentMeta.title}
              className="w-full h-full object-cover object-center brightness-105 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/35 to-[#08090C]/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/80 via-transparent to-[#08090C]/70 hidden sm:block" />
          </div>

          <motion.div
            initial={{ opacity: 0.9, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 space-y-4 text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-[#D9D4CA] tracking-wide mb-2">
              <button onClick={() => navigateTo('home')} className="hover:text-[#F4F1EA] transition-colors">
                Home
              </button>
              <span className="text-[#8B672B]">/</span>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  navigateTo('hidden-london');
                }}
                className="hover:text-[#F4F1EA] transition-colors"
              >
                The Other Side of London
              </button>
              <span className="text-[#8B672B]">/</span>
              <span className="text-[#CFA85E] font-medium">{currentMeta.title}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#8B672B] bg-[#0B0C10]/85 text-[11px] uppercase tracking-[0.2em] text-[#DDB872]">
              <Radio className="w-3.5 h-3.5 text-[#CFA85E]" />
              <span>{currentMeta.kicker}</span>
              <span className="text-[#8B672B]">·</span>
              <span className="text-[#D9D4CA] tabular-nums">{currentMeta.coordinates}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F4F1EA]">{currentMeta.title}</h1>

            <p className="font-serif italic text-lg sm:text-2xl text-[#CFA85E] max-w-3xl mx-auto">
              “{currentMeta.tagline}”
            </p>

            <p className="text-xs sm:text-base text-[#E5DFD3] max-w-3xl mx-auto leading-relaxed font-light">
              {currentMeta.lead}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openIntroductionModal(`Sub-Rosa Clearance: ${currentMeta.title}`)}
                className="btn-gold px-7 py-3 text-xs inline-flex items-center gap-2"
              >
                <span>Request Sector Clearance</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  navigateTo('hidden-london');
                }}
                className="btn-outline-gold px-5 py-3 text-xs"
              >
                ← View All London Sectors
              </button>
            </div>
          </motion.div>
        </section>
      ) : (
        <section className="relative min-h-[50vh] sm:min-h-[58vh] flex items-center justify-center overflow-hidden border-b border-[#20222B] pt-14 sm:pt-18 pb-12">
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.05, opacity: 0.92 }}
              animate={{ scale: [1.05, 1, 1.04], opacity: 1 }}
              transition={{
                scale: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
                opacity: { duration: 0.9 },
              }}
              src="/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg"
              alt="London Sub-Rosa Nocturne"
              className="w-full h-full object-cover object-center brightness-105 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/35 to-[#08090C]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/80 via-transparent to-[#08090C]/50 hidden sm:block" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-5">
            <motion.div
              initial={{ opacity: 0.9, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#8B672B] bg-[#0B0C10]/85 backdrop-blur-md"
            >
              <Radio className="w-3.5 h-3.5 text-[#CFA85E]" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#DDB872] font-medium">
                The Sub-Rosa Network · London Clandestine Desk
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0.9, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] text-[#F4F1EA]"
            >
              The Other Side of London.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0.9, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="font-serif italic text-xl sm:text-3xl text-[#CFA85E] max-w-3xl mx-auto"
            >
              “What is never advertised is what stays truly remarkable.”
            </motion.p>

            <motion.p
              initial={{ opacity: 0.9, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-xs sm:text-base text-[#E5DFD3] max-w-3xl mx-auto leading-relaxed font-light"
            >
              Beyond the front rooms of Mayfair and St James’s lies London after hours: Churchill’s deep bunker rooms, Barbican sky terraces, 300-year-old bullion vaults, midnight sub-Thames supercar runs, 8-seat Dalston cellar omakase counters, and black carbon launches beneath Tower Bridge.
            </motion.p>

            <motion.div
              initial={{ opacity: 0.9, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="pt-2 flex flex-wrap items-center justify-center gap-4"
            >
              <button
                onClick={() => openIntroductionModal('Sub-Rosa & Clandestine London Inquiry')}
                className="btn-gold px-8 py-3.5 text-xs inline-flex items-center gap-2"
              >
                <span>Request Clandestine Allocation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('subrosa-explorer');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline-gold px-6 py-3.5 text-xs backdrop-blur-md"
              >
                Explore Secret Practices ↓
              </button>
            </motion.div>
          </div>
        </section>
      )}

      <GoldDivider />

      {/* 2. Sticky Discipline Bar (Title Case & Aligned) */}
      <section
        id="subrosa-explorer"
        className="sticky top-[64px] sm:top-[76px] z-30 bg-[#0B0C10]/95 backdrop-blur-md border-b border-[#222530] shadow-xl py-3 px-4 sm:px-8"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] uppercase tracking-widest text-[#CFA85E] hidden md:inline pr-3 border-r border-[#242630]">
              Sanctum Sectors
            </span>

            {[
              { id: 'all' as const, label: `All Dossiers (${CLANDESTINE_DOSSIERS.length})`, icon: null },
              { id: 'subterranean' as const, label: 'Subterranean & Bunkers', icon: Lock },
              { id: 'industrial' as const, label: 'Brutalist & Ateliers', icon: Compass },
              { id: 'counter-culture' as const, label: 'Secret Gastronomy', icon: Flame },
              { id: 'after-hours' as const, label: 'Speed, Stealth & Combat', icon: Zap },
              { id: 'itinerary' as const, label: '007 Rogue Itinerary', icon: Clock },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeCategory === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.id)}
                  className={`h-9 px-3.5 text-xs tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 border ${
                    isActive
                      ? 'bg-[#CFA85E] text-[#08090C] border-[#DDB872] font-semibold'
                      : 'text-[#D9D4CA] hover:text-[#F4F1EA] bg-[#12141A] border-[#242630] hover:border-[#8B672B]'
                  }`}
                >
                  {Icon && <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#08090C]' : 'text-[#CFA85E]'}`} />}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-2.5 text-[11px] text-[#9C968A] shrink-0">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#CFA85E]" />
            <span>London Sub-Sector Alpha</span>
          </div>
        </div>
      </section>

      {/* Sub-Rosa Visual Briefing Strip & Operational Standard */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 space-y-6">
        <div className="p-6 sm:p-8 bg-[#12141A] border border-[#242630] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-4 space-y-1.5">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#CFA85E] block">
              Operational Custody & Silence
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
              Keyholder Clearance Before Dawn or Midnight
            </h2>
          </div>
          <p className="lg:col-span-8 text-xs sm:text-sm text-[#B5AFA3] leading-relaxed font-light">
            Every Sub-Rosa unlock relies on direct custodian relationships rather than commercial event agencies. Before any member arrives, our Mayfair desk conducts advance street walks, acoustic checks, and named keyholder verification—ensuring unfettered arrival into subterranean vaults, unlisted culinary counters, and closed river piers with zero external visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              img: '/assets/aistudio/hidden_subterranean_vault_1794295323175.jpg',
              alt: 'Deep London Subterranean Vaults',
              tag: 'Sub-Level Vaults',
              title: 'Deep Vaults & Faraday Sanctums',
              desc: 'Blast-doored map rooms and 18th-century bullion catacombs unlocked privately for candlelit banquets and quiet strategic councils.',
            },
            {
              img: '/assets/aistudio/Copper-Club_b58a00e9.jpg',
              alt: 'Unmarked Soho & East End Tables',
              tag: 'Private Gastronomy',
              title: 'Unmarked Soho & East End Tables',
              desc: 'Behind freezer doors and vinyl stacks sit eight-seat counters and private cocktail libraries reserved outright for your company.',
            },
            {
              img: '/assets/aistudio/ufc_arena_ringside.jpg',
              alt: 'Arena Row 1 & After-Hours Launches',
              tag: 'Speed & Arena',
              title: 'Arena Row 1 & Nocturne Craft',
              desc: 'Floor-level championship sightlines paired seamlessly with 02:00 AM Thames stealth tender extractions to private piers.',
            },
          ].map((tile, idx) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0.9, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="bg-[#12141A] border border-[#242630] hover:border-[#8B672B] transition-colors overflow-hidden group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={tile.img}
                  alt={tile.alt}
                  className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#CFA85E] block">{tile.tag}</span>
                <h3 className="font-serif text-xl text-[#F4F1EA]">{tile.title}</h3>
                <p className="text-xs text-[#9C968A] leading-relaxed font-light">{tile.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <GoldDivider />

      {/* 3. Itinerary Timeline OR Clandestine Dossiers */}
      {activeCategory === 'itinerary' ? (
        <section className="py-10 sm:py-12 px-5 sm:px-8 max-w-7xl mx-auto">
          <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#CFA85E] font-medium block">
              Curated Nocturne Schedule · Confidential
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
              The 007 Rogue London Protocol
            </h2>
            <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
              A dusk-to-dawn sequence linking London’s quietest cellars, speed arteries, and dawn rooftops for private buyouts or intimate executive delegations.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-[#8B672B]/50 before:to-transparent">
            {ROGUE_ITINERARY.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0.9, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.01 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 bg-[#08090C] border-2 border-[#CFA85E] flex items-center justify-center z-10">
                  <span className="text-[10px] text-[#CFA85E] font-semibold tabular-nums">0{idx + 1}</span>
                </div>

                <div className="w-full sm:w-[calc(50%-3rem)] pl-12 sm:pl-0">
                  <div className="p-6 sm:p-8 bg-[#12141A] border border-[#242630] hover:border-[#CFA85E]/70 transition-all duration-300 shadow-xl space-y-4 group">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs text-[#CFA85E] font-semibold px-2.5 py-0.5 bg-[#181A22] border border-[#8B672B] tabular-nums">
                        {step.time} Hours
                      </span>
                      <span className="text-[11px] tracking-wider text-[#9C968A]">{step.codename}</span>
                    </div>

                    <div className="aspect-[16/9] w-full overflow-hidden bg-[#181A22] border border-[#242630]">
                      <img
                        src={step.asset}
                        alt={step.action}
                        className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#CFA85E] block mb-1">
                        {step.location}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#F4F1EA] group-hover:text-[#DDB872] transition-colors">
                        {step.action}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed mt-2 font-light">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block sm:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => openIntroductionModal('007 Rogue London Nocturne Full Itinerary Charter')}
              className="btn-gold px-8 py-3.5 text-xs inline-flex items-center gap-2"
            >
              <span>Commission Complete Nocturne Protocol</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      ) : (
        <section className="py-10 sm:py-12 px-5 sm:px-8 max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#20232E]">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.26em] text-[#CFA85E] tabular-nums">
                Sub-Rosa Dossiers · {filteredDossiers.length} Active Practices
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
                {activeCategory === 'all' && 'The Complete Clandestine Inventory'}
                {activeCategory === 'subterranean' && 'Subterranean Citadels & Historic Bank Vaults'}
                {activeCategory === 'industrial' && 'Brutalist Penthouses & Underground Ateliers'}
                {activeCategory === 'counter-culture' && 'Counter-Culture High Gastronomy & Speakeasies'}
                {activeCategory === 'after-hours' && 'After-Hours Speed, Stealth & Arena Combat'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#9C968A] max-w-md leading-relaxed font-light">
              Each address operates behind strict discretion protocols. Open any full dossier for operational ingress details.
            </p>
          </div>

          <div className="space-y-10">
            {filteredDossiers.map((dossier) => (
              <motion.div
                key={dossier.id}
                initial={{ opacity: 0.9, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.01 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#12141A] border border-[#242630] hover:border-[#8B672B] transition-all duration-300 shadow-2xl overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden bg-[#08090C]">
                    <img
                      src={dossier.image}
                      alt={dossier.title}
                      className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141A]/85 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#12141A]/75" />

                    <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                      <div className="bg-[#08090C]/88 backdrop-blur-md px-3 py-1.5 border border-[#8B672B] flex items-center gap-2">
                        <Crosshair className="w-3.5 h-3.5 text-[#CFA85E]" />
                        <span className="text-[10px] uppercase tracking-widest text-[#DDB872] tabular-nums">
                          {dossier.gridCoordinates}
                        </span>
                      </div>
                      <div className="bg-[#08090C]/88 backdrop-blur-md px-2.5 py-1.5 border border-[#2A2D38] text-[10px] text-[#D9D4CA]">
                        {dossier.clearanceLevel}
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 bg-[#08090C]/88 backdrop-blur-md p-4 border border-[#242630]">
                      <span className="text-[10px] uppercase tracking-widest text-[#CFA85E] block mb-1">
                        Insider Whisper
                      </span>
                      <p className="font-serif italic text-sm sm:text-base text-[#F4F1EA]">
                        “{dossier.insiderWhisper}”
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#CFA85E]">
                          {dossier.kicker}
                        </span>
                        <span className="text-[10px] tracking-wider text-[#B5AFA3] border border-[#2A2D38] px-2.5 py-0.5">
                          {dossier.categoryLabel}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F4F1EA] mb-3 leading-snug group-hover:text-[#DDB872] transition-colors">
                        {dossier.title}
                      </h3>

                      <p className="font-serif italic text-base text-[#CFA85E] mb-4">“{dossier.tagline}”</p>

                      <p className="text-xs sm:text-sm text-[#B5AFA3] leading-relaxed font-light mb-6">
                        {dossier.intelBrief}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-t border-b border-[#20232E] text-xs">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#8B672B] block">
                            Dress Code
                          </span>
                          <span className="text-[#D9D4CA] font-normal">{dossier.dressCode}</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#8B672B] block">
                            Protocol
                          </span>
                          <span className="text-[#D9D4CA] font-normal">{dossier.securityProtocol}</span>
                        </div>
                      </div>

                      <div className="pt-5 space-y-2.5">
                        <span className="text-[10px] uppercase tracking-widest text-[#DDB872] block mb-2">
                          Guaranteed Deliverables:
                        </span>
                        {dossier.deliverables.slice(0, 3).map((del, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-[#D9D4CA]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#CFA85E] shrink-0 mt-0.5" />
                            <span className="font-light">{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#20232E] flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => openIntroductionModal(`Inquiry regarding ${dossier.title}`)}
                        className="btn-gold px-6 py-3 text-xs inline-flex items-center gap-2"
                      >
                        <span>Request Clearance</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setDetailModalDossier(dossier)}
                        className="btn-outline-gold px-4 py-3 text-xs"
                      >
                        Full Dossier Intel →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <GoldDivider />

      {/* 5. Clandestine Dispatch Banner */}
      <section className="py-10 sm:py-14 px-5 sm:px-8 bg-gradient-to-b from-[#08090C] via-[#101218] to-[#08090C] border-t border-[#20222B]">
        <motion.div
          initial={{ opacity: 0.9, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl mx-auto text-center space-y-5"
        >
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#CFA85E] font-medium block">
            Sub-Rosa Private Line Authority · Mayfair HQ
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] leading-tight">
            Need immediate access to an unlisted room or private transport?
          </h2>

          <p className="text-xs sm:text-base text-[#9C968A] max-w-xl mx-auto font-light leading-relaxed">
            Our London principals stay on call day and night with direct keys to private venues, riverside piers, and unlisted subterranean dining rooms.
          </p>

          <div className="p-4 max-w-md mx-auto bg-[#12141A] border border-[#242630] flex items-center justify-center gap-3 text-xs">
            <Key className="w-4 h-4 text-[#CFA85E]" />
            <span className="text-[#9C968A]">Direct Line:</span>
            <span className="text-[#F4F1EA] font-semibold text-sm tabular-nums">{TGLC_CONTACT.telephone}</span>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openIntroductionModal('Immediate Clandestine Dispatch Request')}
              className="btn-gold px-8 py-3.5 text-xs inline-flex items-center gap-2"
            >
              <span>Transmit Discreet Request</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button onClick={() => navigateTo('home')} className="btn-outline-gold px-6 py-3.5 text-xs">
              Return to Overview
            </button>
          </div>
        </motion.div>
      </section>

      {/* 6. Full Dossier Modal */}
      <AnimatePresence>
        {detailModalDossier && (
          <div className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-3xl bg-[#12141A] border border-[#CFA85E]/60 p-6 sm:p-10 shadow-2xl relative space-y-6 my-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setDetailModalDossier(null)}
                className="absolute top-4 right-4 p-2 text-[#9C968A] hover:text-[#CFA85E] focus:outline-none"
                aria-label="Close dossier"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 text-xs text-[#CFA85E] border-b border-[#242630] pb-3">
                <FileText className="w-4 h-4" />
                <span className="uppercase tracking-widest">
                  TGLC House Briefing · {detailModalDossier.categoryLabel}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#CFA85E] tabular-nums block mb-1">
                  {detailModalDossier.gridCoordinates}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA]">
                  {detailModalDossier.title}
                </h3>
                <p className="font-serif italic text-lg text-[#CFA85E] mt-1">
                  “{detailModalDossier.tagline}”
                </p>
              </div>

              <div className="aspect-[16/9] w-full overflow-hidden bg-[#181A22] border border-[#242630]">
                <img
                  src={detailModalDossier.image}
                  alt={detailModalDossier.title}
                  className="w-full h-full object-cover brightness-105 contrast-105"
                />
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#D9D4CA] leading-relaxed font-light">
                {detailModalDossier.deepNarrative.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="p-4 bg-[#0B0C10] border border-[#242630] space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#CFA85E] block">
                  Security Directive & Ingress Protocol
                </span>
                <p className="text-xs text-[#B5AFA3] font-light">
                  {detailModalDossier.securityProtocol}. Coordinated strictly through pre-verified registration and named host escort.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] uppercase tracking-widest text-[#DDB872] block mb-2">
                  Guaranteed Consortium Deliverables:
                </span>
                {detailModalDossier.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D9D4CA] font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#CFA85E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#242630] flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => {
                    const name = detailModalDossier.title;
                    setDetailModalDossier(null);
                    openIntroductionModal(`Inquiry regarding ${name}`);
                  }}
                  className="btn-gold px-6 py-3 text-xs inline-flex items-center gap-2"
                >
                  <span>Request Ingress Clearance</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDetailModalDossier(null)}
                  className="px-4 py-3 text-xs uppercase tracking-widest text-[#9C968A] hover:text-[#F4F1EA] transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
