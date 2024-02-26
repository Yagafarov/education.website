import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const tiers = [
  {
    title: 'Ahror B',
    price: '0',
    imageUrl:'https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094392.png',
    description: "Frontend bo'yicha 4 yillik tajribaga ega bo'lgan ko'p yillik dasturchi haqida",
    buttonText: 'Kurslar',
    buttonVariant: 'outlined',
  },
  {
    title: 'Axrorov Azizbek',
    subheader: 'Recommended',
    price: '15',
    imageUrl:'https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png',
    description: "Sun'iy intellekt va mashinani o'qitishga oid ko'p yillik tajribaga ega shaxs",
    buttonText: 'Hoziroq kursni boshlash',
    buttonVariant: 'contained',
  },
  {
    title: 'Ahror B',
    price: '0',
    imageUrl:'https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094392.png',
    description: "Frontend bo'yicha 4 yillik tajribaga ega bo'lgan ko'p yillik dasturchi haqida",
    buttonText: 'Kurslar',
    buttonVariant: 'outlined',
  },
];

export default function Teachers() {
  return (
    <Container
      id="teachers"
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
          Tajribali ustozlarimiz
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bizning platformada ko'p yillik tajribaga ega mohir ustozlar mavjud. <br />
          Ularning ko'p yillik tajribasiga ega bo'lish uchun kurslarimziga a'zo bo'lishingiz kerak  
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.subheader !== 'Recommended' ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: tier.subheader === 'Recommended' ? '1px solid' : undefined,
                borderColor:
                  tier.subheader === 'Recommended' ? 'primary.main' : undefined,
                background:
                  tier.subheader === 'Recommended'
                    ? 'linear-gradient(#033363, #021F3B)'
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color:
                      tier.subheader === 'Recommended' ? 'primary.contrastText' : '',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.subheader === 'Recommended' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      style={{cursor:'pointer'}}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
                        backgroundColor: 'primary.contrastText',
                        '& .MuiChip-label': {
                          color: 'primary.dark',
                        },
                        '& .MuiChip-icon': {
                          color: 'primary.dark',
                        },
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color:
                      tier.subheader === 'Recommended'
                        ? 'primary.contrastText'
                        : undefined,
                  }}
                >
                  <img src={tier.imageUrl} style={{width:'100%'}} />
                </Box>
                <Divider
                  sx={{
                    my: 1,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          tier.subheader === 'Recommended'
                            ? 'primary.contrastText'
                            : undefined,
                      }}
                    >
                      {tier.description}
                    </Typography>
                }
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  component="a"
                  href="#"
                  target="_blank"
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}