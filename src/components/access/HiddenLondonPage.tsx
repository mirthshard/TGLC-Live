/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  ChevronLeft,
  ChevronRight,
  Shield,
  Eye,
  Dice5,
  Anchor,
  AlertTriangle,
} from 'lucide-react';

export type SubRosaCategory =
  | 'all'
  | 'subterranean'
  | 'industrial'
  | 'underground-combat'
  | 'clandestine-gaming'
  | 'maritime-nocturne'
  | 'counter-culture'
  | 'urban-exploration'
  | 'after-hours'
  | 'itinerary';

export interface ClandestineDossier {
  id: string;
  category:
    | 'subterranean'
    | 'industrial'
    | 'underground-combat'
    | 'clandestine-gaming'
    | 'maritime-nocturne'
    | 'counter-culture'
    | 'urban-exploration'
    | 'after-hours';
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
  riskMitigation: string;
}

export const CLANDESTINE_DOSSIERS: ClandestineDossier[] = [
  // 1. SUBTERRANEAN SANCTUMS & BUNKERS
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
    securityProtocol: 'RF Shielded Faraday Enclosure · Zero Telemetry · Escorted Descent',
    riskMitigation: 'Full blast bulkhead seal, redundant atmospheric filtration, discrete unmarked entrance with plainclothes close-protection perimeter.',
    intelBrief: 'Constructed in 1939 as the classified alternate cabinet war bunker for Winston Churchill, fortified behind 5-foot blast walls and gas filtration locks.',
    deepNarrative: [
      'While millions tour Westminster, Paddock stands closed to the general public beneath unmarked grounds in North-West London. The historic map room, cipher rooms, and original ventilation plant remain preserved in total subterranean silence.',
      'Through custodial stewardship, TGLC coordinates private evening briefings, intimate dining beside original oak map tables, and confidential board sessions where complete acoustic and electronic isolation is non-negotiable.'
    ],
    deliverables: [
      'Private custodial unlock and escorted descent past blast bulkheads',
      '12-guest candlelit banquet prepared privately inside the map room',
      'Full RF check, counter-surveillance sweep, and secure device lockbox storage upon arrival',
      'Curated architectural briefing with specialist archival historian'
    ],
    insiderWhisper: 'Enter beside the unmarked brick substation; the main blast door unlocks via a three-stage mechanical key sequence.'
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
    securityProtocol: 'Pre-vetted Security Escort & Air-Quality Monitoring Clear',
    riskMitigation: 'Direct goods-lift transit past public sightlines, air-scrubbed chamber verification, and SAS-trained security lead accompaniment.',
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
    insiderWhisper: 'The ambient temperature remains steady year-round; once the upper hatch seals, all street frequencies vanish entirely.'
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
    riskMitigation: 'High-security biometric access vestibule, unlogged arrival protocol, and concealed subterranean exfiltration route to private mews.',
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
    id: 'brunel-thames-shaft',
    category: 'subterranean',
    categoryLabel: 'Subterranean Sanctums & Bunkers',
    title: 'Brunel Thames Tunnel Grand Entrance Shaft Crypt',
    kicker: 'Citadel 04 · Rotherhithe Shaft Sub-River',
    tagline: 'The world’s first sub-aqueous engineering miracle unlocked after dark for candlelit chamber acoustics.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-05_at_00.17.42_97e31fb5.jpeg',
    gridCoordinates: '51.5011° N, 0.0528° W · Rotherhithe Shaft',
    clearanceLevel: 'Level 2 Biometric Access',
    dressCode: 'Evening Cashmere & Structured Leather',
    securityProtocol: 'Private Gated Compound & Structural Safety Escort',
    riskMitigation: 'Certified structural dampening, dedicated safety officer, gated courtyard staging with close-protection watch.',
    intelBrief: 'Completed in 1843 by Marc and Isambard Kingdom Brunel, this 65-foot subterranean brick chamber was once hailed as the Eighth Wonder of the World.',
    deepNarrative: [
      'Descend the cantilevered spiral staircase into a soot-blackened brick amphitheatre where London’s industrial revolution began beneath the riverbed.',
      'TGLC coordinates closed-door acoustic recitals, rare spirit presentations, and immersive midnight dinners echoing off circular brick walls that have stood 180 years.'
    ],
    deliverables: [
      'Exclusive buyout of the Brunel Grand Entrance Shaft after dark',
      'Solo cellist or string quartet performing in 65-foot natural reverb',
      'Bespoke culinary service staged around central iron braziers',
      'Riverboat arrival at Rotherhithe Pier with security escort'
    ],
    insiderWhisper: 'Look closely at the lower brick ring: soot from early steam engines still coats the lime mortar in iridescent black.'
  },

  // 2. INDUSTRIAL & BRUTALIST ENCLAVES
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
    dressCode: 'Architectural Minimalist / Monochrome Tailoring',
    securityProtocol: 'Resident Key Fob & Private Express Lift with Concierge Escort',
    riskMitigation: 'Direct basement parking bay arrival, private lift override, restricted residential fob security.',
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
    insiderWhisper: 'Vinyl played through the studio valve amplifiers fills the concrete gallery with concert-hall warmth.'
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
    securityProtocol: 'Appointment Only · Private Bench Briefing & Courtyard Guard',
    riskMitigation: 'Gated mews cordon, shuttered perimeter, discrete VIP vehicle bay inside archway.',
    intelBrief: 'Beneath Southwark’s Victorian brick railway arches, third-generation saddlers hand-stitch custom luggage sets contoured exactly to collectors’ aircraft and coachbuilt boot spaces.',
    deepNarrative: [
      'Here you step straight from Southwark into the honest fragrance of vegetable-tanned bridle hide, beeswax thread, and brass hardware.',
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
    dressCode: 'Discreet Smart · Anti-Static Lab Coats Provided',
    securityProtocol: 'Cleanroom Airlock Access & Waterway Extraction Dock',
    riskMitigation: 'Airlock biometric security, zero public street frontage, private electric launch mooring.',
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
    id: 'silvertown-monolith',
    category: 'industrial',
    categoryLabel: 'Industrial & Brutalist Enclaves',
    title: 'Millennium Mills Monumental Concrete Silo Studio',
    kicker: 'Enclave 04 · Royal Docks Post-Industrial Domain',
    tagline: 'Seven stories of raw monolithic concrete overlooking the Thames barrier and London City runway lights.',
    image: '/assets/aistudio/Main-5_c9bf5214.png',
    gridCoordinates: '51.5034° N, 0.0195° E · Royal Victoria Dock',
    clearanceLevel: 'Level 3 Sovereign Introduction',
    dressCode: 'Industrial Avant-Garde / High Tactical Outerwear',
    securityProtocol: 'Heavy Industrial Access Permit & 24/7 Monitored Compound',
    riskMitigation: 'Enclosed private compound, 24/7 security cordon, direct helicopter landing zone access by prior arrangement.',
    intelBrief: 'A twentieth-century flour mill turned private contemporary art creation vault. Towering steel hoppers and cathedral-scale concrete bays host monumental sculpture and ultra-private fashion previews.',
    deepNarrative: [
      'This raw industrial colossus offers an experience nowhere else in Western Europe can match: unvarnished scale, raw acoustic power, and sweeping vistas over London City Airport.',
      'Principals host underground electronic symphonies, collector sculpture viewings, and midnight architectural banquets in complete privacy from commercial London.'
    ],
    deliverables: [
      'Private clearance into the restricted Millennium Mills central silo',
      'Monumental sculpture preview arranged with international gallery curators',
      'Industrial candlelit dinner styled with raw steel tables and warm hearths',
      'Direct river interceptor arrival at the Royal Docks pontoon'
    ],
    insiderWhisper: 'The top silo terrace offers the most dramatic nighttime view of jetliners climbing directly over the Thames.'
  },

  // 3. UNDERGROUND COMBAT & RAW EAST END RINGS
  {
    id: 'bethnal-boxing',
    category: 'underground-combat',
    categoryLabel: 'Underground Combat & Raw East End Rings',
    title: 'Bethnal Green Unlisted Underground Sparring Sanctum',
    kicker: 'Combat 01 · East End Boxing Heritage',
    tagline: 'Authentic British pugilism beneath 1890s brick arches behind locked shutters.',
    image: '/assets/aistudio/pt3_6ef34e91.jpg',
    gridCoordinates: '51.5290° N, 0.0560° W · Bethnal Green Arch Vaults',
    clearanceLevel: 'Level 1 Discretion',
    dressCode: 'Technical Training Kit / Ringside Casual',
    securityProtocol: 'Private Ring Closure · Zero Spectators · Armed Tactical CP Outer Watch',
    riskMitigation: 'Julian Sterling close-protection officers guard the exterior shutter; perimeter counter-surveillance active throughout.',
    intelBrief: 'Tucked under Bethnal Green railway arches, this storied East End gym locks its steel shutters privately for morning or midnight one-on-one sessions with former world champions.',
    deepNarrative: [
      'No posing, no cameras, no commercial group classes—just honest leather bags, seasoned ring coaches, and demanding round work tailored to your conditioning.',
      'Clients who normally negotiate nine-figure buyouts step through these heavy iron doors to test their raw stamina, accompanied by personal protection who ensure absolute discretion and immediate emergency extraction.'
    ],
    deliverables: [
      'Private closure of the historic brick boxing arch for solo training',
      'One-on-one padwork with decorated British and Olympic trainers',
      'Sports physiotherapy and cold plunge recovery corner on site',
      'Door-to-door discreet return transfer in armoured Range Rover back to Mayfair'
    ],
    insiderWhisper: 'The seasoned oak ring perimeter was rebuilt from the original 1920s York Hall floorboards.'
  },
  {
    id: 'bermondsey-white-collar',
    category: 'underground-combat',
    categoryLabel: 'Underground Combat & Raw East End Rings',
    title: 'The Bermondsey Vaults: Unsanctioned Exhibition Bouts',
    kicker: 'Combat 02 · Railway Vault Ringside',
    tagline: 'Fifty invited patrons, an elevated ring under Victorian soot bricks, and world-class raw boxing.',
    image: '/assets/aistudio/close_protection_security.jpg',
    gridCoordinates: '51.4965° N, 0.0682° W · Spa Terminus Rail Vaults',
    clearanceLevel: 'Level 3 Sovereign Introduction',
    dressCode: 'Dark Sharp Tailoring / No Ties',
    securityProtocol: 'Julian Sterling Plainclothes Detail & Identity Screening at Archway',
    riskMitigation: 'Three-point credential check at exterior alley; two SAS-trained security operatives escort principals inside and out.',
    intelBrief: 'A quarterly, invitation-only fight night held in deep secrecy under the South London viaduct. Unsanctioned by public ticket outlets, this is where London’s true fight aficionados gather.',
    deepNarrative: [
      'Principals often crave the raw, visceral drama of real East End boxing culture—the sweat, the crack of leather on chin, the tension of the crowd—but are rightfully hesitant to navigate backstreet warehouse alleys without elite protection.',
      'TGLC embeds you ringside with Julian Sterling’s team at your shoulder, premium single malts poured into crystal, and zero risk of unwanted exposure or security compromise.'
    ],
    deliverables: [
      'Guaranteed ringside corner table directly adjacent to the red corner',
      'Tactical advance sweep and plainclothes security escort from departure to return',
      'Private meeting with boxers and corner staff in the backstage locker vault',
      'Caviar and vintage scotch service served ringside during the 6-fight card'
    ],
    insiderWhisper: 'Arrive strictly at 21:15 via the unmarked service door next to the brewery gate; password changes at sundown.'
  },
  {
    id: 'ufc-cageside',
    category: 'underground-combat',
    categoryLabel: 'Underground Combat & Raw East End Rings',
    title: 'UFC London Cageside & Athlete Locker-Room Sanctum',
    kicker: 'Combat 03 · Arena Cageside Supremacy',
    tagline: 'Front-row Octagon access where every corner instruction and strike impact is heard clearly.',
    image: '/assets/aistudio/ufc_arena_ringside.jpg',
    gridCoordinates: '51.5030° N, 0.0032° E · The O2 Arena Cordon',
    clearanceLevel: 'Level 3 Sovereign Introduction',
    dressCode: 'Sharp Evening Tailoring / Cashmere Turtleneck',
    securityProtocol: 'Promotion Accreditation & Personal Security Escort to Cageside',
    riskMitigation: 'Dedicated arena tunnel escort, blue-light fast-track ingress through VIP backstage cordon.',
    intelBrief: 'Beyond hospitality suites, TGLC arranges true floor-level Row 1 Octagon placements alongside championship teams, promotion owners, and legendary combat sports figures.',
    deepNarrative: [
      'Step behind arena curtains into the athlete warmup chambers to observe hands being taped, feel the electric surge of the walkout tunnel, and stand inches from the canvas as championship rounds commence.',
      'Following the final bell, join private post-fight gatherings in Mayfair drawing rooms hosted with combat sports luminaries.'
    ],
    deliverables: [
      'Row 1 floor-level cageside seats beside commentary tables',
      'Back-of-house promotion credential pass with dedicated host accompaniment',
      'Private weigh-in suite viewing prior to fight night',
      'Post-event chauffeur return and private Mayfair dining table reservations'
    ],
    insiderWhisper: 'Broadcast-side placements let you hear every tactical corner instruction and corner towel flap.'
  },

  // 4. SECRET HIGH-STAKES GAMING & CLANDESTINE SALONS
  {
    id: 'soho-card-vault',
    category: 'clandestine-gaming',
    categoryLabel: 'Secret High-Stakes Gaming & Clandestine Salons',
    title: 'The Meard Street Unlisted High-Roller Poker Sanctum',
    kicker: 'Gaming 01 · Soho Georgian Sub-Basement',
    tagline: 'Fifty-thousand-pound buy-ins behind an 18th-century antique bookshop door.',
    image: '/assets/aistudio/Copper-Club_b58a00e9.jpg',
    gridCoordinates: '51.5134° N, 0.1332° W · Meard Street Sub-Vault',
    clearanceLevel: 'Level 3 Sovereign Introduction',
    dressCode: 'Evening Discretion / Tailored Velvet',
    securityProtocol: 'Zero Digital Devices · Faraday Cellar · Cashier Settlement by Encrypted Wire',
    riskMitigation: 'Principals are escorted by Julian Sterling’s plainclothes detail; chip settlements handled via verified trust accounts with zero physical cash risk.',
    intelBrief: 'Deep beneath the cobbled alleys of Soho sits London’s most secretive private poker game, patronised by shipping magnates, hedge fund founders, and discrete collectors.',
    deepNarrative: [
      'High-net-worth individuals often want the electric thrill of underground high-stakes cards without the danger, extortion risk, or unvetted table dynamics of street games.',
      'Our gaming desk guarantees table vetting: professional European casino dealers, cryptographic device isolation, B6 armoured drop-off, and institutional settlement mechanisms.'
    ],
    deliverables: [
      'Secured seat at the unlisted No-Limit Texas Hold’em table (£25k / £50k buy-ins)',
      'World-class professional croupier and dedicated host handling personal vintage cellar requests',
      'Acoustic and electronic isolation ensuring zero audio leakage or device tracking',
      'Discreet chauffeured escort directly from private residences to the secret rear entrance'
    ],
    insiderWhisper: 'Knock twice on the oak panel behind the folio shelves; the host opens via magnetic release.'
  },
  {
    id: 'mayfair-chemin-de-fer',
    category: 'clandestine-gaming',
    categoryLabel: 'Secret High-Stakes Gaming & Clandestine Salons',
    title: 'Curzon Street Subterranean Chemin-de-Fer & Baccarat Salon',
    kicker: 'Gaming 02 · Mayfair Sub-Residences',
    tagline: 'The timeless aristocrat’s card game played behind mahogany panelling and velvet drapes.',
    image: '/assets/aistudio/tglc_st_james_salon.jpg',
    gridCoordinates: '51.5068° N, 0.1472° W · Curzon Street Sanctum',
    clearanceLevel: 'Level 3 Sovereign Introduction',
    dressCode: 'Black Tie Strictly Enforced',
    securityProtocol: 'Biometric Palm Key & Sentry Escort at Mews Arch',
    riskMitigation: 'Private residential license, armed security response on standby, discrete side-lane exfiltration point.',
    intelBrief: 'A private society dating back to the 1950s where traditional Chemin-de-Fer is contested between principals under original gilt chandeliers.',
    deepNarrative: [
      'Unlike the noisy commercial casino floors of Park Lane, this salon provides a hushed, cinematic atmosphere reminiscent of Ian Fleming’s Goldeneye era.',
      'Enjoy chilled Beluga caviar, vintage Dom Pérignon poured from magnums, and unhurried shoes where bank ownership rotates among guests in strict tradition.'
    ],
    deliverables: [
      'Private table reservation with personalized chip rack staged in advance',
      'Vintage champagne and caviar service during gameplay',
      'Complete confidentiality protocols protecting guest identities and stakes',
      'Chauffeured town-car return to SW1 or private London residence'
    ],
    insiderWhisper: 'The shoe used on the main table is an original solid-brass 1932 Monte Carlo original.'
  },
  {
    id: 'covent-garden-dice',
    category: 'clandestine-gaming',
    categoryLabel: 'Secret High-Stakes Gaming & Clandestine Salons',
    title: 'The Seven Dials Backgammon & High-Stakes Dice Club',
    kicker: 'Gaming 03 · Covent Garden Cellars',
    tagline: 'Where master tacticians contest hundred-thousand-pound doubles over rare rums.',
    image: '/assets/aistudio/WhatsApp_Image_2026-211-05_at_00.17.42_d3535604.jpeg',
    gridCoordinates: '51.5140° N, 0.1275° W · Seven Dials Underground',
    clearanceLevel: 'Level 2 Biometric Access',
    dressCode: 'Smart Sartorial / Relaxed Luxury',
    securityProtocol: 'Named Member Introduction & Discreet Alley Surveillance',
    riskMitigation: 'Closed-circuit covert cameras monitored by TGLC security lead; emergency secondary exit to Neal’s Yard.',
    intelBrief: 'Tucked beneath a heritage apothecary near Seven Dials, this subterranean den is dedicated to competitive backgammon, precision craps, and strategic board gaming with elite stakes.',
    deepNarrative: [
      'Attracting world backgammon champions and international financiers alike, the tables feature hand-stitched Connolly leather boards and weighted precision bone dice.',
      'The atmosphere is intimate and razor-sharp, accompanied by single-cask Caribbean rums and Cuban cigars smoked under extraction canopies.'
    ],
    deliverables: [
      'Private gaming booth with custom bespoke leather backgammon board',
      'Introduction to vetted grandmaster players for high-stakes matches',
      'Curated rum flight featuring pre-embargo distilleries',
      'Private security escort to waiting vehicle'
    ],
    insiderWhisper: 'The corner booth retains the original brick flue from the 1780s tobacco merchants.'
  },

  // 5. THAMES NOCTURNE STEALTH INTERCEPTORS & DERELICT DOCKS
  {
    id: 'thames-stealth-launch',
    category: 'maritime-nocturne',
    categoryLabel: 'Thames Nocturne Stealth Interceptors & Derelict Docks',
    title: 'The 02:00 AM Thames Stealth Launch Sprints',
    kicker: 'Maritime 01 · River Thames Nocturne Corridor',
    tagline: 'When river traffic halts, matte-black hulls plane past illuminated bridges at 40 knots.',
    image: '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg',
    gridCoordinates: '51.5055° N, 0.0754° W · Tower Pier to Greenwich',
    clearanceLevel: 'Level 2 Biometric Access',
    dressCode: 'Cashmere Outerwear / Night Casual',
    securityProtocol: 'PLA Cleared Passage & FLIR Thermal Night Navigation',
    riskMitigation: 'Port of London Authority cleared high-speed transit waiver, twin redundant Mercury outboards, marine rescue certified pilot.',
    intelBrief: 'After midnight, the Thames belongs to quiet waters and floodlit stone landmarks. Our 45-foot carbon tenders offer swift, exhilarating passage clear of road congestion.',
    deepNarrative: [
      'Step aboard directly at private pontoons in Chelsea or Greenwich after the opera or private dinner.',
      'Heated aft seating, heavy cashmere throws, and chilled vintage champagne accompany the glide beneath Tower Bridge as the city sleeps.',
      'For clients seeking raw adrenaline, the pilot opens the twin outboards once past Wapping, cutting across the black river surface under full thermal night vision.'
    ],
    deliverables: [
      'Private charter of our matte-black carbon stealth river launch',
      'Cleared high-speed transit passing Parliament and Tower Bridge',
      'Discreet embarks at private Chelsea, Wapping, and Docklands steps',
      'Heated decks with midnight caviar and champagne service'
    ],
    insiderWhisper: 'Passing directly beneath Tower Bridge at 2:30 AM without another craft on the river leaves every first-time guest breathless.'
  },
  {
    id: 'derelict-drydock-anchorage',
    category: 'maritime-nocturne',
    categoryLabel: 'Thames Nocturne Stealth Interceptors & Derelict Docks',
    title: 'Isle of Dogs Abandoned Drydock Midnight Supper',
    kicker: 'Maritime 02 · East End Maritime Ruins',
    tagline: 'Step from a speed interceptor into a lit Victorian granite graving dock for private culinary theatre.',
    image: '/assets/aistudio/MAIN-IMAGE-Shangri-La-The-Shard-London-Illuminate-Yacht-_571087f0.jpg',
    gridCoordinates: '51.4925° N, 0.0075° W · Isle of Dogs Graving Dock',
    clearanceLevel: 'Level 3 Sovereign Introduction',
    dressCode: 'Tactical Cashmere / Technical Trench',
    securityProtocol: 'Compound Perimeter Sentries & Marine Patrol Boat Standby',
    riskMitigation: 'Julian Sterling boat escort on water; fenced compound with canine security and tactical illumination.',
    intelBrief: 'A massive 19th-century granite drydock where historic tea clippers once refitted, now closed to the general public and opened solely for TGLC nocturne missions.',
    deepNarrative: [
      'Few experiences match the eerie, cinematic majesty of arriving by water into an empty Victorian drydock. As your boat gently docks at the stone slipway, lanterns light up towering granite walls.',
      'A private chef team prepares charcoal-roasted Langoustines and wild game over open flames while you sip vintage Burgundy under the shadow of the Docklands skyline.'
    ],
    deliverables: [
      'Marine speed transit directly into the private gated drydock',
      'Open-fire private feast prepared on stone platforms beside the slipway',
      'Thermal heating domes, wool blankets, and acoustic jazz accompaniment',
      'Rapid exfiltration option by road or return boat to central London'
    ],
    insiderWhisper: 'The low tide reveals the original hand-cut mason marks carved into the lower stone tiers in 1868.'
  },
  {
    id: 'canary-wharf-blackwater',
    category: 'maritime-nocturne',
    categoryLabel: 'Thames Nocturne Stealth Interceptors & Derelict Docks',
    title: 'Docklands Black-Water Insertion & Private Penthouse Ascent',
    kicker: 'Maritime 03 · High-Rise River Ingress',
    tagline: 'Direct marine transit from Westminster straight into a private dock and express penthouse lift.',
    image: '/assets/aistudio/01-Neo-Bankside-Luxury-Penthouse-London-England-UK-640x360_c8f27abb.jpg',
    gridCoordinates: '51.5050° N, 0.0200° W · Canary Wharf Basin',
    clearanceLevel: 'Level 2 Biometric Access',
    dressCode: 'Evening Tailoring / Sharp Discretion',
    securityProtocol: 'Private Pontoon Code & Escorted Residential Lift Override',
    riskMitigation: 'Zero street-level exposure; passengers transfer from water to private elevator in under 30 seconds.',
    intelBrief: 'Designed for high-profile principals who must travel across London without entering traffic or public terminals.',
    deepNarrative: [
      'Board at Westminster pier under cover of darkness; arrive at Canary Wharf in 18 minutes flat; step from vessel directly into private basement elevator lobby.',
      'Enjoy dinner or meetings on the 48th floor overlooking the lit river loop with absolute zero risk of paparazzi or unwanted attention.'
    ],
    deliverables: [
      'Direct riverboat transit bypassing all central London congestion',
      'Private dock gate code and direct-to-penthouse elevator key',
      'Security escort team carrying luggage and providing counter-surveillance',
      'Return cruise under floodlit bridges back to Chelsea or Battersea'
    ],
    insiderWhisper: 'The water reflection of Canary Wharf towers at 01:00 AM produces a mirror-glass surface found nowhere else in London.'
  },

  // 6. SUBVERSIVE COUNTER-CULTURE GASTRONOMY & SUPPER CLUBS
  {
    id: 'dalston-omakase',
    category: 'counter-culture',
    categoryLabel: 'Subversive Counter-Culture Gastronomy & Supper Clubs',
    title: 'The 8-Seat Subterranean Omakase Behind a Record Shop',
    kicker: 'Gastronomy 01 · Dalston Unmarked Basement',
    tagline: 'Eight hinoki seats, zero online listings, and day-boat catches from Cornwall and Toyosu.',
    image: '/assets/aistudio/hidden_secret_gastronomy_1794295323821.jpg',
    gridCoordinates: '51.5471° N, 0.0754° W · Dalston Underground',
    clearanceLevel: 'Level 2 Biometric Access',
    dressCode: 'Understated Evening Attire · No Strong Scents',
    securityProtocol: 'Host Greeting via Vinyl Counter & Discreet Back-Alley Drop-Off',
    riskMitigation: 'Plainclothes driver and escort wait outside; emergency vehicle staging in quiet side-mews.',
    intelBrief: 'Entered behind stacked wooden crates at an independent Japanese record shop, this acoustic basement counter is presided over by a third-generation Tokyo sushi shokunin.',
    deepNarrative: [
      'Far removed from flash bulbs and velvet ropes, dinner unfolds in hushed intimacy: aged red akasu rice, Hokkaido uni, and line-caught Channel turbot served slice by slice.',
      'TGLC reserves complete eight-seat buyouts paired with unlisted Niigata sakes, allowing you to dine in the gritty heart of East London in absolute security.'
    ],
    deliverables: [
      'Complete 8-seat private counter evening buyout',
      '22-course seasonal omakase curated directly by the head itamae',
      'Rare micro-brewery Daiginjo and artisanal tea flights',
      'Private post-dinner vinyl listening session in the front listening room'
    ],
    insiderWhisper: 'Mention the 1974 blue-sleeve jazz pressing at the counter and the shelving swings open quietly.'
  },
  {
    id: 'soho-freezer-vault',
    category: 'counter-culture',
    categoryLabel: 'Subversive Counter-Culture Gastronomy & Supper Clubs',
    title: 'The Soho Butcher Freezer Door Clandestine Cocktail Lab',
    kicker: 'Gastronomy 02 · Soho Cobbled Alleys',
    tagline: 'Step past stainless butcher hooks into an amber-lit drawing room from 1924.',
    image: '/assets/aistudio/Copper-Club_b58a00e9.jpg',
    gridCoordinates: '51.5138° N, 0.1340° W · Soho Alleys Sub-Level',
    clearanceLevel: 'Level 1 Discretion',
    dressCode: 'Sartorial Evening / Dark Velvet',
    securityProtocol: 'Weekly Rotating Password · Strictly No Flash Photography',
    riskMitigation: 'Private secondary exit directly to waiting vehicle in Bateman Street alley; close-protection lead on door.',
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
    id: 'clerkenwell-meathook',
    category: 'counter-culture',
    categoryLabel: 'Subversive Counter-Culture Gastronomy & Supper Clubs',
    title: 'Clerkenwell 18th-Century Meat-Hook Open-Flame Supper Club',
    kicker: 'Gastronomy 03 · Smithfield Sub-Level',
    tagline: 'Dry-aged British beef cooked over oak embers in a subterranean brick smokehouse.',
    image: '/assets/aistudio/mayfair_fine_dining.jpg',
    gridCoordinates: '51.5190° N, 0.1015° W · Smithfield Sub-Arches',
    clearanceLevel: 'Level 2 Biometric Access',
    dressCode: 'Smart Casual / Tailored Dark Denim & Wool',
    securityProtocol: 'Gated Archway Entry & Keyholder Greeting',
    riskMitigation: 'Direct courtyard gate entry; close-protection driver on stand-by with secure parking.',
    intelBrief: 'Deep beneath Smithfield’s historic meat market, this former smoking cellar with blackened ceiling beams hosts twelve guests around a glowing hearth of Sussex charcoal.',
    deepNarrative: [
      'Principals experience the primeval thrill of whole-carcass butchery and hearth cooking with Michelin precision. Prime rib, bone marrow, and tallow-fried heritage potatoes paired with first-growth Bordeaux.',
      'Surrounded by original cast-iron meat hooks and tallow candle glow, it feels like a secret dining society untouched since 1840.'
    ],
    deliverables: [
      'Exclusive buyout of the 12-seat brick hearth chamber',
      'Whole-rib roast carved tableside by renowned guest chefs',
      'Sommelier pairing featuring library vintages of Saint-Émilion and Rioja',
      'Private security escort to discreet street exfiltration'
    ],
    insiderWhisper: 'The chimney draft draws the fire so cleanly that the dining table sits just six feet from the glowing embers without smoke.'
  },

  // 7. FORBIDDEN URBAN HEIGHTS & RESTRICTED RAILS
  {
    id: 'down-street-station',
    category: 'urban-exploration',
    categoryLabel: 'Forbidden Urban Heights & Restricted Rails',
    title: 'Down Street Ghost Station: Churchill’s Railway Sanctum',
    kicker: 'Restricted 01 · Mayfair Underground',
    tagline: 'The abandoned Piccadilly line station where the Prime Minister slept during the Blitz.',
    image: '/assets/aistudio/hidden_subterranean_vault_1794295323175.jpg',
    gridCoordinates: '51.5058° N, 0.1492° W · Down Street, Mayfair',
    clearanceLevel: 'Level 3 Sovereign Introduction',
    dressCode: 'Discreet Tailoring / Sturdy Footwear Provided',
    securityProtocol: 'Transport for London Heritage Custodial Escort & SAS CP Lead',
    riskMitigation: 'Full subterranean safety equipment, air monitoring, certified underground track safety escort, locked surface hatch.',
    intelBrief: 'Closed in 1932 due to low passenger traffic, Down Street was converted in 1939 into the top-secret headquarters of the Railway Executive Committee, complete with executive bedrooms and executive bathrooms for Churchill.',
    deepNarrative: [
      'Step from the quiet elegance of Down Street in Mayfair down a red-brick facade into a subterranean ghost world. As tube trains rush past behind wire grilles, you walk tiled platforms frozen in 1941.',
      'Our team arranges private evening access where historians unpack declassified wartime cables before you enjoy a quiet vintage whisky in Churchill’s executive office bunk.'
    ],
    deliverables: [
      'Private custodial unlock of the red-tiled Down Street surface entrance',
      'Escorted platform and bunker walking tour with lead heritage historian',
      'Private single-malt dram poured inside the original wartime committee room',
      'Chauffeured pickup on Piccadilly directly outside the discreet exit'
    ],
    insiderWhisper: 'You can still see Churchill’s bathtub fixture in the small tiled washroom off the main rail gallery.'
  },
  {
    id: 'tower-bridge-bascule',
    category: 'urban-exploration',
    categoryLabel: 'Forbidden Urban Heights & Restricted Rails',
    title: 'Tower Bridge Bascule Chamber Sub-River Cathedral',
    kicker: 'Restricted 02 · Thames Sub-Aqueous Crypt',
    tagline: 'Massive brick chambers below the riverbed housing the 1,000-ton bridge counterweights.',
    image: '/assets/aistudio/WhatsApp_Image_233026-11-05_at_00.22.11_0ad9b38a.jpeg',
    gridCoordinates: '51.5055° N, 0.0754° W · Tower Bridge South Bascule',
    clearanceLevel: 'Level 3 Sovereign Introduction',
    dressCode: 'Dark Tailored Outerwear',
    securityProtocol: 'Bridge Custodian Keyholder & Engineering Safety Escort',
    riskMitigation: 'Strict engineering safety protocols, safety harnesses for elevated walkways, direct police marine coordination.',
    intelBrief: 'A colossal, cavernous brick space located beneath water level that receives the massive 1,000-ton counterweights whenever Tower Bridge opens to river traffic.',
    deepNarrative: [
      'This submerged architectural wonder boasts a staggering 14-second natural acoustic reverberation. Descend the steel companionway into absolute darkness as the bridge overhead hums with city traffic.',
      'TGLC coordinates closed-door acoustic recitals, binaural sound experiences, and private architectural walkthroughs when the bridge is locked.'
    ],
    deliverables: [
      'Private evening entry into the south bascule chamber beneath the river',
      'Exclusive acoustic performance by specialist choral or brass musicians',
      'Engineering briefing explaining the hydraulic accumulator systems',
      'Private tender pick-up from Tower Pier upon ascent'
    ],
    insiderWhisper: 'Stand at the bottom floor and whisper: your voice circles the 100-foot brick vault and returns behind you.'
  },
  {
    id: 'canary-wharf-rooftop-crane',
    category: 'urban-exploration',
    categoryLabel: 'Forbidden Urban Heights & Restricted Rails',
    title: 'Restricted Sky-Gantry & High-Tower Midnight Vista',
    kicker: 'Restricted 03 · Docklands Sky-Cordon',
    tagline: 'Stand 700 feet above the city on a private architectural gantry with zero glass barriers.',
    image: '/assets/aistudio/Main-5_c9bf5214.png',
    gridCoordinates: '51.5045° N, 0.0185° W · Canary Wharf High Tier',
    clearanceLevel: 'Level 3 Sovereign Introduction',
    dressCode: 'High Tactical Outerwear / Windproof Cashmere',
    securityProtocol: 'Structural Engineer Certification & Full Harness Safety Check',
    riskMitigation: 'Full certified fall arrest harnesses, structural safety guides, high-altitude wind monitoring, private express lift.',
    intelBrief: 'A private maintenance gantry high above London’s financial towers, accessed via confidential engineering permits and express service shafts.',
    deepNarrative: [
      'For clients who seek pure vertigo and raw exhilaration without public viewing decks or tourist crowds. Step onto the open-air steel grating as night winds whip past and the Thames curves below like a ribbon of molten glass.',
      'Julian Sterling’s team ensures total perimeter security and safe harness anchorings while our concierge serves hot artisanal teas and aged cognacs from thermal flasks.'
    ],
    deliverables: [
      'Private ascent via security-cleared high-speed industrial lift',
      'Secured walk on the open-air gantry 700 feet above London',
      'Professional high-altitude night photography capturing your visit',
      'Heated penthouse lounge waiting at lower level with private bar'
    ],
    insiderWhisper: 'On clear nights you can see the flashing runway lights of Heathrow 20 miles to the west.'
  },

  // 8. CLANDESTINE BOHEMIAN JAZZ & PRIVATE SOCIETY SALONS
  {
    id: 'meard-jazz-den',
    category: 'after-hours',
    categoryLabel: 'Clandestine Bohemian Jazz & Private Society Salons',
    title: 'Meard Street Subterranean Vinyl Jazz & Bourbon Crypt',
    kicker: 'After-Hours 01 · Soho Bohemian Underworld',
    tagline: 'The unadvertised 25-seat basement where legendary jazz players jam after their West End sets.',
    image: '/assets/aistudio/Copper-Club_b58a00e9.jpg',
    gridCoordinates: '51.5135° N, 0.1330° W · Meard Street',
    clearanceLevel: 'Level 1 Discretion',
    dressCode: 'Bohemian Sartorial / Velvet & Cashmere',
    securityProtocol: 'Discreet Doorman Verification & Strictly No Photography',
    riskMitigation: 'Plainclothes security officer posted at street level; private side exit through residential courtyard.',
    intelBrief: 'Beneath a nondescript townhouse in Soho lies an acoustic basement where world-touring musicians gather at 01:30 AM to play unamplified bebop and modal jazz.',
    deepNarrative: [
      'No stage, no microphones, no ticketing. Just a 1928 Steinway baby grand, upright bass, and horn players trading solos inches from your leather armchair.',
      'Sip 25-year-old Pappy Van Winkle or Japanese single malts in an amber glow while London’s finest jazz plays until the first morning light.'
    ],
    deliverables: [
      'Guaranteed corner booth reservation at the 25-seat unlisted lounge',
      'Table bottle service from rare bourbon and scotch library allocations',
      'Direct introduction to performing musicians during the intermission',
      'Doorstep chauffeur pickup arranged in Wardour Street'
    ],
    insiderWhisper: 'The piano tuner visits at midnight every Tuesday before the after-hours session begins.'
  },
  {
    id: 'fitzrovia-absinthe-salon',
    category: 'after-hours',
    categoryLabel: 'Clandestine Bohemian Jazz & Private Society Salons',
    title: 'The Fitzrovia Bohemian Absinthe & Literary Crypt',
    kicker: 'After-Hours 02 · Fitzrovia Heritage Cellars',
    tagline: 'Rare pre-ban absinthes dripped over sugar cubes in an unlisted poet’s sanctuary.',
    image: '/assets/aistudio/WhatsApp_Image_32026-11-05_at_00.21.03_0cd77377.jpeg',
    gridCoordinates: '51.5205° N, 0.1380° W · Fitzroy Square Sub-Level',
    clearanceLevel: 'Level 2 Biometric Access',
    dressCode: 'Dark Romantic / Classic Savile Row',
    securityProtocol: 'Private Bell Code & Society Host Introduction',
    riskMitigation: 'Private residential entrance with zero street markings; driver parked around corner in private mews.',
    intelBrief: 'A private salon operating in the tradition of Oscar Wilde and Dylan Thomas, dedicated to historic French and Swiss absinthes distilled before 1914.',
    deepNarrative: [
      'Behind an unlabelled panelled door near Fitzroy Square, water drips slowly from ornate French silver fountains over antique slotted spoons.',
      'Principals retreat here for unhurried conversations about art, philosophy, and history away from the frenetic commercialism of modern nightlife.'
    ],
    deliverables: [
      'Tasting of authentic vintage pre-ban absinthes poured from antique decanters',
      'Private library nook surrounded by first-edition British literature',
      'Artisanal charcuterie and French cheeses paired with historic spirits',
      'Discreet chauffeured return to Mayfair or Kensington'
    ],
    insiderWhisper: 'Look at the green glassware on the corner table—they are hand-blown 1890s Pontarlier glasses.'
  },
  {
    id: 'spitalfields-crypt-exchange',
    category: 'after-hours',
    categoryLabel: 'Clandestine Bohemian Jazz & Private Society Salons',
    title: 'Spitalfields Silk Weaver Crypt Cigar & Collector Exchange',
    kicker: 'After-Hours 03 · East London Heritage Crypt',
    tagline: 'Private midnight salon where rare timepieces and pre-embargo cigars exchange hands.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-05_at_00.17.42_97e31fb5.jpeg',
    gridCoordinates: '51.5195° N, 0.0750° W · Spitalfields Georgian Quarter',
    clearanceLevel: 'Level 3 Sovereign Introduction',
    dressCode: 'Evening Tailoring / Velvet Smoking Jackets',
    securityProtocol: 'Encrypted Guest List & Julian Sterling Close Protection Detail',
    riskMitigation: 'Armed response team on standby, encrypted identity verification at archway, secure underground vault storage.',
    intelBrief: 'Set inside the brick undercroft of an 18th-century Huguenot silk merchant’s house, this monthly midnight salon hosts private watch collectors and art connoisseurs.',
    deepNarrative: [
      'Away from public auction houses and trade fairs, collectors meet here by candlelight to inspect museum-grade vintage watches, rare coins, and pre-embargo Cuban cigars.',
      'Julian Sterling’s protection detail provides absolute security for physical assets in transit, while high-efficiency airflow keeps the atmosphere crisp and fragrant.'
    ],
    deliverables: [
      'Private access to the Huguenot crypt collector salon',
      'Humidor access to rare 1950s Havana cigars stored in cedar lockers',
      'On-site horological expert and appraiser with microscope equipment',
      'Armoured vehicle transport for valuable acquisitions back to vault storage'
    ],
    insiderWhisper: 'The brick hearth in the rear was originally built to heat dyeing vats for French silk brocades in 1740.'
  }
];

