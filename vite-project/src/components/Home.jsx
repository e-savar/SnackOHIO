import React from 'react';
import ImageSlider from "./ImageSlider";
const Home = () => {
  const slides = [
    { url: "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", title: "beach" },
    { url: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80", title: "boat" },
    { url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80", title: "forest" },
    { url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80", title: "city" },
    { url: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80", title: "italy" },
  ];
  const containerStyles = {
    width: "42vw",
    height: "42vh",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={styles.aboveCenter}>
        <h1>Products</h1>
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
    aboveCenter: { 
      width: '100vw',
      height: '10vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textcolor: {
      color: 'black',
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
  

export default Home;