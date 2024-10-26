import avatar from "../../../../img/avatar.jpg"

function Post(props) {
    console.log(props);

    return (
        <div className="post">
            <img src={avatar} alt="" />
            <p>{props.name}</p>
            <p className="post_text">{props.message}</p>
            <p>like:<b>{props.like}</b></p>

        </div>
    )
}

export default Post