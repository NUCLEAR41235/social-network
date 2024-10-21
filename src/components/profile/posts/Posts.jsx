import React from "react"
import Post from "./post/post"


function Posts(props) {
  let post_text = React.createRef()
  let addpost = () => {
    props.add_post(post_text.current.value)

  }
  return (
    <div className="posts">
      <input type="text" placeholder="enter the post" ref={post_text} />
      <button onClick={addpost}>add post</button>
      {props.posts_data.map((el) => <Post name={el.name} message={el.text} like={el.like} key={el.id} />)}
    </div>
  )
}
export default Posts