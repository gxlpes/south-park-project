import styled from "styled-components";
import { opacityEnter, upEnter } from "../../styles/GlobalStyles";

export const HomeSection = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 2rem;
  animation: ${opacityEnter} 0.4s ease-in-out;

  @font-face {
    font-family: "South Park";
    src: url("../assets/fonts/southpark.tff");
  }

  h1 {
    color: ${(props) => props.theme.colors.textdark};
    font-family: "South Park";
    font-size: var(--fs-xxl);
  }

  .container-buttons {
    display: flex;
    gap: 1rem;
  }
`;
