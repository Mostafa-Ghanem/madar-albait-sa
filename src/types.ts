export interface SiteConfig {
  author: string;
  date: { options: Intl.DateTimeFormatOptions };
  description: string;
  lang: string;
  ogLocale: string;
  showLogo: boolean;
  title: string;
  shortTitle: string;
  url: string;
}

export interface PaginationLink { srLabel?: string; text?: string; url: string }

export interface SiteMeta {
  articleDate?: string;
  description?: string;
  noindex?: boolean;
  ogImage?: string;
  title: string;
}

export type AdmonitionType = "tip" | "note" | "important" | "caution" | "warning";
