import styled from "styled-components";
import { opacityEnter } from "../GlobalStyles";

export const ListContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  flex-direction: center;
  align-items: center;
  animation: ${opacityEnter} 0.4s ease-in-out;
`;

export const ListSection = styled.ul`
  padding-block: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  a {
    filter: drop-shadow(rgba(0, 0, 0, 0.1) 4px 4px 12px);

    &:hover {
      filter: drop-shadow(${(props) => props.theme.colors.yellow} 0px 0px 5px);
    }
  }
`;

export const Item = styled.li`
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 30rem;
  height: 12rem;
  list-style: none;
  text-align: left;
  color: ${(props) => props.theme.colors.textdark};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem 1rem 1rem 0rem;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.cyan};
  }

  .image {
    width: 20rem;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    img {
      width: 4.2rem;
      height: auto;
      background-color: white;
    }

    .big-img {
      width: 100%;
      height: 12rem;
    }
  }

  .main-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    width: 20rem;
  }

  .side-info {
    width: 5rem;
    text-align: right;
  }
`;
