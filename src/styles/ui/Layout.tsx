import styled from "styled-components";

export const ContainerButtons = styled.div`
  margin-block: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  button {
    color: ${(props) => props.theme.colors.textlight};
    &:active {
      transform: scale(1.1);
    }
  }
`;

export const ContainerSearch = styled.div`
  margin-top: 5rem;
  margin-bottom: -3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    gap: 1rem;
  }
`;
