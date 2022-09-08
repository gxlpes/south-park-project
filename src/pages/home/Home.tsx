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
          handleDiameter={30}
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor="#3f3f3f"
          onColor={colors.text}
          offHandleColor="#0ff"
          onHandleColor="#08f"
        />
        <h1>SOUTH PARK DATA</h1>
        <div className="container-buttons">
          <button onClick={() => navigate("/characters/1")}>Characters</button>
          <button onClick={() => navigate("/episodes/1")}>Episodes</button>
        </div>
      </HomeSection>
    </>
  );
};

export default Home;
