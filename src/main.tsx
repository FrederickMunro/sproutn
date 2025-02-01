import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import Footer from './components/footer/Footer';
import Home from './components/Home/Home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='container'>
      <Home />
      <Footer />
    </div>
  </StrictMode>,
)
