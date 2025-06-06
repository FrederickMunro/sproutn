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
      name: 'Microsoft',
      id: '012345',
      pending: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      time: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      status: 'In progress',
      percent: 40,
      shippingAddress: '123 Microsoft street, QC, Canada, A1A A1A',
      options: [
        {
          name: 'Brief',
          number: 1,
          description: 'Provides the project details, outstanding actions, and elapsed time since initiation.',
          available: true,
          status: true,
        },
        {
          name: 'Prototype',
          number: 2,
          description: 'Contains prototype shipping details along with supporting images and documents for review and reference.',
          available: true,
          status: true,
        },
        {
          name: 'Sourcing',
          number: 3,
          description: 'Select and confirm the manufacturer responsible for producing your product.',
          available: true,
          status: false,
        },
        {
          name: 'Order and delivery',
          number: 4,
          description: 'View order history and track the current status of all placed orders.',
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
      name: 'Apple',
      id: '000000',
      pending: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      time: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      status: 'Completed',
      percent: 100,
      shippingAddress: '234 Apple street, QC, Canada, B2B B2B',
      options: [
        {
          name: 'Brief',
          number: 1,
          description: 'Provides the project details, outstanding actions, and elapsed time since initiation.',
          available: true,
          status: true,
        },
        {
          name: 'Prototype',
          number: 2,
          description: 'Contains prototype shipping details along with supporting images and documents for review and reference.',
          available: true,
          status: false,
        },
        {
          name: 'Sourcing',
          number: 3,
          description: 'Select and confirm the manufacturer responsible for producing your product.',
          available: true,
          status: false,
        },
        {
          name: 'Order and delivery',
          number: 4,
          description: 'View order history and track the current status of all placed orders.',
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
      name: 'Amazon',
      id: '111111',
      pending: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      time: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      status: 'Not started',
      percent: 0,
      shippingAddress: '345 Amazon street, QC, Canada, C3C C3C',
      options: [
        {
          name: 'Brief',
          number: 1,
          description: 'Provides the project details, outstanding actions, and elapsed time since initiation.',
          available: true,
          status: true,
        },
        {
          name: 'Prototype',
          number: 2,
          description: 'Contains prototype shipping details along with supporting images and documents for review and reference.',
          available: true,
          status: true,
        },
        {
          name: 'Sourcing',
          number: 3,
          description: 'Select and confirm the manufacturer responsible for producing your product.',
          available: true,
          status: true,
        },
        {
          name: 'Order and delivery',
          number: 4,
          description: 'View order history and track the current status of all placed orders.',
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
