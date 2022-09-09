import styled from "styled-components";

export const NavbarSection = styled.nav`
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
`;

export const LogoContainer = styled.div`
  p {
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
  justify-content: center;

  .active {
    padding: 0.25rem 0.5rem;
    border-radius: 2px;
    background-color: ${(props) => props.theme.colors.textdark};
  }
`;