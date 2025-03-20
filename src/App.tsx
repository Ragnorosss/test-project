import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/screens/home/Home';
import Login from './components/screens/Login';
import Register from './components/screens/Register';
import RootLayout from './components/layout/RootLayout';
import AuthLayout from './components/layout/AuthLayout';
import Orders from './components/screens/Orders';
import AnimateWrapper from './components/layout/AnimateWrapper';
import Order from './components/screens/order/Order';

function App() {
  return (
    <AnimateWrapper>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<Order />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </AnimateWrapper>
  );
}

export default App;
