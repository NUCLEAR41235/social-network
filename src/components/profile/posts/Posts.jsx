import Post from "./post/post"


function Posts(props) {

  return (
    <div className="posts">
      <input type="text" placeholder="enter the post" />
      <button>add post</button>
      {props.posts_data.map((el) => <Post name={el.name} message={el.text} like={el.like} key={el.id} />)}
    </div>
  )
}
export default Posts