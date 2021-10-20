import styled from "styled-components"

export const Button = styled.button`
  width: 14rem;
  padding: 1.5rem 0em;
  border-radius: 5rem;
  border: none;
  outline: none;
  white-space: nowrap;
  background: ${({ isActive }) => (isActive ? "var(--cta-color)" : "#dbdada")};
  color: ${({ isActive }) => (isActive ? "var(--primary-color)" : "#353434")};
  font-size: var(--paragraph-font-size);
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ isActive }) =>
      isActive ? "var(--hover-color)" : "#dbdada"};
  }

  &:disabled {
    color: var(--primary-color);
    background: var(--tertiary-color);
    cursor: auto;
  }
`
