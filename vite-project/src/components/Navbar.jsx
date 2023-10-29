
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  ThemeProvider,
  createTheme
} from '@mui/material/styles';
import * as React from 'react';

const theme = createTheme({
  palette: {
    orange: {
      main: '#f49d4e'
    },
  },
});
export default function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar color="orange">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SnackOHIO
          </Typography>
          <Button href="/" color="inherit">Home</Button>
          <Button href="/login" color="inherit">Login</Button>
          <Button href="/products" color="inherit">Products</Button>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
  
  );
}