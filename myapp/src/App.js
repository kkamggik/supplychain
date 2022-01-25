import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import NewMedicinePage from './components/NewMedicinePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/medicine" element={<NewMedicinePage/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
