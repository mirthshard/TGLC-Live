import { TeamMember, ServiceCategory, CalendarEvent, JournalArticle, MemberProfile, FAQItem } from '../types';

export const TGLC_CONTACT = {
  houseName: 'TGLC House',
  companyNumber: '16831098',
  address: Object.assign(
    '3rd Floor, 45 Albemarle Street, London W1S 4JL',
    {
      street: '3rd Floor, 45 Albemarle Street',
      area: 'Mayfair',
      postcode: 'W1S 4JL',
      city: 'London',
      country: 'United Kingdom',
      toString: () => '3rd Floor, 45 Albemarle Street, London W1S 4JL'
    }
  ),
  phone: '020 3951 6369',
  telephone: '020 3951 6369',
  privateMemberLine: '020 3951 6369',
  internationalPhone: '+44 (0)20 3951 6369',
  email: 'info@thegloballuxuryconsortium.com',
  memberSupport: 'info@thegloballuxuryconsortium.com',
  instagram: '@thegloballuxuryconsortium',
  linkedIn: 'The Global Luxury Consortium',
  domain: 'thegloballuxuryconsortium.com',
  hours: 'Private Office: Monday – Friday, 08:30 – 19:30 GMT | Member Desk: 24/7/365 Global Coverage'
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Mickell Washington',
    role: 'Founder & Managing Director',
    title: 'Managing Director',
    bio: 'Mickell founded The Global Luxury Consortium following fifteen years advising sovereign families, multi-family offices, and private principals across London, Geneva, and New York. His practice is anchored in absolute discretion, personal integrity, and cultivating relationships that cannot be bought through public channels.',
    specialism: 'Principal Advisory, Sovereign Mobility & Confidential Affairs',
    location: 'Mayfair, London',
    image: '/assets/aistudio/team_mickell_washington_1794298891713.jpg'
  },
  {
    name: 'Camilla Vance-Moreau',
    role: 'Director of Private Office & Client Relations',
    title: 'Director of Private Office',
    bio: 'Formerly heading private client admissions for landmark heritage institutions and members’ clubs in Mayfair and Paris, Camilla oversees our private member introductions, family office charters, and multi-jurisdictional client engagements.',
    specialism: 'Member Advisory, Private Office Architecture & Client Relations',
    location: 'Mayfair & Paris',
    image: '/assets/aistudio/team_camilla_vance_1794298891960.jpg'
  },
  {
    name: 'Dr. Helena Zhang-Somerset',
    role: 'Head of Cultural Curation & Sub-Rosa Operations',
    title: 'Head of Cultural Curation',
    bio: 'Helena brings an intimate insider knowledge of London’s contemporary arts, private architectural salons, independent horology laboratories, and clandestine subterranean enclaves. She directs our Sub-Rosa London network.',
    specialism: 'Contemporary Art, Haute Horlogerie & Clandestine Access',
    location: 'Mayfair & Soho, London',
    image: '/assets/aistudio/team_helena_zhang_1794298892985.jpg'
  },
  {
    name: 'Julian Sterling',
    role: 'Director of Fleet, Aviation & Tactical Security',
    title: 'Director of Mobility',
    bio: 'Julian coordinates our sovereign chauffeur fleet, private aviation apron tarmac transfers at RAF Northolt and Farnborough, and close-protection tactical operations with clinical British poise.',
    specialism: 'Armored Fleet Operations, Aviation Charters & Tactical Security',
    location: 'London & Farnborough',
    image: '/assets/aistudio/team_julian_sterling_1794298893944.jpg'
  }
];

export const TGLC_TEAM = TEAM_MEMBERS;

export const ETHOS_PRINCIPLES = [
  {
    number: '01',
    title: 'Discretion is fundamental.',
    summary: 'Trust is not an operational policy; it is our entire reason for being. We operate on a strict need-to-know standard across every booking, communication, and introduction.',
    body: 'In an era where luxury is frequently broadcast, true privilege remains quiet. We do not publicise our member roll, photograph our clients at private tables, or trade on celebrity associations. Our lifestyle managers work under rigorous non-disclosure agreements, and our communication protocols are structured so that our presence is virtually imperceptible to the outside world.'
  },
  {
    number: '02',
    title: 'Access is earned through relationships.',
    summary: 'Doors do not open through aggressive commercial clout or automated reservation bots; they open through decades of mutual respect, trust, and shared standards.',
    body: 'The most rewarding tables, off-market properties, and closed gallery previews are guarded by people who care deeply about who enters their room. TGLC is valued because our principals are respectful patrons of culture and craft. Venues, private collectors, and masters of their trade welcome our introductions because they know the character of our membership.'
  },
  {
    number: '03',
    title: 'Taste is personal.',
    summary: 'We do not impose standardized luxury templates. A three-star classic dining room in Mayfair and a candlelit natural wine room in East London have equal merit when matched to the right moment.',
    body: 'True luxury lies in understanding what a member actually seeks—whether an undiscovered independent tailoring atelier in Bloomsbury, a private mooring on the Amalfi coast, or an unobtrusive weekend on an English organic farm. We take the time to learn your instincts, dislikes, and unspoken rhythms.'
  },
  {
    number: '04',
    title: 'Detail changes everything.',
    summary: 'A seamless journey is built from fifty invisible decisions made before you ever step out of your residence.',
    body: 'The exact vintage waiting in your chalet cellar, the specific terminal lounge that accommodates your family’s timing, the preferred quiet table in the corner where business can be conducted undisturbed—these are not coincidences. We obsess over the nuance so you experience only serenity.'
  },
  {
    number: '05',
    title: 'The finest service is often unseen.',
    summary: 'When lifestyle management is executed at the highest tier, it feels like natural good fortune rather than complex coordination.',
    body: 'You should never feel the friction of logistical problem-solving. If a private charter needs to reroute due to alpine weather or an off-market villa requires specialized staff on six hours’ notice, the solution is in place before the question is even asked. Our members live lightly because we carry the weight.'
  }
];

export const APPROACH_STEPS = [
  {
    step: '01',
    title: 'Request an Introduction',
    description: 'Membership at TGLC is by referral or private introduction. Prospective members submit an initial inquiry outlining their primary residences, travel patterns, and areas of interest.'
  },
  {
    step: '02',
    title: 'A Private Conversation',
    description: 'Our Director of Private Office hosts a discreet, unhurried meeting at TGLC House on 3rd Floor, 45 Albemarle Street or a private location of your choosing to explore whether our ethos aligns.'
  },
  {
    step: '03',
    title: 'A Personalised Membership Proposal',
    description: 'We structure a tailored charter reflecting your lifestyle—whether based predominantly in London, distributed across multiple continents, or integrated with an established family office.'
  },
  {
    step: '04',
    title: 'An Intelligent Onboarding',
    description: 'Your dedicated Lifestyle Manager establishes your comprehensive Member Dossier, capturing travel profiles, dietary preferences, family nuances, and trusted contacts.'
  },
  {
    step: '05',
    title: 'Life, Arranged',
    description: 'Support activates immediately across our private member line, private member portal, and direct WhatsApp/Signal channels, backed by proactive seasonal previews.'
  }
];

