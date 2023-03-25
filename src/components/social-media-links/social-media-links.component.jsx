import {ReactComponent as GithubIcon} from '../../assets/images/icon-github.svg'
import {ReactComponent as LinkedinIcon} from '../../assets/images/icon-linkedin.svg'
import {ReactComponent as TwitterIcon} from '../../assets/images/icon-twitter.svg'
import {ReactComponent as FrontendMentorIcon} from '../../assets/images/icon-frontend-mentor.svg'
import { SocialMediaContainer } from './social-media-links.style'

const SocialMediaLinks = () => {
  return (
    <SocialMediaContainer>
        <GithubIcon/>
        <FrontendMentorIcon/>
        <LinkedinIcon/>
        <TwitterIcon/>
    </SocialMediaContainer>
  )
}

export default SocialMediaLinks