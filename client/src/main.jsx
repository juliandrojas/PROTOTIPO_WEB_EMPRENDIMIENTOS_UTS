import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Menu from './pages/Menu';
import Register from './pages/Register';
import Search from './pages/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>UTS Emprende</div>
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/search',
    element: <Search />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