interface RogueScheduleItem {
  time: string;
  codename: string;
  location: string;
  action: string;
  detail: string;
  asset: string;
  securityNote: string;
}

const ROGUE_ITINERARY: RogueScheduleItem[] = [
  {
    time: '21:00',
    codename: 'Phase 01 · Mayfair Departure & Tactical Brief',
    location: 'TGLC House, 3rd Floor, 45 Albemarle Street, Mayfair W1S 4JL',
    action: 'Discreet Departure in Armoured Rolls-Royce Cullinan',
    detail: 'Evening brief handed over in wax-sealed folio with mission alias. Experienced driver and close-protection scout navigate quiet backstreets through Burlington Gardens and Soho.',
    asset: '/assets/aistudio/rolls-cullian-featured_a41abfa9.webp',
    securityNote: 'Lead scout car verifies route clearance 5 minutes ahead.'
  },
  {
    time: '21:45',
    codename: 'Phase 02 · Freezer Door Ingress & Aperitifs',
    location: 'Unmarked Alleys, Soho',
    action: 'Clandestine Butcher Freezer Cocktail Lab Aperitifs',
    detail: 'Step past stainless butcher hooks into amber velvet candlelight. Clarified botanical infusions shaken to your exact spirit and aroma profile in private banquette.',
    asset: '/assets/aistudio/Copper-Club_b58a00e9.jpg',
    securityNote: 'Plainclothes operative holds rear service door for private egress.'
  },
  {
    time: '23:00',
    codename: 'Phase 03 · Underground Combat or High-Stakes Cards',
    location: 'Meard Street Vault or Bethnal Green Rail Arch',
    action: 'Unlisted Ringside Sparring or £50k Texas Hold’em Salon',
    detail: 'Experience the electric pulse of unlisted London: either ringside at a closed-door exhibition bout or seated at the 8-person Faraday poker table under professional dealing.',
    asset: '/assets/aistudio/pt3_6ef34e91.jpg',
    securityNote: 'RF jammer enclosure active; zero digital devices allowed inside.'
  },
  {
    time: '01:00',
    codename: 'Phase 04 · Sub-Level Omakase & Rare Sakes',
    location: 'Dalston Underground Vault Behind Record Shop',
    action: 'Private 8-Seat Hinoki Counter Midnight Banquet',
    detail: 'Complete buyout behind the vinyl racks. 22 courses of aged Cornish turbot and Toyosu bluefin paired with unlisted micro-brewery Niigata Daiginjo.',
    asset: '/assets/aistudio/hidden_secret_gastronomy_1794295323821.jpg',
    securityNote: 'Private courtyard vehicle staging with discrete driver communication.'
  },
  {
    time: '02:30',
    codename: 'Phase 05 · Thames Nocturne Stealth Interceptor Sprint',
    location: 'Wapping Private Pier to Greenwich & Tower Bridge',
    action: 'Matte-Black Carbon Tender River Run at 38 Knots',
    detail: 'Plane across black river water under floodlit Tower Bridge and Parliament while Beluga caviar and chilled Krug arrive on heated aft teak decks.',
    asset: '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg',
    securityNote: 'PLA high-speed transit clearance and FLIR thermal night navigation.'
  },
  {
    time: '04:15',
    codename: 'Phase 06 · Barbican Dawn Nightcap & City Sunrise',
    location: 'Barbican High-Elevation Duplex Penthouse Terraces',
    action: 'Single-Cask Whiskies Over First Light Across St Paul’s',
    detail: 'Express lift ascent to panoramic brutalist concrete terraces as morning sunlight illuminates Wren spires across the silent City skyline.',
    asset: '/assets/aistudio/hidden_brutalist_penthouse_1794295322915.jpg',
    securityNote: 'Private basement garage vehicle handover with 24/7 security concierge.'
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
    kicker: 'Sub-Rosa Sector 01 · London Deep Sub-Terrain',
    tagline: 'Forty to one hundred feet beneath London clay lies a hidden kingdom of wartime citadels and bullion vaults.',
    heroImage: '/assets/aistudio/hidden_subterranean_vault_1794295323175.jpg',
    coordinates: '51.5542° N, 0.2520° W · Deep Subterranean Grid',
    lead: 'Sealed behind five-foot blast bulkheads and unlisted street grates, these historic underground spaces welcome trusted TGLC gatherings, private candlelight dinners, and wholly unmonitored strategic councils with zero electronic leakage.'
  },
  industrial: {
    title: 'Brutalist Enclaves & Industrial Monoliths',
    kicker: 'Sub-Rosa Sector 02 · City Skyline & Docklands',
    tagline: 'Fluted concrete sky-studios, cleanroom horology labs, and raw grain silos far from commercial Mayfair.',
    heroImage: '/assets/aistudio/hidden_brutalist_penthouse_1794295322915.jpg',
    coordinates: '51.5204° N, 0.0928° W · City Skyline & Docklands',
    lead: 'Whether admiring post-war art from a Barbican penthouse terrace, fitting bespoke aircraft luggage under Bermondsey railway arches, or inspecting tourbillons by the canal, we connect you directly with London’s raw creative masters.'
  },
  'underground-combat': {
    title: 'Underground Combat & Raw East End Rings',
    kicker: 'Sub-Rosa Sector 03 · Pugilism & Arenas',
    tagline: 'Authentic bare-knuckle archives, secret railway arch bouts, and cageside championship supremacy.',
    heroImage: '/assets/aistudio/pt3_6ef34e91.jpg',
    coordinates: '51.5290° N, 0.0560° W · Bethnal Green to Greenwich',
    lead: 'The visceral electricity of London pugilism, experienced with total security. Julian Sterling’s tactical close-protection team escorts principals directly ringside under Victorian brick viaducts for raw, uncommercialised fight nights.'
  },
  'clandestine-gaming': {
    title: 'Secret High-Stakes Gaming & Clandestine Salons',
    kicker: 'Sub-Rosa Sector 04 · High-Roller Sub-Levels',
    tagline: 'Fifty-thousand-pound buy-ins, private chemin-de-fer, and Faraday card rooms behind antique bookshops.',
    heroImage: '/assets/aistudio/Copper-Club_b58a00e9.jpg',
    coordinates: '51.5134° N, 0.1332° W · Soho & Mayfair Sub-Vaults',
    lead: 'Pure high-stakes drama with zero institutional risk. Professional European dealers, institutional trust settlements, and cryptographic privacy shielding allow principals to contest high-limit poker and baccarat in complete peace.'
  },
  'maritime-nocturne': {
    title: 'Thames Nocturne Stealth Interceptors & Derelict Docks',
    kicker: 'Sub-Rosa Sector 05 · River Corridor at 02:00',
    tagline: 'When river traffic halts, matte-black hulls plane past floodlit bridges at 40 knots to abandoned drydocks.',
    heroImage: '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg',
    coordinates: '51.5055° N, 0.0754° W · Tower Pier to Greenwich',
    lead: 'London from the black water is unlike anything on land. High-speed carbon interceptors cleared by the Port of London Authority glide beneath Tower Bridge, beaching at Victorian drydocks for candlelit open-fire feasts.'
  },
  'counter-culture': {
    title: 'Subversive Counter-Culture Gastronomy & Supper Clubs',
    kicker: 'Sub-Rosa Sector 06 · East & Soho Backstreets',
    tagline: 'Eight-seat cellar omakases, freezer-door speakeasies, and woodfired meat-hook feasts with zero signboards.',
    heroImage: '/assets/aistudio/hidden_secret_gastronomy_1794295323821.jpg',
    coordinates: '51.5471° N, 0.0754° W · East & Soho Network',
    lead: 'True culinary theatre thrives away from paparazzi pavements. Step behind butcher cold doors and vinyl record racks for intimate counter meals, woodfired hearth feasts, and rare vintage sake flights.'
  },
  'urban-exploration': {
    title: 'Forbidden Urban Heights & Restricted Rails',
    kicker: 'Sub-Rosa Sector 07 · Sub-River Bascules & Ghost Stations',
    tagline: 'Churchill’s abandoned Down Street station, 700-foot midnight crane vistas, and Tower Bridge bascule chambers.',
    heroImage: '/assets/aistudio/WhatsApp_Image_233026-11-05_at_00.22.11_0ad9b38a.jpeg',
    coordinates: '51.5058° N, 0.1492° W · Mayfair & Thames Sub-Aqueous',
    lead: 'Strictly restricted architectural and engineering marvels opened exclusively for TGLC principals under engineering permits. Explore abandoned platforms, resonant bascule vaults, and open sky gantries in complete safety.'
  },
  'after-hours': {
    title: 'Clandestine Bohemian Jazz & Private Society Salons',
    kicker: 'Sub-Rosa Sector 08 · Late-Night Salons',
    tagline: 'Unadvertised 02:00 AM basement jazz jam sessions, pre-ban absinthe salons, and Georgian crypt exchanges.',
    heroImage: '/assets/aistudio/WhatsApp_Image_32026-11-05_at_00.21.03_0cd77377.jpeg',
    coordinates: '51.5135° N, 0.1330° W · Soho & Fitzrovia Sub-Terrain',
    lead: 'When the West End clubs shut their doors, London’s true bohemians gather in subterranean drawing rooms. Unamplified horns, Steinway grands, rare single-casks, and private collector exchanges by candlelight.'
  },
  itinerary: {
    title: '007 Rogue 24-Hour London Mission Plan',
    kicker: 'Sub-Rosa Sector 09 · Dusk-to-Dawn Choreography',
    tagline: 'A complete dusk-to-dawn movement from Mayfair through Soho cellars, river sprints, to Barbican heights.',
    heroImage: '/assets/aistudio/01_BUGATTI-SOC2022_6775a49f.jpg',
    coordinates: 'London Metropolitan Area · 21:00 to 04:30',
    lead: 'Every handover, cold-room password, armoured scout convoy, high-speed boat captain, and dawn whisky pour synchronised to the minute by Julian Sterling and our Mayfair directors.'
  }
};

