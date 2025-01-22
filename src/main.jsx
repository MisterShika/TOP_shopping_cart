import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import './style/Screen.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "profile",
  //   element: <Profile />,
  //   children: [
  //     { index: true, element: <DefaultProfile /> },
  //     { path: "spinach", element: <Spinach /> },
  //     { path: "popeye", element: <Popeye /> },
  //   ],
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
