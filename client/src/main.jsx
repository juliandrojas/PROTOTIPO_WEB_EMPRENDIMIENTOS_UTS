import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import './index.css';
import Index from './pages/Index';
import Register from './pages/Register';
import Search from './pages/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
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
