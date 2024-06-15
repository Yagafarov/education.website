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
    avatar: <Avatar alt="Aliyev Ali" src="#" />,
    name: 'Dinmuhammad Yagafarov',
    title: "Data Science",
    occupation: "O'qituvchi",
    testimonial:
      "Data Science onlayn kursi juda foydali va qiziqarli bo'ldi. O'zbek tilida o'qitilishi o'rganishni osonlashtirdi va amaliy mashg'ulotlar orqali ko'nikmalarimni mustahkamladim. Ushbu kursni har bir boshlovchi va mutaxassis bo'lishni istaganlarga tavsiya qilaman!",
  },
  {
    id: 2,
    avatar: <Avatar alt="Aliyev Ali" src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg" />,
    name: 'Aliyev Ali',
    title: "Zamonaviy Python",
    occupation: 'Lead Product Designer',
    testimonial:
      "Zamonaviy Python kursi menga juda ko'p yangi bilimlar berdi. Kursning amaliy mashg'ulotlari juda foydali bo'ldi va o'qituvchilarning yordami bilan murakkab tushunchalarni osonlik bilan o'zlashtirdim.",
  },
  { 
    id: 3,
    avatar: <Avatar alt="Aliyev Ali" src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg" />,
    name: 'Aliyev Ali',
    title: "Python asoslari",
    occupation: 'CTO',
    testimonial:
      "Python asoslari kursi oson va tushunarli tarzda o'rganishni ta'minladi. Kursning oddiyligi va foydalanuvchi uchun qulayligi hayotimni sezilarli darajada soddalashtirdi.",
  },
  {
    id: 4,
    avatar: <Avatar alt="Aliyev Ali" src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg" />,
    name: 'Julia Stewart',
    title: "Sun'iy intellekt",
    occupation: 'Senior Engineer',
    testimonial:
      "Sun'iy intellekt kursining dizayni va detallarga e'tibor berilganligi menga juda yoqdi. Kichik narsalar katta farq qiladi va kurs yaratuvchilari yuqori sifatli tajriba taqdim etishga e'tibor berishgan.",
  },
  {
    id: 5,
    avatar: <Avatar alt="Aliyev Ali" src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg" />,
    name: 'John Smith',
    title: "Backend kursi",
    occupation: 'Backend dasturchi',
    testimonial:
      "Backend kursi boshqa mahsulotlar orasida o'zining innovatsion xususiyatlari bilan ajralib turadi. Yaratuvchilar foydalanuvchi ehtiyojlarini chinakamiga qondiradigan yechim yaratishga katta e'tibor qaratishgani ko'rinib turibdi.",
  },
  {
    id: 6,
    avatar: <Avatar alt="Aliyev Ali" src="" />,
    name: 'Aliyev Ali',
    title: "SEO kursi",
    occupation: 'Programmer',
    testimonial:
      "SEO kursining sifati mening kutganimdan ham yuqori bo'ldi. U bardoshli, yaxshi dizaynlangan va uzoq muddatga mo'ljallangan. Bu kursni o'qish investitsiyaga arziydi!",
  },
];


const whiteLogos = [
  'https://i.ytimg.com/vi/YfO28Ihehbk/maxresdefault.jpg',
  'https://trisectinstitute.com/wp-content/uploads/2021/12/best-python-training.png',
  'https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg',
  'https://www.elegantthemes.com/blog/wp-content/uploads/2023/12/best-ai-courses-featured-img.jpg',
  'https://assets-global.website-files.com/613baa7ad4f394142e65cb73/6192df82a3ed61da2f44f38a_opengraph-06.jpg',
  'https://venngage-wordpress.s3.amazonaws.com/uploads/2021/05/Create-Online-Course-Blog-Header.png',
];

const darkLogos = whiteLogos;

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