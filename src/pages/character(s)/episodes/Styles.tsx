import styled from "styled-components";

export const ListEpisodes = styled.ul`
  margin-block: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const LinkEpisodeItem = styled.li`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textdark};
  border-radius: 4px;
  padding: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.orange};
  }
`;
