/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/common/Header';
import { BreadcrumbNav } from './components/common/BreadcrumbNav';
import { Footer } from './components/common/Footer';
import { IntroductionModal } from './components/common/IntroductionModal';
import { GlobalSearchModal } from './components/search/GlobalSearchModal';
import { CookieBanner } from './components/common/CookieBanner';
import { HomePage } from './components/home/HomePage';
import { ConsortiumPages } from './components/consortium/ConsortiumPages';
import { ServicesHub } from './components/services/ServicesHub';
import { ServiceDetailPage } from './components/services/ServiceDetailPage';
import { SubServiceDetailPage } from './components/services/SubServiceDetailPage';
import { MembershipPage } from './components/membership/MembershipPage';
import { MemberPortal } from './components/portal/MemberPortal';
import { CalendarPage } from './components/calendar/CalendarPage';
import { JournalPage } from './components/journal/JournalPage';
import { ArticleDetailPage } from './components/journal/ArticleDetailPage';
import { ContactPage } from './components/contact/ContactPage';
import { FAQPage } from './components/faq/FAQPage';
import { LegalPages } from './components/legal/LegalPages';
import { HiddenLondonPage } from './components/access/HiddenLondonPage';
import { AccessGate } from './components/auth/AccessGate';
import { motion } from 'motion/react';

const PageContent: React.FC = () => {
  const { route } = useNavigation();

  switch (route.page) {
    case 'home':
      return <HomePage />;
    case 'consortium':
      return <ConsortiumPages subPage="overview" />;
    case 'about':
      return <ConsortiumPages subPage="about" />;
    case 'ethos':
      return <ConsortiumPages subPage="ethos" />;
    case 'approach':
      return <ConsortiumPages subPage="approach" />;
    case 'network':
      return <ConsortiumPages subPage="network" />;
    case 'our-london':
      return <ConsortiumPages subPage="our-london" />;
    case 'privacy-discretion':
      return <ConsortiumPages subPage="privacy" />;
    case 'services':
      return <ServicesHub />;
    case 'service-detail':
      return <ServiceDetailPage serviceId={route.serviceId} />;
    case 'subservice-detail':
      return <SubServiceDetailPage serviceId={route.serviceId} subServiceId={route.subServiceId} />;
    case 'membership':
      return <MembershipPage />;
    case 'member-portal':
      return <MemberPortal />;
    case 'calendar':
      return <CalendarPage />;
    case 'journal':
      return <JournalPage />;
    case 'journal-article':
      return <ArticleDetailPage articleSlug={route.articleSlug} />;
    case 'contact':
      return <ContactPage />;
    case 'faq':
      return <FAQPage />;
    case 'hidden-london':
      return <HiddenLondonPage initialSubPage="all" />;
    case 'hidden-london-subterranean':
      return <HiddenLondonPage initialSubPage="subterranean" />;
    case 'hidden-london-industrial':
      return <HiddenLondonPage initialSubPage="industrial" />;
    case 'hidden-london-gastronomy':
      return <HiddenLondonPage initialSubPage="counter-culture" />;
    case 'hidden-london-after-hours':
      return <HiddenLondonPage initialSubPage="after-hours" />;
    case 'hidden-london-itinerary':
      return <HiddenLondonPage initialSubPage="itinerary" />;
    case 'privacy-policy':
    case 'terms':
    case 'cookie-policy':
    case 'accessibility':
    case 'image-credits':
    case 'sitemap':
    case 'not-found':
      return <LegalPages page={route.page} />;
    default:
      return <HomePage />;
  }
};

function PageContentWrapper() {
  const { route } = useNavigation();
  const routeKey = `${route.page}-${route.serviceId || ''}-${route.subServiceId || ''}-${route.articleSlug || ''}-${route.subSection || ''}`;

  return (
    <motion.div
      key={routeKey}
      initial={{ opacity: 0.94, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <PageContent />
    </motion.div>
  );
}

export default function App() {
  return (
    <AccessGate>
      <NavigationProvider>
        <div className="min-h-screen bg-[#08090C] text-[#F4F1EA] flex flex-col font-sans selection:bg-[#B98633]/30 selection:text-[#F4F1EA]">
          <Header />
          <BreadcrumbNav />
          <main className="flex-1">
            <PageContentWrapper />
          </main>
          <Footer />
          <GlobalSearchModal />
          <IntroductionModal />
          <CookieBanner />
        </div>
      </NavigationProvider>
    </AccessGate>
  );
}
