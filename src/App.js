
import './App.css';
import React from "react";
import Login from "./Login"
import Register from "./Register"
import ListUser from './ListUser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login/web" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/listuser" element={<ListUser/>}/>
        </Routes>
      </Router>
   
  );
}

export default App;
