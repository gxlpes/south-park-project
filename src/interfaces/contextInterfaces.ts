import { CharacterSchema, LinksSchema, MetaSchema } from "./characterInterfaces";

export interface IGetAllCharacters {
  charactersList: CharacterSchema[];
  nextPage: () => void;
}
