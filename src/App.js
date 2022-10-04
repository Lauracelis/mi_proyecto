import React from 'react'
import Contact from '../src/pages/contact/Contact'
import Home from './pages/home/Home';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Menu from './components/menu/Menu'



function App() {
  return (
    <>
   <HashRouter>
   <Menu />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='*' element={<p>Not found</p>} />
   </Routes>
   </HashRouter>
   
    </>
    
  );
}

export default App;
