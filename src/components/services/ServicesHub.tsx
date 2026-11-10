import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigation } from '../../context/NavigationContext';
import { SERVICES_DATA, TGLC_CONTACT } from '../../data/tglcData';
import { GoldDivider } from '../common/GoldDivider';
import { ArrowUpRight, Shield, Compass, CheckCircle2, Crosshair, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const ServicesHub: React.FC = () => {
  const { navigateTo, openIntroductionModal } = useNavigation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SERVICES_DATA.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activePillar = SERVICES_DATA[currentSlide];

  return (
    <div className="bg-[#08090C] text-[#F4F1EA] selection:bg-[#B98633]/30 selection:text-[#F4F1EA] overflow-hidden">
      {/* 1. Cinematic Full-Width Moving Hero Carousel */}
      <section
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative min-h-[50vh] sm:min-h-[58vh] flex items-center justify-center border-b border-[#20222B] pt-14 sm:pt-18 pb-12 overflow-hidden select-none"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0"
          >
            <motion.img
              src={activePillar.heroImage}
              alt={activePillar.title}
              animate={{ scale: [1.03, 1, 1.02] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-full object-cover object-center brightness-105 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/40 to-[#08090C]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/85 via-[#08090C]/35 to-[#08090C]/75 hidden sm:block" />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Slide Indicators & Controls */}
        <div className="absolute bottom-5 right-6 z-20 flex items-center gap-3 bg-[#08090C]/85 backdrop-blur-md px-3.5 py-1.5 border border-[#8B672B]/45">
          <div className="flex items-center gap-1.5">
            {SERVICES_DATA.map((_, idx) => (
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
            0{currentSlide + 1} / 0{SERVICES_DATA.length}
          </span>
          <div className="flex items-center gap-1 ml-1 border-l border-[#2B2D3A] pl-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + SERVICES_DATA.length) % SERVICES_DATA.length)}
              className="p-1 text-[#9C968A] hover:text-[#CFA85E] transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % SERVICES_DATA.length)}
              className="p-1 text-[#9C968A] hover:text-[#CFA85E] transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-5">
          <motion.div
            initial={{ opacity: 0.9, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#8B672B] bg-[#0B0C10]/85 backdrop-blur-md"
          >
            <Compass className="w-3.5 h-3.5 text-[#CFA85E]" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#DDB872] font-medium">
              Consortium Practice Framework · Seven Pillars
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0.9, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.05] text-[#F4F1EA]"
          >
            Seven Pillars of Private Lifestyle Management.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0.9, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif italic text-xl sm:text-3xl text-[#CFA85E] max-w-3xl mx-auto"
          >
            “From the quiet essentials to the unrepeatable, arranged without friction.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0.92, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-xs sm:text-base text-[#E5DFD3] max-w-2xl mx-auto leading-relaxed font-light"
          >
            TGLC unites seven dedicated departments behind a single Albemarle Street door. Rather than juggling unconnected brokers and hotel desks, your household works with one personal Senior Principal who carries full operational authority across every discipline.
          </motion.p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openIntroductionModal('Consortium Practice Consultation')}
              className="btn-gold px-8 py-3.5 text-xs inline-flex items-center gap-2"
            >
              <span>Consult Practice Director</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('pillar-01');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline-gold px-6 py-3.5 text-xs backdrop-blur-md"
            >
              Explore Disciplines ↓
            </button>
          </div>
        </div>
      </section>

      {/* Visual Editorial Strip: How Seven Desks Act As One */}
      <section className="py-10 sm:py-12 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-4 border-b border-[#20232E]">
          <div className="lg:col-span-6 space-y-1.5">
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#CFA85E] font-medium block">
              Single-Principal Continuity
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F4F1EA]">
              How Seven Desks Act As One Household Team
            </h2>
          </div>
          <p className="lg:col-span-6 text-xs sm:text-sm text-[#B5AFA3] leading-relaxed font-light">
            In traditional lifestyle agencies, flight desks never speak to security detail, and art advisers know nothing of your dinner plans. Within TGLC House, every practice shares one encrypted household dossier so a late Heathrow slot automatically shifts supper in Mayfair and holds the Cotswolds gates open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0.9, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.5 }}
            className="bg-[#12141A] border border-[#242630] overflow-hidden group"
          >
            <div className="aspect-[16/9] overflow-hidden bg-black">
              <img
                src="/assets/aistudio/6a194620490b49214619b628_file_8wpx83o3_8d7f9f53.png"
                alt="Direct tarmac-to-townhouse coordination"
                className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5 flex items-center justify-between text-xs text-[#9C968A]">
              <span>Air-to-Chauffeur Synchronised Handover</span>
              <span className="text-[#CFA85E] uppercase tracking-widest">Practice Alignment</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.9, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="bg-[#12141A] border border-[#242630] overflow-hidden group"
          >
            <div className="aspect-[16/9] overflow-hidden bg-black">
              <img
                src="/assets/aistudio/mayfair_fine_dining.jpg"
                alt="Mayfair Evening Table & Club Hosting"
                className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5 flex items-center justify-between text-xs text-[#9C968A]">
              <span>Private Table Holding & Discrete Townhouse Hosting</span>
              <span className="text-[#CFA85E] uppercase tracking-widest">Albemarle Salon</span>
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* 2. Alternating Showcase Panels for All Seven Services */}
      <div className="divide-y divide-[#20222B]">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.section
              key={service.id}
              id={`pillar-0${index + 1}`}
              initial={{ opacity: 0.9, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.55 }}
              className="relative py-10 sm:py-14 overflow-hidden bg-gradient-to-b from-[#08090C] via-[#0D0F15] to-[#08090C]"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#CFA85E]/35 to-transparent" />

              <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                {/* Section Top Marker */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-3 border-b border-[#20232E]">
                  <div className="flex items-center gap-3 text-xs text-[#CFA85E]">
                    <span className="w-2 h-2 bg-[#CFA85E]" />
                    <span className="tracking-[0.22em] uppercase font-medium tabular-nums">
                      Practice 0{index + 1} · {service.kicker}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-[#9C968A] tracking-wider uppercase">
                    <Crosshair className="w-3.5 h-3.5 text-[#B98633]" />
                    <span>Principal Oversight</span>
                  </div>
                </div>

                {/* Alternating Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Large Image */}
                  <motion.div
                    initial={{ opacity: 0.92, x: isEven ? -14 : 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.01 }}
                    transition={{ duration: 0.55 }}
                    className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div
                      onClick={() => navigateTo('service-detail', { serviceId: service.id })}
                      className="group cursor-pointer relative aspect-[16/10] w-full overflow-hidden border border-[#242630] shadow-2xl bg-[#12141A]"
                    >
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090C]/75 via-transparent to-transparent group-hover:from-[#08090C]/55 transition-colors" />

                      <div className="absolute bottom-4 left-4 right-4 bg-[#08090C]/88 backdrop-blur-md p-4 border border-[#2A2D38] flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-[#CFA85E] block">
                            Operational Scope
                          </span>
                          <span className="font-serif text-base text-[#F4F1EA] tabular-nums">
                            {service.subServices.length} Specialised Sub-Practices
                          </span>
                        </div>
                        <div className="w-8 h-8 border border-[#8B672B] bg-[#141620] flex items-center justify-center text-[#CFA85E] group-hover:translate-x-1 transition-transform">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Editorial Narrative */}
                  <motion.div
                    initial={{ opacity: 0.92, x: isEven ? 14 : -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.01 }}
                    transition={{ duration: 0.55 }}
                    className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.22em] text-[#CFA85E] font-medium block mb-2">
                        {service.kicker}
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F4F1EA] leading-tight">
                        {service.title}
                      </h2>
                      <p className="font-serif italic text-lg sm:text-xl text-[#CFA85E] mt-2">
                        “{service.tagline}”
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#B5AFA3] leading-relaxed font-light">
                      {service.overview}
                    </p>

                    <div className="pt-2">
                      <span className="text-[10px] uppercase tracking-widest text-[#DDB872] block mb-2.5">
                        Specialised Sub-Practice Capabilities:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.subServices.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => navigateTo('subservice-detail', { serviceId: service.id, subServiceId: sub.id })}
                            className="text-xs text-[#D9D4CA] hover:text-[#08090C] bg-[#12141A] hover:bg-[#CFA85E] border border-[#242630] hover:border-[#CFA85E] px-3 py-1.5 transition-all duration-200 text-left font-light"
                          >
                            {sub.title}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#20232E]">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D9D4CA]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#CFA85E] shrink-0 mt-0.5" />
                          <span className="font-light">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => navigateTo('service-detail', { serviceId: service.id })}
                        className="btn-gold px-6 py-3 text-xs inline-flex items-center gap-2"
                      >
                        <span>Full Category Briefing</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => openIntroductionModal(`Inquiry regarding ${service.title}`)}
                        className="px-4 py-3 text-xs uppercase tracking-widest text-[#B5AFA3] hover:text-[#CFA85E] transition-colors"
                      >
                        Request Consultation →
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>

      <GoldDivider />

      {/* 3. Integrated Charter Banner */}
      <section className="py-10 sm:py-14 px-5 sm:px-8 bg-gradient-to-b from-[#08090C] via-[#101218] to-[#08090C] border-t border-[#20222B] text-center">
        <motion.div
          initial={{ opacity: 0.9, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl mx-auto space-y-5"
        >
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#CFA85E] font-medium block">
            Integrated Private Office Charters · Mayfair HQ
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] leading-tight">
            Requiring an integrated mandate spanning multiple practices?
          </h2>

          <p className="text-xs sm:text-base text-[#9C968A] max-w-xl mx-auto font-light leading-relaxed">
            Our principals regularly co-ordinate comprehensive cross-practice arrangements—combining private flight charter, guarded Mayfair vehicles, off-market property searches, and museum viewings under one calm relationship.
          </p>

          <p className="text-xs text-[#CFA85E] tabular-nums tracking-wide">
            Direct Telephone: {TGLC_CONTACT.phone} · TGLC House, {TGLC_CONTACT.address.toString()}
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openIntroductionModal('Bespoke Multi-Category Lifestyle Charter')}
              className="btn-gold px-8 py-3.5 text-xs inline-flex items-center gap-2"
            >
              <span>Commission Bespoke Charter</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo('home')}
              className="btn-outline-gold px-6 py-3.5 text-xs"
            >
              Return to Overview
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
