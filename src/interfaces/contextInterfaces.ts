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
  setId: Dispatch<SetStateAction<number>>;
  setCharacterDetail: Dispatch<SetStateAction<CharacterSchema[]>>;
  characterDetail: any;
}

export interface IGetAllEpisodes {
  episodesList: EpisodeDataSchema[];
  episodesPage: number;
  setEpisodesPage: Dispatch<SetStateAction<number>>;
  nextEpisodesPage: () => void;
  prevEpisodesPage: () => void;
}

export interface IGetAEpisode {
  setEpisodeId: Dispatch<SetStateAction<number>>;
  episodeData?: EpisodeDataSchema;
}
