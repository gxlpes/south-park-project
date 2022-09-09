import styled from "styled-components";

export const HomeSection = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 2rem;

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

  button {
    width: 7rem;
    height: 2rem;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textdark};
    border-radius: 2px;
    border: none;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
`;
