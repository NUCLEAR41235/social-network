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
          <Route path='/' element={<Profile profile_page={props.state.profile_page} add_post={props.add_post} />} />
          <Route path='/profile' element={<Profile profile_page={props.state.profile_page} add_post={props.add_post} />} />
          <Route path='/dialogs/*' element={<Dialogs dialog_page={props.state.dialog_page} add_message={props.add_message} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


