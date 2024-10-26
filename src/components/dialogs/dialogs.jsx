import React from "react"
import DialogItem from "./DialogItem/DialogItem"
import "./dialogs.css"
import Message from "./Message/Message"





function Dialogs(props) {
    let dialogs_text = React.createRef()
    let add_message = () => {
        props.add_message(dialogs_text.current.value)
        dialogs_text.current.value = ""
    }
    return (
        <div className="dialogs">
            <div className="dialog">
                {props.dialog_page.dialog_data.map((el) => <DialogItem name={el.name} id={el.id} key={el.id} />)}
            </div>
            <div className="messages" >
                {props.dialog_page.message_data.map((el) => <Message message={el.message} id={el.id} key={el.id} />)}
                <div className="dialogs_form">
                    <textarea className="dialogs_area" name="" id="" ref={dialogs_text}></textarea>
                    <button className="dialogs_button" type="button" onClick={add_message}>отправить</button>
                </div>
            </div>

        </div>
    )
}
export default Dialogs

