import "./profile.css"
import Posts from "./posts/Posts"
import ProfileInfo from "./profile_info/profile_info"
function Profile(props) {
  return (
    <div className='profile'>
      <ProfileInfo name={props.profile_page.profile_name} />
      <Posts posts_data={props.profile_page.posts_data} />
    </div>
  )
}
export default Profile