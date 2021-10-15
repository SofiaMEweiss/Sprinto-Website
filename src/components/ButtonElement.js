import styled from "styled-components"
// import { Link } from "react-scroll"

export const Button = styled.button `
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#F7A58F" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#373E57" : "#fff")};
  font-weight: bold;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#f3bcac" : "#F7A58F")};
  }
`