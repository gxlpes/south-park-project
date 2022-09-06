import { GetAllCharactersContext } from "../contexts/GetAllCharactersContext";
import { ICharactersList } from "../interfaces/reactInterfaces";
import { useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CharacterSchema } from "../interfaces/characterInterfaces";
import { GetACharacterContext } from "../contexts/GetACharacterContext";

const CharactersList = ({ charactersList }: ICharactersList): any => {
  const navigate = useNavigate();
  const data = useRef(0);
  const { setId } = useContext(GetACharacterContext);
  const { id } = useParams();

  const charDetailHandler = (id: number) => {
    navigate(`/info/${id}`);
  };

  return charactersList.map((el) => (
    <>
      <p>
        {el.name} - <button onClick={() => charDetailHandler(el.id)}>Info</button>
      </p>
    </>
  ));
};

export default CharactersList;
