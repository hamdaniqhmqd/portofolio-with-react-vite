import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./Pages/Error/404";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Certifications from './Pages/Certifications';
import TechnicalTraining from './Pages/TechnicalTraining';
import Educations from './Pages/Education';
import Experience from './Pages/Experience';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/Projects",
    element: <Projects />,
    errorElement: <Error404 />,
  },
  {
    path: "/Certifications",
    element: <Certifications />,
    errorElement: <Error404 />,
  },
  {
    path: "/Technical Training",
    element: <TechnicalTraining />,
    errorElement: <Error404 />,
  },
  {
    path: "/Educations",
    element: <Educations />,
    errorElement: <Error404 />,
  },
  {
    path: "/Experience",
    element: <Experience />,
    errorElement: <Error404 />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
