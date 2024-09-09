import style from "./NavBar.module.css"

function NavBar(props){
  console.log(style);
  
    return(
      <div className={style.navbar}>
        <a href="">Profile</a>
        <a href="">Messages</a>
        <a href="">Users</a>
      </div>
    )
  }
  export default NavBar