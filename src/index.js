import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts_data = [
    { name: "Roger", text: "hello world", like: 1, id: 1 },
    { name: "Roger", text: "hate world", like: 3, id: 2 },
    { name: "Roger", text: "hell world", like: 4, id: 3 },

]
let profile_name = "roger"

let dialog_data = [
    { name: "bill", id: 1 },
    { name: "bob", id: 2 },
    { name: "alone", id: 3 },
]
let message_data = [
    { message: "привет,как оно? ", id: 1 },
    { message: "здравствуй", id: 2 },
    { message: "все хорошо ", id: 3 }

]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App posts_data={posts_data} profile_name={profile_name} dialog_data={dialog_data} message_data={message_data} />

);
reportWebVitals();
