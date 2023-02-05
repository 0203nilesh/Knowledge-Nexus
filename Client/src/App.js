import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import {Library} from './components/Library/Library';
import  {Articles}  from './components/Articles/Articles';
import  Chat from './components/SocketIO/Chat/Chat';
import Join from './components/SocketIO/Join/Join';
import Bot from './components/Bot/Bot';
import { Videos } from './components/Videos/Videos';
import { PlayVid } from './components/Play/PlayVid';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Faq from './components/FAQ/Faq';
import Schol from './components/Scholarship/Schol';
// import Play from './components/Play/PlayVid';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Bot/>
    <Routes>
      <Route path='/' element={<Login/>}  />
      <Route path='/register' element={<Register/>}  />
      <Route path='/articles' element={<Articles/>}  />
      <Route path='/library' element={<Library/>}  />
      {/* Ayush routes */}
      <Route path="/join" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
        <Route path='/home' element={<Home/>} />
      {/* end */}
      {/* Abhishek routes */}
        <Route path="/videos"  element={<Videos/>} />
        <Route path="/playvid"  element={<PlayVid/>} />
        <Route path="/faq"  element={<Faq/>} />
        <Route path="/scholarship"  element={<Schol/>} />
      {/* end */}
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
