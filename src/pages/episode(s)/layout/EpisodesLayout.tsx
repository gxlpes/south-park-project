import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { GetAllEpisodesContext } from "../../../contexts/episode(s)/GetAllEpisodesContext";

const EpisodesLayout = () => {
  const { nextEpisodesPage, prevEpisodesPage, episodesPage } = useContext(GetAllEpisodesContext);

  return (
    <>
      <Outlet />
      {episodesPage > 1 && <button onClick={prevEpisodesPage}>Previous</button>}
      <button onClick={nextEpisodesPage}>Next</button>
    </>
  );
};

export default EpisodesLayout;
