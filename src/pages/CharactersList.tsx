import { ICharactersList } from "../interfaces/reactInterfaces";
import { useNavigate, useParams } from "react-router-dom";

const CharactersList = ({ charactersList }: ICharactersList): any => {
  const navigate = useNavigate();

  return charactersList.map((el) => (
    <>
      <p>
        {el.name} - <button onClick={() => navigate(`/character/${el.id}`)}>Info</button>
      </p>
    </>
  ));
};

export default CharactersList;
