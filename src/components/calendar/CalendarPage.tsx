import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { CALENDAR_EVENTS } from '../../data/tglcData';
import { GoldDivider } from '../common/GoldDivider';
import { ArrowUpRight, MapPin, Grid, List } from 'lucide-react';
import { motion } from 'motion/react';

const CATEGORIES = [
  'All Events',
  'Art & Culture',
  'Dining',
  'Fashion',
  'Music',
  'Sport',
  'Family',
  'London After Dark',
  'Private Invitations',
];

const MONTHS = ['ALL', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER'] as const;

const MONTH_LABELS: Record<(typeof MONTHS)[number], string> = {
  ALL: 'All Months',
  JUNE: 'June',
  JULY: 'July',
  AUGUST: 'August',
  SEPTEMBER: 'September',
  OCTOBER: 'October',
};

export const CalendarPage: React.FC = () => {
  const { openIntroductionModal } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [viewMode, setViewMode] = useState<'cards' | 'timeline'>('cards');
  const [selectedMonth, setSelectedMonth] = useState<(typeof MONTHS)[number]>('ALL');

  const filteredEvents = CALENDAR_EVENTS.filter((e) => {
    const matchCat =
      selectedCategory === 'All Events' ||
      (selectedCategory === 'Private Invitations' ? e.isPrivateInvitation : e.category === selectedCategory);
    const matchMonth = selectedMonth === 'ALL' || e.month === selectedMonth;
    return matchCat && matchMonth;
  });

  return (
    <div className="bg-[#08090C] text-[#F4F1EA] pb-14 overflow-hidden">
      {/* 1. Full-Bleed Calendar Hero */}
      <section className="relative min-h-[44vh] sm:min-h-[52vh] flex items-center justify-center border-b border-[#1D1F28] pt-14 sm:pt-18 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src="/assets/aistudio/royal_opera_gallery.jpg"
            alt="Royal Opera House & Cultural Season London"
            animate={{ scale: [1.05, 1, 1.04] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/45 to-[#08090C]/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/80 via-transparent to-[#08090C]/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-4">
          <motion.span
            initial={{ opacity: 0.9, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.26em] text-[#DDB872] font-medium block"
          >
            Seasonal Agenda · Summer & Autumn 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0.9, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA] leading-tight"
          >
            The London Calendar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0.9, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif italic text-xl sm:text-2xl text-[#CFA85E] max-w-3xl mx-auto"
          >
            “London, understood from every angle.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0.92, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-xs sm:text-base text-[#D9D4CA] leading-relaxed font-light max-w-2xl mx-auto"
          >
            A curated seasonal schedule spanning private gallery previews, Wimbledon Centre Court debentures, subterranean cellar suppers, Royal Opera House boxes, and weekend retreats across the British countryside.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 pt-8 sm:pt-10">
        {/* 2. Symmetrical Aligned Filter Toolbar */}
        <div className="bg-[#0E1016] border border-[#20222E] p-5 sm:p-6 space-y-4">
          {/* Row 1: Evenly Aligned Category Filter Rail */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pb-4 border-b border-[#1D1F28]">
            <span className="text-xs font-medium text-[#C4933F] shrink-0 sm:w-24">Discipline</span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 flex-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`h-9 px-3.5 text-xs font-medium whitespace-nowrap shrink-0 flex items-center justify-center transition-all border ${
                    selectedCategory === cat
                      ? 'bg-[#B98633] text-[#08090C] border-[#CFA85E] font-semibold'
                      : 'text-[#D9D4CA] hover:text-white bg-[#141620] border-[#262936] hover:border-[#8B672B]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Aligned Month Selector (Left) + Layout View Switcher (Right) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-xs font-medium text-[#C4933F] shrink-0 sm:w-24">Month</span>
              <div className="flex items-center gap-1.5 bg-[#08090C] border border-[#20222E] p-1 overflow-x-auto">
                {MONTHS.map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMonth(m)}
                    className={`h-8 px-3 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                      selectedMonth === m
                        ? 'bg-[#1D1F29] text-[#CFA85E] border border-[#8B672B]'
                        : 'text-[#9C968A] hover:text-white border border-transparent'
                    }`}
                  >
                    {MONTH_LABELS[m]}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
              <span className="text-xs text-[#9C968A] tabular-nums">
                Showing <strong className="text-[#CFA85E] font-medium">{filteredEvents.length}</strong> gatherings
              </span>
              <div className="flex items-center bg-[#08090C] border border-[#20222E] p-1">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`h-8 px-3 flex items-center gap-1.5 text-xs transition-colors ${
                    viewMode === 'cards' ? 'bg-[#1D1F29] text-[#CFA85E]' : 'text-[#8E8A83] hover:text-white'
                  }`}
                  aria-label="Gallery cards view"
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Cards</span>
                </button>
                <button
                  onClick={() => setViewMode('timeline')}
                  className={`h-8 px-3 flex items-center gap-1.5 text-xs transition-colors ${
                    viewMode === 'timeline' ? 'bg-[#1D1F29] text-[#CFA85E]' : 'text-[#8E8A83] hover:text-white'
                  }`}
                  aria-label="Chronological timeline view"
                >
                  <List className="w-3.5 h-3.5" />
                  <span>Timeline</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Editorial Essay + Featured Seasonal Diptych & Signature Highlights */}
        <section className="space-y-6">
          <div className="bg-[#0E1016] border border-[#20222E] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-1.5">
              <span className="text-xs uppercase tracking-[0.22em] text-[#CFA85E] font-medium block">
                Custody Before Commerce
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
                How TGLC Secures Over-Subscribed Dates
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-2.5 text-xs sm:text-sm text-[#B5AFA3] leading-relaxed font-light">
              <p>
                TGLC never scrambles on secondary ticket exchanges forty-eight hours before curtain up. Our cultural practice holds direct multi-year debentures across Centre Court at SW19, Royal Opera House boxes in Covent Garden, and private estate shooting syndicates across Hampshire and Oxfordshire.
              </p>
              <p>
                Every entry below is curated months in advance with matching chauffeur staging, interval salons, and private post-performance suppers handled through your Albemarle Street director.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0.9, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.5 }}
              onClick={() => openIntroductionModal('Private Debenture & Estate Allocation')}
              className="group cursor-pointer relative aspect-[16/9] overflow-hidden border border-[#20222E] hover:border-[#B98633]/60 bg-black"
            >
              <img
                src="/assets/aistudio/cotswolds_manor_estate.jpg"
                alt="Summer Estate Withdrawals"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090C]/90 via-[#08090C]/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[#CFA85E] block font-medium">
                  Countryside & Estate Season
                </span>
                <h3 className="font-serif text-2xl text-[#F4F1EA]">
                  Private Shooting Weekends, Polo Boxes & Goodwood Revival
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.9, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              onClick={() => openIntroductionModal('Autumn Gallery & Private Supper Allocation')}
              className="group cursor-pointer relative aspect-[16/9] overflow-hidden border border-[#20222E] hover:border-[#B98633]/60 bg-black"
            >
              <img
                src="/assets/aistudio/mayfair_fine_dining.jpg"
                alt="Autumn Private Cellar Dinners"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090C]/90 via-[#08090C]/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[#CFA85E] block font-medium">
                  Mayfair & St James’s Season
                </span>
                <h3 className="font-serif text-2xl text-[#F4F1EA]">
                  Frieze Previews, Cellar Dinners & Late-Autumn Wine Tastings
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Seasonal Signature Highlights 3-Photo Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: '/assets/aistudio/best-luxury-cars-2024_ab87bb7b.webp',
                title: 'Paddock & Concours Access',
                tag: 'Goodwood · Private Fleet',
              },
              {
                img: '/assets/aistudio/ufc_arena_ringside.jpg',
                title: 'Championship Cageside & Suites',
                tag: 'The O2 · Arena Hospitality',
              },
              {
                img: '/assets/aistudio/bond_street_jewellery.jpg',
                title: 'Evening Trunk Viewings',
                tag: 'Mayfair · Closed Salons',
              },
            ].map((sig, i) => (
              <motion.div
                key={sig.title}
                initial={{ opacity: 0.9, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.01 }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                onClick={() => openIntroductionModal(`Signature Inquiry: ${sig.title}`)}
                className="bg-[#0E1016] border border-[#20222E] hover:border-[#8B672B] overflow-hidden cursor-pointer group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={sig.img}
                    alt={sig.title}
                    className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 flex items-center justify-between text-xs">
                  <span className="font-serif text-base text-[#F4F1EA]">{sig.title}</span>
                  <span className="text-[#CFA85E] text-[11px] uppercase tracking-wider">{sig.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <GoldDivider />

        {/* 4. Events Layout */}
        {filteredEvents.length === 0 ? (
          <div className="p-10 text-center bg-[#0E1016] border border-[#20222E] space-y-3">
            <h3 className="font-serif text-2xl text-[#F4F1EA]">No matching dates for this filter combination</h3>
            <p className="text-xs text-[#9C968A]">Reset to All Events or ask your Mayfair director for unlisted private invitations.</p>
            <button
              onClick={() => { setSelectedCategory('All Events'); setSelectedMonth('ALL'); }}
              className="btn-outline-gold px-5 py-2 text-xs mt-2"
            >
              Reset Calendar Filters
            </button>
          </div>
        ) : viewMode === 'cards' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredEvents.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0.9, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.01 }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.04 }}
                className="group bg-[#0E1016] border border-[#20222E] hover:border-[#B98633]/65 p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden mb-5 bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-105 contrast-105"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs mb-2.5 gap-2">
                    <span className="text-[#CFA85E] font-medium">{item.category}</span>
                    <span className="text-[#9C968A] tabular-nums">{item.dates}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#F4F1EA] group-hover:text-[#CFA85E] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#9C968A] leading-relaxed line-clamp-3 mb-4 font-light">
                    {item.description}
                  </p>

                  <div className="p-3.5 bg-[#12141C] border border-[#1E202B] text-[11px] text-[#D9D4CA] italic leading-relaxed mb-4 font-serif">
                    “{item.curatorNote}”
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1D1F28] flex items-center justify-between gap-2">
                  <div className="text-[11px] text-[#9C968A] flex items-center gap-1.5 min-w-0">
                    <MapPin className="w-3.5 h-3.5 text-[#B98633] shrink-0" />
                    <span className="truncate">{item.neighbourhood}</span>
                  </div>

                  <button
                    onClick={() => openIntroductionModal(`Inquiry / RSVP for: ${item.title}`)}
                    className="text-xs text-[#CFA85E] hover:text-white transition-colors flex items-center gap-1 font-medium shrink-0"
                  >
                    <span>Inquire / RSVP</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="divide-y divide-[#1D1F28] border-y border-[#1D1F28]">
            {filteredEvents.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0.9, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.01 }}
                transition={{ duration: 0.4, delay: idx * 0.02 }}
                className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#0E1016] px-4 transition-colors"
              >
                <div className="flex items-start md:items-center gap-6">
                  <div className="w-20 text-center shrink-0">
                    <span className="block text-[11px] uppercase tracking-widest text-[#C4933F]">{item.month}</span>
                    <span className="font-serif text-3xl text-[#F4F1EA] tabular-nums">{item.day}</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#CFA85E]">
                      <span>{item.category}</span>
                      <span className="text-[#4A4E5E]" aria-hidden="true">·</span>
                      <span className="text-[#D9D4CA]">{item.neighbourhood}</span>
                      {item.isPrivateInvitation && (
                        <>
                          <span className="text-[#4A4E5E]" aria-hidden="true">·</span>
                          <span className="text-[#DDB872] font-medium">Invitation Only</span>
                        </>
                      )}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F4F1EA]">{item.title}</h3>
                    <p className="text-xs text-[#9C968A] max-w-2xl leading-relaxed font-light">{item.description}</p>
                    <p className="text-[11px] text-[#8E8A83] flex items-center gap-1.5 pt-1">
                      <MapPin className="w-3 h-3 text-[#B98633]" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-end md:self-auto">
                  <button
                    onClick={() => openIntroductionModal(`Inquiry / RSVP for: ${item.title}`)}
                    className="btn-outline-gold px-5 py-2.5 text-xs flex items-center gap-1.5"
                  >
                    <span>Inquire / RSVP</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#CFA85E]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <GoldDivider />

        {/* Bottom Editorial Callout */}
        <motion.div
          initial={{ opacity: 0.9, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          className="p-8 sm:p-10 bg-[#0E1016] border border-[#20222E] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-1.5">
            <span className="text-xs uppercase tracking-widest text-[#C4933F]">Custom Itineraries</span>
            <h3 className="font-serif text-2xl text-[#F4F1EA]">Seeking an Unlisted Private Opening?</h3>
            <p className="text-xs sm:text-sm text-[#9C968A] max-w-xl font-light">
              Our cultural practice routinely arranges bespoke weekends built around private museum access, historic estate stays, or sporting debentures not listed in any public calendar.
            </p>
          </div>
          <button
            onClick={() => openIntroductionModal('Bespoke Cultural Itinerary')}
            className="btn-gold px-7 py-3.5 text-xs whitespace-nowrap shrink-0"
          >
            Design a Bespoke Weekend
          </button>
        </motion.div>
      </div>
    </div>
  );
};
