import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const validUsername = 'AdminVerteo';
  const validPassword = 'password';
  const isLoginEnabled = username === validUsername && password === validPassword;

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (isLoginEnabled) {
      // Perform the login action
      // For demonstration, you can redirect to '/adminproducts' after login
      window.location.href = '/adminproducts';
    }
  };

  return (
    <div style={styles.mainPage}>
      <div style={styles.loginBox}>
        <h2 style={styles.loginHeader}>Login</h2>
        <div>
          <div style={styles.horizontalAlign}>
            <PersonIcon sx={{ color: '#000000', marginTop: '21px' }} />
            <TextField
              style={{ marginLeft: '10px', marginBottom: '10px', width: '260px' }}
              label="Username"
              variant="standard"
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <LockIcon sx={{ color: '#000000', marginTop: '21px' }} />
            <TextField
              style={{ marginLeft: '10px', marginBottom: '10px', width: '260px' }}
              label="Password"
              variant="standard"
              type="password"
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#f49d4e',
            color: '#000000',
            marginTop: '20px',
          }}
          onClick={handleLogin}
          disabled={!isLoginEnabled} // Disable the button if conditions are not met
        >
          Login
        </Button>
      </div>
    </div>
  );
};

const styles = {
  mainPage: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
};

export default Login;
