import styled from "styled-components";

export const ErrorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  gap: 1rem;
  color: ${(props) => props.theme.colors.textlight};
`;
