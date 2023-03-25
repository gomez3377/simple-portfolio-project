import styled from 'styled-components'


export const StyledButton = styled.button`
font-family: 'Space Grotesk';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 26px;
letter-spacing: 2.28571px;
background-color:transparent;
color:white;

padding-bottom:10px;
border:none;
border-bottom: 2px solid ${({theme:{colors}}) => colors.green};
cursor:pointer;
text-transform:uppercase;
&:hover{
    color:${({theme:{colors}}) => colors.green}
}

`