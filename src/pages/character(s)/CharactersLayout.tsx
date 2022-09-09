import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { GetAllCharactersContext } from "../../contexts/character(s)/GetAllCharactersContext";

const CharactersLayout = () => {
  const { nextCharactersPage, prevCharactersPage, charactersPage } = useContext(GetAllCharactersContext);

  return (
    <>
      <Outlet />
      {charactersPage > 1 && <button onClick={prevCharactersPage}>Previous</button>}
      <button onClick={nextCharactersPage}>Next</button>
    </>
  );
};

export default CharactersLayout;
