import mePhoto from '../../img/me.jpg'
import './profilePhoto.css'

const ProfilePhoto = () => {
  return (
    <div className='container-photo'>
        <img src={mePhoto} alt="" className='mePhoto' />
    </div>
  )
}

export default ProfilePhoto