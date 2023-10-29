import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';
import AdminProducts from './pages/admin/products'

import { connect } from 'react-redux'
import { clearUser } from './reducers/user'

import api from './lib/api.js'

let routes = createBrowserRouter([
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
  },
  {
    path: "/adminproducts",
    element: <AdminProducts />
  }
])

const App = (props) => {
  const { token, role } = props
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

  if (role === 'ADMIN'){
    routes = createBrowserRouter([
      {
        path: "/",
        element: <AdminProducts />
      }
    ])
    //  routes = (
    //   <Router>
    //     <Switch>
    //       <Route path="/admin/products" component={AdminProducts} />
    //       <Redirect to="/admin/products" />
    //     </Switch>
    //   </Router>
    //  )
   }

   console.log(routes)

  return (
      <RouterProvider router={routes} />
  );
};

const mapStateToProps = (state) => {
  return {
    token : state.user.token,
    role: state.user.role,
  }
}

const mapDispatchToProps = {
  clearUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
