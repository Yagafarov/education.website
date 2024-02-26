import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppbar';
import Hero from '../components/Hero';
import LogoCollection from '../components/LogoCollection';
import Blogs from '../components/Blogs';
import About from '../components/About'
import Courses from '../components/Courses';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import getLPTheme from './getPTheme';
import Teachers from '../components/Teachers';

const defaultTheme = createTheme({});





export default function Home() {
  const [mode, setMode] = React.useState('dark');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };



  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <About />
        <Divider />
        <Courses />
        <Divider />
        <Blogs />
        <Divider />
        <Teachers />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}