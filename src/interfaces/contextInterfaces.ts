import { CharacterSchema } from "./characterInterfaces";
import { EpisodeDataSchema } from "./episodeInterfaces";
import { Dispatch, SetStateAction } from "react";

export interface IGetAllCharacters {
  charactersList: CharacterSchema[];
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: Dispatch<SetStateAction<number>>;
}

export interface IGetACharacter {
  setId: Dispatch<SetStateAction<number>>;
  setCharacterDetail: Dispatch<SetStateAction<CharacterSchema[]>>;
  characterDetail: any;
}

export interface IGetEpisode {
  setEpisodeId: Dispatch<SetStateAction<number>>;
  episodeData: any;
}
