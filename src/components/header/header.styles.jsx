import styled from 'styled-components'


export const HeaderContainer = styled.header`
position:relative;

nav{
    position:absolute;
    width:1080.49px;
    margin-top:39px;
    
}


`


export const Hero = styled.div`
position:relative;
height:720px;
margin-bottom:104px;



`
export const BioContainer = styled.div`
top:127px;
width:706px;
position:absolute;
h1{
    margin-bottom:43px;
    span{
        border-bottom:6px solid ${({theme:{colors}}) => colors.green};
    }

}
p{
    width:445px;
    margin-bottom:66px;
}


` 