import { useNavigate } from "react-router-dom";
import { HomeSection } from "./Styles";
import Switch from "react-switch";
import { useContext } from "react";
import { ThemesContext } from "../../contexts/ThemesContext";
import { ThemeContext } from "styled-components";
import { GetAllEpisodesContext } from "../../contexts/episode(s)/GetAllEpisodesContext";
import { GetAllCharactersContext } from "../../contexts/character(s)/GetAllCharactersContext";

const Home = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useContext(ThemesContext);
  const { title, colors } = useContext(ThemeContext);
  const { setCharactersPage } = useContext(GetAllCharactersContext);
  const { setEpisodesPage } = useContext(GetAllEpisodesContext);

  const helperHandlerSetCharacters = () => {
    navigate("/characters/1");
    setCharactersPage(1);
  };

  const helperHandlerSetEpisodes = () => {
    navigate("/episodes/1");
    setEpisodesPage(1);
  };

  return (
    <>
      <HomeSection>
        <Switch
          height={20}
          width={40}
          handleDiameter={20}
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor={colors.primary}
          onColor={colors.textlight}
          offHandleColor={colors.blue}
          onHandleColor={colors.orange}
        />
        <h1>SOUTH PARK DATA</h1>
        <div className="container-buttons">
          <button style={{ backgroundColor: colors.green }} onClick={helperHandlerSetCharacters}>
            Characters
          </button>
          <button style={{ backgroundColor: colors.cyan }} onClick={helperHandlerSetEpisodes}>
            Episodes
          </button>
        </div>
      </HomeSection>
    </>
  );
};

export default Home;
