import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/index'

//Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Estilo
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <section>
      <RouterProvider router={router} />
    </section>
  </React.StrictMode>
)
