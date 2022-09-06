import { GetAllCharactersContext } from "../contexts/GetAllCharactersContext";
import { ICharactersList } from "../interfaces/reactInterfaces";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CharacterSchema } from "../interfaces/characterInterfaces";
import { GetACharacterContext } from "../contexts/GetACharacterContext";

const CharactersList = ({ charactersList }: ICharactersList): any => {
  const navigate = useNavigate();
  const { setId } = useContext(GetACharacterContext);
  const { id } = useParams();

  useEffect(() => {
    setId(Number(id));
    console.log("Trocou id");
  }, [id]);

  return charactersList.map((el) => (
    <>
      <p>
        {el.name} - <button onClick={() => setId(el.id)}>Info</button>
      </p>
    </>
  ));
};

export default CharactersList;
