import { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  return (
 <Router>
  <Routes>
    <Route path="/" element={<Layout><p>Moiz is a Good Boy</p></Layout>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />
  </Routes>
 </Router>
  )
}

export default App
