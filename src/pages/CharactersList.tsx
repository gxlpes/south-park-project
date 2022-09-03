import { GetAllCharactersContext } from "../contexts/GetAllCharactersContext";
import { ICharactersList } from "../interfaces/reactInterfaces";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CharacterSchema } from "../interfaces/characterInterfaces";

const CharactersList = ({ charactersList }: ICharactersList): any => {
  return charactersList.map((el) => <p>{el.name}</p>);
};

export default CharactersList;
