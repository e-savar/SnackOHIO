import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function Navbar() {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SnackOHIO
          </Typography>
          <Button href="/" color="inherit">Home</Button>
          <Button href="/login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  
  );
}