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
  gap: 1rem;
  width: 30rem;
  height: 12rem;
  list-style: none;
  text-align: left;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0rem 1rem 0rem 0rem;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.textdark};

  &:hover {
    background-color: ${(props) => props.theme.colors.cyan};
  }

  .image {
    height: 100%;
    width: 15rem;
  }

  img {
    height: 100%;
    width: 100%;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
