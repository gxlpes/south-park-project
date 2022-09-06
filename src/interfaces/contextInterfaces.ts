import { CharacterSchema, LinksSchema, MetaSchema } from "./characterInterfaces";
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
