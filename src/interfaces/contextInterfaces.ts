import { CharacterSchema, LinksSchema, MetaSchema } from "./characterInterfaces";
import { Dispatch, SetStateAction } from "react";

export interface IGetAllCharacters {
  charactersList: CharacterSchema[];
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: Dispatch<SetStateAction<number>>;
}
