import { useContext } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import { GetAllCharactersContext } from "../contexts/GetAllCharactersContext";

const CharacterInfo = () => {
  const { charactersList } = useContext(GetAllCharactersContext);
  const { id } = useParams();
  const arrId = Number(id) - 1;
  const character = charactersList[arrId];
  console.log(character);

  return (
    <>
      <p>{character.id}</p>
      <p>{character.name}</p>
      <p>{character.age ? character.age : "No data"}</p>
      <p>{character.occupation}</p>
      <Link to={`/info/${character.id}/episodes`}>Episodes</Link>
      <Routes>
        <Route path="/episodes">Episodes</Route>
      </Routes>
    </>
  );
};

export default CharacterInfo;
