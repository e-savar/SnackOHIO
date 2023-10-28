import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';

const Login = () => {
  return (
    <div style={styles.mainPage}>
      <div style={styles.loginBox}>
        <h2 style={styles.loginHeader}>Login</h2>
        <div>
          <div style={styles.horizontalAlign}>
            <PersonIcon sx={{ color: '#000000', marginTop: '21px' }} />
            <TextField style={{marginLeft: '10px', marginBottom: '10px', width: '260px'}}label="Username" variant="standard" />
          </div>
          <div>
            <LockIcon sx={{ color: '#000000', marginTop: '21px' }} />
            <TextField style={{marginLeft: '10px', marginBottom: '10px', width: '260px' }} label="Password" variant="standard"/>
          </div>
        </div>
        <Button variant="contained" sx={{ backgroundColor: '#f49d4e', color: '#000000', marginTop: '20px'}} href='/'>Login</Button>
      </div>
      </div>
  )
};
const styles = {
  mainPage: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBox: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  labelText: {
    color: 'black',
  },
  loginHeader: {
    color: 'black',
    textAlign: 'center',
  },
  horizontalAlign: {
    display: 'flex',
    flexDirection: 'horizontal',
  }
};

export default Login;
