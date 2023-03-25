import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`


body{
    background-color:${({theme:{colors}}) => colors.nearBlack};
    font-family: "Space Grotesk";
    color:white;
}

h1{
    font-size:88px;
    line-height:88px;
    letter-spacing: -2.5px;
   
    font-family: "Space Grotesk Bold";
}
h2{
    font-size:48px;
    line-height:56px;
    letter-spacing: -1.5px;
    font-family: "Space Grotesk Bold";
    
}
h3{
    font-size:24px;
    line-height:32px;
    font-family: "Space Grotesk Bold";
    
}
p{
    font-size:18px;
    line-height:28px;
    font-family: "Space Grotesk Medium";

}

`