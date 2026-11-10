import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigation } from '../../context/NavigationContext';
import { JOURNAL_ARTICLES, TEAM_MEMBERS } from '../../data/tglcData';
import { ArrowUpRight } from 'lucide-react';
import { GoldDivider } from '../common/GoldDivider';

const JOURNAL_CATEGORIES = [
  'All Articles',
  'London Intelligence',
  'Travel Notes',
  'The Cultural Edit',
  'Dining & Entertaining',
  'Private Residences',
  'Objects of Desire',
  'Member Stories',
];

export const JournalPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All Articles');

  const filteredArticles = JOURNAL_ARTICLES.filter(
    (a) => selectedCategory === 'All Articles' || a.category === selectedCategory
  );

  const featuredArticle = JOURNAL_ARTICLES[0];
  const gridArticles = selectedCategory === 'All Articles' ? filteredArticles.slice(1) : filteredArticles;

  return (
    <div className="bg-[#08090C] text-[#F4F1EA] pt-6 sm:pt-8 pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-10">
        {/* Cinematic Header */}
        <section className="relative min-h-[340px] sm:min-h-[410px] flex items-end overflow-hidden border border-[#242630] bg-[#12141A]">
          <motion.img
            animate={{ scale: [1.05, 1, 1.04] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            src="/assets/aistudio/royal_opera_gallery.jpg"
            alt="The Journal of The Global Luxury Consortium"
            className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/45 to-[#08090C]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/90 via-[#08090C]/45 to-transparent hidden sm:block" />

          <motion.div
            initial={{ opacity: 0.9, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 p-6 sm:p-10 max-w-4xl space-y-2.5"
          >
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#CFA85E] font-medium block">
              The Journal of The Global Luxury Consortium
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F1EA] leading-[1.06]">
              London Intelligence & Cultural Notes
            </h1>
            <p className="font-serif italic text-lg sm:text-2xl text-[#E5DFD3] leading-relaxed">
              “Details noticed by those who take their time.”
            </p>
            <p className="text-xs sm:text-base text-[#D9D4CA] leading-relaxed font-light max-w-2xl">
              Essays, architectural notes, and field dispatches examining London enclaves, private kitchens, patronage, rare craft, and effortless European crossings.
            </p>
          </motion.div>
        </section>

        {/* Aligned Category Filters */}
        <div className="border-y border-[#20232E] py-4 flex flex-wrap items-center gap-2">
          {JOURNAL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`h-9 px-4 text-xs tracking-wide transition-colors border ${
                selectedCategory === cat
                  ? 'bg-[#181A22] text-[#F4F1EA] border-[#CFA85E] font-medium'
                  : 'text-[#9C968A] hover:text-[#F4F1EA] bg-[#12141A] border-[#242630] hover:border-[#8B672B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Independence Intro + Senior Contributors Strip */}
        <section className="space-y-6">
          <div className="bg-[#0E1016] border border-[#20222E] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-1.5">
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#CFA85E] font-medium block">
                Uncommissioned Publishing
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
                Written Without Advertising or Sponsored Placement
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-2.5 text-xs sm:text-sm text-[#B5AFA3] leading-relaxed font-light">
              <p>
                Every dispatch in The TGLC Journal is authored directly by our house directors in Mayfair—never syndicated from publicists, paid for by hotel chains, or written to flatter commercial sponsors. We review only the dining rooms, private wings, workshops, and aviation routes our principals use themselves.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#CFA85E] font-medium block">
              Notes from Senior Contributors · TGLC House
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TEAM_MEMBERS.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0.9, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.01 }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                  onClick={() => navigateTo('about')}
                  className="bg-[#12141A] border border-[#242630] hover:border-[#8B672B] overflow-hidden group cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-black">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h3 className="font-serif text-lg text-[#F4F1EA] group-hover:text-[#CFA85E] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-[#CFA85E] font-medium">{member.role}</p>
                    <p className="text-xs text-[#9C968A] font-light line-clamp-2 pt-1">{member.specialism}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GoldDivider />

        {/* Featured Lead Story */}
        {selectedCategory === 'All Articles' && (
          <>
            <motion.div
              initial={{ opacity: 0.9, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.55 }}
              onClick={() => navigateTo('journal-article', { articleSlug: featuredArticle.slug })}
              className="group cursor-pointer p-6 sm:p-9 bg-[#12141A] border border-[#242630] hover:border-[#CFA85E]/70 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5 text-xs tracking-wide text-[#CFA85E]">
                  <span className="uppercase tracking-widest">Lead Editorial</span>
                  <span className="text-[#8B672B]">·</span>
                  <span>{featuredArticle.category}</span>
                  <span className="text-[#8B672B]">·</span>
                  <span className="text-[#9C968A] tabular-nums">{featuredArticle.readTime}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F4F1EA] group-hover:text-[#DDB872] transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="font-serif italic text-lg text-[#CFA85E]">{featuredArticle.subtitle}</p>

                <p className="text-xs sm:text-sm text-[#B5AFA3] leading-relaxed font-light max-w-2xl">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#9C968A] border-t border-[#20232E]">
                  <span>
                    By {featuredArticle.author}, {featuredArticle.authorRole}
                  </span>
                  <span className="text-[#CFA85E] group-hover:text-[#DDB872] transition-colors flex items-center gap-1">
                    <span>Read Feature Essay</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#181A22] border border-[#242630]">
                  <img
                    src={featuredArticle.heroImage}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
            <GoldDivider />
          </>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {gridArticles.map((art, idx) => (
            <motion.div
              key={art.slug}
              initial={{ opacity: 0.9, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.45, delay: Math.min(idx * 0.04, 0.2) }}
              onClick={() => navigateTo('journal-article', { articleSlug: art.slug })}
              className="group cursor-pointer bg-[#12141A] border border-[#242630] hover:border-[#8B672B] p-6 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden mb-5 bg-[#181A22] border border-[#20232E]">
                  <img
                    src={art.heroImage}
                    alt={art.title}
                    className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#CFA85E] mb-2">
                  <span>{art.category}</span>
                  <span className="text-[#8B672B]">·</span>
                  <span className="text-[#9C968A] tabular-nums">{art.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#F4F1EA] group-hover:text-[#DDB872] transition-colors mb-2 leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#9C968A] leading-relaxed line-clamp-3 mb-6 font-light">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#20232E] flex items-center justify-between text-xs text-[#9C968A]">
                <span>{art.author}</span>
                <span className="text-[#CFA85E] group-hover:text-[#DDB872] transition-colors flex items-center gap-1">
                  <span>Read Essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
