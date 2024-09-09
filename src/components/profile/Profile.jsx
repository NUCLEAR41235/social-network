import "./profile.css"
import avatar from "../../img/avatar.jpg"
import Posts from "./posts/Posts"
function Profile(props) {
    return(
      <div className='profile'>
        <div className="profile_head">
          <img src={avatar} alt="" />
          <p>name</p>
        </div>
          <Posts/>
      </div>
    )
  }
  export default Profile