const CLANDESTINE_HERO_SLIDES = [
  {
    id: 'stealth-boat',
    image: '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg',
    title: 'Nocturne Stealth Launch at 02:00',
  },
  {
    id: 'subterranean-vault',
    image: '/assets/aistudio/hidden_subterranean_vault_1794295323175.jpg',
    title: 'Churchill Paddock & Bullion Vaults',
  },
  {
    id: 'combat-ringside',
    image: '/assets/aistudio/pt3_6ef34e91.jpg',
    title: 'Underground Combat & Raw Arch Rings',
  },
  {
    id: 'copper-club',
    image: '/assets/aistudio/Copper-Club_b58a00e9.jpg',
    title: 'Secret Soho High-Roller Salons',
  },
  {
    id: 'brutalist-penthouse',
    image: '/assets/aistudio/hidden_brutalist_penthouse_1794295322915.jpg',
    title: 'Barbican Concrete Sky-Sanctum',
  },
  {
    id: 'secret-gastronomy',
    image: '/assets/aistudio/hidden_secret_gastronomy_1794295323821.jpg',
    title: '8-Seat Dalston Sub-Level Omakase',
  },
];

export const HiddenLondonPage: React.FC<{ initialSubPage?: SubRosaCategory }> = ({ initialSubPage }) => {
  const { openIntroductionModal, navigateTo, route } = useNavigation();
  const [activeCategory, setActiveCategory] = useState<SubRosaCategory>(
    initialSubPage || (route.subSection as SubRosaCategory) || 'all'
  );
  const [detailModalDossier, setDetailModalDossier] = useState<ClandestineDossier | null>(null);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  useEffect(() => {
    if (isHeroPaused) return;
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % CLANDESTINE_HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isHeroPaused]);

  useEffect(() => {
    if (initialSubPage) {
      setActiveCategory(initialSubPage);
    } else if (
      route.subSection &&
      [
        'all',
        'subterranean',
        'industrial',
        'underground-combat',
        'clandestine-gaming',
        'maritime-nocturne',
        'counter-culture',
        'urban-exploration',
        'after-hours',
        'itinerary'
      ].includes(route.subSection)
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
        <section className="relative min-h-[48vh] sm:min-h-[58vh] flex items-center justify-center overflow-hidden border-b border-[#20222B] pt-14 sm:pt-18 pb-12">
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/40 to-[#08090C]/65" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/85 via-transparent to-[#08090C]/75 hidden sm:block" />
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
                className="btn-gold px-7 py-3 text-xs inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request Sector Clearance</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  navigateTo('hidden-london');
                }}
                className="btn-outline-gold px-5 py-3 text-xs cursor-pointer"
              >
                ← View All 8 Sectors
              </button>
            </div>
          </motion.div>
        </section>
      ) : (
        <section
          onMouseEnter={() => setIsHeroPaused(true)}
          onMouseLeave={() => setIsHeroPaused(false)}
          className="relative min-h-[54vh] sm:min-h-[64vh] flex items-center justify-center overflow-hidden border-b border-[#20222B] pt-14 sm:pt-18 pb-12"
        >
          {/* Animated Hero Carousel Background with Ken-Burns */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentHeroSlide}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: [1.08, 1, 1.04] }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{
                  opacity: { duration: 1.1, ease: 'easeInOut' },
                  scale: { duration: 18, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="absolute inset-0"
              >
                <img
                  src={CLANDESTINE_HERO_SLIDES[currentHeroSlide].image}
                  alt={CLANDESTINE_HERO_SLIDES[currentHeroSlide].title}
                  className="w-full h-full object-cover object-center brightness-105 contrast-105"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/45 to-[#08090C]/65" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/85 via-transparent to-[#08090C]/65 hidden sm:block" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#08090C_90%)]" />

            {/* Carousel Navigation Arrows */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none">
              <button
                type="button"
                onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + CLANDESTINE_HERO_SLIDES.length) % CLANDESTINE_HERO_SLIDES.length)}
                className="pointer-events-auto p-2.5 bg-[#08090C]/75 hover:bg-[#B98633] text-[#CFA85E] hover:text-[#08090C] border border-[#B98633]/30 transition-all backdrop-blur-md cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % CLANDESTINE_HERO_SLIDES.length)}
                className="pointer-events-auto p-2.5 bg-[#08090C]/75 hover:bg-[#B98633] text-[#CFA85E] hover:text-[#08090C] border border-[#B98633]/30 transition-all backdrop-blur-md cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Indicators & Counter */}
            <div className="absolute bottom-4 inset-x-0 z-20 flex items-center justify-center gap-3">
              <div className="px-2.5 py-1 bg-[#08090C]/80 border border-[#B98633]/30 text-[10px] tracking-widest text-[#DDB872] font-mono backdrop-blur-md">
                0{currentHeroSlide + 1} / 0{CLANDESTINE_HERO_SLIDES.length} · {CLANDESTINE_HERO_SLIDES[currentHeroSlide].title}
              </div>
              <div className="flex gap-1.5">
                {CLANDESTINE_HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentHeroSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 transition-all cursor-pointer ${
                      idx === currentHeroSlide ? 'w-8 bg-[#CFA85E]' : 'w-2 bg-[#F4F1EA]/30 hover:bg-[#F4F1EA]/60'
                    }`}
                  />
                ))}
              </div>
            </div>
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
              “Where ultra-wealthy principals go secretly—protected by connections, discretion, and SAS-trained security.”
            </motion.p>

            <motion.p
              initial={{ opacity: 0.9, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-xs sm:text-base text-[#E5DFD3] max-w-3xl mx-auto leading-relaxed font-light"
            >
              Beyond the quiet townhouses of Mayfair lies an exhilarating, raw London that few outsiders ever see: underground bare-knuckle sparring beneath Victorian railway arches, clandestine £50k high-roller poker salons behind Soho shops, 02:00 AM blacked-out stealth interceptor sprints on the Thames, and Churchill’s deep wartime bunkers. Experienced with absolute safety under Director of Security Julian Sterling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0.9, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="pt-2 flex flex-wrap items-center justify-center gap-4"
            >
              <button
                onClick={() => openIntroductionModal('Sub-Rosa & Clandestine London Inquiry')}
                className="btn-gold px-8 py-3.5 text-xs inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request Clandestine Allocation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('subrosa-explorer');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline-gold px-6 py-3.5 text-xs backdrop-blur-md cursor-pointer"
              >
                Explore 8 Secret Sectors ↓
              </button>
            </motion.div>
          </div>
        </section>
      )}

      <GoldDivider />

      {/* 2. Sticky Discipline Bar with 8 Complete Sectors */}
      <section
        id="subrosa-explorer"
        className="sticky top-[64px] sm:top-[76px] z-30 bg-[#0B0C10]/95 backdrop-blur-md border-b border-[#222530] shadow-xl py-3 px-4 sm:px-8"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] uppercase tracking-widest text-[#CFA85E] hidden xl:inline pr-3 border-r border-[#242630]">
              Sanctum Sectors
            </span>

            {[
              { id: 'all' as const, label: `All (${CLANDESTINE_DOSSIERS.length})`, icon: null },
              { id: 'subterranean' as const, label: 'Subterranean & Bunkers', icon: Lock },
              { id: 'industrial' as const, label: 'Brutalist & Monoliths', icon: Compass },
              { id: 'underground-combat' as const, label: 'Underground Combat', icon: Zap },
              { id: 'clandestine-gaming' as const, label: 'Secret Gaming Salons', icon: Dice5 },
              { id: 'maritime-nocturne' as const, label: 'Thames Nocturne', icon: Anchor },
              { id: 'counter-culture' as const, label: 'Subversive Gastronomy', icon: Flame },
              { id: 'urban-exploration' as const, label: 'Restricted Heights & Rails', icon: Eye },
              { id: 'after-hours' as const, label: 'Bohemian Jazz Salons', icon: Radio },
              { id: 'itinerary' as const, label: '007 Rogue Itinerary', icon: Clock },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeCategory === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.id)}
                  className={`h-9 px-3 text-xs tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 border cursor-pointer ${
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

          <div className="hidden lg:flex items-center gap-2.5 text-[11px] text-[#9C968A] shrink-0">
            <Shield className="w-3.5 h-3.5 text-[#CFA85E]" />
            <span>Julian Sterling CP Active</span>
          </div>
        </div>
      </section>

      {/* Sub-Rosa Tactical Overview Banner */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 space-y-6">
        <div className="p-6 sm:p-8 bg-[#12141A] border border-[#242630] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-1.5">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#CFA85E] block">
              The Edge of London · Protected Discretion
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
              Why London’s Elite Explore the Edge Through TGLC
            </h2>
          </div>
          <p className="lg:col-span-7 text-xs sm:text-sm text-[#B5AFA3] leading-relaxed font-light">
            Ultra-wealthy principals frequently tire of the predictable hotel ballrooms and sanitized Michelin dining rooms of Central London. They crave the raw, gritty, authentic thrill of underground London—the secret fight rings, the clandestine poker rooms, the midnight river interceptors—but they require ironclad security and trusted custodial introductions. Julian Sterling’s tactical close-protection team provides discreet plainclothes counters, Faraday frequency sweeps, and emergency extraction corridors so you experience the exhilarating edge with absolute peace of mind.
          </p>
        </div>

        {/* 3 Featured Sector Vignettes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              img: '/assets/aistudio/pt3_6ef34e91.jpg',
              alt: 'Underground Combat & Raw Arch Rings',
              tag: 'Underground Combat',
              title: 'Raw Pugilism & Arch Sparring',
              desc: 'Unsanctioned boxing exhibitions and closed railway arch sparring where former champions trade rounds behind locked steel shutters under SAS tactical protection.',
              category: 'underground-combat' as const
            },
            {
              img: '/assets/aistudio/Copper-Club_b58a00e9.jpg',
              alt: 'Clandestine High-Roller Gaming',
              tag: 'Clandestine Gaming',
              title: 'Soho High-Stakes Card Sanctums',
              desc: 'Fifty-thousand-pound buy-ins behind antique shop doors. European croupiers, Faraday signal shielding, and trust-account settlements without physical cash risk.',
              category: 'clandestine-gaming' as const
            },
            {
              img: '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg',
              alt: 'Nocturne River Stealth & Interceptor Sprints',
              tag: 'River Stealth',
              title: '02:00 AM Thames Interceptors',
              desc: 'Matte-black twin-engine speed launches planing past illuminated bridges to abandoned Isle of Dogs drydocks for private open-fire feasts on the water.',
              category: 'maritime-nocturne' as const
            },
          ].map((tile, idx) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0.9, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              onClick={() => setActiveCategory(tile.category)}
              className="bg-[#12141A] border border-[#242630] hover:border-[#8B672B] transition-colors overflow-hidden group cursor-pointer"
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
                <h3 className="font-serif text-xl text-[#F4F1EA] group-hover:text-[#DDB872] transition-colors">{tile.title}</h3>
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
              A dusk-to-dawn movement linking London’s quietest cellars, underground combat vaults, Thames speed arteries, and dawn brutalist rooftops under elite close-protection escort.
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
                      <div className="mt-3 pt-3 border-t border-[#20222B] flex items-center gap-2 text-[11px] text-[#CFA85E]">
                        <Shield className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-light">{step.securityNote}</span>
                      </div>
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
              className="btn-gold px-8 py-3.5 text-xs inline-flex items-center gap-2 cursor-pointer"
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
                {activeCategory === 'underground-combat' && 'Underground Combat & Raw Arch Rings'}
                {activeCategory === 'clandestine-gaming' && 'Secret High-Stakes Gaming & Clandestine Salons'}
                {activeCategory === 'maritime-nocturne' && 'Thames Nocturne Stealth Interceptors'}
                {activeCategory === 'counter-culture' && 'Counter-Culture High Gastronomy & Supper Clubs'}
                {activeCategory === 'urban-exploration' && 'Forbidden Urban Heights & Restricted Rails'}
                {activeCategory === 'after-hours' && 'Clandestine Bohemian Jazz & Society Salons'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#9C968A] max-w-md leading-relaxed font-light">
              Each address operates behind strict discretion protocols and personal security escort. Open any full dossier for ingress details.
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
                            Protocol & Security
                          </span>
                          <span className="text-[#D9D4CA] font-normal">{dossier.securityProtocol}</span>
                        </div>
                      </div>

                      <div className="pt-4 p-3 bg-[#0B0C10] border border-[#20222B] text-xs space-y-1">
                        <div className="flex items-center gap-1.5 text-[#CFA85E] text-[10px] uppercase tracking-wider font-semibold">
                          <Shield className="w-3 h-3" />
                          <span>Tactical Risk Mitigation</span>
                        </div>
                        <p className="text-[11px] text-[#A6A095] font-light leading-relaxed">
                          {dossier.riskMitigation}
                        </p>
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
                        className="btn-gold px-6 py-3 text-xs inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>Request Clearance</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setDetailModalDossier(dossier)}
                        className="btn-outline-gold px-4 py-3 text-xs cursor-pointer"
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
            Need immediate access to an unlisted room or tactical escort?
          </h2>

          <p className="text-xs sm:text-base text-[#9C968A] max-w-xl mx-auto font-light leading-relaxed">
            Our London directors and Julian Sterling’s security desk stay on call day and night with direct keys to private vaults, underground combat rings, riverside piers, and Faraday drawing rooms.
          </p>

          <div className="p-4 max-w-md mx-auto bg-[#12141A] border border-[#242630] flex items-center justify-center gap-3 text-xs">
            <Key className="w-4 h-4 text-[#CFA85E]" />
            <span className="text-[#9C968A]">Direct Line:</span>
            <span className="text-[#F4F1EA] font-semibold text-sm tabular-nums">{TGLC_CONTACT.telephone}</span>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openIntroductionModal('Immediate Clandestine Dispatch Request')}
              className="btn-gold px-8 py-3.5 text-xs inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Transmit Discreet Request</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button onClick={() => navigateTo('home')} className="btn-outline-gold px-6 py-3.5 text-xs cursor-pointer">
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
                className="absolute top-4 right-4 p-2 text-[#9C968A] hover:text-[#CFA85E] focus:outline-none cursor-pointer"
                aria-label="Close dossier"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 text-xs text-[#CFA85E] border-b border-[#242630] pb-3">
                <FileText className="w-4 h-4" />
                <span className="uppercase tracking-widest">
                  TGLC House Intelligence Briefing · {detailModalDossier.categoryLabel}
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
                <div className="flex items-center gap-2 text-[#CFA85E]">
                  <Shield className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-semibold block">
                    Security Directive & Tactical Escort Protocol
                  </span>
                </div>
                <p className="text-xs text-[#B5AFA3] font-light">
                  {detailModalDossier.securityProtocol}. Coordinated strictly through pre-verified registration, SAS-trained security lead escort, and counter-surveillance sweep.
                </p>
                <p className="text-xs text-[#CFA85E] font-light pt-1">
                  <strong>Risk Mitigation:</strong> {detailModalDossier.riskMitigation}
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
                  className="btn-gold px-6 py-3 text-xs inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Ingress Clearance</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDetailModalDossier(null)}
                  className="px-4 py-3 text-xs uppercase tracking-widest text-[#9C968A] hover:text-[#F4F1EA] transition-colors cursor-pointer"
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
