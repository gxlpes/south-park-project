import { ReactNode } from "react";
import { CharacterSchema } from "./characterInterfaces";
import { EpisodeDataSchema } from "./episodeInterfaces";

export interface ICharacter {
  character: CharacterSchema;
}

export interface ICharactersList {
  charactersList: CharacterSchema[];
}

export interface IChildren {
  children: ReactNode;
}

export interface IEpisodeData {
  episodeData: EpisodeDataSchema;
}
