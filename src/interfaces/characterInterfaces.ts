export interface CharacterSchema {
  id: number;
  name: string;
  age: number | null;
  sex: Sex;
  hair_color: null | string;
  occupation: null | string;
  grade: null | string;
  religion: null | string;
  voiced_by: null;
  created_at: Date;
  updated_at: Date;
  url: string;
  family: string;
  relatives: Relative[];
  episodes: string[];
}

export interface Relative {
  url: string;
  relation: string;
}

export enum Sex {
  Female = "Female",
  Male = "Male",
  MaleAndFemale = "Male and Female",
}

export interface Links {
  first: string;
  last: string;
  prev: null;
  next: string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url: null | string;
  label: number | string;
  active: boolean;
}
