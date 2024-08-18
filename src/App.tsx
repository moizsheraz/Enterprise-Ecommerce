

import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Layout from './Layout/Layout';

function App() {

  return (
 <Router>
  <Routes>
    <Route path="/" element={<Layout><p>Moiz is a Good Boy</p></Layout>} />
  </Routes>
 </Router>
  )
}

export default App
