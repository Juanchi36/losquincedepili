import * as React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const theme = createTheme({
  typography: {
    fontFamily: 'Great VIbes',
    fontWeightLight: 400,
  },
});

const theme2 = createTheme({
  typography: {
    fontFamily: 'Courgette',
    fontWeightLight: 400,
  },
  palette: {
    gold: {
      main: '#4f4e4e',
      contrastText: '#fff',
    },
  },
});

const theme3 = createTheme({
  typography: {
    fontFamily: 'Parisienne',
    fontWeightLight: 400,
  },
  palette: {
    gold: {
      main: '#4f4e4e',
      contrastText: '#fff',
    },
  },
});

function FeaturedPost(props) {
  const {
    post,
    //  setIsModalVisible,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} md={6}>
        {/* <CardActionArea component="a" href="#"> */}
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <ThemeProvider theme={theme3}>
              <Typography component="h2" variant="h4" sx={{ mb: 1 }}>
                {post.title}
              </Typography>
            </ThemeProvider>
            <div style={{ marginLeft: 15 }}>
              <ThemeProvider theme={theme2}>
                <Typography component="h2" variant="subtitle2" sx={{ mb: 1, lineHeight: 1.2 }}>
                  {post.description}
                </Typography>
              </ThemeProvider>
              <Typography variant="h5" color="text.secondary">
                {post.name}
              </Typography>
              <ThemeProvider theme={theme2}>
                <Typography variant="subtitle1">{post.address}</Typography>
                <Typography variant="subtitle1">{post.address2}</Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme2}>
                {post.linkText && (
                  <div
                  // onClick={() => setIsModalVisible(true)}
                  >
                    <Typography variant="subtitle1" color="#ababab">
                      {post.linkText}
                    </Typography>
                  </div>
                )}
              </ThemeProvider>
            </div>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
        {/* </CardActionArea> */}
      </Grid>
    </ThemeProvider>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
