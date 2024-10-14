import DialogItem from "./DialogItem/DialogItem"
import "./dialogs.css"
import Message from "./Message/Message"





function Dialogs(props) {

    return (
        <div className="dialogs">
            <div className="dialog">
                {props.dialog_page.dialog_data.map((el) => <DialogItem name={el.name} id={el.id} key={el.id} />)}
            </div>
            <div className="messages" >
                {props.dialog_page.message_data.map((el) => <Message message={el.message} id={el.id} key={el.id} />)}
            </div>
        </div>
    )
}
export default Dialogs

