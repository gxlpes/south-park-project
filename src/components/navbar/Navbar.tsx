import { useContext } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { ThemesContext } from "../../contexts/ThemesContext";
import { LinksContainer, LogoContainer, NavbarSection } from "./Styles";
import Switch from "react-switch";
import { GetAllCharactersContext } from "../../contexts/character(s)/GetAllCharactersContext";

const Navbar = () => {
  const location = useLocation();
  const { toggleTheme } = useContext(ThemesContext);
  const { title, colors } = useContext(ThemeContext);
  const { setCharactersPage, charactersPage } = useContext(GetAllCharactersContext);

  if (location.pathname === "/") {
    return null;
  }

  return (
    <>
      <NavbarSection>
        <LogoContainer>
          <Link to="/">
            <p>SPD</p>
          </Link>
        </LogoContainer>
        <LinksContainer>
          <NavLink style={{ color: colors.green }} to={`/characters/${1}`} onClick={() => setCharactersPage(1)}>
            Characters
          </NavLink>
          <NavLink style={{ color: colors.orange }} to="/episodes/1">
            Episodes
          </NavLink>
        </LinksContainer>

        <div className="switch">
          <Switch
            height={20}
            width={40}
            handleDiameter={20}
            onChange={toggleTheme}
            checked={title === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            offColor={colors.background}
            onColor={colors.background}
            offHandleColor={colors.blue}
            onHandleColor={colors.cyan}
          />
        </div>
      </NavbarSection>
    </>
  );
};

export default Navbar;
