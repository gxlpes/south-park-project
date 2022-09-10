import styled from "styled-components";
import { upEnter } from "../../styles/GlobalStyles";

export const NavbarSection = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  animation: ${upEnter} 0.2s ease-in-out;
  border-bottom: 0.25px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background};
  position: fixed;
  z-index: 1;
`;

export const LogoContainer = styled.div`
  p {
    padding: 0;
    margin: 0;
    font-family: "South Park";
    font-size: var(--fs-md);
    color: ${(props) => props.theme.colors.textdark};
    font-weight: 900;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--fs-sm);
  font-weight: bold;
`;
