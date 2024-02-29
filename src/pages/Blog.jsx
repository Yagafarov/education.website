import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppbar';
import Blogs from '../components/Blogs';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import getLPTheme from './getPTheme';

const defaultTheme = createTheme({});





export default function Blog() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };



  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box sx={{ bgcolor: 'background.default' }}>

        <Blogs />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}