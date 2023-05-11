import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TouchAppIcon from '@mui/icons-material/TouchApp';

const theme = createTheme({
  typography: {
    fontFamily: 'Parisienne',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  palette: {
    gold: {
      main: '#fff',
      contrastText: '#fff',
    },
  },
});

const theme2 = createTheme({
  typography: {
    fontFamily: 'Parisienne',
    fontWeightLight: 400,
  },
  palette: {
    gold: {
      main: '#4f4e4e',
      contrastText: '#fff',
    },
    neutral: {
      main: '#4f4e4e',
      contrastText: '#000',
    },
  },
});

function MainFeaturedPost(props) {
  const { post, time } = props;
  const navigate = useNavigate();

  const crypt = () => {
    // TODO: remove in production
    navigate('/crypt');
  };

  const createUser = () => {
    // TODO: remove in production
    navigate('/create-user');
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${post.image})`,
          borderRadius: 1,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.8)',
            borderRadius: 1,
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  mb: 1,
                }}
              >
                <Card sx={{ width: 60, mr: 1, height: 50, backgroundColor: '#000' }}>
                  <CardContent sx={{ paddingTop: 0, paddingBottom: 0, marginBottom: -2.7 }}>
                    <Typography variant="h5" component="div" sx={{ mb: -1 }} color="white">
                      {time.days}
                    </Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: '700' }} color="white">
                      Días
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ width: 60, mr: 1, height: 50 }}>
                  <CardContent sx={{ paddingTop: 0, paddingBottom: 0, marginBottom: -2.7 }}>
                    <Typography variant="h5" component="div" sx={{ mb: -1 }}>
                      {time.hours}
                    </Typography>
                    <Typography sx={{ fontSize: 16, ml: -0.5, fontWeight: '700' }} color="text.secondary">
                      Horas
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{ width: 60, mr: 1, height: 50, backgroundColor: '#000' }}
                  onClick={createUser}
                >
                  <CardContent sx={{ paddingTop: 0, paddingBottom: 0, marginBottom: -2.7 }}>
                    <Typography variant="h5" component="div" sx={{ mb: -1 }} color="white">
                      {time.minutes}
                    </Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: '700' }} color="white">
                      Min.
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ width: 60, height: 50 }} onClick={crypt}>
                  <CardContent sx={{ paddingTop: 0, paddingBottom: 0, marginBottom: -2.7 }}>
                    <Typography variant="h5" component="div" sx={{ mb: -1 }}>
                      {time.seconds}
                    </Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: '700' }} color="text.secondary">
                      Seg.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Typography
                component="h1"
                variant="h1"
                color="inherit"
                gutterBottom
                className="font-link"
              >
                {post.title}
              </Typography>
              <Typography
                component="h1"
                variant="h5"
                color="inherit"
                className="font-link"
                sx={{ mt: -5 }}
              >
                19 de junio de 2023
              </Typography>
              <Typography
                component="h1"
                variant="h5"
                color="inherit"
                className="font-link"
              >
                Dress Code: Elegante
              </Typography>
              <Typography variant="h3" color="inherit" paragraph sx={{ pt: 15 }}>
                {post.description}
              </Typography>
              <Typography variant="h6" color="inherit" sx={{ mb: 1 }}>
                Confirmar antes del 5 de junio
              </Typography>
              <Button
                variant="contained"
                size="medium"
                onClick={() => navigate('/login')}
                color="gold"
              >
                <ThemeProvider theme={theme2}>
                  <Typography
                    sx={{ fontWeight: 500, fontSize: 26, textTransform: 'none' }}
                    color="#000"
                  >
                    Confirmar Asistencia
                  </Typography>
                  <TouchAppIcon color="neutral" />
                </ThemeProvider>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
