import { useContext } from "react";
import { useNavigate, useLocation, Link, NavLink } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { ThemesContext } from "../../contexts/ThemesContext";
import { LinksContainer, LogoContainer, NavbarSection } from "./Styles";
import Switch from "react-switch";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleTheme } = useContext(ThemesContext);
  const { title, colors } = useContext(ThemeContext);

  if (location.pathname === "/") {
    return null;
  }

  return (
    <>
      <NavbarSection>
        <LogoContainer>
          <Link to="/">
            <p>South Park Data</p>
          </Link>
        </LogoContainer>
        <LinksContainer>
          <NavLink style={{ color: colors.green }} to="/characters">
            Characters
          </NavLink>
          <NavLink style={{ color: colors.orange }} to="/episodes">
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
