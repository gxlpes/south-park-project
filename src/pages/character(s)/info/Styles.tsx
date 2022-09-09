import styled from "styled-components";

export const Item = styled.div`
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
  flex-direction: column;

  &:hover {
    background-color: ${(props) => props.theme.colors.cyan};
  }
`;
