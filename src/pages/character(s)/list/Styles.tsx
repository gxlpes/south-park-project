import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: center;
  align-items: center;
`;

export const ListSection = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  border: 2px solid ${(props) => props.theme.colors.primary};
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 30rem;
  height: 12rem;
  list-style: none;
  text-align: left;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem 1rem 1rem 0rem;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.textdark};

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
      border-radius: 7px;
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
