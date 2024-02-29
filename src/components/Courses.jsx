import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import { Button, CardMedia, Link } from '@mui/material';

const courseData = [
  {
    id: 1,
    avatar: <Avatar alt="Aliyev Ali" src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg" />,
    name: 'Aliyev Ali',
    title: "Data Science",
    occupation: 'Senior Engineer',
    testimonial:
      "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
  },
  {
    id: 2,
    avatar: <Avatar alt="Aliyev Ali" src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg" />,
    name: 'Aliyev Ali',
    title: "Zamonaviy python",
    occupation: 'Lead Product Designer',
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    id: 3,
    avatar: <Avatar alt="Aliyev Ali" src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg" />,
    name: 'Aliyev Ali',
    title: "Python asoslari",
    occupation: 'CTO',
    testimonial:
      'The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.',
  },
  {
    id: 4,
    avatar: <Avatar alt="Aliyev Ali" src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg" />,
    name: 'Julia Stewart',
    title: "Sun'iy intellekt",
    occupation: 'Senior Engineer',
    testimonial:
      "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
  },
  {
    id: 5,
    avatar: <Avatar alt="Aliyev Ali" src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg" />,
    name: 'John Smith',
    title: "Backend kursi",
    occupation: 'Backend dasturchi',
    testimonial:
      "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
  },
  {
    id: 6,
    avatar: <Avatar alt="Aliyev Ali" src="" />,
    name: 'Aliyev Ali',
    title: "SEO kursi",
    occupation: 'Programmer',
    testimonial:
      "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
  },
];

const whiteLogos = [
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-course-template-banner-for-facebook-design-9a58359ebb1f36cbf294432d077af73c_screen.jpg?ts=1586796101',
  'https://trisectinstitute.com/wp-content/uploads/2021/12/best-python-training.png',
  'https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg',
  'https://www.elegantthemes.com/blog/wp-content/uploads/2023/12/best-ai-courses-featured-img.jpg',
  'https://assets-global.website-files.com/613baa7ad4f394142e65cb73/6192df82a3ed61da2f44f38a_opengraph-06.jpg',
  'https://venngage-wordpress.s3.amazonaws.com/uploads/2021/05/Create-Online-Course-Blog-Header.png',
];

const darkLogos = [
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-course-template-banner-for-facebook-design-9a58359ebb1f36cbf294432d077af73c_screen.jpg?ts=1586796101',
  'https://trisectinstitute.com/wp-content/uploads/2021/12/best-python-training.png',
  'https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg',
  'https://www.elegantthemes.com/blog/wp-content/uploads/2023/12/best-ai-courses-featured-img.jpg',
  'https://assets-global.website-files.com/613baa7ad4f394142e65cb73/6192df82a3ed61da2f44f38a_opengraph-06.jpg',
  'https://venngage-wordpress.s3.amazonaws.com/uploads/2021/05/Create-Online-Course-Blog-Header.png',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Courses() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="courses"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          Kurslar
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Platformadagi top kurlar haqida batafsil ma'lumot
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {courseData.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Link href="">
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1,
                  p: 1,
                }}
              >
                <CardMedia
                  sx={{ height: 200, borderRadius: '10px' }}
                  image={logos[index]}
                  title={`Logo ${index + 1}`}

                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {testimonial.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.testimonial}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    pr: 2,
                  }}
                >
                  <CardHeader
                    avatar={testimonial.avatar}
                    title={testimonial.name}
                    subheader={testimonial.occupation}
                  />
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
        <Grid item xs={12} sm={12} md={12} mt={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Button target='_blank' href='/course' >Ko'proq</Button>
        </Grid>
      </Grid>
    </Container>
  );
}