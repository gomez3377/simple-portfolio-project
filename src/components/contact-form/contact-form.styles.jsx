import styled from 'styled-components'
import { device } from '../../screen-sizes'



export const ContactFormContainer = styled.form`
width:445px;
button{
    float:right;
}
input, textarea{
    font-family:"Space Grotesk";
    font-weight:500;
    font-size:16px;
    line-height:26px;
    letter-spacing: -0.222222px;
    text-transform:uppercase;
    background-color:transparent;
    margin-bottom:32px;
    display:block;
    border:none;
    border-bottom:1px solid gray;
    color:white;
    width:100%;
}
input{
    padding-bottom:17px;
    padding-left:24px;
}
input:invalid{
    border-bottom-color:${({theme:{colors}}) => colors.red};
}
input:valid{
    border-bottom-color: ${({theme:{colors}}) => colors.green}
}




textarea{
    padding-left:24px;
    resize:none;
    height:107px;

}

@media ${device.tablet}{
    margin:0 auto;
    margin-top:42px;
    margin-bottom:92px;
}
`