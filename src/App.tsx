import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/user_page/Login';
import { RegisterPage } from './components/register_page/Register';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
