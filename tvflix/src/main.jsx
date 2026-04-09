import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import { Home } from './pages/home.jsx';
import { MovieDetail } from './pages/MovieDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
{
    path: "/filme/:id",
    element: <MovieDetail />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,  
)
