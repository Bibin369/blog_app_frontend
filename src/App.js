import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Delete from './components/Delete';
import Search from './components/Search';
import Header from './components/Header';
import ViewAll from './components/ViewAll';
import ViewmyPost from './components/ViewmyPost';

import Registration from './components/Registration';
import { Login } from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Login/>}/>
      <Route path="add" element={<Add/>}/>
      <Route path="delete" element={<Delete/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="header" element={<Header/>}/>
      <Route path="viewall" element={<ViewAll/>}/>
      <Route path="viewmy" element={<ViewmyPost/>}/>
      <Route path="register" element={<Registration/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
