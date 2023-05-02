import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import Recipe from './components/Recipe/Recipe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        // loader: ()=> fetch('http://localhost:5000/')
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/recipe',
        element: <Recipe/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
