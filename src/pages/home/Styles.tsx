import styled from "styled-components";

export const HomeSection = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 2rem;

  @font-face {
    font-family: "AssistantRegular";
    src: url("../assets/fonts/southpark.tff");
  }

  h1 {
    color: purple;
  }

  .container-buttons {
    display: flex;
    gap: 1rem;
  }

  button {
    width: 7rem;
    height: 2rem;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    border-radius: 2px;
    border: none;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
`;
