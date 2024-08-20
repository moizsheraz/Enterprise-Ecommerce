

import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import { SnackbarProvider } from 'notistack'
import Layout from './Layout/Layout';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  return (
 <Router>
  <Routes>
    <Route path="/" element={<Layout><p>Home Page</p></Layout>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />
   
  </Routes>
  <SnackbarProvider autoHideDuration={5000} />
 </Router>
  )
}

export default App
