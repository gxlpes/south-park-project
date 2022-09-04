import { GetAllCharactersContext } from "../contexts/GetAllCharactersContext";
import { ICharactersList } from "../interfaces/reactInterfaces";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CharacterSchema } from "../interfaces/characterInterfaces";

const CharactersList = ({ charactersList }: ICharactersList): any => {
  const navigate = useNavigate();
  return charactersList.map((el) => (
    <>
      <p>
        {el.name} - <button onClick={() => navigate(`/info/${el.id}`)}>Info</button>
      </p>
    </>
  ));
};

export default CharactersList;
