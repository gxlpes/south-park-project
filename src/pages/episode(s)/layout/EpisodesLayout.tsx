import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { GetAllEpisodesContext } from "../../../contexts/episode(s)/GetAllEpisodesContext";
import { ContainerButtons } from "./Styles";

const EpisodesLayout = () => {
  const { nextEpisodesPage, prevEpisodesPage, episodesPage } = useContext(GetAllEpisodesContext);
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <Outlet />
      <ContainerButtons>
        {episodesPage > 1 && (
          <button style={{ backgroundColor: colors.blue }} onClick={prevEpisodesPage}>
            Previous
          </button>
        )}
        <button style={{ backgroundColor: colors.cyan }} onClick={nextEpisodesPage}>
          Next
        </button>
      </ContainerButtons>
    </>
  );
};

export default EpisodesLayout;
