import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { GetAllCharactersContext } from "../../contexts/character(s)/GetAllCharactersContext";

const CharactersLayout = () => {
  const { nextCharactersPage, prevCharactersPage, charactersPage } = useContext(GetAllCharactersContext);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/episodes">Episodes</Link>
      </nav>
      <Outlet />
      {charactersPage > 1 && <button onClick={prevCharactersPage}>Previous</button>}
      <button onClick={nextCharactersPage}>Next</button>
    </>
  );
};

export default CharactersLayout;
