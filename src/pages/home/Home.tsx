import { useNavigate } from "react-router-dom";
import { HomeSection } from "./Styles";
import Switch from "react-switch";
import { useContext } from "react";
import { ThemesContext } from "../../contexts/ThemesContext";
import { ThemeContext } from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useContext(ThemesContext);
  const { title, colors } = useContext(ThemeContext);

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
          <button style={{ backgroundColor: colors.green }} onClick={() => navigate("/characters/1")}>
            Characters
          </button>
          <button style={{ backgroundColor: colors.cyan }} onClick={() => navigate("/episodes/1")}>
            Episodes
          </button>
        </div>
      </HomeSection>
    </>
  );
};

export default Home;
