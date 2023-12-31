import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import ImageSlider from "./ImageSlider";
import { clearUser } from '/src/reducers/user'

import api from "/src/lib/api"

const Home = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const userProductResponse = await api.user.product.list()
      setProducts(userProductResponse.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line
  }, [])

  console.log(products)

  const slides = [
    { url: "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", title: "beach" },
    { url: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80", title: "boat" },
    { url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80", title: "forest" },
    { url: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80", title: "italy" },
  ];
  const containerStyles = {
    width: "42vw",
    height: "42vh",
    margin: "0 auto",
  };

  // const visualProducts = [
  //   products.
  // ]

  return (
    <div>
      <div style={styles.aboveCenter1}>
        <h1>Products</h1>
      </div>
      <div style={styles.aboveCenter2}>
        <p>Click on the Image to See Product Information!</p>
      </div>
      <div style={styles.mainPage}>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </div>
    </div>
  );
};

const styles = {
    mainPage: {
      width: '100vw',
      height: '50vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    aboveCenter1: { 
      width: '100vw',
      height: '10vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    aboveCenter2: { 
      width: '100vw',
      height: '5vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide: {
      opacity: '0',
      transitionDuration: '1s ease',
    },
    activeSlide: {
      opacity: '1',
      transitionDuration: '1s',
      transform: 'scale(1.00)',
    }
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);