import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dialogs from './components/dialogs/dialogs';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' Component={Profile} />
          <Route path='/profile' Component={Profile} />
          <Route path='/dialogs/*' Component={Dialogs} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


