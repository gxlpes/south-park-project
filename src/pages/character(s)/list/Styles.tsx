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
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  width: max-content;
`;

export const Item = styled.li`
  width: 20rem;
  list-style: none;
  text-align: left;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.textdark};

  &:hover {
    background-color: ${(props) => props.theme.colors.cyan};
  }
`;
