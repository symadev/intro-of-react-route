import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Users from './Component/Users/Users.jsx';
import UserDetails from './Component/UserDetails/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users> ,
      },
      {
        path: "/users/:userId",
        //it show the element according to userId
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        //for doing dynamic must use the back tick/template string
        element:<UserDetails></UserDetails>,
      },
    ],
  },


  //  path: "contacts/:contactId",-----> indicates that we use any value instead of  contactId after contacts

  // {
  //   path: "/about",
  //   element:<div>hi i am in the about section page!</div>,
  // },
  // {
  //   path: "/contact",
  //   element:<div>lets contact us!</div>,
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