export const LONDON_NEIGHBOURHOODS = [
  {
    name: 'Mayfair & St James’s',
    vibe: 'Heritage, Art & Traditional Power',
    summary: 'The historic epicentre of private members’ clubs, Savile Row tailoring, world-leading art dealers, and venerable dining institutions.',
    highlights: ['Albemarle Street & Pall Mall private salons', 'Old Master and contemporary dealers on Cork Street', 'Discreet private dining rooms in historic townhouses', 'Rare watchmakers of Burlington Arcade'],
    image: '/assets/aistudio/U2xzhqR8NqpZGDRNVta6Gk_fe26a8c6.jpg'
  },
  {
    name: 'Belgravia & Knightsbridge',
    vibe: 'Diplomatic Enclaves & Quiet Architecture',
    summary: 'White-stucco garden squares, discreet mews houses, family residences, and quiet Michelin-starred hideaways away from the thoroughfares.',
    highlights: ['Eaton and Chester Square private residences', 'Artisan boutiques of Elizabeth Street', 'Private gallery viewings along Sloane Street', 'Private equestrian trails and Hyde Park access'],
    image: '/assets/aistudio/rolls-cullian-featured_a41abfa9.webp'
  },
  {
    name: 'The City, Southwark & Bankside',
    vibe: 'Panoramic Skyline & Contemporary Architecture',
    summary: 'Behind the glass-and-steel silhouettes lie private penthouse salons, exclusive dining domes with Tower Bridge vistas, and private river launches.',
    highlights: ['Private rooftop lounges overlooking St Paul’s', 'Tower Bridge private yacht charter moorings', 'Exclusive dining pods on the Thames', 'Discreet banking and family office salons'],
    image: '/assets/aistudio/01-Neo-Bankside-Luxury-Penthouse-London-England-UK-640x360_c8f27abb.jpg'
  },
  {
    name: 'Regent’s Park & Marylebone',
    vibe: 'Classical Terraces & Discreet Wellness',
    summary: 'Grand Nash terraces, private indoor wellness spas, world-class medical specialists on Harley Street, and secluded garden square access.',
    highlights: ['Private spa and wellness suites in Marylebone', 'Cornwall Terrace private estates', 'Discreet private healthcare appointments', 'Tree-lined carriage drives of Regent’s Park'],
    image: '/assets/aistudio/01-Lethbridge-House-20-Cornwall-Terrace-Marylebone-London-UK-640x360_b59e806c.jpg'
  },
  {
    name: 'Soho, Covent Garden & Mayfair Boutiques',
    vibe: 'Couture, Heritage Salons & Haute Joaillerie',
    summary: 'Historic Tudor facades, private VIP dressing rooms at Harrods and Liberty, bespoke perfumeries, and candlelit members’ lounges.',
    highlights: ['Private penthouse salon at Harrods', 'Liberty Tudor heritage appointments', 'Discreet bespoke tailoring commissions', 'Exclusive jazz salons and private cocktail sanctuaries'],
    image: '/assets/aistudio/liberty-department-store-640x360_44860915.jpg'
  },
  {
    name: 'The English Countryside',
    vibe: 'Cotswolds, Sussex & Hampshire Retreats',
    summary: 'Within ninety minutes of Mayfair lie private estate shoots, restored Georgian manors, artisanal cideries, private polo grounds, and quiet riverside sanctuaries.',
    highlights: ['Turnkey weekend provisioning of Cotswolds estates', 'Helicopter transfers from Battersea Heliport', 'Private sporting shoots and equestrian charters', 'Access to historic private gardens and walled kitchens'],
    image: '/assets/aistudio/cotswolds_manor_estate.jpg'
  }
];

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'travel-aviation',
    title: 'Travel & Aviation',
    kicker: 'Category 01',
    tagline: 'Every movement, considered.',
    shortDesc: 'Discreet private aviation, tailored charter fleets, expeditionary itineraries, and private island sanctuaries coordinated with zero friction.',
    overview: 'From a last-minute departure from Farnborough to a month-long exploration of the Japanese archipelago, our travel desk plans each journey with exacting precision. We maintain direct relationships with owner-operators of heavy jets, superyacht brokers, and private estate custodians, ensuring absolute safety, confidentiality, and seamless door-to-door transit.',
    heroImage: '/assets/aistudio/698157105b08bd0b828e954b_file_k95qb05z_c7bc7f74.png',
    galleryImages: [
      '/assets/aistudio/private_jet_interior_suite.jpg',
      '/assets/aistudio/SSB7Se1D48BQSnNL_dd2452d5.png',
      '/assets/aistudio/6a194620490b49214619b628_file_8wpx83o3_8d7f9f53.png'
    ],
    features: [
      'Direct coordination with vetted Part 135 / AOC private aircraft operators',
      'Full tarmac transfers and VIP handling at RAF Northolt, Farnborough, and Biggin Hill',
      'Global superyacht charters with vetted captains and bespoke onboard culinary staff',
      'Discreet sourcing of privately owned estates, chalets, and secluded island compounds',
      'Comprehensive 24/7 flight monitoring and rapid weather contingency routing'
    ],
    memberScenario: {
      client: 'Principal of a multi-family office travelling with three generations',
      brief: 'Urgent arrangement of a heavy jet charter from London to Zurich during peak winter weekend, with simultaneous road transfers to an off-market chalet in Verbier and tailored ski equipment delivered directly to the boot room.',
      solution: 'Aircraft secured on 4 hours notice via our trusted operator network with full apron tarmac access. In Verbier, our local concierge pre-stocked the chalet with preferred organic provisions, secured private ski guides, and had three specialist boot fitters waiting at arrival.',
      details: 'All family members passed through Swiss customs without visiting public terminal areas, ensuring complete privacy.'
    },
    subServices: [
      {
        id: 'private-aviation',
        title: 'Private Aviation',
        shortDesc: 'On-demand charter of light, midsize, and ultra-long-range business jets with discreet FBO handling.',
        leadParagraph: 'We coordinate private air travel across Europe, the Americas, the Middle East, and Asia. Rather than acting as a generic charter broker, we match aircraft airframes to your specific comfort, range, luggage, and crew preferences.',
        detailedPoints: [
          'Direct access to Global 7500, Gulfstream G650ER, and Falcon 8X aircraft',
          'Discreet handling at RAF Northolt, London Farnborough, Biggin Hill, and Luton Signature',
          'Pre-cleared diplomatic and private customs coordination for rapid departures',
          'Cabin provisioning tailored to dietary and cellar preferences'
        ],
        keyScenarios: [
          {
            title: 'Intercontinental Transatlantic Crossing',
            description: 'London to Miami flight scheduled within 12 hours for an executive team.',
            outcome: 'Bombardier Global 6000 confirmed, bespoke menu curated from a Mayfair kitchen, wheels up on schedule.'
          }
        ],
        image: '/assets/aistudio/SSB7Se1D48BQSnNL_dd2452d5.png'
      },
      {
        id: 'bespoke-travel-design',
        title: 'Bespoke Travel Design',
        shortDesc: 'Tailored journeys crafted around private passions, cultural curiosities, and serene sanctuaries.',
        leadParagraph: 'Our travel itineraries are designed as literary movements. We curate journeys that open doors closed to the public—private architectural viewings, multi-generational safaris, and secluded mountain lodges.',
        detailedPoints: [
          'Itineraries built around personal interests: contemporary art, rare vintages, alpine endurance, or historic architecture',
          'Private access to national monuments and private museum collections after closing hours',
          'Expert local cultural fixers, historians, and alpine guides vetted for discretion'
        ],
        keyScenarios: [
          {
            title: 'Japanese Craft & Architecture Immersion',
            description: 'A 14-day family journey through Kyoto, Naoshima, and Kanazawa.',
            outcome: 'Private tea ceremonies in centuries-old family temples, meetings with living national treasures, and traditional ryokan sanctuaries.'
          }
        ],
        image: '/assets/aistudio/florence_palazzo_courtyard.jpg'
      },
      {
        id: 'hotels-villas-residences',
        title: 'Hotels, Villas & Private Residences',
        shortDesc: 'Off-market Mediterranean estates, secluded alpine chalets, and preferred suite allocations.',
        leadParagraph: 'We unlock properties that never appear on booking aggregators or rental sites. Our portfolio includes historic aristocratic estates, contemporary architectural villas, and private island retreats managed with full hotel-grade domestic teams.',
        detailedPoints: [
          'Direct relationships with estate custodians in Saint-Tropez, Cap d’Antibes, Como, Mallorca, and Aspen',
          'Comprehensive pre-arrival property audits covering security, Wi-Fi integrity, and nursery safety',
          'Turnkey staffing: private chefs, discreet butlers, housekeepers, and personal trainers'
        ],
        keyScenarios: [
          {
            title: 'Secluded Cap Ferrat Estate',
            description: 'A six-week summer residency for a London family requiring high physical privacy.',
            outcome: 'Secure clifftop villa secured off-market, private security detail integrated, yacht tender moored at private dock.'
          }
        ],
        image: '/assets/aistudio/imagereader_3bfec03a.webp'
      },
      {
        id: 'yachts-coastal-escapes',
        title: 'Yachts & Coastal Escapes',
        shortDesc: 'Motor and sailing yacht charters with vetted captains, bespoke itineraries, and secluded anchorages.',
        leadParagraph: 'Whether cruising the Cyclades, navigating the Norwegian fjords, or anchoring off St Barths, our yachting specialists align you with the right vessel, crew dynamic, and culinary team.',
        detailedPoints: [
          'Charter matching across 40m to 90m+ motor yachts, sailing yachts, and chase boats',
          'Bespoke maritime itineraries avoiding crowded anchorages and tourist corridors',
          'Provisioning of rare wines, specialist water sports instructors, and onboard wellness therapists'
        ],
        keyScenarios: [
          {
            title: 'Amalfi Coast & Aeolian Island Cruise',
            description: 'Ten days of secluded cruising for an anniversary celebration.',
            outcome: '52m Italian-built motor yacht secured, private anchorages mapped, and private transfers to cliffside restaurants.'
          }
        ],
        image: '/assets/aistudio/MAIN-IMAGE-Shangri-La-The-Shard-London-Illuminate-Yacht-_571087f0.jpg'
      },
      {
        id: 'global-mobility-logistics',
        title: 'Global Mobility & Travel Logistics',
        shortDesc: 'Diplomatic protocol assistance, border transfers, excess luggage management, and crisis contingencies.',
        leadParagraph: 'International movement requires meticulous logistical backing. We manage complex travel permits, expedited visa processing through qualified consulates, and secure luggage forwarding.',
        detailedPoints: [
          'Armoured and secure vehicle transfers in complex metropolitan centres',
          'Luggage transfer and direct wardrobe unpacking ahead of principal arrivals',
          'Continuous real-time travel risk monitoring and instant itinerary pivoting'
        ],
        keyScenarios: [
          {
            title: 'Multi-City Executive Tour',
            description: 'Twelve-day, five-city European and Middle Eastern itinerary with multiple principal arrivals.',
            outcome: 'Zero delays, flawless luggage transfer between residences, synchronized security coordination.'
          }
        ],
        image: '/assets/aistudio/pt3_6ef34e91.jpg'
      }
    ],
    faqs: [
      {
        question: 'How quickly can TGLC arrange a private jet departure?',
        answer: 'For established members, we regularly achieve wheels-up within three to four hours from major European hubs, subject to slot availability, permit requirements, and aircraft positioning.'
      },
      {
        question: 'Do you own the aircraft or yachts?',
        answer: 'TGLC does not own aircraft or vessels. We act as an independent private advisor and coordinator, maintaining direct relationships with thoroughly audited Part 135 / AOC licensed operators and superyacht management houses.'
      },
      {
        question: 'Can you accommodate our household pets on private flights?',
        answer: 'Yes. We coordinate pet travel through authorized UK DEFRA and international pet passport facilities, ensuring your companions travel inside the cabin in complete comfort.'
      }
    ]
  },
  {
    id: 'dining-nightlife',
    title: 'Dining, Nightlife & Social Access',
    kicker: 'Category 02',
    tagline: 'The table everyone asks for.',
    shortDesc: 'Hard-to-reach dining tables, landmark private rooms, members’ club introductions, and discreet after-hours culture.',
    overview: 'London’s culinary and social landscape is among the most sophisticated in the world, yet the finest tables remain fiercely guarded by relationships rather than reservation apps. TGLC is known and respected by restaurateurs, sommeliers, and private club secretaries across Mayfair, St James’s, Soho, and beyond. We secure the corner table you desire, introduce you to discreet private salons, and orchestrate memorable private celebrations.',
    heroImage: '/assets/aistudio/mayfair_fine_dining.jpg',
    galleryImages: [
      '/assets/aistudio/Copper-Club_b58a00e9.jpg',
      '/assets/aistudio/MAIN-IMAGE-Shangri-La-The-Shard-London-Illuminate-Yacht-_571087f0.jpg',
      '/assets/aistudio/01-Neo-Bankside-Luxury-Penthouse-London-England-UK-640x360_c8f27abb.jpg'
    ],
    features: [
      'Preferred table allocations at fully booked Michelin-starred and iconic London dining rooms',
      'Discreet private dining room reservations for sensitive discussions and celebrations',
      'Guidance and introductions to London’s distinguished heritage and modern private members’ clubs',
      'Bespoke culinary encounters with celebrated chefs and master sommeliers',
      'Curated late-night access to intimate, private-listening bars and discreet nightlife salons'
    ],
    memberScenario: {
      client: 'Technology founder hosting eight overseas investors in Mayfair',
      brief: 'A private dining room requiring total acoustic privacy, exceptional cellar pairings, and a customized menu that accommodated severe allergies with zero interruption to the conversation.',
      solution: 'Secured the private cellar room at a leading St James’s dining house. The head chef personally prepared a bespoke 6-course menu, and the head sommelier sourced rare 1996 Bordeaux directly from the estate reserves.',
      details: 'All billing was settled discreetly through the member’s central TGLC account without a physical bill presented at the table.'
    },
    subServices: [
      {
        id: 'london-dining',
        title: 'London Dining',
        shortDesc: 'Securing preferred tables at Mayfair landmarks, intimate bistros, and the capital’s most compelling new openings.',
        leadParagraph: 'We do not simply book tables; we place our members in the right seats with the right welcome. From historic St James’s dining rooms to contemporary counter dining in Soho, our presence ensures you are treated as a cherished regular.',
        detailedPoints: [
          'Immediate access to prime dining tables during peak hours',
          'Direct relationship with general managers and maitre d’s across prime postcodes',
          'Pre-arranged dietary preferences and favourite wine vintages chilled on arrival'
        ],
        keyScenarios: [
          {
            title: 'Last-Minute Friday Evening Table',
            description: 'Request at 17:30 for a prime table of four in Mayfair for 20:30.',
            outcome: 'Confirmed at a celebrated Mount Street dining room with greeting by the General Manager.'
          }
        ],
        image: '/assets/aistudio/mayfair_fine_dining.jpg'
      },
      {
        id: 'private-dining-celebrations',
        title: 'Private Dining & Celebrations',
        shortDesc: 'Secluded rooms, historic cellar salons, and chef-table takeovers for milestone gatherings.',
        leadParagraph: 'When a gathering demands discretion and intimacy, we coordinate London’s finest private rooms—from Georgian townhouse libraries to modern panoramic penthouses overlooking the Thames.',
        detailedPoints: [
          'Private dining spaces ranging from intimate dinners for 6 to banquet receptions for 60',
          'Custom printing of menus on handmade cotton paper with bespoke floral curation',
          'Private room acoustic checks ensuring confidential discussions remain strictly private'
        ],
        keyScenarios: [
          {
            title: 'Family Anniversary Feast',
            description: 'A 20-person multi-generational dinner in a private St James’s cellar.',
            outcome: 'Bespoke menu by a Michelin-starred chef, string quartet in attendance, zero public exposure.'
          }
        ],
        image: '/assets/aistudio/tglc_st_james_salon.jpg'
      },
      {
        id: 'members-clubs-introductions',
        title: 'Members’ Clubs & Social Introductions',
        shortDesc: 'Guidance and advisory support for traditional St James’s institutions and contemporary creative houses.',
        leadParagraph: 'London’s clubland has a rich and varied culture. We assist members in understanding the unique character, admissions ethos, and reciprocal arrangements of the capital’s premier private establishments.',
        detailedPoints: [
          'Advisory on club cultures: arts and literature, politics, sporting, and contemporary business',
          'Facilitating reciprocal club privileges when travelling to New York, Paris, Milan, and Tokyo',
          'Discreet meeting room bookings and guest hosting within premier private clubs'
        ],
        keyScenarios: [
          {
            title: 'Relocating Executive Club Advisory',
            description: 'A newly relocated CEO seeking a club suitable for private meetings and quiet reading.',
            outcome: 'Comprehensive advisory on three clubs matching the candidate’s interests and introduction to existing member proposers.'
          }
        ],
        image: '/assets/aistudio/Copper-Club_b58a00e9.jpg'
      },
      {
        id: 'nightlife-after-dark',
        title: 'Nightlife & London After Dark',
        shortDesc: 'Intimate listening rooms, private cocktail salons, and discreet late-night culture.',
        leadParagraph: 'We steer members away from commercial, neon-lit nightlife toward the atmospheric, sophisticated corners of London: underground jazz vaults, discreet speakeasies, and members-only music salons.',
        detailedPoints: [
          'Reserved tables and private booths in London’s most sought-after late-night lounges',
          'Priority entry with seamless host greetings and zero queuing',
          'Private artist booths and after-hours culinary service'
        ],
        keyScenarios: [
          {
            title: 'Private Jazz & Cocktail Evening',
            description: 'An intimate after-hours gathering for visiting artists in Soho.',
            outcome: 'Reserved corner salon at a historic subterranean venue with bespoke cocktail pairings.'
          }
        ],
        image: '/assets/aistudio/hidden_secret_gastronomy_1794295323821.jpg'
      },
      {
        id: 'global-dining-culinary',
        title: 'Global Dining & Culinary Travel',
        shortDesc: 'Worldwide reservations in Tokyo, Paris, New York, San Sebastian, and Milan.',
        leadParagraph: 'When travelling internationally, your culinary life remains effortless. Our global network coordinates reservations at three-star sanctuaries, counter omakases, and hidden regional trattorias.',
        detailedPoints: [
          'Hard-to-reach counter seating at Tokyo sushi masters and Paris grand bistros',
          'Winemaker dinners and private vineyard visits in Champagne, Tuscany, and Bordeaux',
          'Culinary itinerary design for dedicated gastronomic journeys'
        ],
        keyScenarios: [
          {
            title: 'Tokyo Omakase Expedition',
            description: 'Securing counter seats at two legendary sushi houses in Ginza with no public booking channels.',
            outcome: 'Arranged via our Tokyo culinary attaché with personal introduction to the master chefs.'
          }
        ],
        image: '/assets/aistudio/MAIN-IMAGE-Shangri-La-The-Shard-London-Illuminate-Yacht-_571087f0.jpg'
      }
    ],
    faqs: [
      {
        question: 'Can TGLC guarantee a table at a fully booked restaurant?',
        answer: 'While no ethical lifestyle house can promise 100% legal guarantees at every venue, our longstanding relationships with General Managers and Maitre d’s mean our confirmation rate for member requests is unmatched in prime London.'
      },
      {
        question: 'How do you handle dietary requirements and privacy?',
        answer: 'All dietary notes, preferred seating arrangements, and privacy needs are communicated to venue management in advance. The team knows your preferences before you are seated.'
      }
    ]
  },
  {
    id: 'experiences-culture',
    title: 'Experiences, Culture & Entertainment',
    kicker: 'Category 03',
    tagline: 'Beyond the expected.',
    shortDesc: 'Private museum views, contemporary gallery acquisitions, couture salon appointments, and premier sporting hospitality.',
    overview: 'London’s cultural fabric is endlessly deep. We provide members with intimate, knowledgeable pathways through the arts, music, fashion, and sport. Rather than generic ticket brokering, we curate encounters: visiting an artist’s studio in Shoreditch before their solo exhibition, walking through the British Museum after the doors have locked to the public, or securing the Royal Box at landmark performances.',
    heroImage: '/assets/aistudio/royal_opera_gallery.jpg',
    galleryImages: [
      '/assets/aistudio/savile_row_bespoke.jpg',
      '/assets/aistudio/liberty-department-store-640x360_44860915.jpg',
      '/assets/aistudio/ufc_arena_ringside.jpg'
    ],
    features: [
      'Private, closed-door viewings of blockbuster exhibitions with senior curators',
      'VIP passes and private preview access to Frieze London, Basel, and Venice Biennale',
      'Debenture seating and private boxes at Wimbledon, Ascot, Twickenham, and Silverstone',
      'Private fashion atelier appointments, couture previews, and personal stylist sourcing',
      'Bespoke family cultural itineraries designed for young minds and future collectors'
    ],
    memberScenario: {
      client: 'Art collector expanding into contemporary British sculpture',
      brief: 'Private introductions to three leading independent sculptors working in East London, with studio viewings, curated commentary by an independent art historian, and transport arranged in a quiet hybrid vehicle.',
      solution: 'Dr. Helena Zhang-Somerset orchestrated a tailored Saturday itinerary across Hackney and Deptford, culminating in an unhurried tea with an artist whose major retrospective opens next year at Tate Britain.',
      details: 'Member acquired two works directly from the artists’ studios before public exhibition.'
    },
    subServices: [
      {
        id: 'art-design-collecting',
        title: 'Art, Design & Collecting',
        shortDesc: 'Private gallery viewings, artist studio visits, auction advisory support, and art logistics.',
        leadParagraph: 'We demystify the art world by connecting you directly to scholarship, provenance, and the artists themselves. Our network spans heritage auction houses, blue-chip galleries, and pioneering independent project spaces.',
        detailedPoints: [
          'Private after-hours tours of public galleries and museums in London and Paris',
          'Artist studio introductions and early access to forthcoming bodies of work',
          'Fine art transport, museum-grade framing, and collection management coordination'
        ],
        keyScenarios: [
          {
            title: 'After-Hours National Gallery Viewing',
            description: 'A private one-hour exploration of the Renaissance wings for a family gathering.',
            outcome: 'Curator-led tour after public closure, followed by private champagne reception.'
          }
        ],
        image: '/assets/aistudio/royal_opera_gallery.jpg'
      },
      {
        id: 'music-theatre-performance',
        title: 'Music, Theatre & Performance',
        shortDesc: 'Royal Opera House private boxes, West End producer previews, and intimate acoustic salons.',
        leadParagraph: 'Experience world-class performance without compromise. We secure the best acoustic positions, private entertaining rooms, and backstage introductions for theatre, opera, symphony, and contemporary concerts.',
        detailedPoints: [
          'Prime seating and private dining rooms at the Royal Opera House and English National Opera',
          'Opening night West End access and private discussions with directors and playwrights',
          'Access to sold-out concerts at the Royal Albert Hall, Barbican, and intimate jazz venues'
        ],
        keyScenarios: [
          {
            title: 'Opening Night Royal Opera Box',
            description: 'Box seating for six with interval champagne and dinner arrangements.',
            outcome: 'Central Grand Tier box secured, interval dinner pre-served in a private salon.'
          }
        ],
        image: '/assets/aistudio/pt3_6ef34e91.jpg'
      },
      {
        id: 'fashion-private-shopping',
        title: 'Fashion & Private Shopping',
        shortDesc: 'Haute couture salon appointments, Savile Row bespoke tailoring, and private boutique suites.',
        leadParagraph: 'We open the historic couture houses of Mayfair, Paris, and Milan for private appointments outside regular hours. From Savile Row bespoke suits to rare vintage collections, we arrange personalized curation.',
        detailedPoints: [
          'Closed-door appointments at iconic Bond Street and Mount Street fashion maisons',
          'Introductions to the master cutters of Savile Row and bespoke shoemakers of St James’s',
          'In-residence wardrobe curation and seasonal styling consultations'
        ],
        keyScenarios: [
          {
            title: 'Private Wardrobe Overhaul',
            description: 'Complete seasonal wardrobe replenishment for a busy principal in their private residence.',
            outcome: 'Three luxury fashion houses brought curated selections directly to the residence for private fitting.'
          }
        ],
        image: '/assets/aistudio/savile_row_bespoke.jpg'
      },
      {
        id: 'sport-motorsport',
        title: 'Sport & Motorsport',
        shortDesc: 'Debenture tennis access, premier paddock clubs, private polo grounds, and historic golf courses.',
        leadParagraph: 'Witness the pinnacle of sporting drama from privileged vantage points. We coordinate invitations and debentures to historic English and international sporting occasions.',
        detailedPoints: [
          'Centre Court debenture seating at Wimbledon with access to debenture lounges',
          'Formula 1 Paddock Club access and private pit-lane walks at Silverstone and Monaco',
          'Tee times on historic championship courses and private shooting estates'
        ],
        keyScenarios: [
          {
            title: 'Wimbledon Men’s Finals Day',
            description: 'Centre Court debenture seats with private car transfer and dining.',
            outcome: 'Prime row seats secured, dedicated chauffeur holding at nearby private facility.'
          }
        ],
        image: '/assets/aistudio/ufc_arena_ringside.jpg'
      },
      {
        id: 'private-celebrations-milestones',
        title: 'Private Celebrations & Milestone Moments',
        shortDesc: 'Historic castle buyouts, landmark birthday celebrations, and discreet anniversary gatherings.',
        leadParagraph: 'When life calls for celebration, we design environments that leave indelible memories. We coordinate private historic castles, Michelin-grade catering, and world-class musical talent with zero publicity.',
        detailedPoints: [
          'Exclusive use of historic English country houses and European châteaux',
          'Production and set design reflecting understated luxury and elegance',
          'Direct booking of musical artists, classical ensembles, and culinary masters'
        ],
        keyScenarios: [
          {
            title: '50th Birthday Country Weekend',
            description: 'A 3-day estate takeover in Oxfordshire for forty international guests.',
            outcome: 'Seamless logistics, private fireworks display, Michelin-starred chefs, flawless discreet execution.'
          }
        ],
        image: '/assets/aistudio/florence_palazzo_courtyard.jpg'
      },
      {
        id: 'family-next-generation',
        title: 'Family & Next-Generation Experiences',
        shortDesc: 'Educational masterclasses, natural history adventures, and mentoring for young principals.',
        leadParagraph: 'We believe family experiences should spark lifelong curiosity. We arrange private educational explorations—behind-the-scenes science laboratories, astronaut encounters, and wildlife conservation expeditions.',
        detailedPoints: [
          'Behind-the-scenes access to the Natural History Museum and Science Museum vaults',
          'Private masterclasses with master artisans, watchmakers, and marine biologists',
          'Next-generation philanthropic field visits and family foundation orientations'
        ],
        keyScenarios: [
          {
            title: 'Palaeontology Archive Access',
            description: 'An afternoon in the research vaults of the Natural History Museum for two curious siblings.',
            outcome: 'Direct engagement with senior research fellows examining actual dinosaur specimens.'
          }
        ],
        image: '/assets/aistudio/cotswolds_manor_estate.jpg'
      }
    ],
    faqs: [
      {
        question: 'How do you access exhibitions after public hours?',
        answer: 'We partner directly with institutional leadership, museum trustees, and exhibition patrons. Private viewings are conducted under respectful institutional guidelines with senior curatorial staff.'
      },
      {
        question: 'Are sporting hospitality tickets officially sourced?',
        answer: 'Yes. We work strictly with verified debenture holders, official sporting bodies, and accredited hospitality partners to ensure absolute legitimacy and peace of mind.'
      }
    ]
  },
  {
    id: 'residences-relocation',
    title: 'Residences & Relocation',
    kicker: 'Category 04',
    tagline: 'The quiet luxury of a beautifully managed home.',
    shortDesc: 'Off-market London property introductions, turnkey family relocation, household management, and countryside retreats.',
    overview: 'A primary or secondary residence should be an effortless sanctuary. TGLC supports families and principals in acquiring, setting up, and seamlessly operating prestigious London townhouses, penthouse apartments, and English country estates. We coordinate with elite property finders, interior design ateliers, trusted domestic teams, and independent legal advisors.',
    heroImage: '/assets/aistudio/hero_luxury_london_residence_1794298893032.jpg',
    galleryImages: [
      '/assets/aistudio/01-Lethbridge-House-20-Cornwall-Terrace-Marylebone-London-UK-640x360_b59e806c.jpg',
      '/assets/aistudio/01-Neo-Bankside-Luxury-Penthouse-London-England-UK-640x360_c8f27abb.jpg',
      '/assets/aistudio/property-category-highlight-82_3dc00e71.jpg'
    ],
    regulatoryNote: 'Notice: Legal, tax, immigration, conveyancing, mortgage, and regulated property agency advice is provided by independent, duly qualified, and regulated professionals where required by law. TGLC provides lifestyle coordination and introductory management.',
    features: [
      'Discreet introductions to off-market residential property across Mayfair, Belgravia, and Chelsea',
      'Turnkey international relocation support: schooling orientations, neighbourhood guides, and domestic setup',
      'Vetted household management: housekeeping, estate managers, private chefs, and security personnel',
      'Management of renovation and interior design projects with leading architectural ateliers',
      'Complete pre-arrival provisioning and ongoing estate maintenance for absentee owners'
    ],
    memberScenario: {
      client: 'International family establishing primary residence in London',
      brief: 'Coordination of a 6-month temporary residence in Knightsbridge while their permanent Belgravia townhouse completed refurbishment, alongside school liaison and recruiting a bilingual private chef.',
      solution: 'Camilla Vance-Moreau secured an exceptional off-market garden residence on Cadogan Square, coordinated with an independent education consultant to secure admissions, and appointed a vetted Le Cordon Bleu-trained chef.',
      details: 'The family stepped into a fully furnished, operational home with internet, utility accounts, and organic groceries already in place.'
    },
    subServices: [
      {
        id: 'london-residences',
        title: 'London Residences',
        shortDesc: 'Comprehensive care, key holding, and pre-arrival preparation for prime London townhouses.',
        leadParagraph: 'Whether your London residence is occupied weekly or a few times each year, we ensure it is maintained in immaculate, ready-to-live order at all times.',
        detailedPoints: [
          'Weekly physical inspections, climate control checks, and security system audits',
          'Pre-arrival preparation: fresh linens, bespoke flower arrangements, and preferred pantry stocking',
          'Post-departure cleaning, laundry management, and secure key holding'
        ],
        keyScenarios: [
          {
            title: '48-Hour Notice Residence Activation',
            description: 'Principal arriving unexpectedly after six months away.',
            outcome: 'Heating balanced, car battery checked, bespoke pantry stocked, fresh lilies placed in drawing room.'
          }
        ],
        image: '/assets/aistudio/hero_luxury_london_residence_1794298893032.jpg'
      },
      {
        id: 'off-market-property',
        title: 'Off-Market Property Introductions',
        shortDesc: 'Connecting buyers and tenants with prime properties that never appear publicly on the open market.',
        leadParagraph: 'London’s most distinguished houses rarely advertise on estate portals. We introduce members to private owners, discreet buying agents, and estate custodians managing confidential sales.',
        detailedPoints: [
          'Access to confidential off-market sales across Belgravia, Mayfair, Holland Park, and St John’s Wood',
          'Discreet viewings arranged outside public hours with verified ownership records',
          'Independent buying agency introductions and structural surveyor coordination'
        ],
        keyScenarios: [
          {
            title: 'Belgravia Mews House Sourcing',
            description: 'Acquisition of a quiet mews property with private garage and roof terrace.',
            outcome: 'Private introduction made to family selling directly; purchase completed off-market.'
          }
        ],
        image: '/assets/aistudio/01-Lethbridge-House-20-Cornwall-Terrace-Marylebone-London-UK-640x360_b59e806c.jpg'
      },
      {
        id: 'relocation-settling-in',
        title: 'Relocation & Settling In',
        shortDesc: 'Smooth transition for international families moving to the capital.',
        leadParagraph: 'Relocating to London involves navigating schools, healthcare registrations, local council systems, and domestic infrastructure. We act as your knowledgeable guide on the ground.',
        detailedPoints: [
          'Independent school advisory introductions for leading British public and prep schools',
          'Coordination with certified international removals specialists and customs clearance',
          'Local area orientation: doctors, dentists, equestrian centres, and neighbourhood nuances'
        ],
        keyScenarios: [
          {
            title: 'Geneva to London Family Relocation',
            description: 'Relocating a family with three school-age children within eight weeks.',
            outcome: 'Schools confirmed, residence furnished, transport sorted, domestic staff in place before term started.'
          }
        ],
        image: '/assets/aistudio/U2xzhqR8NqpZGDRNVta6Gk_fe26a8c6.jpg'
      },
      {
        id: 'household-management',
        title: 'Household Management',
        shortDesc: 'Sourcing trusted domestic personnel and overseeing ongoing operations.',
        leadParagraph: 'A harmonious residence relies on exceptional domestic staff. We coordinate introductions to vetted butlers, estate managers, private chefs, housekeepers, and chauffeurs.',
        detailedPoints: [
          'Rigorous screening and background checks via premier specialist agencies',
          'Standard operating procedures drafted for laundry care, silver polishing, and art handling',
          'Interim and holiday relief cover for principal staff'
        ],
        keyScenarios: [
          {
            title: 'Head Housekeeper & Chef Appointment',
            description: 'Staffing an 8,000 sq ft Mayfair townhouse ahead of international family arrival.',
            outcome: 'Shortlisted candidates interviewed, reference-checked, and successfully installed with smooth handover.'
          }
        ],
        image: '/assets/aistudio/tglc_st_james_salon.jpg'
      },
      {
        id: 'interior-home-services',
        title: 'Interior, Design & Home Services',
        shortDesc: 'Atelier design collaborations, specialist restoration, and smart-home management.',
        leadParagraph: 'We collaborate with London’s most celebrated interior designers, lighting specialists, and antique restorers to enhance and maintain the architectural character of your residence.',
        detailedPoints: [
          'Introductions to architectural and interior design ateliers with established pedigree',
          'Specialist maintenance: stone restoration, French polishing, and fine art hanging',
          'Audio-visual, climate, and home-automation monitoring with vetted contractors'
        ],
        keyScenarios: [
          {
            title: 'Private Library Restoration',
            description: 'Restoration of 19th-century mahogany joinery and installation of bespoke reading lighting.',
            outcome: 'Master craftsmen appointed, conservation work completed with archival sensitivity.'
          }
        ],
        image: '/assets/aistudio/property-category-highlight-82_3dc00e71.jpg'
      },
      {
        id: 'country-estates-weekend-homes',
        title: 'Country Estates & Weekend Homes',
        shortDesc: 'Cotswolds, Hampshire, and Oxfordshire estate management and weekend preparation.',
        leadParagraph: 'Escape the capital without the operational headache. We coordinate the ongoing maintenance, seasonal staffing, and weekend arrival provisioning for rural retreats.',
        detailedPoints: [
          'Pre-weekend warming, pantry stocking, and fireplace preparation',
          'Coordination of estate maintenance: gardens, equine stables, tennis courts, and swimming pools',
          'Local shoot days, game management, and farm-to-table culinary coordination'
        ],
        keyScenarios: [
          {
            title: 'Cotswolds Autumn Weekend Arrival',
            description: 'Estate preparation for a shooting party of twelve guests in Gloucestershire.',
            outcome: 'Lodge warmed, gamekeepers briefed, four-wheel drive vehicles prepped, bespoke dinners executed.'
          }
        ],
        image: '/assets/aistudio/cotswolds_manor_estate.jpg'
      }
    ],
    faqs: [
      {
        question: 'Does TGLC provide formal property brokerage or mortgage advice?',
        answer: 'No. TGLC is not a regulated real estate agency or financial mortgage advisor. We introduce our members to independent, verified buying agents, surveyors, and solicitors who carry full statutory credentials.'
      },
      {
        question: 'How do you vet household staff and contractors?',
        answer: 'Every introduced staff member or contractor undergoes comprehensive DBS verification, reference checks, and non-disclosure execution before entering a member’s residence.'
      }
    ]
  },
  {
    id: 'transport-security',
    title: 'Transport, Security & Privacy',
    kicker: 'Category 05',
    tagline: 'Quiet certainty in motion.',
    shortDesc: 'Chauffeured fleets, private vehicle sourcing, discreet close protection coordination, and privacy-first lifestyle architecture.',
    overview: 'Mobility should be calm, punctual, and invisible. We coordinate premium chauffeured transfers, bespoke luxury vehicle procurement, and discreet personal protection services. Our focus is never on ostentation or militaristic display; it is on quiet professionalism, route intelligence, defensive driving, and respectful discretion.',
    heroImage: '/assets/aistudio/rolls-royce-cullinan-chauffeur-service-events_d3e6e421.webp',
    galleryImages: [
      '/assets/aistudio/close_protection_security.jpg',
      '/assets/aistudio/luxury_sprinter_jetvan.jpg',
      '/assets/aistudio/rolls-cullian-featured_a41abfa9.webp',
      '/assets/aistudio/best-luxury-cars-2024_ab87bb7b.webp'
    ],
    features: [
      'Dedicated, vetted London chauffeurs with advanced defensive driving credentials',
      'Pristine fleet: Rolls-Royce Phantom, Cullinan, Mercedes-Maybach, and VIP luxury Sprinter JetVans',
      'Discreet close protection coordination via SIA-licensed, British military, Royal Protection, and police specialists',
      'Secure airport tarmac and private terminal transfers at RAF Northolt, Farnborough, and Biggin Hill',
      'Digital privacy architecture and digital hygiene advisory for families and family offices'
    ],
    memberScenario: {
      client: 'Visiting international family during a high-profile diplomatic summit in London',
      brief: 'Coordination of three matched unmarked Range Rover vehicles with security-trained chauffeurs for 10 days, managing complex central London road closures and providing gentle, child-friendly accompaniment.',
      solution: 'Julian Sterling coordinated our senior team of former diplomatic protection drivers. Alternative routes mapped in real-time, allowing the family to attend theatre, meetings, and dinner without delay or crowd intrusion.',
      details: 'All communications conducted over end-to-end encrypted voice and data lines.'
    },
    subServices: [
      {
        id: 'chauffeur-luxury-vehicles',
        title: 'Chauffeur & Luxury Vehicle Arrangements',
        shortDesc: 'Immaculately maintained vehicles with seasoned, discreet drivers who know London inside out.',
        leadParagraph: 'Our chauffeurs are not merely drivers; they are custodians of your time. They understand city traffic dynamics, back-street navigations, and when to offer conversation or respect quiet focus.',
        detailedPoints: [
          'Fleet options: Range Rover Autobiography, Mercedes-Benz S-Class, Mercedes-Maybach, Bentley Flying Spur, and VIP Mercedes Sprinter JetVans',
          'Child seats installed to precise manufacturer safety standards with advance notice',
          'Complimentary high-speed onboard Wi-Fi, mineral waters, and current broadsheet newspapers'
        ],
        keyScenarios: [
          {
            title: 'City-to-Cotswolds Round Trip',
            description: 'Same-day executive transfer to rural estate and return for dinner.',
            outcome: 'Punctual door-to-door transfer, vehicle waiting on standby throughout.'
          }
        ],
        image: '/assets/aistudio/luxury_sprinter_jetvan.jpg'
      },
      {
        id: 'private-car-sourcing',
        title: 'Private Car Sourcing',
        shortDesc: 'Short-term and seasonal procurement of luxury SUVs, hypercars, and classic British grand tourers.',
        leadParagraph: 'Whether you require a Rolls-Royce Phantom for an evening in St James’s, a Bentley Flying Spur, or an exclusive Bugatti or Koenigsegg for continental touring, we source and deliver immaculate vehicles directly to your residence.',
        detailedPoints: [
          'Pre-delivery vehicle check: tyre pressures, detailing, and registration paperwork',
          'Comprehensive multi-driver insurance coordination for international driving licences',
          'Rare hypercar and classic sourcing for Goodwood, Monaco Historic, and private rallies'
        ],
        keyScenarios: [
          {
            title: 'Bugatti Tour for Continental Rally',
            description: 'Procurement of an immaculate modern Bugatti delivered to a Geneva retreat.',
            outcome: 'Vehicle delivered with bespoke mountain route telemetry and white-glove support throughout.'
          }
        ],
        image: '/assets/aistudio/01_BUGATTI-SOC2022_6775a49f.jpg'
      },
      {
        id: 'executive-protection',
        title: 'Executive Protection & Personal Security',
        shortDesc: 'Discreet, SIA-licensed close protection specialists and security details who blend seamlessly into social and family settings.',
        leadParagraph: 'We partner with accredited close protection specialists who prioritise understated presence over conspicuous displays. Our security personnel are drawn from British Armed Forces, Royal Protection, and Diplomatic Protection backgrounds, adept at polite deterrence, advance venue reconnaissance, and quiet family safeguarding.',
        detailedPoints: [
          'Close protection officers with British Armed Forces, Royal Protection, or Metropolitan Police backgrounds',
          'Advance venue reconnaissance, counter-surveillance, and exit routing for high-profile public appearances',
          'Family protection: discreet accompaniment during shopping, school journeys, galas, and international travel'
        ],
        keyScenarios: [
          {
            title: 'Discreet Protection for Visiting Family',
            description: 'Protective security during a week of art fairs, Bond Street shopping, and private auctions.',
            outcome: 'Unobtrusive, professional officer who integrated naturally with full diplomatic poise.'
          }
        ],
        image: '/assets/aistudio/close_protection_security.jpg'
      },
      {
        id: 'secure-travel-event-logistics',
        title: 'Secure Travel & Event Logistics',
        shortDesc: 'Convoy management, road closure navigation, and private event perimeter planning.',
        leadParagraph: 'When hosting a private gathering or moving multiple parties across the capital, we plan the movements with clockwork accuracy.',
        detailedPoints: [
          'Multi-vehicle convoy coordination with synchronized arrival windows',
          'Private event guest access control and parking marshalling in residential squares',
          'Direct liaison with local council highways departments and metropolitan transport authorities'
        ],
        keyScenarios: [
          {
            title: 'Mayfair Townhouse Reception Transport',
            description: 'Managing transport logistics for 80 high-profile guests in a quiet St James’s street.',
            outcome: 'Valet parking coordinated, zero street congestion, smooth departures.'
          }
        ],
        image: '/assets/aistudio/best-luxury-cars-2024_ab87bb7b.webp'
      },
      {
        id: 'privacy-first-lifestyle-support',
        title: 'Privacy-First Lifestyle Support',
        shortDesc: 'Digital privacy, mail forwarding, pseudonym reservations, and discreet deliveries.',
        leadParagraph: 'Preserving personal privacy requires constant attention to detail. We assist members in maintaining low public profiles, shielding residential addresses, and booking services under discreet protocols.',
        detailedPoints: [
          'Pseudonym reservations for dining, hotel stays, and travel itineraries',
          'Secure central mail forwarding and scanning from our Mayfair Albemarle Street address',
          'Advisory on residential cyber hygiene, smart-home camera security, and mobile encryption'
        ],
        keyScenarios: [
          {
            title: 'Discreet Holiday Booking Protocol',
            description: 'Family holiday arranged where principal’s identity was shielded from public guest registers.',
            outcome: 'Private estate booked through TGLC corporate entity, ensuring complete privacy.'
          }
        ],
        image: '/assets/aistudio/hidden_subterranean_vault_1794295323175.jpg'
      }
    ],
    faqs: [
      {
        question: 'Are your close protection officers licensed in the United Kingdom?',
        answer: 'Yes. All security personnel are fully licensed by the Security Industry Authority (SIA) in the UK and hold comprehensive professional liability insurances.'
      },
      {
        question: 'Can we book a dedicated chauffeur on an ongoing monthly basis?',
        answer: 'Yes. We provide both ad-hoc journey bookings and dedicated retained chauffeurs assigned exclusively to your family or private office.'
      }
    ]
  },
  {
    id: 'personal-private-office',
    title: 'Personal & Private Office',
    kicker: 'Category 06',
    tagline: 'A life arranged with precision.',
    shortDesc: 'Everyday lifestyle administration, private staff recruitment, education guidance, health coordination, and family milestone management.',
    overview: 'High-performing principals and family offices face an endless stream of complex administrative, domestic, and personal demands. TGLC operates as a trusted extension of your private office. We handle the time-consuming nuances—from sourcing specialist academic tutors to coordinating private medical consultations and managing intricate family calendars.',
    heroImage: '/assets/aistudio/01-Lethbridge-House-20-Cornwall-Terrace-Marylebone-London-UK-640x360_b59e806c.jpg',
    galleryImages: [
      '/assets/aistudio/property-category-highlight-82_3dc00e71.jpg',
      '/assets/aistudio/01-Neo-Bankside-Luxury-Penthouse-London-England-UK-640x360_c8f27abb.jpg',
      '/assets/aistudio/hero_luxury_london_residence_1794298893032.jpg'
    ],
    regulatoryNote: 'Notice: Medical, healthcare, psychiatric, and therapeutic advice is delivered exclusively by licensed, independent medical practitioners and hospitals. TGLC provides logistical support and private appointments facilitation only.',
    features: [
      'Dedicated Lifestyle Manager acting as single point of contact for all personal requests',
      'Liaison with family office CFOs, private bankers, and executive assistants',
      'Independent education and tutoring introductions for Oxford/Cambridge and Ivy League pathways',
      'Discreet private medical and dental specialist appointments across Harley Street and private clinics',
      'Personal gifting, bespoke commissions, and milestone anniversary calendars managed proactively'
    ],
    memberScenario: {
      client: 'Executive Chairman managing dual corporate commitments in London and Singapore',
      brief: 'Coordination of personal life while leading a six-week takeover bid: management of domestic staff, urgent dry cleaning and tailoring delivery, appointment of an English literature tutor for daughter, and daily executive wellness support.',
      solution: 'Camilla Vance-Moreau integrated directly with the Chairman’s executive assistant. Daily status memos provided at 07:00, all personal logistics resolved quietly in the background.',
      details: 'Principal reported feeling completely supported, saving an estimated twenty hours of personal administrative distraction weekly.'
    },
    subServices: [
      {
        id: 'everyday-lifestyle-management',
        title: 'Everyday Lifestyle Management',
        shortDesc: 'Seamless handling of day-to-day administrative, domestic, and personal tasks.',
        leadParagraph: 'No request is too minor when it preserves your focus. We manage personal errands, courier dispatches, vehicle servicing appointments, and complex personal diaries.',
        detailedPoints: [
          'Comprehensive diary synchronization and family schedule management',
          'Specialist courier dispatch, urgent document hand-deliveries, and international customs paperwork',
          'Personal subscription management, club subscriptions, and private account settlements'
        ],
        keyScenarios: [
          {
            title: 'Emergency Passport Renewal Logistics',
            description: 'Expedited diplomatic visa processing for family member ahead of travel.',
            outcome: 'Hand-delivered to consulate, processed same-day, returned to residence in time for departure.'
          }
        ],
        image: '/assets/aistudio/tglc_st_james_salon.jpg'
      },
      {
        id: 'household-staffing-recruitment',
        title: 'Household Staffing & Recruitment Introductions',
        shortDesc: 'Connecting you with trusted agencies and candidates for butlers, nannies, and estate managers.',
        leadParagraph: 'A private home functions smoothly only with the right team. We advise on optimal staffing structures, draft job descriptions, and coordinate interviews with verified agencies.',
        detailedPoints: [
          'Roles: Travelling Butlers, Private Chefs, Nannies, Maternity Nurses, Estate Managers',
          'Full candidate vetting: reference verifications, criminal record checks, and trial period management',
          'Employment contract templates provided through qualified employment law specialists'
        ],
        keyScenarios: [
          {
            title: 'Recruitment of Bilingual Maternity Nurse',
            description: 'Finding an experienced French-English maternity nurse on short notice.',
            outcome: 'Three shortlisted candidates interviewed within 48 hours; candidate appointed with glowing references.'
          }
        ],
        image: '/assets/aistudio/01-Lethbridge-House-20-Cornwall-Terrace-Marylebone-London-UK-640x360_b59e806c.jpg'
      },
      {
        id: 'education-family-support',
        title: 'Education & Family Support',
        shortDesc: 'Introductions to leading educational consultants, prep schools, and private tutors.',
        leadParagraph: 'British education is renowned worldwide. We introduce families to independent educational advisors who guide school choices, entrance exams (7+, 11+, 13+), and university mentoring.',
        detailedPoints: [
          'School placement guidance: Eton, Harrow, Winchester, St Paul’s, Wycombe Abbey, Westminster',
          'Private tutoring introductions: Oxbridge academics and bespoke subject specialists',
          'University admissions guidance for UK Russell Group and US Ivy League institutions'
        ],
        keyScenarios: [
          {
            title: '13+ Entrance Examination Preparation',
            description: 'Securing an expert mathematics and classics tutor for prep school candidate.',
            outcome: 'Oxford graduate tutor assigned; candidate secured successful acceptance to first-choice school.'
          }
        ],
        image: '/assets/aistudio/cotswolds_manor_estate.jpg'
      },
      {
        id: 'health-wellness-recovery',
        title: 'Health, Wellness & Recovery',
        shortDesc: 'Harley Street specialist appointments, private wellness retreats, and preventative medicine.',
        leadParagraph: 'We facilitate immediate access to leading medical specialists, private diagnostic scans, top dental surgeons, and restorative alpine wellness retreats.',
        detailedPoints: [
          'Urgent appointments with private specialists in London, Zurich, and New York',
          'Access to advanced preventative full-body MRI diagnostics and longevity clinics',
          'In-home physiotherapy, personal training, and private wellness practitioners'
        ],
        keyScenarios: [
          {
            title: 'Same-Day MRI Diagnostic Coordination',
            description: 'Principal suffered sporting knee injury requiring immediate scan and consultant review.',
            outcome: 'MRI scan completed at Harley Street clinic within three hours; senior orthopaedic consultant review at 18:00.'
          }
        ],
        image: '/assets/aistudio/imagereader_3bfec03a.webp'
      },
      {
        id: 'gifting-personal-milestones',
        title: 'Gifting & Personal Milestones',
        shortDesc: 'Thoughtful sourcing of rare books, bespoke leather commissions, and personalised treasures.',
        leadParagraph: 'A meaningful gift reflects genuine insight into the recipient’s passions. We work with master bookbinders, perfumers, and jewellers to commission one-of-a-kind presents.',
        detailedPoints: [
          'First edition literature sourcing and historic letter acquisitions',
          'Bespoke perfume creation with heritage French and British perfumers',
          'Master calligraphers, custom stationery printing, and hand-delivered presentations'
        ],
        keyScenarios: [
          {
            title: 'Inscribed 1925 First Edition Acquisition',
            description: 'Sourcing an author-inscribed first edition of The Great Gatsby for a 40th birthday.',
            outcome: 'Located through private antiquarian dealer in Mayfair, custom leather presentation box crafted, delivered on time.'
          }
        ],
        image: '/assets/aistudio/bond_street_jewellery.jpg'
      },
      {
        id: 'private-office-adviser-liaison',
        title: 'Private Office & Adviser Coordination',
        shortDesc: 'Seamless integration with existing legal, tax, fiduciary, and family office teams.',
        leadParagraph: 'We never duplicate existing professional advisers; we harmonize them. We coordinate smoothly with your family office director, private bankers, solicitors, and trust officers.',
        detailedPoints: [
          'Unified monthly expense reconciliation and consolidated billing reporting',
          'Logistical support for family board meetings, annual general meetings, and investor summits',
          'Collaborative project tracking with family office executives'
        ],
        keyScenarios: [
          {
            title: 'Multi-Jurisdictional Family Assembly',
            description: 'Hosting thirty family office members in London for annual governance meetings.',
            outcome: 'Venue, security, private dining, and transcript services flawlessly orchestrated.'
          }
        ],
        image: '/assets/aistudio/01-Neo-Bankside-Luxury-Penthouse-London-England-UK-640x360_c8f27abb.jpg'
      }
    ],
    faqs: [
      {
        question: 'How do you coordinate with my existing Executive Assistant or Chief of Staff?',
        answer: 'We view ourselves as an indispensable extension of your inner circle. We liaise directly with your EA or Chief of Staff, adapting to their preferred communication channels and reporting cadences.'
      },
      {
        question: 'Do you charge hourly or on a retainer basis?',
        answer: 'Our personal and private office support is included within our comprehensive annual membership tiers, with bespoke project extensions available for major multi-month relocations or family summits.'
      }
    ]
  },
  {
    id: 'luxury-sourcing',
    title: 'Luxury Sourcing & Acquisitions',
    kicker: 'Category 07',
    tagline: 'Objects with a story.',
    shortDesc: 'Rare timepieces, contemporary and modern art, collectible design, fine cellar allocations, and bespoke commissions.',
    overview: 'The acquisition of exceptional objects requires patience, scholarship, and trusted relationships. We do not operate as retail dealers; instead, we provide independent sourcing intelligence, provenance verification, and introductions to the world’s leading specialists in horology, jewellery, fine wine, and collectible automobiles.',
    heroImage: '/assets/aistudio/About-Luxury-Watches_77cb4520.jpg',
    galleryImages: [
      '/assets/aistudio/25_Koenigsegg_CCXR_Trevita_30-Most-Expensive-Cars-in-the-World_Tyroola_0c18f9f0.jpg',
      '/assets/aistudio/liberty-department-store-640x360_44860915.jpg',
      '/assets/aistudio/01_BUGATTI-SOC2022_6775a49f.jpg'
    ],
    regulatoryNote: 'Notice: TGLC is an independent advisory and sourcing concierge. We do not hold ourselves out as an authorized dealer or auctioneer; all acquisitions are completed directly with vetted specialists, certified dealers, or auction houses with full certificates of authenticity.',
    features: [
      'Discreet sourcing of rare vintage and independent horology (Patek Philippe, F.P. Journe, Rolex, Audemars Piguet)',
      'High jewellery commissions and exceptional natural untreated gemstones (diamonds, rubies, sapphires)',
      'Fine wine and spirit acquisitions: en primeur allocations, private cellar buyouts, and provenance verifications',
      'Collector automobile sourcing: historic race cars, limited-series hypercars, and restoration management',
      'Bespoke artisan commissions: custom furniture, silverware, hand-loomed rugs, and architectural bronze'
    ],
    memberScenario: {
      client: 'Watch collector seeking an early production independent chronograph',
      brief: 'Acquisition of an elusive platinum chronograph from an independent Geneva master watchmaker, with unpolished case and complete archival paperwork.',
      solution: 'Mickell Washington contacted a trusted private collector in Zurich. Following independent condition verification by a master watchmaker, the transaction was completed securely with private courier delivery to London.',
      details: 'Watch arrived with complete original box, papers, and manufacturer ledger certificate.'
    },
    subServices: [
      {
        id: 'fine-jewellery-watches',
        title: 'Fine Jewellery & Watches',
        shortDesc: 'Rare timepieces, independent watchmakers, and bespoke high jewellery creation.',
        leadParagraph: 'We assist members in navigating the secondary watch market and high jewellery salons. We introduce you to private dealers, auction specialists, and master gemologists who provide authentic access without market markups.',
        detailedPoints: [
          'Sourcing elusive modern references and investment-grade vintage timepieces',
          'Private salon appointments with Place Vendôme and New Bond Street jewellery houses',
          'Independent gemological appraisals and laboratory certification verifications (GIA, Gübelin, SSEF)'
        ],
        keyScenarios: [
          {
            title: 'Rare Vintage Submariner Acquisition',
            description: 'Locating a pristine 1968 reference with intact tropical dial and documented service history.',
            outcome: 'Located via private UK collector; condition authenticated; private handover at TGLC House.'
          }
        ],
        image: '/assets/aistudio/About-Luxury-Watches_77cb4520.jpg'
      },
      {
        id: 'art-collectible-design',
        title: 'Art & Collectible Design',
        shortDesc: 'Mid-century masterpieces, contemporary sculptural furniture, and rare ceramic design.',
        leadParagraph: 'Great interiors are anchored by collectible design. We connect you with international design galleries, studio craftsmen, and historical archives in Paris, Milan, London, and Scandinavia.',
        detailedPoints: [
          'Acquisition of original mid-century works (Jean Royère, Charlotte Perriand, Gio Ponti)',
          'Commissioning limited-edition sculptural furniture from contemporary gallery designers',
          'Condition reports, museum-grade packing, and insured art transport'
        ],
        keyScenarios: [
          {
            title: '1950s Charlotte Perriand Dining Suite',
            description: 'Sourcing an authentic solid pine table and set of six chairs with verified provenance.',
            outcome: 'Acquired through a Parisian design specialist; authenticated and delivered to member’s Chelsea townhouse.'
          }
        ],
        image: '/assets/aistudio/royal_opera_gallery.jpg'
      },
      {
        id: 'rare-wines-spirits',
        title: 'Rare Wines, Spirits & Gastronomy',
        shortDesc: 'En primeur Bordeaux allocations, Domaine de la Romanée-Conti, and aged Single Malt casks.',
        leadParagraph: 'A distinguished cellar takes decades of careful stewardship. We partner with historic London wine merchants and European domaines to source pristine cases directly from estate cellars.',
        detailedPoints: [
          'Direct allocation access to leading Burgundy, Bordeaux, Barolo, and Champagne producers',
          'Acquisition and bottling of single-cask Scotch and Japanese whiskies',
          'Cellar management, climate monitoring, and inventory cataloguing services'
        ],
        keyScenarios: [
          {
            title: 'DRC Vertical Sourcing',
            description: 'Acquisition of six consecutive vintages of La Tâche with verifiable single-owner provenance.',
            outcome: 'Sourced from a private collector cellar; inspection confirmed zero heat damage; moved under temperature control.'
          }
        ],
        image: '/assets/aistudio/mayfair_fine_dining.jpg'
      },
      {
        id: 'automobiles-motoring',
        title: 'Automobiles & Motoring',
        shortDesc: 'Limited-series hypercars, classic competition machinery, and restoration supervision.',
        leadParagraph: 'From pre-war Bentleys and Aston Martins to the latest Koenigsegg and Bugatti hypercars, we advise collectors on provenance, market valuations, private sales, and historic rally entries (Mille Miglia, Goodwood).',
        detailedPoints: [
          'Private, off-market transactions of historically significant competition cars',
          'Build slot allocations for limited-run releases with leading marques',
          'Supervision of restorations with historically accredited workshops'
        ],
        keyScenarios: [
          {
            title: 'Koenigsegg Hypercar Acquisition',
            description: 'Securing an off-market carbon-diamond weave hypercar for an international collector.',
            outcome: 'Verified by factory technicians in Sweden; delivered securely to private subterranean garage in London.'
          }
        ],
        image: '/assets/aistudio/25_Koenigsegg_CCXR_Trevita_30-Most-Expensive-Cars-in-the-World_Tyroola_0c18f9f0.jpg'
      },
      {
        id: 'bespoke-gifts-commissions',
        title: 'Bespoke Gifts & Commissions',
        shortDesc: 'One-off master artisan creations, handmade trunks, and personalized commemorative objects.',
        leadParagraph: 'When off-the-shelf luxury is inadequate, we commission masters of their craft. We coordinate bespoke orders with heritage leather artisans, silversmiths, crystal engravers, and cabinet makers.',
        detailedPoints: [
          'Handmade leather luggage sets tailored to specific automobile boot measurements',
          'Custom sterling silver barware engraved with personal family emblems',
          'Artisan gunmakers and sporting equipment made to measure'
        ],
        keyScenarios: [
          {
            title: 'Fitted Leather Motoring Trunk',
            description: 'Commissioning a custom trunk in bridle leather to fit a vintage Bentley boot.',
            outcome: 'Crafted over three months by master leatherworker in Shropshire; fitted with bespoke nickel hardware.'
          }
        ],
        image: '/assets/aistudio/bond_street_jewellery.jpg'
      },
      {
        id: 'special-requests',
        title: 'Special Requests',
        shortDesc: 'Solving unique, singular, and elusive intellectual or material challenges.',
        leadParagraph: 'Our members frequently bring us requests that defy standard categorization—from securing a specific vintage typewriter for an author to arranging a private meteorology briefing for an offshore voyage.',
        detailedPoints: [
          'Research and discovery teams dedicated to complex individual inquiries',
          'Access to global network of antique dealers, archivists, and specialized craftsmen',
          'Rigorous attention to confidentiality and personal discretion'
        ],
        keyScenarios: [
          {
            title: 'Out-of-Print Architectural Monograph',
            description: 'Locating a signed copy of a 1974 monograph published in a limited edition of 100.',
            outcome: 'Located in an architectural archive in Milan within five days, wrapped in archival paper, hand-delivered.'
          }
        ],
        image: '/assets/aistudio/savile_row_bespoke.jpg'
      }
    ],
    faqs: [
      {
        question: 'Do you charge a markup on acquired luxury goods?',
        answer: 'We do not act as dealers. We operate with complete transparency, introducing you directly to verified sellers and negotiating advantageous terms on your behalf without hidden commission spreads.'
      },
      {
        question: 'How do you guarantee authenticity of timepieces and artwork?',
        answer: 'Every acquisition is supported by independent third-party expert authentication, archival documentation, and laboratory certificates where applicable before funds are released.'
      }
    ]
  }
];

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    id: 'cal-01',
    title: 'The Serpentine Pavilion Private Unveiling & Architect Reception',
    category: 'Art & Culture',
    dates: '12 June 2026',
    month: 'JUNE',
    day: 12,
    location: 'Serpentine Galleries, Kensington Gardens',
    neighbourhood: 'Kensington',
    description: 'An intimate evening gathering ahead of the public unveiling of this year’s commissioned architecture pavilion. Private remarks by the commissioned architect and drinks on the lawn.',
    curatorNote: 'Quietly one of London’s most civilized summer evenings. Highly limited capacity; early RSVP recommended.',
    isPrivateInvitation: true,
    image: '/assets/aistudio/royal_opera_gallery.jpg',
    badge: 'Member Private Preview'
  },
  {
    id: 'cal-02',
    title: 'Wimbledon Championships: Gentlemen’s Semi-Finals & Debenture Luncheon',
    category: 'Sport',
    dates: '10 July 2026',
    month: 'JULY',
    day: 10,
    location: 'All England Lawn Tennis Club, Church Road',
    neighbourhood: 'Wimbledon',
    description: 'Centre Court debenture seating with access to the Renshaw Restaurant and private Debenture Terrace. Chauffeur drop-off directly at Car Park 8 with golf cart shuttle to gates.',
    curatorNote: 'The quintessential English sporting day. Debenture allocations confirmed with reserved dining tables.',
    isPrivateInvitation: false,
    image: '/assets/aistudio/cotswolds_manor_estate.jpg'
  },
  {
    id: 'cal-03',
    title: 'Private Cellar Dinner: Rare Bordeaux Vintages with Chateau Margaux',
    category: 'Dining',
    dates: '24 June 2026',
    month: 'JUNE',
    day: 24,
    location: 'TGLC House Private Salon, 3rd Floor, 45 Albemarle Street, Mayfair',
    neighbourhood: 'Mayfair',
    description: 'Twelve seats only. A seven-course dinner prepared by guest two-Michelin-starred chef, paired with historic vintages (1982, 1989, 1996, 2000) guided by the estate ambassador.',
    curatorNote: 'Exclusive to TGLC members and invited guests. Total acoustic privacy guaranteed.',
    isPrivateInvitation: true,
    image: '/assets/aistudio/mayfair_fine_dining.jpg',
    badge: 'TGLC House Exclusive'
  },
  {
    id: 'cal-04',
    title: 'Savile Row Bespoke Craft Showcase & Tailors’ Salon',
    category: 'Fashion',
    dates: '18 June 2026',
    month: 'JUNE',
    day: 18,
    location: 'Burlington Gardens & Savile Row',
    neighbourhood: 'Mayfair',
    description: 'Private closed-door salon exploring traditional British tailoring cloth weaving, bespoke shear drafting, and private commissions with the capital’s master cutters.',
    curatorNote: 'A fascinating, hands-on look behind the legendary cutting shears of Mayfair.',
    isPrivateInvitation: false,
    image: '/assets/aistudio/savile_row_bespoke.jpg'
  },
  {
    id: 'cal-05',
    title: 'Royal Opera House: Grand Tier Box for Puccini’s Tosca',
    category: 'Music',
    dates: '2 July 2026',
    month: 'JULY',
    day: 2,
    location: 'Bow Street, Covent Garden',
    neighbourhood: 'Covent Garden',
    description: 'A private central Grand Tier box with private drawing room, interval champagne service, and post-performance backstage introduction to the maestro.',
    curatorNote: 'Superb sightlines and exquisite acoustics. Dinner pre-booked in the private dining salon.',
    isPrivateInvitation: true,
    image: '/assets/aistudio/pt3_6ef34e91.jpg',
    badge: 'Private Box'
  },
  {
    id: 'cal-06',
    title: 'Goodwood Festival of Speed: Drivers’ Club & Hillclimb Hospitality',
    category: 'Sport',
    dates: '9 – 12 July 2026',
    month: 'JULY',
    day: 9,
    location: 'Goodwood Estate, Chichester, West Sussex',
    neighbourhood: 'Countryside',
    description: 'Helicopter transfer from Battersea Heliport directly to Goodwood. Access to the exclusive Drivers’ Club paddock, VIP trackside terrace, and evening gala ball.',
    curatorNote: 'The finest celebration of motorsport culture in the world. Seamless air transit avoids all Sussex traffic.',
    isPrivateInvitation: false,
    image: '/assets/aistudio/01_BUGATTI-SOC2022_6775a49f.jpg'
  },
  {
    id: 'cal-07',
    title: 'London After Dark: Subterranean Jazz & Rare Spirits Salon',
    category: 'London After Dark',
    dates: '27 June 2026',
    month: 'JUNE',
    day: 27,
    location: 'Discreet Private Vault, Dean Street',
    neighbourhood: 'Soho',
    description: 'An intimate after-hours gathering featuring a quartet of leading modern European jazz improvisers, paired with pre-embargo rums and single-cask Japanese malts.',
    curatorNote: 'Strictly unannounced venue address sent via member SMS at 19:00 on the evening.',
    isPrivateInvitation: true,
    image: '/assets/aistudio/Copper-Club_b58a00e9.jpg',
    badge: 'Discreet Gathering'
  },
  {
    id: 'cal-08',
    title: 'Tate Modern After-Hours: Major Retrospective Curatorial Tour',
    category: 'Art & Culture',
    dates: '16 July 2026',
    month: 'JULY',
    day: 16,
    location: 'Bankside, Southwark',
    neighbourhood: 'Bankside',
    description: 'Private access to the Turbine Hall and new blockbuster exhibition following evening closure. Led by the exhibition’s chief curator with private riverside drinks.',
    curatorNote: 'Experience world-class contemporary art in peaceful isolation without public crowds.',
    isPrivateInvitation: false,
    image: '/assets/aistudio/01-Neo-Bankside-Luxury-Penthouse-London-England-UK-640x360_c8f27abb.jpg'
  },
  {
    id: 'cal-09',
    title: 'Frieze London Masters Preview & Private Collectors’ Breakfast',
    category: 'Art & Culture',
    dates: '8 October 2026',
    month: 'OCTOBER',
    day: 8,
    location: 'Regent’s Park',
    neighbourhood: 'Regent’s Park',
    description: 'First-look VIP preview passes to Frieze Masters. Private morning breakfast hosted by international contemporary art collectors and gallery directors.',
    curatorNote: 'The anchor week of London’s autumn cultural calendar. Dedicated art advisors on hand.',
    isPrivateInvitation: true,
    image: '/assets/aistudio/01-Lethbridge-House-20-Cornwall-Terrace-Marylebone-London-UK-640x360_b59e806c.jpg',
    badge: 'VIP Preview'
  },
  {
    id: 'cal-10',
    title: 'British Museum: Behind-the-Scenes Vaults & Antiquities Study',
    category: 'Family',
    dates: '20 June 2026',
    month: 'JUNE',
    day: 20,
    location: 'Great Russell Street, Bloomsbury',
    neighbourhood: 'Bloomsbury',
    description: 'A specially designed Saturday morning for members and their young families. Private access to the conservation laboratories and ancient Egyptian archives.',
    curatorNote: 'Inspiring for young minds aged 8 to 16. Guided by senior British Museum conservators.',
    isPrivateInvitation: false,
    image: '/assets/aistudio/hidden_subterranean_vault_1794295323175.jpg'
  },
  {
    id: 'cal-11',
    title: 'Royal Ascot: Royal Enclosure & Private Carriage Lawn Pavilion',
    category: 'Sport',
    dates: '16 – 20 June 2026',
    month: 'JUNE',
    day: 17,
    location: 'Ascot Racecourse, Berkshire',
    neighbourhood: 'Countryside',
    description: 'Access to the Royal Enclosure, private reserved picnic lawn berths with dedicated butler service, and private helicopter landing arrangements.',
    curatorNote: 'Dress code guidance and badge allocation arranged through member services.',
    isPrivateInvitation: true,
    image: '/assets/aistudio/ufc_arena_ringside.jpg',
    badge: 'Royal Enclosure'
  },
  {
    id: 'cal-12',
    title: 'Summer Solstice Cotswolds Organic Feast & Vineyard Walk',
    category: 'Dining',
    dates: '21 June 2026',
    month: 'JUNE',
    day: 21,
    location: 'Private Organic Estate, near Daylesford, Gloucestershire',
    neighbourhood: 'Cotswolds',
    description: 'A long-table lunch set amidst blooming English wildflower meadows, featuring heritage rare-breed meats and biodynamic English sparkling wines.',
    curatorNote: 'Chauffeured luxury hybrid transfers provided from London or nearby private helipads.',
    isPrivateInvitation: false,
    image: '/assets/aistudio/cotswolds_manor_estate.jpg'
  },
  {
    id: 'cal-13',
    title: 'Secret Cinema & Private Screening: Historic Film Archive Salon',
    category: 'Art & Culture',
    dates: '5 July 2026',
    month: 'JULY',
    day: 5,
    location: 'Private Georgian Townhouse Screening Room',
    neighbourhood: 'Soho',
    description: 'An intimate 35mm film screening of a restored British noir classic, introduced by its legendary director, followed by a discussion in the courtyard garden.',
    curatorNote: 'Thirty seats only in a bespoke velvet-panelled screening salon.',
    isPrivateInvitation: true,
    image: '/assets/aistudio/tglc_st_james_salon.jpg',
    badge: 'Private Screening'
  },
  {
    id: 'cal-14',
    title: 'Glyndebourne Festival Opera: Private Lawn Dining & Mozart’s Figaro',
    category: 'Music',
    dates: '15 July 2026',
    month: 'JULY',
    day: 15,
    location: 'Lewes, East Sussex',
    neighbourhood: 'Sussex',
    description: 'Top-tier stalls tickets for Le Nozze di Figaro, paired with a bespoke white-linen picnic hamper and pavilion set on the idyllic Ha-Ha lawn during the 90-minute interval.',
    curatorNote: 'A hallmark of the British summer season. Complete picnic and staffing managed turnkey.',
    isPrivateInvitation: false,
    image: '/assets/aistudio/florence_palazzo_courtyard.jpg'
  },
  {
    id: 'cal-15',
    title: 'London Fashion Week: Closed-Door Ateliers & Emerging Designers Edit',
    category: 'Fashion',
    dates: '18 – 22 September 2026',
    month: 'SEPTEMBER',
    day: 19,
    location: 'Various Private Venues, Mayfair & East London',
    neighbourhood: 'Mayfair & Shoreditch',
    description: 'Curated access to private salon shows, behind-the-scenes fitting appointments, and intimate dinners with London’s most celebrated vanguard fashion designers.',
    curatorNote: 'Coordinated by Dr. Helena Zhang-Somerset with VIP front-row salon seating.',
    isPrivateInvitation: true,
    image: '/assets/aistudio/liberty-department-store-640x360_44860915.jpg',
    badge: 'Front Row Access'
  },
  {
    id: 'cal-16',
    title: 'Cowdray Gold Cup Polo Finals & Pitchside Pavilion Hospitality',
    category: 'Sport',
    dates: '19 July 2026',
    month: 'JULY',
    day: 19,
    location: 'Cowdray Park Polo Club, Midhurst, West Sussex',
    neighbourhood: 'Sussex',
    description: 'The premier high-goal polo tournament in Europe. Private pitchside hospitality lounge with champagne lunch, afternoon tea, and prime views of the world’s best players.',
    curatorNote: 'Relaxed yet elegant summer sporting atmosphere in the South Downs.',
    isPrivateInvitation: false,
    image: '/assets/aistudio/best-luxury-cars-2024_ab87bb7b.webp'
  },
  {
    id: 'cal-17',
    title: 'Independent Horology Salon: Master Watchmakers of Geneva & London',
    category: 'Private Invitations',
    dates: '28 August 2026',
    month: 'AUGUST',
    day: 28,
    location: 'The Drawing Room, TGLC House, 3rd Floor, 45 Albemarle Street, Mayfair',
    neighbourhood: 'Mayfair',
    description: 'An extraordinary gathering of four leading independent master watchmakers who produce fewer than thirty timepieces annually. Hands-on loupe examination and private commission talks.',
    curatorNote: 'Strictly limited to 20 registered TGLC members.',
    isPrivateInvitation: true,
    image: '/assets/aistudio/About-Luxury-Watches_77cb4520.jpg',
    badge: 'TGLC House Exclusive'
  },
  {
    id: 'cal-18',
    title: 'Harvest Truffle & Wild Game Dinner at a Hampshire Sporting Manor',
    category: 'Dining',
    dates: '24 October 2026',
    month: 'OCTOBER',
    day: 24,
    location: 'Private Manor House, Test Valley, Hampshire',
    neighbourhood: 'Hampshire',
    description: 'Celebrate the height of the English game season. Morning walking shoot through the estate grounds followed by a five-course truffle and venison dinner paired with vintage Barolo.',
    curatorNote: 'Overnight accommodation available in the estate’s guest suites.',
    isPrivateInvitation: false,
    image: '/assets/aistudio/hidden_secret_gastronomy_1794295323821.jpg'
  },
  {
    id: 'cal-19',
    title: 'Royal Enclosure & Guards Polo International Day',
    category: 'Sport',
    dates: '26 July 2026',
    month: 'JULY',
    day: 26,
    location: 'Guards Polo Club, Smith’s Lawn, Windsor Great Park',
    neighbourhood: 'Windsor',
    description: 'The pinnacle of high-goal summer polo. Private reserved pitchside clubhouse marquee with Laurent-Perrier champagne reception, four-course seated luncheon, and premier clubhouse lawn viewing.',
    curatorNote: 'Helicopter transfers from London Heliport Battersea to Windsor Great Park.',
    isPrivateInvitation: true,
    image: '/assets/aistudio/cotswolds_manor_estate.jpg',
    badge: 'Royal Enclosure'
  },
  {
    id: 'cal-20',
    title: 'Farnborough International Executive Static Display & Flight Line Access',
    category: 'Private Invitations',
    dates: '22 July 2026',
    month: 'JULY',
    day: 22,
    location: 'TAG Aviation FBO, Farnborough Airport',
    neighbourhood: 'Farnborough',
    description: 'Private morning viewing of next-generation ultra-long-range business aviation flagships (Bombardier Global 8000 and Gulfstream G700). Private briefing with chief flight engineers.',
    curatorNote: 'Chauffeured VIP Sprinter JetVan transfer directly from 45 Albemarle Street.',
    isPrivateInvitation: true,
    image: '/assets/aistudio/luxury_sprinter_jetvan.jpg',
    badge: 'Executive Flight Line'
  },
  {
    id: 'cal-21',
    title: 'Bond Street Closed-Door High Jewellery Night & Gemmological Salons',
    category: 'Fashion',
    dates: '10 September 2026',
    month: 'SEPTEMBER',
    day: 10,
    location: 'New Bond Street Private Penthouse Suites',
    neighbourhood: 'Mayfair',
    description: 'An exclusive after-hours evening across three premier Bond Street maisons. View museum-grade untreated natural stones (Kashmir sapphires, Colombian emeralds) in private salons.',
    curatorNote: 'Private security escort provided by Julian Sterling’s close protection team.',
    isPrivateInvitation: true,
    image: '/assets/aistudio/bond_street_jewellery.jpg',
    badge: 'Closed-Door Salons'
  },
  {
    id: 'cal-22',
    title: 'Sub-Thames Stealth Midnight River Launch & Tower Bridge Opening',
    category: 'London After Dark',
    dates: '14 August 2026',
    month: 'AUGUST',
    day: 14,
    location: 'Private Mooring, St Katharine Docks & Tower Pier',
    neighbourhood: 'The City',
    description: 'Embark upon our custom carbon-stealth launch at 23:30. Private river transit past lit monuments, synchronized private bascule opening of Tower Bridge, and midnight champagne supper onboard.',
    curatorNote: 'Strictly 8 guests. Direct chauffeured boarding at private river gate.',
    isPrivateInvitation: true,
    image: '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg',
    badge: 'Sub-Rosa Nocturne'
  },
  {
    id: 'cal-23',
    title: 'Blenheim Palace & Cotswolds Classic Concours d’Elegance',
    category: 'Sport',
    dates: '2 – 5 September 2026',
    month: 'SEPTEMBER',
    day: 3,
    location: 'Blenheim Palace, Woodstock, Oxfordshire',
    neighbourhood: 'Oxfordshire',
    description: 'Salon Privé VIP pavilion access on the lawns of Blenheim Palace. Private viewing of legendary pre-war coachbuilt vehicles and limited-production modern hypercars.',
    curatorNote: 'Private dining pavilions and driver introductions arranged turnkey.',
    isPrivateInvitation: false,
    image: '/assets/aistudio/best-luxury-cars-2024_ab87bb7b.webp'
  },
  {
    id: 'cal-24',
    title: 'Private St James’s Bullion Vault Supper & Antiquarian Coin Study',
    category: 'Private Invitations',
    dates: '16 October 2026',
    month: 'OCTOBER',
    day: 16,
    location: 'Historic Subterranean Bullion Chamber, Pall Mall',
    neighbourhood: 'St James’s',
    description: 'An extraordinary subterranean evening inside a 280-year-old subterranean bullion vault. Candlelit supper for ten members surrounded by historical sovereign numismatic archives.',
    curatorNote: 'Encrypted venue coordinates and pass-phrase issued 4 hours prior.',
    isPrivateInvitation: true,
    image: '/assets/aistudio/hidden_subterranean_vault_1794295323175.jpg',
    badge: 'Sanctum Vault'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: 'the-horological-renaissance-closed-door-watch-salons',
    title: 'The Horological Renaissance: Navigating London’s Closed-Door Watch Salons & Rare Complications',
    subtitle: 'Inside the private upper floors of Burlington Arcade, Mayfair’s AP House, and the subterranean vaults of Selfridges’ Wonder Room.',
    category: 'Objects of Desire',
    readTime: '11 min read',
    publishDate: '02 November 2026',
    author: 'Mickell Washington & Dr. Helena Zhang-Somerset',
    authorRole: 'Managing Director & Head of Cultural Curation',
    excerpt: 'In an era where high-profile timepieces are often locked behind artificial scarcity, London’s independent watch salons and private department store penthouses remain sanctuaries of genuine scholarship, provenance, and master craftsmanship.',
    heroImage: '/assets/aistudio/About-Luxury-Watches_77cb4520.jpg',
    pullQuote: 'A rare complication is not merely an instrument of mechanical accuracy; it is centuries of micro-mechanical sculpture that carries human genius upon a human wrist.',
    contentParagraphs: [
      'In the hushed corridors of Mayfair and St James’s, the acquisition of a rare mechanical timepiece remains an art form governed by quiet relationships rather than commercial retail transactions. For the seasoned collector, the public ground-floor vitrines of luxury avenues are merely an antechamber. The authentic horological conversations happen behind closed doors on the third floor of Georgian townhouses, in discreet private salons hidden behind Burlington Arcade, and in the private fourth-floor Penthouse apartments of Selfridges on Oxford Street.',
      'London has long occupied a unique position in global horology. While Geneva, Le Brassus, and Glashütte design and assemble the movements, London has for three centuries been the grand capital where discerning collectors evaluate provenance, commission bespoke dial work, and debate complications over tea or single cask whisky. Today, that legacy is experiencing a profound renaissance, driven by an appetite for independent watchmakers whose annual production totals fewer than fifty pieces worldwide.',
      'Through our private introductions, TGLC members bypass the standard waiting lists and commercial gatekeeping that have frustrated collectors in recent years. We connect principals directly with master watchmakers, salon directors, and independent auction scholars who judge collectors not by social media followings, but by genuine intellectual curiosity and appreciation for horological craft.'
    ],
    editorialImages: [
      '/assets/aistudio/bond_street_jewellery.jpg',
      '/assets/aistudio/tglc_st_james_salon.jpg'
    ],
    subheadings: [
      {
        title: 'Burlington Arcade: The Shrine of Vintage Provenance',
        paragraphs: [
          'Guarded since 1819 by the ceremonial Head Beadle in frock coat and gold-braided top hat, Burlington Arcade remains London’s spiritual sanctuary for vintage Rolex, Patek Philippe, and Cartier. Here, specialists such as The Vintage Watch Company and Somlo London house museum-quality pieces with unimpeachable provenance.',
          'In these small, wood-panelled salons, collectors can examine original 1960s Submariners with tropical dials, early Patek Philippe reference 3970 perpetual calendar chronographs, and historic military-issue Omega timepieces. TGLC arranges private after-hours viewings where the arcade is closed to the public, allowing members to inspect watch movements under specialized LED loupes in total serenity.',
          'Each timepiece sourced through our network undergoes rigorous verification: movement numbers are matched against original manufacture extract ledgers, cases are inspected for unpolished factory bevels, and hands and dial lume are analyzed under ultraviolet spectroscopy to verify authentic radium or tritium condition.'
        ]
      },
      {
        title: 'Selfridges’ Wonder Room: Haute Horology in Private Penthouse Seclusion',
        paragraphs: [
          'Occupying 20,000 square feet on the ground floor of Oxford Street’s celebrated Beaux-Arts temple, The Wonder Room is one of Europe’s foremost destinations for mechanical complications. Yet few shoppers realize that Selfridges maintains an ultra-private fourth-floor Personal Shopping Penthouse accessible only via an unmarked private elevator on Duke Street.',
          'Here, away from all public foot traffic, our members relax in private styling suites with limestone fireplaces and champagne bars while pieces from Audemars Piguet, Cartier, Vacheron Constantin, and independent ateliers are brought up directly from secure subterranean bank-grade vaults.',
          'Whether you are seeking a Royal Oak Perpetual Calendar in frosted gold or commissioning a bespoke gem-set bezel, the transaction occurs with total privacy, accompanied by direct limousine loading into our members’ chauffeured vehicles at the private Duke Street portico.'
        ]
      },
      {
        title: 'The Rise of the Independent Masters: Geneva to London',
        paragraphs: [
          'While the historic heritage manufactures command respect, the most impassioned collectors at TGLC House are increasingly gravitating towards independent creators: Philippe Dufour, FP Journe, Kari Voutilainen, Rexhep Rexhepi, and Roger W. Smith on the Isle of Man.',
          'These master craftsmen work with hand-turned rose engines, polishing steel pivots by hand on zinc plates with diamond paste to achieve mirror black polish. Owning such a timepiece represents membership in an intimate cultural fellowship.',
          'TGLC hosts an annual Private Horology Salon at 3rd Floor, 45 Albemarle Street, Mayfair, welcoming four master watchmakers for private dinners where members try on prototype complications and discuss bespoke commissions directly with the artisans who build them.'
        ]
      }
    ]
  },
  {
    slug: 'high-jewellery-behind-the-velvet-curtains',
    title: 'High Jewellery & Private Ateliers: Behind the Heavy Velvet Curtains of Bond Street & Selfridges’ Wonder Room',
    subtitle: 'How royal tiaras, unheated Burmese sapphires, and one-of-a-kind diamond parures are sourced away from public view.',
    category: 'The Cultural Edit',
    readTime: '10 min read',
    publishDate: '26 October 2026',
    author: 'Camilla Vance-Moreau & Dr. Helena Zhang-Somerset',
    authorRole: 'Director of Private Office & Head of Cultural Curation',
    excerpt: 'High jewellery is rarely bought from a glass display cabinet. An insider exploration into private high jewellery salons, private vault showings, and bespoke family commissions on New Bond Street.',
    heroImage: '/assets/aistudio/bond_street_jewellery.jpg',
    pullQuote: 'The finest stones speak in whispers. An untreated Colombian emerald has a personality that was formed fifty million years ago; when placed against the skin, it is utterly unmistakable.',
    contentParagraphs: [
      'For the world’s most discerning collectors and royal dynasties, high jewellery is not merely adornment—it is portable sovereign wealth, aesthetic mastery, and emotional legacy. In London, the epicentre of this rarefied universe stretches along Old and New Bond Street, continuing into the private salons of St James’s and the dedicated high jewellery suites of Selfridges and Harrods.',
      'Behind the heavy velvet curtains and bullet-resistant double-door airlocks of these private maisons lies a world completely insulated from the public street. Here, in rooms appointed with silk damask walls, Lalique crystal sconces, and museum-grade halogen illumination, stones of extraordinary geological rarity are presented upon midnight-blue suede trays.',
      'TGLC acts as a confidential advisor to members seeking rare acquisitions—whether sourcing a natural 10-carat Type IIa D-Flawless diamond for an engagement, commissioning an heirloom tiara for a diplomatic banquet, or resetting antique gemstones passed down through four generations.'
    ],
    editorialImages: [
      '/assets/aistudio/liberty-department-store-640x360_44860915.jpg',
      '/assets/aistudio/savile_row_bespoke.jpg'
    ],
    subheadings: [
      {
        title: 'The Sanctum of the Fourth Floor: Cartier and Bond Street’s Private Salons',
        paragraphs: [
          'At Cartier’s Grade II listed flagship on New Bond Street, the upper floors house private apartments where the Prince of Wales and Maharaja of Patiala once commissioned their legendary parures. Today, TGLC members access these private drawing rooms for bespoke consultations with Cartier’s Heritage Conservators and High Jewellery Directors.',
          'Similarly, at Graff, Harry Winston, and Van Cleef & Arpels, private viewings take place under absolute privacy. Members can view newly cut rough stones from southern Africa before they are offered to the broader market, ensuring priority access to pieces that will become tomorrow’s auction records.',
          'Each acquisition is accompanied by comprehensive gemmological certificates from the Gemological Institute of America (GIA), the Swiss Gemmological Institute (SSEF), or Gübelin, certifying zero thermal treatment or clarity enhancement.'
        ]
      },
      {
        title: 'The Art of the Bespoke Commission: From Gouache to Gold',
        paragraphs: [
          'The true connoisseur frequently chooses to create a piece from scratch rather than purchasing an existing design. The journey begins with a private consultation with a master jewellery designer at TGLC House or in our members’ private residences.',
          'Initial concepts are rendered in luminous hand-painted gouache on grey card, showing every facet of the gems and the interplay of platinum, yellow gold, and titanium. Once the design is approved, wax models are cast and fitted to ensure flawless ergonomic balance on the neckline, wrist, or finger.',
          'Our network includes independent London workshop masters who have cut stones and set jewels for the Crown Estate. These artisans work with microscopic accuracy, using hand-gravers and traditional setting techniques that guarantee stones remain secure for centuries without visible metal prongs obscuring their brilliance.'
        ]
      }
    ]
  },
  {
    slug: 'the-gentlemen-of-sw19-wimbledon-debentures',
    title: 'The Gentlemen of SW19: A Curated Guide to Wimbledon Debentures, Centre Court Access & Village Hospitality',
    subtitle: 'How to experience the world’s most prestigious lawn tennis fortnight with seamless decorum and zero friction.',
    category: 'London Intelligence',
    readTime: '9 min read',
    publishDate: '20 October 2026',
    author: 'Julian Sterling',
    authorRole: 'Director of Fleet, Aviation & Tactical Security',
    excerpt: 'Wimbledon remains the crowning jewel of the English summer social season. How TGLC arranges Centre Court debentures, private Rosewater dining, and helicopter transit into SW19.',
    heroImage: '/assets/aistudio/cotswolds_manor_estate.jpg',
    pullQuote: 'At Wimbledon, the drama of world championship tennis unfolds against thirty-eight acres of clipped rye grass, white hydrangeas, and absolute British stillness before serve.',
    contentParagraphs: [
      'Every July, the focus of the sports and cultural world shifts to Church Road in Wimbledon, where the All England Lawn Tennis Club stages the oldest and most revered tennis championship in existence. Unlike modern commercial arenas with neon hoardings and electronic interruptions, Wimbledon preserves a serene aesthetic: pristine white attire, zero courtside advertising, and an atmosphere of respectful concentration.',
      'For the discerning attendee, navigating Wimbledon requires careful choreography. The public ballot is a lottery, and queues on the golf course can stretch for miles in the July heat. TGLC provides members with an entirely different experience through our long-standing relationships with debenture holders, private hospitality directors, and village landowners.',
      'With debenture seating, you are not merely attending a tennis match; you are entering a private members’ enclosure on Centre Court or No. 1 Court, equipped with dedicated restaurant reservations, private cloakrooms, and direct viewing terraces overlooking the outside courts.'
    ],
    editorialImages: [
      '/assets/aistudio/13eb42bb98d7c1aedc2b236ef64ad276_ef6c13db.jpg',
      '/assets/aistudio/mayfair_fine_dining.jpg'
    ],
    subheadings: [
      {
        title: 'The Rosewater & Renshaw Pavilions: Quiet Dining Overlooking the Grounds',
        paragraphs: [
          'The premier hospitality experience at Wimbledon is centered on The Rosewater Pavilion and The Renshaw Restaurant. Designed as a serene English garden retreat with private outdoor terraces, The Rosewater Pavilion offers a four-course tasting menu paired with vintage Ruinart champagne and English sparkling wines, followed by traditional afternoon tea with strawberries picked fresh in Kent that dawn.',
          'From the private terrace, members can hear the crisp thwack of balls from Court 18 and observe players walking to their warm-up sessions. Dedicated hosts ensure that drinks and canapés are timed with surgical precision so guests are comfortably seated on Centre Court five minutes before the players walk onto the turf.'
        ]
      },
      {
        title: 'Arrival by Air & Road: Bypassing South London Traffic',
        paragraphs: [
          'The journey to SW19 during the Championship fortnight can be notoriously slow by public road. TGLC coordinates direct helicopter charter departures from the London Heliport at Battersea directly to private landing fields adjacent to Wimbledon Common, completing the journey in seven minutes.',
          'From the landing pad, chauffeured Range Rovers transport members through Gate 5 directly into private debenture car parks. For those traveling by road from Mayfair or Belgravia, our drivers utilize private residential mews routes across Putney Heath to avoid the congested A3 corridor entirely.'
        ]
      },
      {
        title: 'Wimbledon Village After Hours: Cannizaro House and Quiet Sanctuary',
        paragraphs: [
          'When play concludes at dusk on Centre Court, the surrounding Wimbledon Village comes alive with dinner parties and private celebrations. TGLC secures private garden tables at Cannizaro House and private rooms at historic village inns where members can dissect five-set thrillers over dinner while the London evening cool sets in.',
          'It is this complete, frictionless choreography—from morning helicopter takeoff to post-match village dining—that transforms Wimbledon from a sporting event into an unforgettable English summer tradition.'
        ]
      }
    ]
  },
  {
    slug: 'a-private-guide-to-london-after-dark',
    title: 'A Private Guide to London After Dark',
    subtitle: 'Beyond the crowded thoroughfares, London reveals its true character when the street lamps reflect on wet stone.',
    category: 'London Intelligence',
    readTime: '6 min read',
    publishDate: '28 October 2026',
    author: 'Dr. Helena Zhang-Somerset',
    authorRole: 'Head of Cultural Curation & Sub-Rosa Operations',
    excerpt: 'True London nightlife has never been about strobe lights or cordoned VIP queues. It belongs to the basement jazz dens of Soho, candlelit mahogany corners of St James’s, and private listening salons.',
    heroImage: '/assets/aistudio/Copper-Club_b58a00e9.jpg',
    pullQuote: 'The best rooms in London do not announce themselves from the street. They are found down narrow alleys, behind heavy drapery, where the conversation is sharp and the drinks are made with reverence.',
    contentParagraphs: [
      'There is a persistent myth that London sleeps early. Those who believe it are simply looking in the wrong places. While the commercial thoroughfares quieten by midnight, a parallel city awakens—one defined not by ostentation, but by character, acoustics, and discretion.',
      'In Soho, behind unmarked doors that look like utility entrances, lie subterranean rooms that have served writers, musicians, and politicians for three-quarters of a century. Here, the ice is carved from crystal-clear blocks, the lighting is calibrated to the warm amber of an incandescent filament, and phones remain firmly inside coat pockets.',
      'Moving eastward into Clerkenwell and Spitalfields, the mood shifts towards high-fidelity sound. Japanese-style listening bars, equipped with hand-built valve amplifiers and vintage Tannoy monitors, offer an experience closer to an intimate salon than a cocktail bar. Here, one sips rare single malts while listening to entire vinyl sides of Blue Note jazz or modal electronic compositions.',
      'In St James’s, tradition asserts itself with quiet authority. Several centuries-old clubs maintain night drawing rooms where members may converse over vintage port until the small hours, undisturbed by music or ambient noise. It is this balance—between heritage stillness and contemporary creative spark—that makes London after dark endlessly compelling.'
    ],
    editorialImages: [
      '/assets/aistudio/hidden_secret_gastronomy_1794295323821.jpg',
      '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg'
    ],
    subheadings: [
      {
        title: 'The Grammar of Discretion',
        paragraphs: [
          'What distinguishes London’s most civilized night rooms is not price, but tone. There is an unspoken social compact: you may be seated alongside a cabinet minister, a celebrated playwright, or an international financier, but eye contact is brief, respect is absolute, and no one asks for an introduction without mutual consent.',
          'Our advice to members visiting these spaces is straightforward: arrive without entourage, let the room breathe, and trust the discretion of the bar team. The finest hospitality in London is rarely loud; it is warm, intuitive, and perpetually attentive.'
        ]
      },
      {
        title: 'Three Addresses That Define the Night',
        paragraphs: [
          'While we reserve specific introductions for our private member dossier, three distinct styles illustrate the city’s breadth: the classic St James’s cigar terrace overlooking a secluded courtyard; the intimate Dean Street basement where live jazz happens four feet from your table; and the high-ceilinged Shoreditch loft where culinary masters cook late-night suppers for fellow chefs.',
          'Each offers a different rhythm, yet all share a single virtue: they are spaces designed for civilized human connection.'
        ]
      }
    ]
  },
  {
    slug: 'the-new-rules-of-discreet-travel',
    title: 'The New Rules of Discreet Travel',
    subtitle: 'Why the world’s most discerning travellers are stepping away from obvious luxury towards quiet sanctuary.',
    category: 'Travel Notes',
    readTime: '7 min read',
    publishDate: '15 October 2026',
    author: 'Julian Sterling',
    authorRole: 'Director of Fleet, Aviation & Tactical Security',
    excerpt: 'In an age of omnipresent social media, true luxury has become synonymous with invisibility. How ultra-high-net-worth travellers are rethinking private aviation, estate sourcing, and personal security.',
    heroImage: '/assets/aistudio/698157105b08bd0b828e954b_file_k95qb05z_c7bc7f74.png',
    pullQuote: 'The modern traveller is no longer collecting trophies of status; they are guarding their mental stillness and family privacy with fierce intention.',
    contentParagraphs: [
      'A decade ago, luxury travel was frequently defined by scale: the grandest Presidential suite, the most recognizable beach club on the French Riviera, the superyacht anchored closest to the port. Today, the most sophisticated principals are executing a deliberate retreat from that paradigm.',
      'The new imperative is sanctuary. It is the ability to travel with one’s family without entering a public lobby, without seeing cameras, and without experiencing the friction of modern international security queues. This shift has fundamentally transformed private aviation and private residential leasing.',
      'Instead of arriving at congested general aviation terminals at peak holiday hours, our travel desk coordinates departures from satellite aerodromes with direct tarmac vehicle transfers. A car departs your London residence, drives directly onto the apron at RAF Northolt, and luggage is loaded while you step directly into the aircraft cabin.'
    ],
    editorialImages: [
      '/assets/aistudio/6a194620490b49214619b628_file_8wpx83o3_8d7f9f53.png',
      '/assets/aistudio/florence_palazzo_courtyard.jpg'
    ],
    subheadings: [
      {
        title: 'Sanctuary Over Spectacle',
        paragraphs: [
          'This quiet mindset extends to accommodation. The most sought-after properties in our Mediterranean and Alpine portfolios are not the sprawling mega-villas with public road frontage. They are private estates with natural geographic buffers—clifftop perches with private coves in Mallorca, or restored stone farmhouses tucked within private valleys in Provence.',
          'These homes are fully staffed, equipped with commercial-grade satellite data connections for executive communication, yet invisible to passing boats or drones.'
        ]
      }
    ]
  },
  {
    slug: 'the-art-of-the-perfect-london-weekend',
    title: 'The Art of the Perfect London Weekend',
    subtitle: 'From Friday dusk in Mayfair to Sunday stillness in Kensington Gardens.',
    category: 'London Intelligence',
    readTime: '12 min read',
    publishDate: '02 October 2026',
    author: 'Camilla Vance-Moreau',
    authorRole: 'Director of Private Office & Client Relations',
    excerpt: 'How to experience the capital at its most relaxed: private gallery hours, morning markets before the gates open, and long unhurried Sunday lunches.',
    heroImage: '/assets/aistudio/U2xzhqR8NqpZGDRNVta6Gk_fe26a8c6.jpg',
    pullQuote: 'A great London weekend is not about packing an itinerary; it is about leaving enough space between appointments for the city to surprise you.',
    contentParagraphs: [
      'London on a weekend possesses a distinct personality. The financial pulse of the City slows, and the capital transforms into a tapestry of villages, each with its own rhythm and unhurried charm.',
      'Friday evening should begin with civilized restraint: a dry martini in St James’s, where the olive is cold and the room is serene, followed by an intimate dinner at a small, chef-driven restaurant where the menu fits on a single card.',
      'Saturday belongs to early movement. Walking through Holland Park before the morning dog walkers arrive, followed by an unhurried visit to an antiquarian bookseller or contemporary gallery where the curator is free to talk. In the evening, the theater remains unmatched, provided one has a private drawing room for the interval.',
      'Sunday should be protected fiercely. A long, multi-generational lunch in a private room overlooking a garden square, an afternoon stroll through the Royal Parks, and an early evening fire in the library. This is London at its most restorative.'
    ],
    editorialImages: [
      '/assets/aistudio/tglc_st_james_salon.jpg',
      '/assets/aistudio/royal_opera_gallery.jpg'
    ],
    subheadings: [
      {
        title: 'Friday Dusk: The Ritual of the First Pour',
        paragraphs: [
          'The transition from executive velocity to weekend calm is marked by ceremony. In St James’s, several private hotel bars and club drawing rooms understand the exact mathematics of a dry Gibson or Vesper: frozen crystal coupe, Gordon’s export strength or Tanqueray No. Ten, and an atomized rinse of Noilly Prat.',
          'At TGLC House, our third-floor salon hosts members concluding cross-border transactions before heading to Mount Street or Curzon Street for dinner. By arranging private booths in advance, we eliminate the awkward theatre of negotiating seating with front-of-house staff.'
        ]
      },
      {
        title: 'Saturday Midday: The Art of Quiet Browsing',
        paragraphs: [
          'Few pleasures rival the quiet antiquarian bookshops of Cecil Court and the tucked-away print galleries of Pall Mall. Here, behind leaded glass windows, specialists hold first editions of Evelyn Waugh, hand-coloured 18th-century botanical engravings, and architectural folios that were once bound for country house libraries.',
          'Our cultural team arranges for shop owners to pull specific archival portfolios matching our members’ personal collections, transforming a casual morning stroll into a masterclass in bibliography.'
        ]
      },
      {
        title: 'Sunday Sanctuary: Protecting the Family Table',
        paragraphs: [
          'A proper Sunday lunch in London should occupy at least four hours. Whether overlooking the gardens of Chelsea Physic Garden or seated in a private panelled dining room in Belgravia, the table should be generous: English roast beef with proper dripping yorkshires, seasonal greens, and carafes of mature Claret.',
          'By delegating all domestic provisioning and table arrangements to your Lifestyle Manager, the Sunday table returns to what it was always intended to be: a joyful, restorative anchor for the household.'
        ]
      }
    ]
  },
  {
    slug: 'beyond-mayfair-londons-most-compelling-cultural-addresses',
    title: 'Beyond Mayfair: London’s Most Compelling Cultural Addresses',
    subtitle: 'Venturing past W1 to uncover the studios, workshops, and private collections shaping the city’s vanguard.',
    category: 'The Cultural Edit',
    readTime: '13 min read',
    publishDate: '18 September 2026',
    author: 'Dr. Helena Zhang-Somerset',
    authorRole: 'Head of Cultural Curation & Sub-Rosa Operations',
    excerpt: 'While Mayfair remains the commercial anchor of the art market, London’s creative soul thrives across Deptford, Hackney Wick, Bloomsbury, and Southwark.',
    heroImage: '/assets/aistudio/hidden_brutalist_penthouse_1794295322915.jpg',
    pullQuote: 'To understand contemporary culture, one must leave the white-cube galleries behind and enter the dust and turpentine of an actual working atelier.',
    contentParagraphs: [
      'It is easy to spend an entire cultural season within a four-square-mile radius of Berkeley Square. Between the auction houses on New Bond Street and the grand institutions of Piccadilly, the density of masterpiece-tier art is undeniable.',
      'Yet the collectors whose opinions we prize most rarely confine themselves to this gilded perimeter. The real creative friction of London happens in industrial yards converted into bronze foundries in Deptford, in light-filled Victorian warehouses along the Regent’s Canal, and in quiet independent presses in Bloomsbury.',
      'Visiting an artist’s studio in Hackney Wick before their work arrives at an international art fair provides an understanding of creative intention that no gallery wall can replicate. You see the half-formed maquettes, the pigments ground by hand, and the preliminary sketches pinned to whitewashed brickwork.',
      'TGLC coordinates private Saturday studio journeys where members meet vanguard British and international artists in intimate, unhurried dialogue, often acquiring works directly for their family foundations.'
    ],
    editorialImages: [
      '/assets/aistudio/01-Neo-Bankside-Luxury-Penthouse-London-England-UK-640x360_c8f27abb.jpg',
      '/assets/aistudio/royal_opera_gallery.jpg'
    ],
    subheadings: [
      {
        title: 'Deptford & Greenwich: The Heavy Foundry Renaissance',
        paragraphs: [
          'Along the tidal reaches of Deptford Creek, surviving industrial yards have become home to sculptors working in cast iron, bronze, and architectural ceramics. Here, the process of lost-wax casting and sand-moulding takes place on an epic scale.',
          'Through our private introductions, members observe molten metal pours at 1,200 degrees Celsius, followed by conversations over black coffee in the artist’s drawing office. These encounters offer an intimate appreciation of physical labour that elevates the finished sculpture into an artefact of immense human power.'
        ]
      },
      {
        title: 'Hackney Wick: Vanguard Painting & Light-Filled Lofts',
        paragraphs: [
          'In the former industrial buildings framing the River Lee Navigation, contemporary painters are producing large-scale canvases that explore texture, colour field theory, and post-digital narrative. These ateliers remain largely invisible to casual visitors.',
          'Dr. Helena Zhang-Somerset maintains ongoing dialogues with eighteen working painters across East London, curating private studio visits that allow collectors to engage with works in progress months before gallery representation or public museum acquisition.'
        ]
      }
    ]
  },
  {
    slug: 'the-english-countryside-reconsidered',
    title: 'The English Countryside, Reconsidered',
    subtitle: 'How traditional rural estates are being reinvented through regenerative agriculture, wild wellness, and culinary ambition.',
    category: 'Travel Notes',
    readTime: '11 min read',
    publishDate: '04 September 2026',
    author: 'Camilla Vance-Moreau',
    authorRole: 'Director of Private Office & Client Relations',
    excerpt: 'The English country house is undergoing a quiet renaissance. Today’s weekend retreats prioritize biodynamic kitchen gardens, wild swimming lakes, and discreet high-speed tech.',
    heroImage: '/assets/aistudio/cotswolds_manor_estate.jpg',
    pullQuote: 'The new English country life is not about formality; it is about waking to birdsong, walking barefoot across dewy grass, and eating food harvested an hour before.',
    contentParagraphs: [
      'For centuries, the English country weekend was governed by rigid social choreography: formal shooting parties, dress codes for dinner, and draughty bedrooms warmed only by open fireplaces. Today, a new generation of estate custodians has completely reimagined what rural luxury looks like.',
      'The modern country estate combines architectural heritage—fine Jacobean proportions, hand-carved stone fireplaces, ancient walled gardens—with the highest contemporary environmental standards. Heating is powered by ground-source heat pumps, water is filtered from natural estate springs, and kitchen gardens supply 90% of the household table.',
      'For London members, having an estate within ninety minutes of the capital provides the ultimate pressure valve. A Friday afternoon helicopter departure from Battersea allows one to be seated in a restored manor house in Oxfordshire or Hampshire before the London sunset fades.'
    ],
    editorialImages: [
      '/assets/aistudio/hero_luxury_london_residence_1794298893032.jpg',
      '/assets/aistudio/imagereader_3bfec03a.webp'
    ],
    subheadings: [
      {
        title: 'The Regenerative Kitchen Table',
        paragraphs: [
          'The centre of contemporary country living is no longer the formal dining hall; it is the expansive flagstoned kitchen. Estates in the Cotswolds and Sussex now employ resident chefs who collaborate directly with head gardeners and local organic graziers.',
          'Vegetables are pulled from rich compost hours before service, heritage-breed sheep graze ancient chalk downland, and wild herbs are dried in adjacent glasshouses. The resulting table is rich in flavour, provenance, and vital nourishment.'
        ]
      },
      {
        title: 'Turnkey Rural Provisioning from Albemarle Street',
        paragraphs: [
          'Operating a rural estate from a distance can easily become an operational burden. TGLC provides comprehensive absentee management: pre-arrival heating calibration, pool and tennis court servicing, wine cellar replenishment, and staffing arrangements with vetted local housekeepers and private drivers.',
          'When members arrive at their country lodge on Friday night, logs are burning in the hearth, preferred groceries are arranged in the pantry, and children’s bedrooms are dressed with fresh Egyptian cotton.'
        ]
      }
    ]
  },
  {
    slug: 'the-private-dinner-why-the-table-still-matters',
    title: 'The Private Dinner: Why the Table Still Matters',
    subtitle: 'In an era of digital disconnection, the shared evening table remains the ultimate sanctuary for genuine conversation.',
    category: 'Dining & Entertaining',
    readTime: '10 min read',
    publishDate: '21 August 2026',
    author: 'Mickell Washington',
    authorRole: 'Founder & Managing Director',
    excerpt: 'A great private dinner is an architectural feat. How lighting, seating dynamics, acoustic control, and unpretentious cooking create unforgettable evenings.',
    heroImage: '/assets/aistudio/mayfair_fine_dining.jpg',
    pullQuote: 'When you close the door to a private room and the candles are lit, the outside world ceases to exist. People lean forward. Truths are spoken.',
    contentParagraphs: [
      'In our work with international leaders, founders, and family principals, we observe a universal truth: significant decisions are rarely finalized in boardrooms or through video calls. They are born around a dinner table, when the second course has been cleared and the guard has been dropped.',
      'Hosting an exceptional private dinner is an art of delicate orchestration. The room must feel warm, never cavernous. The acoustics must allow someone to speak without raising their voice, yet prevent sound from carrying beyond the table. The lighting must flatter, casting soft glows across linen and glassware.',
      'Most importantly, the cooking should possess soul. Overly intellectualized plates that require fifteen minutes of explanation from a waiter disrupt the conversational cadence. What is needed is immaculate product—turbot caught that morning off the Cornish coast, wild morels, a roast prepared with surgical precision—accompanied by wines poured with quiet generosity.'
    ],
    editorialImages: [
      '/assets/aistudio/Copper-Club_b58a00e9.jpg',
      '/assets/aistudio/tglc_st_james_salon.jpg'
    ],
    subheadings: [
      {
        title: 'The Geometry of Seating & Conversational Chemistry',
        paragraphs: [
          'The greatest host considers guest seating with the care of an ambassador placing diplomatic envoys. Placing individuals of contrasting passions—an astrophysicist beside a contemporary art collector, a private equity founder next to a classical cellist—generates unexpected conversational sparks.',
          'At TGLC House, our private dining rooms on Albemarle Street seat up to sixteen guests around antique mahogany tables, flanked by original oil portraits and discreet acoustic drapery that ensures discussions remain strictly confidential.'
        ]
      },
      {
        title: 'Cellar Provenance: Pairing Without Pretense',
        paragraphs: [
          'Great wine should serve the table, not dominate it. Our sommelier team sources single-owner cellar collections from Bordeaux, Burgundy, and Piedmont, decanting bottles at precise intervals so that vintages open as the meal progresses.',
          'Billing is handled seamlessly through the member’s central account, meaning no paper receipts, card machines, or payment interruptions ever disturb the evening’s final conversation.'
        ]
      }
    ]
  },
  {
    slug: 'objects-with-a-story-a-more-personal-approach-to-gifting',
    title: 'Objects with a Story: A More Personal Approach to Gifting',
    subtitle: 'Moving beyond generic luxury branding towards bespoke commissions and items of genuine provenance.',
    category: 'Objects of Desire',
    readTime: '9 min read',
    publishDate: '10 August 2026',
    author: 'Camilla Vance-Moreau',
    authorRole: 'Director of Private Office & Client Relations',
    excerpt: 'Why an author-inscribed first edition or a hand-bound leather journal carries a hundred times more emotional resonance than standard store-bought luxury.',
    heroImage: '/assets/aistudio/savile_row_bespoke.jpg',
    pullQuote: 'The finest gifts are not bought off a shelf; they are discovered through patient scholarship and quiet artisan relationships.',
    contentParagraphs: [
      'The challenge of gifting for ultra-high-net-worth individuals is well known: they already possess whatever they desire. Any object that can be purchased simply with a credit card at a flagship boutique on Bond Street lacks surprise.',
      'The answer lies in curiosity and scholarship. Finding the specific historical treatise that sparked their interest during university, or commissioning an artisan to hand-craft a bespoke gaming board using fallen wood from their family estate.',
      'These are the gifts that remain on desks for decades, touched with fondness, because they demonstrate that someone took the time to truly listen.'
    ],
    editorialImages: [
      '/assets/aistudio/bond_street_jewellery.jpg',
      '/assets/aistudio/About-Luxury-Watches_77cb4520.jpg'
    ],
    subheadings: [
      {
        title: 'The Antiquarian Discovery',
        paragraphs: [
          'Locating an author-inscribed 1925 first edition of The Great Gatsby or an early edition of Churchill’s war memoirs involves searching private library ledgers rather than online marketplaces. TGLC works with antiquarian book scholars across London and Oxford who examine paper rag condition, binding integrity, and provenance signatures.',
          'Each volume is presented in a custom-built archival solander box lined with acid-free marbled paper and stamped with the recipient’s initials in 22-carat gold leaf.'
        ]
      },
      {
        title: 'Master Leathercraft & Commissioned Silver',
        paragraphs: [
          'From bridle leather document folios cut by hand in Shropshire to bespoke silver cocktail shakers engraved with family crests by Goldsmiths’ Hall craftsmen, commissions turn material into legacy.',
          'We oversee the entire timeline—from initial design sketch to final hand-delivery—ensuring that every milestone birthday or anniversary is commemorated with peerless artistry.'
        ]
      }
    ]
  },
  {
    slug: 'the-quiet-luxury-of-a-beautifully-managed-home',
    title: 'The Quiet Luxury of a Beautifully Managed Home',
    subtitle: 'The unseen operational infrastructure behind London’s most serene private residences.',
    category: 'Private Residences',
    readTime: '12 min read',
    publishDate: '25 July 2026',
    author: 'Mickell Washington',
    authorRole: 'Founder & Managing Director',
    excerpt: 'True domestic luxury is not about gilded cornices; it is stepping into a home where the climate is balanced, the fridge is stocked with your preferred roast, and nothing ever fails.',
    heroImage: '/assets/aistudio/hero_luxury_london_residence_1794298893032.jpg',
    pullQuote: 'A great residence should produce an immediate drop in blood pressure the moment the front door clicks shut.',
    contentParagraphs: [
      'A great residence should produce an immediate drop in blood pressure the moment the front door clicks shut. That feeling of absolute ease is not an accident of architecture; it is the result of continuous, meticulous domestic management.',
      'From seasonal HVAC servicing to maintaining flawless silver without abrasive chemicals, every detail matters. We examine how dedicated residence management liberates families to enjoy their homes rather than manage them.',
      'Our team coordinates with specialized conservation contractors, vetted estate staff, and independent building engineers to keep your townhouse or country estate operating like clockwork, whether you are in residence or travelling abroad.'
    ],
    editorialImages: [
      '/assets/aistudio/01-Lethbridge-House-20-Cornwall-Terrace-Marylebone-London-UK-640x360_b59e806c.jpg',
      '/assets/aistudio/property-category-highlight-82_3dc00e71.jpg'
    ],
    subheadings: [
      {
        title: 'Preventative Maintenance & Building Physics',
        paragraphs: [
          'Historic Georgian townhouses in Mayfair and Belgravia require delicate stewardship. Solid brick walls, lime plaster, and heritage sash windows respond continuously to London’s seasonal humidity shifts.',
          'TGLC coordinates quarterly audits covering thermal envelope performance, water pressure equalization, slate roof flashing, and discreet smart-home automation checks, avoiding emergency callouts before they ever arise.'
        ]
      },
      {
        title: 'Domestic Protocol & Staff Harmonization',
        paragraphs: [
          'A household operates at its highest tier when domestic staff share a single standard of discreet excellence. We draft customized household manuals detailing silver polishing procedures, wine cellar temperature logs, and family linen rotation schedules.',
          'Whether your home requires a permanent estate manager, a travelling butler, or weekend relief staff, all introduced personnel undergo extensive vetting and non-disclosure execution.'
        ]
      }
    ]
  },
  {
    slug: 'florence-beyond-the-familiar',
    title: 'Florence Beyond the Familiar',
    subtitle: 'Private palazzo doors, closed chapel viewings, and artisanal workshops across the Oltrarno.',
    category: 'Travel Notes',
    readTime: '11 min read',
    publishDate: '12 July 2026',
    author: 'Camilla Vance-Moreau',
    authorRole: 'Director of Private Office & Client Relations',
    excerpt: 'How to experience the Renaissance capital in tranquil intimacy, avoiding the tourist corridors to find private gardens and historic noble libraries.',
    heroImage: '/assets/aistudio/florence_palazzo_courtyard.jpg',
    pullQuote: 'Florence is an intimate city of private courtyards; behind stone walls that have stood since the Quattrocento lies an untouched world of human warmth.',
    contentParagraphs: [
      'Florence can overwhelm with crowds during peak seasons, yet just across the Arno, behind heavy iron gates, lies an untouched city of private nobility and master craftsmen.',
      'We guide members through private Renaissance palazzi where the original descendants still reside, arranging private viewings of private art archives that have remained in family hands since the Medici era.',
      'Evenings are best spent on private rooftop terraces overlooking Brunelleschi’s dome, where a chilled glass of local Trebbiano and unhurried conversation restore the romance of Tuscany.'
    ],
    editorialImages: [
      '/assets/aistudio/royal_opera_gallery.jpg',
      '/assets/aistudio/mayfair_fine_dining.jpg'
    ],
    subheadings: [
      {
        title: 'The Noble Palazzi of the Oltrarno',
        paragraphs: [
          'Cross the Ponte Santa Trinita into the Oltrarno, and the pace of Florence shifts. Here, behind rusticated stone façades, families preserve private courtyards shaded by centuries-old lemon trees and fountains designed by Giambologna.',
          'TGLC arranges private receptions with palazzo custodians who open private family chapels and private frescoed ballrooms that remain entirely closed to general tour itineraries.'
        ]
      },
      {
        title: 'Master Shoemakers & Bookbinders',
        paragraphs: [
          'In quiet alleys off Via Maggio, artisans continue to craft bespoke leather shoes on hand-carved wooden lasts, and marblers create paper using 16th-century sizing techniques. An afternoon spent in these workshops reveals why Italian craftsmanship remains the global standard of hand-made luxury.'
        ]
      }
    ]
  },
  {
    slug: 'what-to-ask-before-chartering-a-yacht',
    title: 'What to Ask Before Chartering a Yacht',
    subtitle: 'The crucial questions that separate an ordinary cruise from an extraordinary maritime journey.',
    category: 'Travel Notes',
    readTime: '12 min read',
    publishDate: '29 June 2026',
    author: 'Julian Sterling',
    authorRole: 'Director of Fleet, Aviation & Tactical Security',
    excerpt: 'Why the crew chemistry, chef philosophy, and captain’s local anchorage knowledge matter far more than the vessel’s length overall.',
    heroImage: '/assets/aistudio/MAIN-IMAGE-Shangri-La-The-Shard-London-Illuminate-Yacht-_571087f0.jpg',
    pullQuote: 'A yacht is merely steel and aluminium; it is the crew’s instinct, kindness, and maritime precision that make it a sanctuary.',
    contentParagraphs: [
      'Most charter brokers focus on gross tonnage, swimming platform dimensions, and hull finish. While these are important, experienced charterers know that the success of a charter rests 80% on the captain and crew.',
      'A brilliant captain knows the secluded anchorage on the leeward side of the island where the wind drops to zero at sunset. A gifted chef understands how to create light, invigorating meals tailored to days spent in salt water.',
      'We work directly with superyacht managers to conduct in-depth interviews with the crew dynamic before presenting charter options, ensuring an effortless maritime experience for your family.'
    ],
    editorialImages: [
      '/assets/aistudio/imagereader_3bfec03a.webp',
      '/assets/aistudio/hidden_nocturne_stealth_boat_1794295325076.jpg'
    ],
    subheadings: [
      {
        title: 'Captain Anchorage Intelligence & Weather Telemetry',
        paragraphs: [
          'The Mediterranean in July and August can bring localized mistral or meltemi winds that transform tranquil bays into choppy anchorages. A seasoned captain anticipates weather fronts 24 hours in advance, pivoting itineraries to sheltered coves without disrupting guest relaxation.',
          'We evaluate captain tenure and local navigational history in the Cyclades, Balearics, and Amalfi Coast before recommending a charter vessel.'
        ]
      },
      {
        title: 'The Onboard Culinary Standard',
        paragraphs: [
          'Living on the water demands food that is fresh, clean, and vibrant. Ahead of embarkation, your TGLC manager establishes a comprehensive provisioning dossier: favourite olive oils, dietary nuances, specific champagne vintages, and morning espresso preferences.',
          'Local fish is sourced daily from artisanal fishing boats off the stern, paired with produce brought aboard from organic regional markets.'
        ]
      }
    ]
  },
  {
    slug: 'a-collectors-weekend-in-london',
    title: 'A Collector’s Weekend in London',
    subtitle: 'An insider itinerary through the capital’s most discerning auction houses, private dealers, and framing ateliers.',
    category: 'The Cultural Edit',
    readTime: '11 min read',
    publishDate: '14 June 2026',
    author: 'Dr. Helena Zhang-Somerset',
    authorRole: 'Head of Cultural Curation & Sub-Rosa Operations',
    excerpt: 'Navigating London with an eye for provenance, scholarship, and quiet discoveries.',
    heroImage: '/assets/aistudio/royal_opera_gallery.jpg',
    pullQuote: 'London is the world capital of connoisseurship; scholarship and provenance are spoken here as native tongues.',
    contentParagraphs: [
      'London is the world capital of connoisseurship. Beyond the major public sales lie private viewing rooms where pieces of extraordinary museum quality are examined under natural northern light.',
      'We chart a route through Mayfair’s specialist dealers, historic framing ateliers in St James’s, and the private archives of antiquarian print collectors.',
      'The experience concludes with tea in an 18th-century library with an independent provenance researcher, examining the physical stamps and exhibition histories that transform an artwork from an object into historical testimony.'
    ],
    editorialImages: [
      '/assets/aistudio/bond_street_jewellery.jpg',
      '/assets/aistudio/About-Luxury-Watches_77cb4520.jpg'
    ],
    subheadings: [
      {
        title: 'Auction House Private Rooms: Beyond the Sale Floor',
        paragraphs: [
          'During landmark auction weeks, the public sales room can be crowded and pressurized. TGLC members inspect marquee lots in private viewing galleries 48 hours prior to bidding.',
          'Accompanied by an independent art historian, pieces are examined out of their frames, canvas relining history is reviewed, and condition reports are cross-checked with ultraviolet light.'
        ]
      },
      {
        title: 'The Archival Framing Atelier',
        paragraphs: [
          'A museum-grade frame is not decoration; it is a conservation vessel. We introduce members to historic carvers in London who hand-carve basswood and apply genuine water gilding using 23.75-carat gold leaf and traditional rabbit-skin glue bole, preserving works for generations.'
        ]
      }
    ]
  },
  {
    slug: 'the-new-culture-of-private-hospitality',
    title: 'The New Culture of Private Hospitality',
    subtitle: 'How the definition of luxury service has evolved from deference to intuitive, intelligent empathy.',
    category: 'Member Stories',
    readTime: '10 min read',
    publishDate: '01 June 2026',
    author: 'Mickell Washington',
    authorRole: 'Founder & Managing Director',
    excerpt: 'Why modern principals reject stiff, formal deference in favour of calm competence, authentic warmth, and razor-sharp intellect.',
    heroImage: '/assets/aistudio/tglc_st_james_salon.jpg',
    pullQuote: 'Our members do not want servants who flatter them; they want peers who understand their world, anticipate their needs, and solve complex problems without drama.',
    contentParagraphs: [
      'For decades, luxury hospitality was associated with white gloves, bowed heads, and scripted pleasantries. Today, that style feels obsolete and artificial.',
      'Our members do not want servants who flatter them; they want peers who understand their world, anticipate their needs, and solve complex problems without drama. It is hospitality based on mutual respect, cultural fluency, and sound judgement.',
      'When an organization achieves this balance, lifestyle management stops feeling like a transaction and begins to feel like a discreet, indispensable partnership.'
    ],
    editorialImages: [
      '/assets/aistudio/mayfair_fine_dining.jpg',
      '/assets/aistudio/U2xzhqR8NqpZGDRNVta6Gk_fe26a8c6.jpg'
    ],
    subheadings: [
      {
        title: 'Anticipation Over Reaction',
        paragraphs: [
          'True service is measured by the requests a client never needs to articulate. If an international flight is delayed by three hours, the chauffeur’s staging time, the restaurant’s kitchen hold, and the residence’s heating are adjusted automatically.',
          'The principal simply walks off the aircraft and into a vehicle, unaware of the ten coordination calls made while they were in the air.'
        ]
      },
      {
        title: 'Tone & Discretion: The Currency of Trust',
        paragraphs: [
          'Working inside private family offices requires absolute emotional intelligence. Our senior lifestyle managers are trained in diplomatic discretion, operating as invisible, calm guardians of your time and household privacy.'
        ]
      }
    ]
  },
  {
    slug: 'close-protection-architecture-tactical-privacy',
    title: 'The Architecture of Discreet Close Protection: Invisible Security in Prime London',
    subtitle: 'How former British diplomatic and military protection officers safeguard families without conspicuous militarism.',
    category: 'London Intelligence',
    readTime: '13 min read',
    publishDate: '15 November 2026',
    author: 'Julian Sterling',
    authorRole: 'Director of Fleet, Aviation & Tactical Security',
    excerpt: 'Security in prime residential London is an exercise in route intelligence, polite deterrence, and psychological calmness rather than sirens and bodyguards in sunglasses.',
    heroImage: '/assets/aistudio/close_protection_security.jpg',
    pullQuote: 'The most effective security detail in Mayfair is the one no passerby ever realizes is standing in the room.',
    contentParagraphs: [
      'Conspicuous security is often an invitation for attention. In a city like London—where sovereign families, prominent entrepreneurs, and global figures navigate private galleries, schools, and dinners—true protection is founded on total integration and advance intelligence.',
      'Julian Sterling directs TGLC’s tactical security practice, drawing specialists exclusively from the British Armed Forces (Special Forces, Parachute Regiment), the Metropolitan Police Royalty and Specialist Protection Command (RaSP), and UK Diplomatic Protection groups.',
      'Our officers dress in tailored Savile Row charcoal suits, carry bespoke encrypted micro-earpieces, and maintain an unobtrusive, gentle accompaniment that provides safety without creating social friction for your children or guests.'
    ],
    editorialImages: [
      '/assets/aistudio/luxury_sprinter_jetvan.jpg',
      '/assets/aistudio/rolls-royce-cullinan-chauffeur-service-events_d3e6e421.webp'
    ],
    subheadings: [
      {
        title: 'Advance Reconnaissance & Chokepoint Mapping',
        paragraphs: [
          'Every journey begins hours before the principal steps into a vehicle. Our team conducts physical reconnaissance of venue loading bays, emergency exits, medical trauma centres, and traffic chokepoints along prime corridors (Park Lane, Piccadilly, Knightsbridge).',
          'Primary, secondary, and tertiary evacuation routes are mapped in real-time, cross-referencing live Metropolitan Police communications and municipal traffic telemetry.'
        ]
      },
      {
        title: 'Executive Fleet Staging & VIP Sprinter Mobility',
        paragraphs: [
          'When multiple family members or advisory delegations travel together, standard saloons require splitting the party across separate cars. We deploy bespoke black Mercedes-Benz Sprinter VIP JetVans, custom-fitted with first-class captain seats, encrypted satellite Wi-Fi, and soundproof partitions.',
          'The vehicle functions as a mobile command post, allowing principals to conduct confidential briefings between airport tarmacs and central London residences in total security.'
        ]
      }
    ]
  },
  {
    slug: 'the-art-of-bespoke-tailoring-savile-row',
    title: 'The Art of Bespoke Tailoring: Behind the Shears on Savile Row',
    subtitle: 'From virgin Scottish cashmere to 60 hours of hand stitching: how master cutters create a modern second skin.',
    category: 'Objects of Desire',
    readTime: '12 min read',
    publishDate: '10 November 2026',
    author: 'Dr. Helena Zhang-Somerset',
    authorRole: 'Head of Cultural Curation & Sub-Rosa Operations',
    excerpt: 'A comprehensive investigation into the heritage houses of Savile Row, bespoke basted fittings, and why true bespoke tailoring remains an irreplaceable British art form.',
    heroImage: '/assets/aistudio/savile_row_bespoke.jpg',
    pullQuote: 'A bespoke suit does not announce itself with logos; it is recognized by the gentle drape across the shoulder and the stillness it brings to the wearer.',
    contentParagraphs: [
      'Along a quiet street of Georgian townhouses behind Regent Street, the craft of bespoke tailoring has remained virtually unchanged for over two centuries. Here on Savile Row, suits are cut by hand from individual brown-paper patterns drafted specifically for each client’s posture.',
      'Unlike made-to-measure tailoring—which alters existing factory patterns—pure bespoke is born from a blank piece of paper and raw cloth. Over three separate fittings, master cutters shape horsehair canvas, hand-pad lapels with thousands of invisible stitches, and mold wool with heavy damp pressing irons.',
      'TGLC coordinates closed-door appointments with head cutters who attend members in private Albemarle Street drawing rooms or in their private residences across London, Geneva, and New York.'
    ],
    editorialImages: [
      '/assets/aistudio/bond_street_jewellery.jpg',
      '/assets/aistudio/tglc_st_james_salon.jpg'
    ],
    subheadings: [
      {
        title: 'The Basted Fitting: Sculpting in Raw Linen',
        paragraphs: [
          'The crucial moment in bespoke creation is the first basted fitting. The suit is assembled with temporary white basting thread, without lining or finished lapels. The cutter evaluates posture, shoulder slope, and natural balance, cutting into the cloth with shears to adjust the drape.',
          'It is during this session that the jacket begins to conform to the human body, creating an effortless garment that feels as light as a cardigan yet maintains sovereign architectural poise.'
        ]
      },
      {
        title: 'Cloth Provenance: The Yorkshire & Scottish Mills',
        paragraphs: [
          'The soul of British tailoring is the cloth. We introduce members to heritage mills such as Fox Brothers in Somerset (inventors of flannel), Loro Piana, and Scabal, selecting rare superfine 180s wools, vicuña blends, and crisp tropical worsteds designed for international travel.'
        ]
      }
    ]
  },
  {
    slug: 'the-sovereign-wine-cellar-provenance-acquisitions',
    title: 'The Sovereign Wine Cellar: Provenance, En Primeur Allocations & Archival Storage',
    subtitle: 'How multi-generational collectors steward fine wine as cultural heritage and liquid capital.',
    category: 'Dining & Entertaining',
    readTime: '14 min read',
    publishDate: '05 November 2026',
    author: 'Mickell Washington',
    authorRole: 'Founder & Managing Director',
    excerpt: 'Navigating prime Bordeaux allocations, Domaine de la Romanée-Conti verticals, and specialized subterranean bonded storage in Wiltshire stone mines.',
    heroImage: '/assets/aistudio/mayfair_fine_dining.jpg',
    pullQuote: 'Fine wine is time captured in glass; its value rests entirely on the integrity of the cellar in which it slept.',
    contentParagraphs: [
      'Building an enduring wine collection is an exercise in patience and scholarship. The world’s greatest domaines—from Vosne-Romanée to Pauillac—allocate their finest cases directly to historic merchants who have championed their estates for generations.',
      'In London, the centre of the global wine trade is anchored in the historic cellars of St James’s. Here, collectors purchase en primeur allocations that will not reach maturity for two decades, resting under bond in subterranean limestone mines in Wiltshire where temperature and humidity remain constant year-round.',
      'TGLC’s wine desk advises family offices and collectors on cellar acquisitions, single-owner provenance verifications, and private tastings with estate ambassadors.'
    ],
    editorialImages: [
      '/assets/aistudio/Copper-Club_b58a00e9.jpg',
      '/assets/aistudio/hidden_subterranean_vault_1794295323175.jpg'
    ],
    subheadings: [
      {
        title: 'Single-Owner Provenance: Guarding Against Counterfeits',
        paragraphs: [
          'As auction prices for mature Burgundy and Bordeaux have surged, the risk of counterfeit bottles has risen exponentially. We verify bottle provenance through original producer invoices, high-resolution cork inspection, glass bottle mold analysis, and ullage verification.',
          'Every case acquired through our advisory comes directly from estate cellars or verified single-owner family collections.'
        ]
      },
      {
        title: 'Cellar Logistics & In-Residence Sommelier Staging',
        paragraphs: [
          'When hosting a dinner party at your London townhouse, serving mature vintages requires careful advance staging. We manage the delicate transit of bottles under climate control, stand them upright 48 hours prior to eliminate sediment disturbance, and decant each vintage at the exact hour required for optimal expression.'
        ]
      }
    ]
  },
  {
    slug: 'private-aviation-fleet-selection-global-ranges',
    title: 'The Private Aviation Manifesto: Heavy Jets, Airport Slot Access & Zero Friction',
    subtitle: 'Why airframe matching and diplomatic FBO handling matter far more than hourly charter rates.',
    category: 'Travel Notes',
    readTime: '13 min read',
    publishDate: '28 October 2026',
    author: 'Julian Sterling',
    authorRole: 'Director of Fleet, Aviation & Tactical Security',
    excerpt: 'An operational breakdown of ultra-long-range aviation: Bombardier Global 7500, Gulfstream G650ER, and rapid tarmac dispatch out of RAF Northolt and Farnborough.',
    heroImage: '/assets/aistudio/private_jet_interior_suite.jpg',
    pullQuote: 'Private aviation is the preservation of time; when executed with clinical precision, international borders cease to be an obstacle.',
    contentParagraphs: [
      'In private aviation, true value is not measured by discount charter brokers; it is defined by airworthiness, crew credentials, cabin pressurization altitude, and airport slot access.',
      'Flying transatlantic on an ultra-long-range jet such as the Bombardier Global 7500 or Gulfstream G650ER allows passengers to cruise at 51,000 feet, far above commercial airline corridors and atmospheric turbulence. The lower cabin altitude—equivalent to just 2,900 feet above sea level—means arriving in Los Angeles, Tokyo, or Singapore refreshed, with zero travel fatigue.',
      'Julian Sterling coordinates direct apron access at RAF Northolt, Farnborough, and Biggin Hill, ensuring that members step directly from chauffeured vehicles onto the aircraft airstairs without entering a public terminal.'
    ],
    editorialImages: [
      '/assets/aistudio/698157105b08bd0b828e954b_file_k95qb05z_c7bc7f74.png',
      '/assets/aistudio/luxury_sprinter_jetvan.jpg'
    ],
    subheadings: [
      {
        title: 'RAF Northolt vs London Farnborough: The Strategic Choice',
        paragraphs: [
          'RAF Northolt, situated just 13 miles northwest of central London, is an active Royal Air Force base handling private diplomatic and VIP flights. For members residing in Mayfair, Belgravia, or Kensington, arrival at Northolt offers the fastest transit time to the city centre.',
          'Farnborough Airport, dedicated exclusively to business aviation with award-winning architecture and private hangar facilities, provides complete privacy for intercontinental departures and bespoke catering staging.'
        ]
      },
      {
        title: 'Cabin Environmental Nuances & Culinary Curation',
        paragraphs: [
          'Standard airline catering fails at 40,000 feet due to dry cabin humidity dulling taste receptors. We coordinate with private Mayfair kitchens to prepare menus designed specifically for high-altitude dining: unctuous consommés, rich umami-driven sauces, and fresh organic herbs that retain vibrant aroma in flight.'
        ]
      }
    ]
  },
  {
    slug: 'the-family-office-concierge-synergy',
    title: 'The Family Office & Lifestyle Concierge: An Essential Operational Synergy',
    subtitle: 'How sovereign multi-family offices harmonise financial stewardship with on-the-ground lifestyle execution.',
    category: 'Member Stories',
    readTime: '12 min read',
    publishDate: '20 October 2026',
    author: 'Camilla Vance-Moreau & Mickell Washington',
    authorRole: 'Director of Private Office & Managing Director',
    excerpt: 'Family office CEOs and private bankers focus on asset preservation and governance; TGLC provides the operational muscle that keeps daily family life running seamlessly.',
    heroImage: '/assets/aistudio/01-Neo-Bankside-Luxury-Penthouse-London-England-UK-640x360_c8f27abb.jpg',
    pullQuote: 'A family office manages capital; we manage life. When the two operate in complete harmony, the family experiences total serenity.',
    contentParagraphs: [
      'Multi-family offices manage complex investment portfolios, cross-border corporate governance, estate planning, and tax structures. Yet when a principal needs an off-market townhouse in Knightsbridge within two weeks, or an urgent private jet charter from London to Zurich during a peak winter weekend, financial structures alone cannot solve the problem.',
      'TGLC operates as the trusted executive arm for family offices. We interface seamlessly with family office Chief Executives, Chief Financial Officers, and Executive Assistants, executing complex lifestyle mandates while adhering strictly to existing reporting and expense governance.',
      'All expenditures are consolidated into clear monthly pass-through statements with transparent auditing, eliminating administrative chaos for family accounting teams.'
    ],
    editorialImages: [
      '/assets/aistudio/hero_luxury_london_residence_1794298893032.jpg',
      '/assets/aistudio/tglc_st_james_salon.jpg'
    ],
    subheadings: [
      {
        title: 'Confidentiality & Non-Disclosure Rigour',
        paragraphs: [
          'Family office principals require absolute confidentiality. TGLC staff operate under comprehensive non-disclosure agreements, using end-to-end encrypted messaging channels and pseudonym bookings for hotels, dining reservations, and travel tickets.',
          'The principal’s family name never appears on public hotel guest registers or third-party reservation databases.'
        ]
      },
      {
        title: 'Multi-Generational Support: From Education to Estates',
        paragraphs: [
          'Our advisory encompasses the entire family ecosystem: introducing Oxford and Cambridge academic mentors for next-generation principals, coordinating relocation orientations, and managing private equestrian retreats in the English countryside.'
        ]
      }
    ]
  },
  {
    slug: 'rare-chronographs-and-the-auction-block',
    title: 'Rare Chronographs & the Auction Block: Navigating Geneva, London & New York Sales',
    subtitle: 'Insider strategies for bidding on museum-grade Patek Philippe, Rolex Daytona, and FP Journe references.',
    category: 'Objects of Desire',
    readTime: '14 min read',
    publishDate: '15 October 2026',
    author: 'Dr. Helena Zhang-Somerset',
    authorRole: 'Head of Cultural Curation & Sub-Rosa Operations',
    excerpt: 'Condition, dial originality, and archive extracts: what every serious watch collector must evaluate before raising a paddle at major horological auctions.',
    heroImage: '/assets/aistudio/About-Luxury-Watches_77cb4520.jpg',
    pullQuote: 'In vintage horology, original condition trumps perfection; an unpolished case with honest patina is worth five polished examples.',
    contentParagraphs: [
      'The international auction market for collectible timepieces has evolved into a sophisticated discipline where six-figure discrepancies hinge on minute typographical nuances: the shape of an accent on a dial signature, the serif of a numeral, or the chemical composition of luminous markers under ultraviolet light.',
      'Collectors navigating major seasonal sales in Geneva, London, and New York face an environment where auction catalogue descriptions must be verified through independent physical examination. At TGLC, our horology advisory conducts hands-on loupe inspections of marquee lots, matching case numbers against manufacturer extract ledgers and verifying movement components.',
      'We represent members on the auction floor or execute confidential telephone bids on their behalf, ensuring strategic discipline and preventing emotional over-bidding.'
    ],
    editorialImages: [
      '/assets/aistudio/bond_street_jewellery.jpg',
      '/assets/aistudio/savile_row_bespoke.jpg'
    ],
    subheadings: [
      {
        title: 'Dial Originality & Ultraviolet Spectroscopy',
        paragraphs: [
          'The dial represents up to 80% of a vintage watch’s commercial and aesthetic value. We inspect dials under high-power stereomicroscopes and UV lamps to detect relumed plots, reprinted text, or cosmetic touch-ups.',
          'Authentic tropicalization—where black dials fade naturally to warm chocolate brown through decades of exposure to ambient light—is verified to distinguish natural aging from artificial heat treatments.'
        ]
      },
      {
        title: 'The Rise of Modern Independent Horology',
        paragraphs: [
          'While vintage Rolex and Patek Philippe remain foundational, independent masters like Kari Voutilainen, Rexhep Rexhepi (Akrivia), and FP Journe have commanded record auction interest. We advise collectors on early serial-number production runs and bespoke dial variants that represent enduring horological significance.'
        ]
      }
    ]
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'Membership',
    question: 'Who is The Global Luxury Consortium designed for?',
    answer: 'TGLC is curated specifically for ultra-high-net-worth individuals, families, company founders, global executives, and family offices who lead complex, multi-jurisdictional lives and value discretion, precision, and intelligent access over mass-market luxury.'
  },
  {
    id: 'faq-02',
    category: 'Admissions',
    question: 'How do new members join TGLC?',
    answer: 'Membership is by referral or private introduction. Prospective members submit an initial inquiry via our website or receive an introduction from an existing member. Our Director of Membership then conducts an unhurried, private conversation to evaluate mutual suitability and understand your lifestyle requirements.'
  },
  {
    id: 'faq-03',
    category: 'Membership',
    question: 'What are the three membership pathways?',
    answer: 'We offer three distinct charters: The London Membership (for members focused on a connected London presence, cultural access, and everyday lifestyle management); The Global Membership (for internationally mobile principals and families navigating multi-country travel, residences, and logistics); and The Private Office (a fully bespoke arrangement tailored to multi-family offices and complex family structures).'
  },
  {
    id: 'faq-04',
    category: 'Membership',
    question: 'Why are membership fees not published openly online?',
    answer: 'Every membership charter at TGLC is bespoke. Because the scope of requirements varies dramatically—from an individual needing selective London cultural access to an extended family with multiple properties and global private aviation—terms and retainers are presented following our private introductory conversation.'
  },
  {
    id: 'faq-05',
    category: 'Services & Scope',
    question: 'What is a Dedicated Lifestyle Manager, and how do we communicate?',
    answer: 'Every member is paired with a specific senior Lifestyle Manager at TGLC House who serves as their primary intellectual and operational partner. You can communicate via our private member telephone line, encrypted mobile messaging (WhatsApp/Signal), secure email, or through our private member portal.'
  },
  {
    id: 'faq-06',
    category: 'Services & Scope',
    question: 'How do you handle urgent or last-minute arrangements?',
    answer: 'Our Member Support Desk operates 24 hours a day, 365 days a year. Established members can request urgent private aviation charters, same-day chauffeur arrangements, or last-minute table changes around the clock with immediate response times.'
  },
  {
    id: 'faq-07',
    category: 'Discretion & Privacy',
    question: 'How strictly is member confidentiality maintained?',
    answer: 'Confidentiality is our primary asset. We operate under stringent non-disclosure agreements, implement strict need-to-know protocols across all vendor introductions, and never publish client names, photographs, or social media endorsements. Member data is held in private, encrypted UK-based environments.'
  },
  {
    id: 'faq-08',
    category: 'International',
    question: 'Can TGLC assist with arrangements outside the United Kingdom?',
    answer: 'Yes. While our headquarters are in Mayfair, London (45 Albemarle Street, W1S 4JL), our network extends across Europe (Paris, Geneva, Milan, Monaco, Cote d’Azur, Zurich), North America (New York, Miami, Aspen, Los Angeles), the Middle East (Dubai, Doha), and Asia (Tokyo, Singapore). We manage global itineraries with equal fluidity.'
  },
  {
    id: 'faq-09',
    category: 'Family & Private Office',
    question: 'Can services be extended to my spouse, children, or household staff?',
    answer: 'Yes. Our Global and Private Office charters encompass spouses, children, personal assistants, and family office staff under a single coordinated dossier, ensuring seamless support across the entire household.'
  },
  {
    id: 'faq-10',
    category: 'Family & Private Office',
    question: 'How does TGLC collaborate with my existing Family Office or Executive Assistant?',
    answer: 'We view ourselves as an enhancement to your existing team, never a competitor. We liaise directly with your EA, family office director, or chief of staff, handling complex logistical legwork and external sourcing while maintaining clear, consolidated reporting.'
  },
  {
    id: 'faq-11',
    category: 'Services & Scope',
    question: 'Can you guarantee access to fully booked restaurants and private clubs?',
    answer: 'We never make unrealistic or unethical claims of absolute legal guarantee. However, because our relationships with General Managers, Maitre d’s, and Club Secretaries span decades, our successful placement rate for prime tables and appointments in London and major world capitals is among the highest in the private client sector.'
  },
  {
    id: 'faq-12',
    category: 'Services & Scope',
    question: 'How do you select your trusted partners and specialist providers?',
    answer: 'Every partner—whether an aircraft operator, chauffeured fleet, fine art transport specialist, or private medical clinic—undergoes exhaustive auditing for licensing, insurance, safety history, staff vetting, and cultural discretion before being introduced to a TGLC member.'
  },
  {
    id: 'faq-13',
    category: 'Services & Scope',
    question: 'Do you charge commissions or retail markups on sourced luxury items?',
    answer: 'No. TGLC operates on an independent, transparent advisory model. We do not apply hidden markups on luxury acquisitions, charters, or property viewings; all supplier invoices are settled transparently with negotiated member advantages passed directly to you.'
  },
  {
    id: 'faq-14',
    category: 'Services & Scope',
    question: 'What is your policy regarding legal, financial, or medical advice?',
    answer: 'TGLC does not provide regulated legal, tax, immigration, medical, or investment advice. When members require these services, we introduce them to accredited, independent, and duly regulated professionals (such as Harley Street consultants, chartered tax advisors, or solicitors) who provide direct statutory counsel.'
  },
  {
    id: 'faq-15',
    category: 'Membership',
    question: 'What does the Member Dossier entail?',
    answer: 'Upon onboarding, your Lifestyle Manager builds a confidential dossier capturing your travel specifications (favourite seat allocations, aircraft cabin temperature, preferred hotel floors), dietary nuances, wine tastes, vehicle preferences, and communication habits so you never have to repeat yourself.'
  },
  {
    id: 'faq-16',
    category: 'Services & Scope',
    question: 'Can TGLC assist with acquiring off-market residential properties in London?',
    answer: 'Yes. We maintain relationships with discreet private owners, buying agents, and estate trustees across Mayfair, Belgravia, Chelsea, and Holland Park, facilitating private introductions for homes that never appear on open portals.'
  },
  {
    id: 'faq-17',
    category: 'Membership',
    question: 'Is there a trial period or introductory review?',
    answer: 'All memberships begin with a six-month initial charter, accompanied by a proactive 90-day review with Camilla Vance-Moreau to calibrate service delivery, refine member preferences, and ensure our support exceeds expectations.'
  },
  {
    id: 'faq-18',
    category: 'Services & Scope',
    question: 'How does TGLC handle billing and invoicing for expenses?',
    answer: 'Members enjoy consolidated, transparent monthly billing. Third-party disbursements (flights, dining, tickets, transfers) can be pre-authorized against a dedicated corporate card, member account deposit, or direct bank transfer, with itemized receipts provided for your accounting team.'
  }
];

