import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.css';
import Footer from './components/footer/Footer';
import Home from './components/Home/Home';
import Master from './main-components/master';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className='container'>
        <Home />
        <Footer />
      </div>
    )
  },
  {
    path: '/test',
    element: (
      <>
        <Master />
      </>
    )
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
