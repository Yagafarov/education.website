import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import FeaturedPost from './FeaturedPost';

const featuredPosts = [
  {
    title:"Sun'iy intellekt rivojlanmoqda",
    date: 'Nov 12',
    description:
      'Tez orada tarjimonlar o`z ishini yoqitishlari mumkin',
    image: 'https://www.junia.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fhajl3upuy959%2F2j6zIu4WQg2jJEnQriMeNx%2F9e6aec50b5c5c9386a6a0c1dd010277b%2F_d2b37678-4d40-4a50-98d9-f7fe5596bc4f.jpeg&w=1920&q=75',
    imageLabel: 'Image Text',
  },
  {
    title: 'Tarjimon bot',
    date: 'Nov 11',
    description:
      'Telegramda realtimeda tarjima qilish xususiyatiga ega bo`lgan bot ishga tushdi.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz5rtRxsMi02vkxWX0sjBIzcJNH5oXdOMd_Q&usqp=CAU',
    imageLabel: 'Image Text',
  },
];

export default function Blogs() {
  return (
    <Box
      id="blogs"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Bloglar
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            IT sohasidagi eng sungi bloglarni aynan shu yerdan topishingiz mumkin.
          </Typography>
        </Box>

        <Grid container spacing={2.5} alignItems={'center'}>
          {featuredPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={12} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <FeaturedPost key={post.title} post={post} />
            </Grid>
          ))}
          <Grid item xs={12} sm={12} md={12} mt={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Button>Ko'proq</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}