import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { GetAllCharactersContext } from "../../../contexts/character(s)/GetAllCharactersContext";
import { ContainerButtons } from "../../../styles/ui/Layout";

const CharactersLayout = () => {
  const { nextCharactersPage, prevCharactersPage, charactersPage } = useContext(GetAllCharactersContext);
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <Outlet />
      <ContainerButtons>
        {charactersPage > 1 && (
          <button style={{ backgroundColor: colors.blue }} onClick={prevCharactersPage}>
            Previous
          </button>
        )}
        <button style={{ backgroundColor: colors.cyan }} onClick={nextCharactersPage}>
          Next
        </button>
      </ContainerButtons>
    </>
  );
};

export default CharactersLayout;
