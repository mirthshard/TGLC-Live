import React from 'react';
import { motion } from 'motion/react';
import { useNavigation } from '../../context/NavigationContext';
import { SERVICES_DATA } from '../../data/tglcData';
import {
  ArrowUpRight,
  ArrowLeft,
  CheckCircle,
  Crosshair,
  CheckCircle2,
} from 'lucide-react';
import { GoldDivider } from '../common/GoldDivider';

interface SubServiceDetailPageProps {
  serviceId?: string;
  subServiceId?: string;
}

export const SubServiceDetailPage: React.FC<SubServiceDetailPageProps> = ({ serviceId, subServiceId }) => {
  const { navigateTo, openIntroductionModal } = useNavigation();

  const parentService = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];
  const subService = parentService.subServices.find((sub) => sub.id === subServiceId) || parentService.subServices[0];
  const siblingSubServices = parentService.subServices.filter((sub) => sub.id !== subService.id);

  // Two distinct supporting large images drawn cleanly from verified local assets
  const supportingImages = [
    parentService.galleryImages?.[0] || parentService.heroImage,
    parentService.galleryImages?.[1] ||
      siblingSubServices[0]?.image ||
      '/assets/aistudio/tglc_st_james_salon.jpg',
  ];

  return (
    <div className="bg-[#08090C] text-[#F4F1EA] selection:bg-[#B98633]/30 selection:text-[#F4F1EA] overflow-hidden pb-14">
      {/* 1. Cinematic Full-Width Hero */}
      <section className="relative min-h-[46vh] sm:min-h-[54vh] flex items-center justify-center border-b border-[#20222B] pt-14 sm:pt-18 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={subService.image}
            alt={subService.title}
            animate={{ scale: [1.05, 1, 1.04] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full object-cover object-center brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/35 to-[#08090C]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/85 via-[#08090C]/35 to-[#08090C]/75 hidden sm:block" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-5">
          {/* Back Bar */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => navigateTo('service-detail', { serviceId: parentService.id })}
              className="inline-flex items-center gap-2 text-xs tracking-wide text-[#DDB872] hover:text-[#F4F1EA] transition-colors bg-[#0B0C10]/85 border border-[#2A2D38] hover:border-[#8B672B] px-4 py-1.5 backdrop-blur-md"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#CFA85E]" />
              <span>Back to {parentService.title}</span>
            </button>
            <span className="text-[11px] tracking-widest text-[#9C968A] hidden sm:inline">
              · Sub-Practice Specification
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0.9, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#8B672B] bg-[#0B0C10]/85 backdrop-blur-md"
          >
            <Crosshair className="w-3.5 h-3.5 text-[#CFA85E]" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#DDB872] tabular-nums">
              {parentService.title} · Practice 0{parentService.subServices.indexOf(subService) + 1}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0.9, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] text-[#F4F1EA]"
          >
            {subService.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0.9, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#CFA85E] max-w-3xl mx-auto"
          >
            “{subService.shortDesc}”
          </motion.p>

          <motion.p
            initial={{ opacity: 0.92, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-xs sm:text-base text-[#E5DFD3] max-w-3xl mx-auto leading-relaxed font-light"
          >
            {subService.leadParagraph}
          </motion.p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openIntroductionModal(`Inquiry regarding ${subService.title}`)}
              className="btn-gold px-8 py-3.5 text-xs inline-flex items-center gap-2"
            >
              <span>Request {subService.title} Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('deliverables-matrix');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline-gold px-6 py-3.5 text-xs backdrop-blur-md"
            >
              Review Scope of Service ↓
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <GoldDivider />
      </div>

      {/* 2. Operational Deliverables */}
      <section
        id="deliverables-matrix"
        className="py-8 sm:py-12 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#20232E]">
          <div className="space-y-1.5">
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#CFA85E] block">
              Operational Mandate
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
              Scope of Service & Protocol
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9C968A] max-w-md leading-relaxed font-light">
            Coordinated personally with direct principal oversight, vetted discretion deeds, and round-the-clock continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subService.detailedPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.9, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="p-6 sm:p-7 bg-[#12141A] border border-[#242630] hover:border-[#8B672B] transition-colors flex items-start gap-4 shadow-xl"
            >
              <div className="w-7 h-7 bg-[#181A22] border border-[#8B672B] flex items-center justify-center shrink-0 mt-0.5 text-[#CFA85E]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-[#CFA85E] tracking-wider uppercase block mb-1 tabular-nums">
                  Standard 0{i + 1}
                </span>
                <p className="text-xs sm:text-sm text-[#D9D4CA] leading-relaxed font-light">{point}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desk Briefing Note & Supporting Visual Diptych */}
        <div className="bg-[#0C0D12] border border-[#20232E] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#CFA85E] font-medium block">
              Albemarle Street Desk Briefing
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
              Coordination Without Exposure
            </h3>
          </div>
          <div className="lg:col-span-7 space-y-3 text-xs sm:text-sm text-[#B5AFA3] leading-relaxed font-light">
            <p>
              Every engagement under {subService.title} begins with an oral conversation rather than a digital intake ticket. Your supervising principal clears counterparties directly against long-standing house vetting, confirms non-disclosure terms before names are exchanged, and provides a single telephone point of accountability until the final doorstep handover.
            </p>
            <p>
              Where an arrangement intersects with residence staffing, protective driving, or European customs clearance, adjacent {parentService.title} specialists join inside the same closed dossier so your household never repeats a preference twice.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportingImages.map((imgSrc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0.9, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-[#12141A] border border-[#242630] overflow-hidden group"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={imgSrc}
                  alt={`${subService.title} arrangement illustration ${idx + 1}`}
                  className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-5 py-3.5 border-t border-[#20232E] flex items-center justify-between text-xs text-[#9C968A]">
                <span>{idx === 0 ? `${parentService.title} Field View` : 'Mayfair Advisory Execution'}</span>
                <span className="text-[#CFA85E]">{parentService.kicker}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Exemplar Case Demonstrations */}
      {subService.keyScenarios && subService.keyScenarios.length > 0 && (
        <>
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <GoldDivider />
          </div>
          <section className="py-10 sm:py-14 px-5 sm:px-8 bg-gradient-to-b from-[#08090C] via-[#101218] to-[#08090C] border-t border-b border-[#20222B]">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="text-center max-w-3xl mx-auto space-y-2.5">
                <span className="text-[11px] uppercase tracking-[0.26em] text-[#CFA85E] font-medium block">
                  Field Intelligence
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
                  Exemplar Case Demonstrations
                </h2>
                <p className="text-xs sm:text-sm text-[#9C968A] font-light leading-relaxed">
                  Representative client briefs resolved by our house principals with quiet precision.
                </p>
              </div>

              <div className="space-y-6">
                {subService.keyScenarios.map((scen, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0.9, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.01 }}
                    transition={{ duration: 0.5 }}
                    className="p-7 sm:p-10 bg-[#12141A] border border-[#242630] shadow-2xl space-y-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#20232E]">
                      <span className="text-xs uppercase tracking-widest text-[#CFA85E] tabular-nums">
                        Case Study 0{idx + 1} · {scen.title}
                      </span>
                      <span className="text-[10px] uppercase text-[#B5AFA3] border border-[#2A2D38] px-2.5 py-0.5">
                        Verified Outcome
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">{scen.title}</h3>

                    <p className="text-xs sm:text-sm text-[#B5AFA3] leading-relaxed font-light">
                      {scen.description}
                    </p>

                    <div className="p-4 bg-[#0B0C10] border border-[#8B672B]/40 text-xs text-[#D9D4CA] flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-[#CFA85E] shrink-0" />
                      <span>
                        <strong className="text-[#DDB872] uppercase mr-1.5">Delivered:</strong>
                        {scen.outcome}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* 4. Sibling Sub-Practices */}
      {siblingSubServices.length > 0 && (
        <>
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <GoldDivider />
          </div>
          <section className="py-10 sm:py-12 px-5 sm:px-8 max-w-7xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
                Other Sub-Practices in {parentService.title}
              </h3>
              <button
                onClick={() => navigateTo('service-detail', { serviceId: parentService.id })}
                className="text-xs uppercase tracking-widest text-[#CFA85E] hover:text-[#DDB872] transition-colors"
              >
                Full Practice Overview →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {siblingSubServices.map((sib) => (
                <motion.div
                  key={sib.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => navigateTo('subservice-detail', { serviceId: parentService.id, subServiceId: sib.id })}
                  className="group cursor-pointer p-5 bg-[#12141A] border border-[#242630] hover:border-[#8B672B] transition-all duration-300 space-y-3"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#181A22]">
                    <img
                      src={sib.image}
                      alt={sib.title}
                      className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#F4F1EA] group-hover:text-[#DDB872] transition-colors">
                      {sib.title}
                    </h4>
                    <p className="text-xs text-[#9C968A] line-clamp-2 leading-relaxed mt-1 font-light">
                      {sib.shortDesc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};
