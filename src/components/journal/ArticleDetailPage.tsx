import React from 'react';
import { motion } from 'motion/react';
import { useNavigation } from '../../context/NavigationContext';
import { JOURNAL_ARTICLES, TEAM_MEMBERS } from '../../data/tglcData';
import { GoldDivider } from '../common/GoldDivider';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface ArticleDetailPageProps {
  articleSlug?: string;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ articleSlug }) => {
  const { navigateTo } = useNavigation();

  const article = JOURNAL_ARTICLES.find((a) => a.slug === articleSlug) || JOURNAL_ARTICLES[0];
  const relatedArticles = JOURNAL_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  const matchingTeam = TEAM_MEMBERS.find((m) => m.name === article.author);

  const editorialGallery =
    article.editorialImages && article.editorialImages.length >= 2
      ? article.editorialImages.slice(0, 2)
      : ['/assets/aistudio/tglc_st_james_salon.jpg', '/assets/aistudio/savile_row_bespoke.jpg'];

  return (
    <div className="bg-[#08090C] text-[#F4F1EA] pt-6 sm:pt-8 pb-14 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-8">
        {/* Back Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs tracking-wide text-[#CFA85E] border-b border-[#222530] pb-4">
          <button
            onClick={() => navigateTo('journal')}
            className="flex items-center gap-2 hover:text-[#F4F1EA] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Journal</span>
          </button>
          <span className="uppercase tracking-widest text-[11px]">{article.category}</span>
        </div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0.9, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="space-y-4 text-center max-w-3xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs tracking-wider uppercase text-[#CFA85E]">
            <span>{article.category}</span>
            <span className="text-[#8B672B]">·</span>
            <span className="tabular-nums">{article.publishDate}</span>
            <span className="text-[#8B672B]">·</span>
            <span className="tabular-nums">{article.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F1EA] leading-[1.08]">
            {article.title}
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-[#D9D4CA] leading-relaxed">
            {article.subtitle}
          </p>

          <div className="pt-1 text-xs text-[#9C968A] flex items-center justify-center gap-2">
            <span>By {article.author}</span>
            <span className="text-[#8B672B]">·</span>
            <span className="text-[#CFA85E]">{article.authorRole}</span>
          </div>
        </motion.div>

        {/* Hero Plate */}
        <div className="aspect-[16/9] w-full overflow-hidden bg-[#12141A] border border-[#242630]">
          <motion.img
            animate={{ scale: [1.04, 1, 1.03] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover brightness-105 contrast-105"
          />
        </div>

        {/* Editorial Body */}
        <article className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg text-[#D9D4CA] leading-[1.85] font-light">
          {article.contentParagraphs.slice(0, 2).map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? 'first-letter:text-5xl first-letter:font-serif first-letter:text-[#CFA85E] first-letter:mr-3 first-letter:float-left first-letter:leading-none'
                  : ''
              }
            >
              {para}
            </p>
          ))}

          {/* Embedded Two-Image Editorial Photography Diptych */}
          <motion.div
            initial={{ opacity: 0.9, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.55 }}
            className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {editorialGallery.map((imgPath, gIdx) => (
              <div key={gIdx} className="overflow-hidden border border-[#242630] bg-[#12141A] group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={imgPath}
                    alt={`${article.title} detail plate ${gIdx + 1}`}
                    className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-4 py-2.5 border-t border-[#20232E] flex items-center justify-between text-[11px] text-[#9C968A]">
                  <span>TGLC Archival Plate 0{gIdx + 1}</span>
                  <span className="text-[#CFA85E]">{article.category}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {article.contentParagraphs.slice(2).map((para, i) => (
            <p key={i + 2}>{para}</p>
          ))}

          {article.pullQuote && (
            <motion.div
              initial={{ opacity: 0.9, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.5 }}
              className="my-6 py-7 px-6 sm:px-10 border-y border-[#8B672B]/50 bg-[#12141A] text-center space-y-3"
            >
              <p className="font-serif italic text-2xl sm:text-3xl text-[#F4F1EA] leading-relaxed">
                “{article.pullQuote}”
              </p>
              <span className="text-xs uppercase tracking-widest text-[#CFA85E] block">
                — TGLC Editorial Notes
              </span>
            </motion.div>
          )}

          {article.subheadings &&
            article.subheadings.map((sub, idx) => (
              <div key={idx} className="space-y-3 pt-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">{sub.title}</h3>
                {sub.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            ))}

          <div className="p-6 bg-[#0E1016] border border-[#242630] space-y-2 text-xs sm:text-sm text-[#B5AFA3]">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#CFA85E] font-medium block">
              From the Mayfair Archive · Field Context
            </span>
            <p>
              Dispatches in this series originate from confidential field inspections led out of TGLC House at 45 Albemarle Street. Members seeking private viewings, tables, or craftsman introductions referenced above should note this essay’s title to their Senior Principal.
            </p>
          </div>
        </article>

        <GoldDivider />

        {/* Author Card */}
        <motion.div
          initial={{ opacity: 0.9, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto p-6 sm:p-8 bg-[#12141A] border border-[#242630] flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          {matchingTeam ? (
            <img
              src={matchingTeam.image}
              alt={article.author}
              className="w-16 h-16 rounded-full object-cover object-top border border-[#8B672B] shrink-0"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-[#181A22] border border-[#8B672B] flex items-center justify-center font-serif text-2xl text-[#CFA85E] shrink-0">
              {article.author.charAt(0)}
            </div>
          )}
          <div className="flex-1">
            <h4 className="font-serif text-xl text-[#F4F1EA]">{article.author}</h4>
            <p className="text-xs text-[#CFA85E] mt-0.5">
              {article.authorRole} · The Global Luxury Consortium
            </p>
            <p className="text-xs text-[#9C968A] mt-2 leading-relaxed font-light">
              Writing regularly from Mayfair on residential stewardship, independent horology, European culture, and quiet hospitality.
            </p>
          </div>
        </motion.div>

        <GoldDivider />

        {/* Related Essays */}
        <div className="pt-2 space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
            Further Reading from The Journal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <motion.div
                key={rel.slug}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                onClick={() => navigateTo('journal-article', { articleSlug: rel.slug })}
                className="group bg-[#12141A] border border-[#242630] hover:border-[#8B672B] cursor-pointer transition-colors overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#181A22]">
                    <img
                      src={rel.heroImage}
                      alt={rel.title}
                      className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] uppercase tracking-wider text-[#CFA85E] block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="font-serif text-xl text-[#F4F1EA] group-hover:text-[#DDB872] transition-colors mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#9C968A] line-clamp-2 leading-relaxed font-light">
                      {rel.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-4 text-xs text-[#CFA85E] flex items-center gap-1">
                  <span>Read Essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
