import { Box, Button, CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material'
import React from 'react'
import getLPTheme from './getPTheme';

import notFoundAnimation from '../assets/notFoundAnimation.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { RotateLeft } from '@mui/icons-material';

const defaultTheme = createTheme({});
export default function NotFound() {
    const [mode, setMode] = React.useState('dark');
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const LPtheme = createTheme(getLPTheme(mode));
  
    const toggleColorMode = () => {
      setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };
  
    const toggleCustomTheme = () => {
      setShowCustomTheme((prev) => !prev);
    };
  
    return (
      <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <CssBaseline />
        <Box height={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <Box >
              <Box>
            <Lottie animationData={notFoundAnimation} height={'10%'} />
              </Box>
            <Typography variant='subtitle1' textAlign={'center'} >Bunday sahifa topilmadi</Typography>
            <Box textAlign={'center'} mt={2} >
            <Link to={'/'} >
            <Button variant='outlined' startIcon={<RotateLeft/>} >Qayta yuklash</Button>
            </Link>
            </Box>
            </Box>
        </Box>
      </ThemeProvider>
    );
  }