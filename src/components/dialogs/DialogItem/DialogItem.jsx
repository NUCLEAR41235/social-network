import { NavLink } from "react-router-dom"
import "./DialogItem.css"
function DialogItem(props) {
    return (
        <div className="dialog_user">
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div >
    )
}
export default DialogItem

