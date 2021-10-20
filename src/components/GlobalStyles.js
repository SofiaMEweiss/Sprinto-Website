import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle `
* {
	box-sizing: border-box;
	margin: 0px;
	padding: 0px;
	font-family: 'Century Gothic W05 Regular';
	font-size: 12pt;
}

:root {
  --primary-color: #373E57;
  --secondary-color: #94E7D3;
  --tertiary-color: #EEEAE7;
  --cta-color: #F7A58F;
  --hover-color: #F3BCAC;
  --background-color: #FFF;
  --font-color: #000;
  --placeholder-color: #A09C9C;
  --header-heading-font-size: 4rem;
  --heading-font-size: 2.8rem;
  --subheading-font-size: 1.5rem;
  --paragraph-font-size: 1.1rem;
  --validation-font-size: 0.8rem;
}

`