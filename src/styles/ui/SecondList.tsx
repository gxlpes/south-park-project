import styled from "styled-components";
import { opacityEnter } from "../GlobalStyles";

export const List = styled.ul`
  margin-block: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
  flex-wrap: wrap;
  gap: 1rem;
  animation: ${opacityEnter} 0.4s ease-in-out;
  max-width: 75%;
`;

export const ListItem = styled.li`
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
