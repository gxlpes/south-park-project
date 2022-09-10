export interface EpisodeDataSchema {
  id: number;
  name: string;
  season: number;
  episode: number;
  air_date: string;
  wiki_url: string;
  thumbnail_url: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  characters: string[];
  locations: string[];
}
