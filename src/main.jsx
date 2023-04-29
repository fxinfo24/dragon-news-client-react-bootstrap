import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import routerApp from './Routes/Routers.jsx';
import AuthProvider from './ContextProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router = {routerApp}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
