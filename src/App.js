import './App.css';
import {Route,Routes} from "react-router-dom";
import Header from './header';
import Home from './home/home';
import Footer from './footer';
import Login from  './login/login';
import Contact from './contact/contact';
import { root } from 'postcss';

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>}  />
    <Route path='/contact' element={<Contact/>}  />
    </Routes>
    <Footer/>
    
    </>
  );
}

export default App;
