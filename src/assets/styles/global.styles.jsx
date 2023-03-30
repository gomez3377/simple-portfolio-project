import { createGlobalStyle } from "styled-components";
import { device } from "../../screen-sizes";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

body{
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
@media ${device.tablet}{
h1{
    font-size:72px;
    line-height:72px;

}
}

@media ${device.mobile}{
    h1{
        font-size: 40px;
        line-height: 40px;
        letter-spacing: -1.13636px;
    }
    p{
    font-size: 16px;
line-height: 26px;
    }
`;
