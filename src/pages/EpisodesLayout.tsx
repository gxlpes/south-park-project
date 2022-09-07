import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { GetAllCharactersContext } from "../contexts/GetAllCharactersContext";
import { GetAllEpisodesContext } from "../contexts/GetAllEpisodesContext";

const EpisodesLayout = () => {
  const { nextEpisodesPage, prevEpisodesPage, episodesPage } = useContext(GetAllEpisodesContext);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </nav>
      <Outlet />
      {episodesPage > 1 && <button onClick={prevEpisodesPage}>Previous</button>}
      <button onClick={nextEpisodesPage}>Next</button>
    </>
  );
};

export default EpisodesLayout;
