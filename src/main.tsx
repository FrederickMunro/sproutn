import { createRoot } from 'react-dom/client';
import './main.css';
import Footer from './components/footer/Footer';
import Home from './components/Home/Home';
import ScrollToTop from './ScrollToTop';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BackToTop from './components/BackToTop';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <BackToTop />
        <Home />
        <Footer />
      </>
    )
  },
])

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>
)
