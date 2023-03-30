import styled from 'styled-components'
import { device } from '../../screen-sizes'


export const ProjectSection = styled.section`
margin: 0 auto;
max-width: 1110px;

@media ${device.tablet}{
max-width:708px;
}

`

export const ProjectsHeader = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:80px;


@media ${device.tablet}{
margin-bottom:60px;
    }
`


export const ProjectGrid = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
gap:69px 30px;

@media ${device.tablet}{
gap:60px 22px;

}
`