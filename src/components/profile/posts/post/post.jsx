import avatar from "../../../../img/avatar.jpg"

function Post(props) {
    console.log(props);

    return (
        <div className="post">
            <img src={avatar} alt="" />
            <p>{props.name}</p>
            <p>{props.message}</p>
        </div>
    )
}

export default Post