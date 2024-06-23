import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import './index.css'

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './components/homepage/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';
import ProductPage from './components/product/ProductPage';
import TermsAndConditions from './components/term_and_condition/TermsAndConditions';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> }, // Define a HomePage component to include your slideshow, introduction, testimonials, etc.
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/products', element: <ProductPage /> },
      { path: '/term&cond', element: <TermsAndConditions /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
