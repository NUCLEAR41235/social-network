import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dialogs from './components/dialogs/dialogs';

function App(props) {

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<Profile posts_data={props.posts_data} profile_name={props.profile_name} />} />
          <Route path='/profile' element={<Profile posts_data={props.posts_data} profile_name={props.profile_name} />} />
          <Route path='/dialogs/*' element={<Dialogs dialog_data={props.dialog_data} message_data={props.message_data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


