import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing:border-box ;
}

body{
    width:100%;
    height:100vh;
    background-color: ${({ theme }) => theme.colors.body} ;
    color: ${({ theme }) => theme.colors.text} ;
    font-family:${({ theme }) => theme.font}  ;
}

a{
    color:${({ theme }) => theme.colors.link.text};
}
`;

export default GlobalStyles;
