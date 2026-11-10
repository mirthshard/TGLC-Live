import { SERVICES_DATA, JOURNAL_ARTICLES } from '../data/tglcData';
import { RouteState, PageRoute } from '../types';

export interface BreadcrumbItem {
  label: string;
  route?: PageRoute;
  params?: {
    serviceId?: string;
    subServiceId?: string;
    articleSlug?: string;
  };
  isCurrent?: boolean;
}

export interface BackLinkInfo {
  label: string;
  route: PageRoute;
  params?: {
    serviceId?: string;
    subServiceId?: string;
    articleSlug?: string;
  };
}

/**
 * Returns breadcrumb items for a given route state.
 * Returns null if the page should not display breadcrumbs (e.g. home page).
 */
export function getBreadcrumbsForRoute(route: RouteState): BreadcrumbItem[] | null {
  const { page, serviceId, subServiceId, articleSlug } = route;

  // Home has no breadcrumbs
  if (page === 'home') {
    return null;
  }

  // 1. Services sub-pages
  if (page === 'subservice-detail' && serviceId && subServiceId) {
    const parent = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];
    const sub = parent.subServices.find((s) => s.id === subServiceId) || parent.subServices[0];
    return [
      { label: 'Home', route: 'home' },
      { label: 'Services', route: 'services' },
      { label: parent.title, route: 'service-detail', params: { serviceId: parent.id } },
      { label: sub.title, isCurrent: true }
    ];
  }

  if (page === 'service-detail' && serviceId) {
    const parent = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];
    return [
      { label: 'Home', route: 'home' },
      { label: 'Services', route: 'services' },
      { label: parent.title, isCurrent: true }
    ];
  }

  if (page === 'services') {
    return [
      { label: 'Home', route: 'home' },
      { label: 'Services Directory', isCurrent: true }
    ];
  }

  // 2. Journal sub-pages
  if (page === 'journal-article' && articleSlug) {
    const article = JOURNAL_ARTICLES.find((a) => a.slug === articleSlug) || JOURNAL_ARTICLES[0];
    return [
      { label: 'Home', route: 'home' },
      { label: 'Journal', route: 'journal' },
      { label: article.category, isCurrent: false, route: 'journal' },
      { label: article.title, isCurrent: true }
    ];
  }

  if (page === 'journal') {
    return [
      { label: 'Home', route: 'home' },
      { label: 'The TGLC Journal', isCurrent: true }
    ];
  }

  if (page === 'hidden-london') {
    return [
      { label: 'Home', route: 'home' },
      { label: 'Sub-Rosa London & Prime Access', isCurrent: true }
    ];
  }

  // Fallback for other known pages if needed
  return null;
}

/**
 * Returns optional quick back link info for breadcrumb bar.
 */
export function getBackLinkForRoute(route: RouteState): BackLinkInfo | null {
  const { page, serviceId } = route;

  if (page === 'subservice-detail' && serviceId) {
    const parent = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];
    return {
      label: `Back to ${parent.title}`,
      route: 'service-detail',
      params: { serviceId: parent.id }
    };
  }

  if (page === 'service-detail') {
    return {
      label: 'Back to Services Directory',
      route: 'services'
    };
  }

  if (page === 'journal-article') {
    return {
      label: 'Return to Journal',
      route: 'journal'
    };
  }

  if (page === 'services' || page === 'journal') {
    return {
      label: 'Return to Home',
      route: 'home'
    };
  }

  return null;
}
