import styled from "styled-components";

export const FooterSection = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  text-align: center;
  padding-block: 1rem;
  color: ${(props) => props.theme.colors.textdark};
`;
