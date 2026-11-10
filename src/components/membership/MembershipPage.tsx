import React, { useState, useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { APPROACH_STEPS, FAQS_DATA, TGLC_CONTACT } from '../../data/tglcData';
import { GoldDivider } from '../common/GoldDivider';
import { ArrowUpRight, Check, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const MEMBERSHIP_HERO_SLIDES = [
  '/assets/aistudio/tglc_st_james_salon.jpg',
  '/assets/aistudio/rolls-royce-cullinan-chauffeur-service-events_d3e6e421.webp',
  '/assets/aistudio/698157105b08bd0b828e954b_file_k95qb05z_c7bc7f74.png',
  '/assets/aistudio/cotswolds_manor_estate.jpg',
  '/assets/aistudio/bond_street_jewellery.jpg',
];

export const MembershipPage: React.FC = () => {
  const { openIntroductionModal, navigateTo } = useNavigation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % MEMBERSHIP_HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const membershipFaqs = FAQS_DATA.filter((f) => f.category === 'Membership' || f.category === 'Admissions').slice(0, 6);

  return (
    <div className="bg-[#08090C] text-[#F4F1EA] pb-14 overflow-hidden">
      {/* 1. Full-Width Cinematic Moving Membership Hero */}
      <section
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative min-h-[50vh] sm:min-h-[58vh] flex items-center justify-center border-b border-[#1D1F28] pt-14 sm:pt-18 pb-12 overflow-hidden select-none"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={MEMBERSHIP_HERO_SLIDES[currentSlide]}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0"
          >
            <motion.img
              src={MEMBERSHIP_HERO_SLIDES[currentSlide]}
              alt="TGLC Private Membership Sanctums"
              animate={{ scale: [1.03, 1, 1.02] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/45 to-[#08090C]/65" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/80 via-transparent to-[#08090C]/65" />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Slide Indicators & Controls */}
        <div className="absolute bottom-5 right-6 z-20 flex items-center gap-3 bg-[#08090C]/85 backdrop-blur-md px-3.5 py-1.5 border border-[#8B672B]/45">
          <div className="flex items-center gap-1.5">
            {MEMBERSHIP_HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-[3px] transition-all duration-300 ${
                  idx === currentSlide ? 'w-6 bg-[#CFA85E]' : 'w-2 bg-[#444] hover:bg-[#888]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-[11px] font-mono text-[#DDB872] tabular-nums pl-1">
            0{currentSlide + 1} / 0{MEMBERSHIP_HERO_SLIDES.length}
          </span>
          <div className="flex items-center gap-1 ml-1 border-l border-[#2B2D3A] pl-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + MEMBERSHIP_HERO_SLIDES.length) % MEMBERSHIP_HERO_SLIDES.length)}
              className="p-1 text-[#9C968A] hover:text-[#CFA85E] transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % MEMBERSHIP_HERO_SLIDES.length)}
              className="p-1 text-[#9C968A] hover:text-[#CFA85E] transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-5">
          <motion.span
            initial={{ opacity: 0.9, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.26em] text-[#DDB872] font-medium block"
          >
            Admissions & Private Charters
          </motion.span>

          <motion.h1
            initial={{ opacity: 0.9, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA] leading-tight"
          >
            Private Membership
          </motion.h1>

          <motion.p
            initial={{ opacity: 0.9, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif italic text-xl sm:text-3xl text-[#CFA85E] max-w-3xl mx-auto"
          >
            “The right introduction, at the right moment.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0.92, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-xs sm:text-base text-[#D9D4CA] leading-relaxed font-light max-w-2xl mx-auto"
          >
            We keep our roll intentionally small so that every lifestyle director at 3rd Floor, 45 Albemarle Street knows our patrons by voice, temperament, and preference. Membership opens strictly by private introduction, referral, or committee review.
          </motion.p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openIntroductionModal('General Membership Proposal')}
              className="btn-gold px-8 py-3.5 text-xs flex items-center gap-2"
            >
              <span>Request an Introduction</span>
              <ArrowUpRight className="w-4 h-4 text-[#08090C]" />
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="btn-outline-gold px-6 py-3.5 text-xs bg-[#0B0C10]/80"
            >
              Arrange Mayfair Consultation
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12 pt-8 sm:pt-10">
        {/* 2. Life Within the Consortium — Pictorial Diptych & Human Essay */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0.9, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-5"
          >
            <span className="text-xs uppercase tracking-[0.22em] text-[#C4933F] font-medium block">
              A House Built Around Quiet Continuity
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] leading-tight">
              Never explain your preferences twice.
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#D9D4CA] leading-relaxed font-light">
              <p>
                Most concierge tiers still treat families as helpdesk ticket numbers rotating between junior operators. At The Global Luxury Consortium, your relationship rests with one dedicated London lifestyle director supported by trusted specialists across aviation, estates, culture, and security.
              </p>
              <p>
                We notice the things that change a week from exhausting to restorative: knowing which corner room at Claridge’s catches soft morning light, ensuring your Range Rover SV holds non-sparkling glass-bottled spring water at Heathrow, or having your country shooting weekend in Oxfordshire quietly stocked days before you arrive.
              </p>
              <p>
                Membership terms and retainers are shared candidly following an unhurried initial conversation with Camilla Vance-Moreau in person at our Mayfair house or over private call. Our sole allegiance stays with your household: every flight invoice, vineyard allocation, and hotel folio passes straight through without undisclosed commissions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.9, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <div className="space-y-2">
              <div className="aspect-[4/5] overflow-hidden border border-[#242632] bg-black group">
                <img
                  src="/assets/aistudio/cotswolds_manor_estate.jpg"
                  alt="Country Manor Provisioning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
                />
              </div>
              <p className="text-[11px] font-serif italic text-[#CFA85E]">
                Turnkey English countryside retreats prepared ahead of arrival.
              </p>
            </div>

            <div className="space-y-2 sm:mt-6">
              <div className="aspect-[4/5] overflow-hidden border border-[#242632] bg-black group">
                <img
                  src="/assets/aistudio/mayfair_fine_dining.jpg"
                  alt="Mayfair Candlelit Dining Room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
                />
              </div>
              <p className="text-[11px] font-serif italic text-[#CFA85E]">
                Acoustic corner tables held across Mayfair & St James’s.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Inside a Member's Year 3-Photo Strip */}
        <section className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-4 border-b border-[#1D1F28]">
            <div className="lg:col-span-6 space-y-1.5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#CFA85E] font-medium block">
                Seasonal Cadence & Fee Candour
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#F4F1EA]">
                Inside a Member’s Year
              </h2>
            </div>
            <p className="lg:col-span-6 text-xs sm:text-sm text-[#9C968A] leading-relaxed font-light">
              Rather than rigid point ledgers or surprise surcharges, one clear annual subscription covers spouse, children under twenty-five, and travelling household staff across London, Alpine snowfields, and the Mediterranean.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: '/assets/aistudio/MAIN-IMAGE-Shangri-La-The-Shard-London-Illuminate-Yacht-_571087f0.jpg',
                season: 'Spring & River Season',
                caption: 'Private Thames charters, Chelsea Flower Show mornings, and quiet suites above the skyline.',
              },
              {
                img: '/assets/aistudio/royal_opera_gallery.jpg',
                season: 'Summer & Cultural Patronage',
                caption: 'Debenture days at SW19, Royal Opera interval salons, and private country estates in Oxfordshire.',
              },
              {
                img: '/assets/aistudio/698157105b08bd0b828e954b_file_k95qb05z_c7bc7f74.png',
                season: 'Autumn & Alpine Return',
                caption: 'Direct FBO apron handovers from Farnborough to Engadin winter chalets and Bond Street viewings.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.season}
                initial={{ opacity: 0.9, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.01 }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-[#0F1117] border border-[#20222E] overflow-hidden group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={card.img}
                    alt={card.season}
                    className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 space-y-1.5">
                  <span className="text-[11px] uppercase tracking-widest text-[#CFA85E] block">{card.season}</span>
                  <p className="text-xs text-[#9C968A] leading-relaxed font-light">{card.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <GoldDivider />

        {/* 3. The 3 Charters */}
        <section>
          <div className="border-b border-[#1D1F28] pb-5 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-[#CFA85E] font-medium block mb-2">
                Three Charters
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA]">
                Tailored Pathways to Match Your Rhythm
              </h2>
            </div>
            <p className="text-xs text-[#9C968A] max-w-md font-light">
              Annual commitments structured cleanly around London residents, multi-continent families, and established single-family offices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Charter 1 */}
            <motion.div
              initial={{ opacity: 0.9, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0F1117] border border-[#20222E] hover:border-[#8B672B] p-8 sm:p-9 flex flex-col justify-between transition-all"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C4933F] block mb-2">Charter 01</span>
                <h3 className="font-serif text-3xl text-[#F4F1EA] mb-3">The London Membership</h3>
                <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed mb-6 font-light">
                  Crafted for London residents, seasonal pied-à-terre owners, and frequent visitors seeking seamless grace across the capital.
                </p>

                <div className="space-y-3 text-xs text-[#D9D4CA] border-t border-[#1D1F28] pt-6 mb-8">
                  {[
                    'Dedicated London Lifestyle Manager stationed at TGLC House',
                    'Preferred table custody across Mayfair, St James’s, and Chelsea',
                    'Private gallery previews, Royal Box debentures, and theatre house seats',
                    'Vetted chauffeur dispatch, household staffing, and daily logistics',
                    'Full invitations to The London Calendar seasonal salons',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#B98633] shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] text-[#CFA85E] italic mb-4 font-serif">
                  Membership terms provided following a private introduction
                </p>
                <button
                  onClick={() => openIntroductionModal('The London Membership')}
                  className="btn-outline-gold w-full py-3 text-xs"
                >
                  Request London Introduction
                </button>
              </div>
            </motion.div>

            {/* Charter 2 */}
            <motion.div
              initial={{ opacity: 0.9, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-[#12141D] border border-[#B98633]/65 p-8 sm:p-9 flex flex-col justify-between relative shadow-2xl hover:border-[#CFA85E] transition-all"
            >
              <div className="mb-3">
                <span className="text-[11px] tracking-widest uppercase text-[#DDB872] font-medium">
                  Flagship · Global Household Scope
                </span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#CFA85E] block mb-2">Charter 02</span>
                <h3 className="font-serif text-3xl text-[#F4F1EA] mb-3">The Global Membership</h3>
                <p className="text-xs sm:text-sm text-[#D9D4CA] leading-relaxed mb-6 font-light">
                  Built for internationally mobile principals and families balancing London residences, Alpine winters, Mediterranean summers, and private flight dispatch.
                </p>

                <div className="space-y-3 text-xs text-[#D9D4CA] border-t border-[#242632] pt-6 mb-8">
                  {[
                    'All privileges included within The London Membership',
                    '24/7/365 Global Duty Desk directly reachable across time zones',
                    'Private jet chartering & tarmac FBO access at Farnborough and Northolt',
                    'Off-market chalet, superyacht, and Mediterranean villa sourcing',
                    'Full household coverage for spouse, children, and travelling staff',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#CFA85E] shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] text-[#CFA85E] italic mb-4 font-serif">
                  Membership terms provided following a private introduction
                </p>
                <button
                  onClick={() => openIntroductionModal('The Global Membership')}
                  className="btn-gold w-full py-3.5 text-xs"
                >
                  Request Global Introduction
                </button>
              </div>
            </motion.div>

            {/* Charter 3 */}
            <motion.div
              initial={{ opacity: 0.9, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0F1117] border border-[#20222E] hover:border-[#8B672B] p-8 sm:p-9 flex flex-col justify-between transition-all"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C4933F] block mb-2">Charter 03</span>
                <h3 className="font-serif text-3xl text-[#F4F1EA] mb-3">The Private Office</h3>
                <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed mb-6 font-light">
                  A bespoke family-office partnership providing retained executive lifestyle oversight seamlessly aligned with your Chiefs of Staff, legal teams, and fiduciary advisors.
                </p>

                <div className="space-y-3 text-xs text-[#D9D4CA] border-t border-[#1D1F28] pt-6 mb-8">
                  {[
                    'Senior Executive Lifestyle Director appointed directly',
                    'Seamless coordination with family office CFOs, EAs, and bankers',
                    'Off-market London townhouse and stately countryside property search',
                    'Bespoke SIA close protection & cyber-hygiene coordination',
                    'Retained specialists, dedicated billing entities, and custom SLAs',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#B98633] shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] text-[#CFA85E] italic mb-4 font-serif">
                  Structured by bespoke partner consultation
                </p>
                <button
                  onClick={() => openIntroductionModal('The Private Office')}
                  className="btn-outline-gold w-full py-3 text-xs"
                >
                  Request Private Office Advisory
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <GoldDivider />

        {/* 4. Secondary Architectural Split — Comprehensive Support & Bespoke Sartorial Visual */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0D0F15] border border-[#20222E] p-7 sm:p-10">
          <motion.div
            initial={{ opacity: 0.9, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="aspect-[4/3] overflow-hidden border border-[#242632] bg-black">
              <img
                src="/assets/aistudio/savile_row_bespoke.jpg"
                alt="Bespoke Consultation at Savile Row"
                className="w-full h-full object-cover filter brightness-105 contrast-105 hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[16/9] overflow-hidden border border-[#242632] bg-black">
              <img
                src="/assets/aistudio/hero_luxury_london_residence_1794298893032.jpg"
                alt="Private Belgravia Townhouse Architecture"
                className="w-full h-full object-cover filter brightness-105 contrast-105 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-[#CFA85E] font-medium block mb-2">
                Operational Breadth
              </span>
              <h2 className="font-serif text-3xl text-[#F4F1EA]">
                What Membership at TGLC Actually Delivers
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Named Lifestyle Director',
                  body: 'You speak directly to a dedicated principal in Mayfair who remembers how your family travels, celebrates, and rests.',
                },
                {
                  title: 'Proactive Seasonal Planning',
                  body: 'Before demand spikes for Wimbledon, Frieze, St Moritz, or Saint-Tropez, your director presents curated options ready to sign off.',
                },
                {
                  title: '24/7 Duty Support Desk',
                  body: 'Late-night diversion into Farnborough or an unplanned dinner for twelve in Mayfair is resolved by live senior coordinators.',
                },
                {
                  title: 'Zero Commercial Bias',
                  body: 'We accept no commissions or kickbacks from restaurants, charter operators, or jewelers—recommendations remain strictly impartial.',
                },
                {
                  title: 'Encrypted Confidentiality',
                  body: 'Pseudonymized bookings, strict staff non-disclosure covenants, and encrypted voice/messaging channels as standard.',
                },
                {
                  title: 'Consolidated Reconciliation',
                  body: 'Monthly disbursements reconciled quietly into itemized schedules compatible with private family office accounting.',
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1.5 border-t border-[#1D1F28] pt-4">
                  <h4 className="font-serif text-xl text-[#F4F1EA]">{item.title}</h4>
                  <p className="text-xs text-[#9C968A] leading-relaxed font-light">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GoldDivider />

        {/* 5. The 5-Step Induction Journey */}
        <section>
          <div className="border-b border-[#1D1F28] pb-4 mb-6">
            <span className="text-xs uppercase tracking-[0.22em] text-[#CFA85E] font-medium block mb-1.5">
              Admissions Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA]">
              How Membership Begins
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {APPROACH_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0.9, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.01 }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="p-6 bg-[#0F1117] border border-[#20222E] hover:border-[#8B672B]/70 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-2xl text-[#CFA85E] block mb-3 tabular-nums">{step.step}</span>
                  <h3 className="font-serif text-lg text-[#F4F1EA] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#9C968A] leading-relaxed font-light">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <GoldDivider />

        {/* 6. Membership FAQs */}
        <section className="space-y-6">
          <div className="border-b border-[#1D1F28] pb-4">
            <span className="text-xs uppercase tracking-[0.22em] text-[#CFA85E] font-medium block mb-1">
              Admissions Inquiries
            </span>
            <h2 className="font-serif text-3xl text-[#F4F1EA]">
              Membership Questions & Answers
            </h2>
          </div>

          <div className="space-y-3">
            {membershipFaqs.map((faq, idx) => (
              <div key={faq.id} className="bg-[#0F1117] border border-[#20222E]">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between text-[#F4F1EA] hover:text-[#CFA85E] transition-colors"
                >
                  <span className="font-serif text-lg">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#B98633] shrink-0 transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 text-xs sm:text-sm text-[#9C968A] leading-relaxed border-t border-[#1D1F28] pt-3 font-light overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        <GoldDivider />

        {/* 7. Bottom Personal Invitation */}
        <motion.div
          initial={{ opacity: 0.9, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          className="p-8 sm:p-11 bg-[#101219] border border-[#242632] text-center space-y-5 max-w-3xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.24em] text-[#C4933F] block">Confidential Inquiries</span>
          <h3 className="font-serif text-3xl text-[#F4F1EA]">
            Begin with a Private Conversation
          </h3>
          <p className="text-xs sm:text-sm text-[#9C968A] max-w-lg mx-auto leading-relaxed font-light">
            We invite prospective members to arrange an unhurried consultation with Camilla Vance-Moreau at 3rd Floor, 45 Albemarle Street, London W1S 4JL, or via telephone on <span className="text-[#CFA85E] tabular-nums">{TGLC_CONTACT.telephone}</span>.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openIntroductionModal('Membership Inquiry')}
              className="btn-gold px-8 py-3.5 text-xs"
            >
              Submit an Introduction
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
