export interface ArticlesData {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  id: number;
  title: string;
  authors: Author[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: Date;
  updated_at: Date;
  featured: boolean;
  launches: Launch[];
  events: Event[];
}

export interface Author {
  name: string;
  socials: Socials | null;
}

export interface Socials {
  x: string;
  youtube: string;
  instagram: string;
  linkedin: string;
  mastodon: string;
  bluesky: string;
}

export interface Event {
  event_id: number;
  provider: Provider;
}

export enum Provider {
  LaunchLibrary2 = "Launch Library 2",
}

export interface Launch {
  launch_id: string;
  provider: Provider;
}
