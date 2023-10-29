import React from 'react';
import MedChart from './MedChart';

const Products = () => {
  return <div><div style={styles.mainPage}>
    <h1 style={styles.productHeader}>Product Name</h1>
    <div style={styles.whitebkg}>
      <img style={styles.medImage} src="https://media.istockphoto.com/id/1386029884/vector/pills-capsules-in-medical-bottle-isolated-on-white-background-pill-bottle-medicine-container.jpg?s=612x612&w=0&k=20&c=OXL0x91F0Ke2AOs2mNRpET21T5LA0y1bIFT_pPwVd_0="/> 
    </div>
    <div style={styles.chartBkg}>
      <div style={styles.chart}>
      <MedChart/>
      </div>
    </div>
  </div>
  <div style={styles.bigDescription}>
    <h4 style={styles.descTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
  </div>
  </div>;
};

const styles = {
  mainPage: {
    width: '100vw',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productHeader: {
    position: 'absolute',
    left: '50px',
    top: '80px',
  },
  medImage: {
    width: '375px',
    height: '300px',
  },
  chart: {
    width: '95%',
    height: '95%',
  },
  chartBkg: {
    width: '45vw',
    height: '45vh',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '7vw',
  },
  whitebkg: {
    width: '30vw',
    height: '45vh',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '7vw',
    marginRight: '8vw'
  },
  bigDescription: {
    width: '99vw',
    height: '45vh',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  blackTxt: {
    color: '#000000'
  },
  descTxt: {
    color: '#000000',
    padding: '8px'
  }

}
export default Products;