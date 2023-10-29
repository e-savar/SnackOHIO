import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';

import api from './lib/api.js'

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
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
      console.log(message)
  }, []);

  const fetchProducts = async () => {
    try {
      const productResponse = await api.admin.product.list()
  
      console.log(productResponse)
    } catch (e) {
      console.log(e)
    }
  }
  
  fetchProducts()

  return (
      <RouterProvider router={router} />
  );
};

export default App;
