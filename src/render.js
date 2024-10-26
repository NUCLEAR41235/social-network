import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './data/state';
import { add_post, add_message } from './data/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export function rerenderTree() {
    root.render(
        <App state={state} add_post={add_post} add_message={add_message} />

    );
}
rerenderTree()
reportWebVitals();
