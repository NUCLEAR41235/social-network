import style from "./NavBar.module.css"
import { NavLink } from "react-router-dom";
function NavBar(props) {
  console.log(style);

  return (
    <div className={style.navbar}>
      < NavLink to="/profile">Profile</NavLink>
      <NavLink to="/dialogs">Messages</NavLink>
      <a href="">Users</a>
    </div>
  )
}
export default NavBar