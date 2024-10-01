import "./profile.css"
import Posts from "./posts/Posts"
import ProfileInfo from "./profile_info/profile_info"
function Profile(props) {
  return (
    <div className='profile'>
      <ProfileInfo name="roger" />
      <Posts />
    </div>
  )
}
export default Profile