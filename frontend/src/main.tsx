import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.css';
import Footer from './components/footer/Footer';
import Home from './components/Home/Home';
import MasterContainer from './main-components/MasterContainer';
import { UserProvider } from './main-components/UserContext';
import { FaAmazon, FaApple, FaWindows } from 'react-icons/fa';

const user = {
  name: 'Christos',
  projects: [
    {
      icon: <FaWindows />,
      name: 'Project #1',
      id: '012345',
      pending: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      time: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      status: 'In progress',
      percent: 40,
      options: [
        {
          name: 'Brief',
          number: 1,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: true,
          status: true,
        },
        {
          name: 'Prototype',
          number: 2,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: true,
          status: true,
        },
        {
          name: 'Sourcing',
          number: 3,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: true,
          status: false,
        },
        {
          name: 'Order and delivery',
          number: 4,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: true,
          status: false,
        },
        {
          name: 'Photos',
          number: 5,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: false,
          status: false,
        },
        {
          name: 'Marketing plan',
          number: 6,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: false,
          status: false,
        },
      ]
    },
    {
      icon: <FaApple />,
      name: 'Project #2',
      id: '000000',
      pending: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      time: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      status: 'Completed',
      percent: 100,
      options: [
        {
          name: 'Brief',
          number: 1,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: true,
          status: true,
        },
        {
          name: 'Prototype',
          number: 2,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: true,
          status: false,
        },
        {
          name: 'Sourcing',
          number: 3,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: true,
          status: false,
        },
        {
          name: 'Order and delivery',
          number: 4,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: true,
          status: false,
        },
        {
          name: 'Photos',
          number: 5,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: false,
          status: false,
        },
        {
          name: 'Marketing plan',
          number: 6,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: false,
          status: false,
        },
      ]
    },
    {
      icon: <FaAmazon />,
      name: 'Project #3',
      id: '111111',
      pending: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      time: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      status: 'Not started',
      percent: 0,
      options: [
        {
          name: 'Brief',
          number: 1,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: true,
          status: true,
        },
        {
          name: 'Prototype',
          number: 2,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: true,
          status: true,
        },
        {
          name: 'Sourcing',
          number: 3,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: true,
          status: true,
        },
        {
          name: 'Order and delivery',
          number: 4,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: true,
          status: true,
        },
        {
          name: 'Photos',
          number: 5,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: true,
          status: false,
        },
        {
          name: 'Marketing plan',
          number: 6,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
          available: false,
          status: false,
        },
      ]
    }
  ]
}

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
        <MasterContainer />
      </>
    )
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider rawUser={user}>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
)
