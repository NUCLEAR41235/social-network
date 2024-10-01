import avatar from "../../../img/avatar.jpg"

function ProfileInfo(props) {
    return (
        <div className="profile_head">
            <img src={avatar} alt="" />
            <p>{props.name}</p>
        </div>
    )
}
export default ProfileInfo