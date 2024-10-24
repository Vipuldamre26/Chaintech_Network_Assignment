
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LoginPage/Login.jsx';
import Signup from './components/SignupPage/Signup.jsx';
import store from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
