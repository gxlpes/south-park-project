import { useContext } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { ThemesContext } from "../../contexts/theme/ThemesContext";
import { LinksContainer, LogoContainer, NavbarSection } from "./Styles";
import Switch from "react-switch";
import { GetAllCharactersContext } from "../../contexts/character(s)/GetAllCharactersContext";
import { GetAllEpisodesContext } from "../../contexts/episode(s)/GetAllEpisodesContext";
import { FindSomethingContext } from "../../contexts/search/FindSomethingContext";

const Navbar = () => {
  const location = useLocation();
  const { setSearchTerm } = useContext(FindSomethingContext);
  const { toggleTheme } = useContext(ThemesContext);
  const { title, colors } = useContext(ThemeContext);
  const { setCharactersPage } = useContext(GetAllCharactersContext);
  const { setEpisodesPage } = useContext(GetAllEpisodesContext);

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
          <NavLink
            style={{ color: colors.orange }}
            onClick={() => {
              setSearchTerm("");
              setEpisodesPage(1);
            }}
            to="/episodes/1"
          >
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
            offColor={colors.primary}
            onColor={colors.primary}
            offHandleColor={colors.blue}
            onHandleColor={colors.cyan}
          />
        </div>
      </NavbarSection>
    </>
  );
};

export default Navbar;
