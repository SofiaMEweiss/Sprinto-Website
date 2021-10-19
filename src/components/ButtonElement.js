import styled from "styled-components"

export const Button = styled.button`
  padding: 0.8em 2.4em;
  border-radius: 5em;
  border: none;
  outline: none;
  white-space: nowrap;
  background: ${({ isActive }) => (isActive ? "#F7A58F" : "#dbdada")};
  color: ${({ isActive }) => (isActive ? "#373E57" : "#353434")};
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ isActive }) => (isActive ? "#f3bcac" : "#dbdada")};
  }
`
