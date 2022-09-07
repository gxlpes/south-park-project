import { useNavigate } from "react-router-dom";
import { GetAllCharactersContext } from "../../contexts/character(s)/GetAllCharactersContext";
import { useContext } from "react";

const CharactersList: any = () => {
  const navigate = useNavigate();
  const { charactersList } = useContext(GetAllCharactersContext);

  return charactersList.map((el) => (
    <>
      <p>
        {el.name}
        <button onClick={() => navigate(`/character/${el.id}`)}>Info</button>
      </p>
    </>
  ));
};

export default CharactersList;
