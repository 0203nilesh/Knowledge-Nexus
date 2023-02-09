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
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import Faq from './components/FAQ/Faq';
import Schol from './components/Scholarship/Schol';
import { PlayArticle } from './components/Play/PlayArticle';
import { PlayBook } from './components/Play/PlayBook';
// import {Loading} from './components/Loading/Loading';
// import Play from './components/Play/PlayVid';

function App() {
  return (
    <BrowserRouter>
      <Bot/>
    <Routes>
      {/* <Route path='/loader' element={<Loading/>}  /> */}
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
        <Route path="/playvid/:id"  element={<PlayVid/>} />
        <Route path="/playarticle/:id"  element={<PlayArticle/>} />
        <Route path="/playbook/:id"  element={<PlayBook/>} />
        <Route path="/faq"  element={<Faq/>} />
        <Route path="/scholarship"  element={<Schol/>} />
      {/* end */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
