import styled from "styled-components";

export const Item = styled.div`
  margin-top: 5rem;
  width: 20rem;
  list-style: none;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-inline: auto;
  gap: 1rem;
  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.textdark};

  &:hover {
    background-color: ${(props) => props.theme.colors.cyan};
  }

  img {
    width: 5rem;
  }

  .active {
    color: ${(props) => props.theme.colors.blue};
  }
`;
