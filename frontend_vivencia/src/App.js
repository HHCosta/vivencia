import {useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import NewUser from './components/NewUser'





function App() {

  
 
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/new" element={<NewUser />}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
