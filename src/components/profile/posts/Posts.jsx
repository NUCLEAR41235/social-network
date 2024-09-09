import Post from "./post/post"


function Posts(props) {
  return (
    <div className="posts">
      <input type="text" placeholder="enter the post" />
      <button>add post</button>
      <Post name="Roger" message="hello world" />
      <Post name="Roger" message="i hate  world" />
      <Post name="Roger" message="hell world" />
    </div>
  )
}
export default Posts