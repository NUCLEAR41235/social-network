import "./profile.css"
import avatar from "../../img/avatar.jpg"
function Profile(props) {
    return(
      <div className='profile'>
        <div className="profile_head">
          <img src={avatar} alt="picture" />
          <p>name</p>
        </div>
        <div className="posts">
          <input type="text" placeholder="enter the post"/>
          <button>add post</button>
          <div className="post">
            <img src={avatar} alt="avatar" />
            <p>Roger</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    )
  }
  export default Profile