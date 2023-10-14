import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import AddCoffie from './components/AddCoffie.jsx';
import UpdateCoffie from './components/UpdateCoffie.jsx';

 
 const router = createBrowserRouter([
  {
    path: "/",
     element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffiee')
   },
   {
     path: '/addCoffie',
     element:<AddCoffie></AddCoffie>,
   },
   {
     path: '/updateCoffie/:id',
     element: <UpdateCoffie></UpdateCoffie>,
     loader: ({params})=>fetch(`http://localhost:5000/coffiee/${params.id}`)
   },
 ]);
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
