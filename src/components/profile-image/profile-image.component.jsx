import { ProfileImageContainer } from './profile-image.styled'
import {ProfileDesktop, ProfileTablet, ProfileMobile} from './profile-images'

const ProfileImage = () => {
  return (
    <ProfileImageContainer src={ProfileDesktop} alt='profile-picture' />
  )
}

export default ProfileImage