import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import IntroPage1 from './pages/Welcome/Page1/welcome';
import IntroPage2 from './pages/Welcome/Page2/continue'
import AdminPage from './pages/Admin/Page1/admin'
import AdminPage2 from './pages/Admin/Page2/admin'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage1 />} />
        <Route path="/continue" element={<IntroPage2 />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-next" element={<AdminPage2 />} />
      </Routes>
    </Router>
  );
}

export default App;
