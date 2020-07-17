import styled from "styled-components";

export const StyledButtonLink = styled.button`
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  background: none;

  &:hover {
    color: var(--accent-color);
  }
`;

export const StyledButton = styled.button`
  background-color: var(--main-text-color);
  color: var(--main-bg-color);
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  border-radius: 5px;
`;
