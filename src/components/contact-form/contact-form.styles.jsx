import styled from 'styled-components'



export const ContactFormContainer = styled.form`
width:445px;
button{
    float:right;
}
input, textarea{
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
textarea{
    font-family:"Space Grotesk";
    padding-left:24px;
    resize:none;
    height:107px;

}
`