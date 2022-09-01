import { ReactNode } from "react";
import { CharacterSchema } from "./characterInterfaces";

export interface ICharacter {
  character: CharacterSchema;
}

export interface ICharacterList {
  characterList: CharacterSchema[];
}

export interface IChildren {
  children: ReactNode;
}
