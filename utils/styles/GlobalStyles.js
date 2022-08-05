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
        background-color:${({ theme }) => theme.colors.background} ;
        font-family:${({ theme }) => theme.font} ;
    }

    h1,h2,h3,h4,h5,h6{
        color:${({ theme }) => theme.colors.secondaryColor} ;
    }

    p{
        color:${({ theme }) => theme.colors.primaryColor} ;
    }


`;

export default GlobalStyles;
