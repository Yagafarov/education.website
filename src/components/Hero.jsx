import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Lottie from 'lottie-react';

import heroAnimation from '../assets/heroAnimation.json'

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : 'linear-gradient(#02294F, #090E10)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            IT olamiga&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
               sayohat
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            Masofaviy shaklda eng zamonaviy kasblarni biz bilan o'rganing <br />
            Zero zamon shuni ta'lab qilmoqda.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Email"
              inputProps={{
                autocomplete: 'off',
                ariaLabel: 'Enter your email address',
              }}
            />
            <Button variant="contained" color="primary">
              Hoziroq boshlash
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            &quot;Hozir boshlash&quot; tugmasini bosish orqali siz bizning&nbsp;
            
            <Link href="https://docs.google.com/document/d/1M7d_1gsr8tgiwwja72e-G6x1nUahkIyJ/edit#heading=h.8ihriev6yp3u" color="primary">
              Foydalanish shartlari
            </Link>
            ga rozilik biltirasiz.
          </Typography>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 400 },
            maxWidth:'800px',
            width: '100%',
            borderRadius: '10px',
            outline: 'none',
            zIndex:-1,
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Lottie animationData={heroAnimation} />
          {/* <img src="https://static.vecteezy.com/system/resources/previews/008/845/839/original/illustration-student-with-laptop-studying-on-online-course-png.png" alt="" /> */}
        </Box>
      </Container>
    </Box>
  );
}