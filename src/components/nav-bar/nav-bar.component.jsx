import React from 'react'
import SocialMediaLinks from '../social-media-links/social-media-links.component'
import { NavBarContainer } from './nav-bar.styles'

const NavBar = () => {
  return (
    <NavBarContainer>
        <h3 className='logo'>adamkeyes</h3>
        <SocialMediaLinks/>
    </NavBarContainer>
  )
}

export default NavBar