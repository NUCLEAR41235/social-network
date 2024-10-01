import DialogItem from "./DialogItem/DialogItem"
import "./dialogs.css"
import Message from "./Message/Message"





function Dialogs(props) {
    let dialog_data = [
        { name: "bill", id: 1 },
        { name: "bob", id: 2 },
        { name: "alone", id: 3 },
    ]
    let message_data = [
        { message: "привет,как оно? ", id: 1 },
        { message: "здравствуй", id: 2 },
        { message: "все хорошо ", id: 3 }
        // <Message message="привет,как оно?" />
    ]
    return (
        <div className="dialogs">
            <div className="dialog">
                {dialog_data.map((el) => <DialogItem name={el.name} id={el.id} key={el.id} />)}
            </div>
            <div className="messages" >
                {message_data.map((el) => <Message message={el.message} id={el.id} key={el.id} />)}
            </div>
        </div>
    )
}
export default Dialogs

