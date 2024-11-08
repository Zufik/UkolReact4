import { createRoot } from 'react-dom/client';
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from 'react-router-dom';

import AboutPage from './pages/AboutPage/AboutPage';
import CenterDetail from './pages/CenterDetail/CenterDetail';
import CentersPage from './pages/CentersPage/CentersPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage';

import "./global.css"

const App = () => {
  return (
    <>
      <h1 className='headerH1'>Happy Children</h1>
        <nav className='navigation'>
          <NavLink to="/">Homepage</NavLink><br />
          <NavLink to="/about">O nás</NavLink><br />
          <NavLink to="/contact">Kontakt</NavLink><br />
          <NavLink to="/pobocky">Pobočky</NavLink>
        </nav>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage/>
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/pobocky",
        element: <CentersPage />,
      },
      {
        path: "/pobocky/:id",
        element: <CenterDetail />
          }
    ]
  }
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);

