import styled from "styled-components";
import { opacityEnter } from "../GlobalStyles";

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
  margin-inline: auto;
  gap: 1rem;
  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.textdark};
  animation: ${opacityEnter} 0.4s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.cyan};
  }

  img {
    width: 5rem;
  }

  .big-image {
    width: 100%;
    height: auto;
    margin-top: -1rem;
  }

  .active {
    color: ${(props) => props.theme.colors.blue};
  }

  a {
    padding: 0.75rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.textlight};
  }

  .info {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }
`;
