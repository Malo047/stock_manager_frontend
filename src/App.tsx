import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/user_page/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
