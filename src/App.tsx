import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login_page/Login';
import { RegisterPage } from './components/register_page/Register';
import { AdminDashboard } from './components/admin_dashboard/AdminDashboard';
import { AdminRoute } from './components/privateRoute';
import { UserDashboard } from './components/user_dashboard/UserDashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>

        <Route path='/register' element={
          <AdminRoute>
            <RegisterPage />
          </AdminRoute>
          }></Route>

        <Route path="/admin-dashboard" element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        } />

         <Route path='/user-dashboard' element={<UserDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
