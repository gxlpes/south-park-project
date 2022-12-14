import { CharacterSchema } from "./characterInterfaces";
import { EpisodeDataSchema } from "./episodeInterfaces";
import { Dispatch, SetStateAction } from "react";

export interface IGetAllCharacters {
  charactersList: CharacterSchema[];
  charactersPage: number;
  setCharactersPage: Dispatch<SetStateAction<number>>;
  nextCharactersPage: () => void;
  prevCharactersPage: () => void;
}

export interface IGetACharacter {
  setCharacterId: Dispatch<SetStateAction<number>>;
  setCharacterDetail: Dispatch<SetStateAction<CharacterSchema[]>>;
  characterDetail: any;
}

export interface IGetAllEpisodes {
  episodesList: EpisodeDataSchema[];
  episodesPage: number;
  setEpisodesPage: Dispatch<SetStateAction<number>>;
  nextEpisodesPage: () => void;
  prevEpisodesPage: () => void;
  setEpisodesList: Dispatch<SetStateAction<EpisodeDataSchema[]>>;
}

export interface IGetAEpisode {
  setEpisodeId: Dispatch<SetStateAction<number>>;
  episodeDetail?: EpisodeDataSchema;
}

export interface IFindSomething {
  setEpisodesList: Dispatch<SetStateAction<EpisodeDataSchema[]>>;
  setSearchCategory: Dispatch<SetStateAction<string>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchCategory: any;
  searchTerm: any;
}

export interface ITheme {
  theme: any;
  toggleTheme: () => void;
}
