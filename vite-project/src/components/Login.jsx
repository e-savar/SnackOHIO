import TextField from '@mui/material/TextField';
import React from 'react';

const Login = () => {
  return (
    <div>
      <div style={styles.loginBox}>
        <h2 style={styles.textcolor}>Login</h2>
        <form>
          <label style={styles.textcolor}>
            Username:
            <TextField id="outlined-basic" variant="outlined" />
          </label>
          <label style={styles.textcolor}>
            Password:
            <TextField id="outlined-basic" variant="outlined" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
};
const styles = {
  loginBox: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  textcolor: {
    color: 'black'
  }
};

export default Login;
