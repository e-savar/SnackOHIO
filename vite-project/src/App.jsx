import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/products",
    element: <Products />
  }
])

const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;
