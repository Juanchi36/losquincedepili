import * as React from 'react';
import { useInterval } from 'usehooks-ts';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import UserContext from '../../context/User/UserContext';
import FeaturedPost from './components/FeaturedPost';
import Footer from './components/Footer';
import MainFeaturedPost from './components/MainFeaturedPost';
import { timeLeft } from './utils';
import dressImage from '../../assets/images/dress.jpeg';
import giftsImage from '../../assets/images/gifts.jpeg';
import janosImage from '../../assets/images/janos.png';

const featuredPosts = [
  {
    title: '¿Dónde y cuándo?',
    description: '',
    address: 'Perú 338, CABA',
    address2: '19/06/23 - de 21:00 a 05:00',
    image:
    janosImage,
    imageLabel: 'place picture',
    name: "Jano's San Telmo",
    linkText: 'Estacionamiento gratuito',
    date: '',
  },
  {
    title: 'Regalos',
    description:
      'Podes hacer un depósito en la siguiente cuenta. Si no, ¡no hay problema! Lo más importante para nosotros es celebrar juntos este día.',
    image: giftsImage,
    imageLabel: 'gifts picture',
    address: 'CBU: 0000003100044845684995',
    address2: 'Alias: pili.xv',
    linkText: '',
    date: '',
  },
];

const mainFeaturedPost = {
  title: 'Pilar',
  description: 'Mis 15',
  image: dressImage,
  imageText: 'main image description',
  linkText: '',
};

const theme = createTheme({
  typography: ['Dancing Script', 'cursive'].join(','),
});

export default function Home() {
  const { getAllUsers } = React.useContext(UserContext);
  const [time, setTimer] = React.useState(timeLeft());
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  useInterval(() => {
    setTimer(timeLeft());
  }, 1000);

  React.useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} time={time} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} setIsModalVisible={setIsModalVisible} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer title="" description="" />
      <Modal
        open={isModalVisible}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={isModalVisible}>
        <Box sx={{ backgroundColor: 'white', height: '100%', width: '100%', mt: 4, pt: 3, pl: 3, borderRadius: 3 }}>
          <Grid container>
            <Grid item xs={11} md={11} l={11}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Mapa
              </Typography>
            </Grid>
            <Grid item xs={1} md={1} l={1}>
              <div onClick={() => setIsModalVisible(false)}>
                <CloseIcon />
              </div>
            </Grid>
          </Grid>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Esta es la ubicación del evento.
          </Typography>
        </Box>
        </Fade>
      </Modal>
    </ThemeProvider>
  );
}