export const DEMO_MEMBER_JAMES_ASHFORD: MemberProfile = {
  id: 'MEM-8842',
  name: 'James Ashford',
  tier: 'The Global Membership',
  memberSince: 'March 2024',
  lifestyleManager: {
    name: 'Camilla Vance-Moreau',
    role: 'Director of Private Office & Client Relations',
    image: '/assets/aistudio/team_camilla_vance_1794298891960.jpg',
    phone: '020 3951 6369',
    email: 'info@thegloballuxuryconsortium.com'
  },
  upcomingItinerary: {
    destination: 'London (EGLF) to Florence (LIRQ)',
    dates: '18 – 23 May 2026',
    flightDetails: 'Bombardier Challenger 350 · Farnborough FBO Private Terminal · Dep 10:30 BST',
    accommodation: 'Four Seasons Hotel Firenze · Renaissance Suite (Garden View)',
    keyArrangements: [
      'Private apron transfer at Farnborough with pre-cleared Italian border entry',
      'Mercedes-Maybach transfer waiting at Florence Peretola directly at aircraft stairs',
      'Private after-hours viewing of the Vasari Corridor with senior art historian (20 May, 18:30)',
      'Dinner reservation at Enoteca Pinchiorri, corner table, sommelier pairing selected by Camilla'
    ],
    chauffeurStatus: 'Chauffeur Oliver Wright assigned for London departure (Range Rover SV, 08:45 pickup at Eaton Square)'
  },
  upcomingArrangements: [
    {
      date: 'Tonight, 20:00',
      time: '20:00',
      venue: 'Mount St. Restaurant, Mayfair',
      type: 'Private Dining Table',
      details: 'Corner table 4 for dinner with Mr. Henrik Lindholm. Dietary note: shellfish allergy noted for guest.',
      status: 'Confirmed'
    },
    {
      date: 'Thursday, 19:30',
      time: '19:30',
      venue: 'Royal Opera House, Covent Garden',
      type: 'Grand Tier Box 14',
      details: 'Puccini’s Tosca. Interval champagne and canapés pre-served in private salon.',
      status: 'Confirmed'
    },
    {
      date: 'Sunday, 12:30',
      time: '12:30',
      venue: 'The River Café, Hammersmith',
      type: 'Terrace Garden Lunch',
      details: 'Table for four, outdoor terrace garden weather permitting, indoor holding table reserved.',
      status: 'Confirmed'
    },
    {
      date: 'Next Tuesday, 10:00',
      time: '10:00',
      venue: 'Phillips Auctioneers, Berkeley Square',
      type: 'Private Viewing',
      details: 'Independent watchmaking private viewing room with Head of Watches.',
      status: 'Discreet Preparation'
    }
  ],
  activeRequests: [
    {
      id: 'REQ-1049',
      title: 'Cotswolds Autumn Manor Weekend',
      category: 'Residences & Estates',
      submittedDate: '2 days ago',
      status: 'Sourcing Options',
      notes: 'Sourcing an off-market 7-bedroom private estate near Daylesford for 18-21 October with full private chef team.'
    },
    {
      id: 'REQ-1048',
      title: 'Patek Philippe 5970P Provenance Audit',
      category: 'Luxury Sourcing',
      submittedDate: '4 days ago',
      status: 'Assigned to Manager',
      notes: 'Mickell coordinating condition report and ledger extract with Zurich specialist.'
    },
    {
      id: 'REQ-1042',
      title: 'Silverstone F1 Paddock Club Hospitality',
      category: 'Sport & Access',
      submittedDate: '1 week ago',
      status: 'Confirmed',
      notes: 'Three Paddock Club VIP passes and helicopter shuttle from Battersea confirmed.'
    }
  ],
  savedPreferences: {
    preferredAirlines: ['NetJets Europe', 'VistaJet', 'British Airways First'],
    hotelStyle: 'Historic character, peaceful garden courtyards, high floor, non-feather bedding',
    dietaryNotes: 'Shellfish sensitivity, prefers Mediterranean and seasonal British produce, low-intervention European wines',
    vehiclePreference: 'Range Rover SV or Mercedes-Maybach (black or dark navy, rear climate 20.5°C)',
    preferredContact: 'Direct WhatsApp message to Camilla Vance-Moreau / Follow up via email summary',
    confidentialityLevel: 'High (Strict NDA, Pseudonym reservations for international dining)'
  }
};

export const MEMBER_PRIVILEGES = [
  {
    partner: 'Savile Row Bespoke Tailors',
    category: 'Fashion & Craft',
    privilege: 'Complimentary private in-residence measuring appointments and priority 3-week expedited cloth cutting.',
    details: 'Available across London, Paris, Geneva, and New York.'
  },
  {
    partner: 'Harley Street Diagnostic Alliance',
    category: 'Health & Longevity',
    privilege: 'Direct same-day access to comprehensive 3T MRI preventative scans and cardiologist consultations.',
    details: 'Zero referral wait time for TGLC cardholders.'
  },
  {
    partner: 'St James’s Antiquarian Wine Vaults',
    category: 'Cellar & Gastronomy',
    privilege: 'En primeur priority allocations on leading First Growth Bordeaux and Grand Cru Burgundy allocations.',
    details: 'Includes complimentary bonded cellar inspection and condition reporting.'
  },
  {
    partner: 'Battersea Heliport Sky Lounge',
    category: 'Private Aviation',
    privilege: 'Priority helicopter slot bookings during peak sporting calendar weekends (Goodwood, Silverstone, Ascot).',
    details: 'Dedicated private holding suite and chauffeur coordination.'
  }
];
