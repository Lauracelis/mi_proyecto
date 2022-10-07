import React from 'react'
import Contact from '../src/pages/contact/Contact'
import Home from './pages/home/Home';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Menu from './components/menu/Menu'



function App() {
  return (
    <>
   <Menu />
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='*' element={<p>Not found</p>} />
   </Routes>
   </BrowserRouter>
    </>
    
  );
}

export default App;
