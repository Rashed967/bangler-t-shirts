import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import About from './components/About/About';
import OrderReview from './components/Order/OrderReview';
import Contact from './components/Contact/Contact';
import Grandpa from './components/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : "/",
        element : <Home></Home>,
        loader : () => fetch('tShirts.json')
      },
      {
        path : "/about",
        element : <About></About>
      },
      {
        path : "/orders",
        element : <OrderReview></OrderReview>
      }, 
      {
        path : "/grandpa",
        element : <Grandpa></Grandpa>
      }, 
      {
        path : "/contact",
        element : <Contact></Contact>
      }

    ] 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
