import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Snackbar from '@mui/material/Snackbar';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import MuiAlert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserContext from '../../context/User/UserContext';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme({
  typography: {
    fontFamily: 'Dancing Script',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  palette: {
    gold: {
      main: '#4f4e4e',
      contrastText: '#fff',
    },
  },
});

export const Confirm = () => {
  const {
    state: {
      user: { partyOf, id: userId },
    },
  } = useLocation();
  const navigate = useNavigate();
  const { updateOneUser } = React.useContext(UserContext);
  const [vegetarian, setVegetarian] = React.useState(0);
  const [vegan, setVegan] = React.useState(0);
  const [celiac, setCeliac] = React.useState(0);
  const [confirmedGuests, setconfirmedGuests] = React.useState(null);
  const [song, setSong] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const formData = {
    vegetarian,
    vegan,
    celiac,
    confirmedGuests,
    song,
  };

  const specialMenues = Number(vegetarian) + Number(vegan) + Number(celiac);
  const guestsArray = Array.from({ length: partyOf }, (_, index) => index);
  const menusArray = Array.from({ length: Number(confirmedGuests) }, (_, index) => index);

  const shouldshowSelectError = specialMenues > menusArray.length;
  const shouldDisableConfirm = shouldshowSelectError || confirmedGuests === null || open;
  const isASingleGuest = guestsArray.length === 1;
  const isACouple = guestsArray.length === 2;

  const handleChangeVegetarian = (event) => {
    setVegetarian(event.target.value);
  };

  const handleChangeVegan = (event) => {
    setVegan(event.target.value);
  };

  const handleChangeCeliac = (event) => {
    setCeliac(event.target.value);
  };

  const handleRadioChange = (event) => {
    setconfirmedGuests(Number(event.target.value));
  };

  const handleRadioSingleChange = (event) => {
    setVegetarian(0);
    setVegan(0);
    setCeliac(0);
    switch (event.target.value) {
      case 'Vegetariano':
        setVegetarian(1);
        break;
      case 'Vegano':
        setVegan(1);
        break;
      case 'Celíaco':
        setCeliac(1);
        break;
      default:
        return undefined;
    }
  };

  const handleChangeSong = (event) => {
    const inputValue = event.target.value.slice(0, 124);
    setSong(inputValue);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
    navigate('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Alert severity="success" sx={{ width: '100%' }}>
            <Typography sx={{ fontSize: 24, mt: -1 }}>Gracias!!!</Typography>
          </Alert>
        </Snackbar>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography variant="h5" gutterBottom>
            Confirmar asistencia
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={handleRadioChange}
                >
                  {guestsArray?.map((_, index) => {
                    return (
                      <FormControlLabel
                        value={index + 1}
                        control={<Radio color="gold" />}
                        label={
                          index + 1 !== guestsArray.length
                            ? index + 1
                            : isASingleGuest
                            ? 'Sí'
                            : isACouple
                            ? 'Los 2'
                            : 'Todos'
                        }
                        key={index}
                      />
                    );
                  })}
                  <FormControlLabel
                    value={0}
                    control={<Radio color="gold" />}
                    label={isASingleGuest ? 'No' : 'Ninguno'}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography variant="h5" gutterBottom>
            Preferencias de menúes
          </Typography>
          {isASingleGuest ? (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={handleRadioSingleChange}
                    defaultValue="Ninguna"
                  >
                    <FormControlLabel
                      value="Vegetariano"
                      control={<Radio color="gold" />}
                      label="Vegetariano"
                      disabled={confirmedGuests !== 1}
                    />
                    <FormControlLabel
                      value="Vegano"
                      control={<Radio color="gold" />}
                      label="Vegano"
                      disabled={confirmedGuests !== 1}
                    />
                    <FormControlLabel
                      value="Celíaco"
                      control={<Radio color="gold" />}
                      label="Celíaco"
                      disabled={confirmedGuests !== 1}
                    />
                    <FormControlLabel
                      value="Ninguna"
                      control={<Radio color="gold" />}
                      label="Ninguna"
                      disabled={confirmedGuests !== 1}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          ) : (
            <>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel
                      id="demo-simple-select-autowidth-label"
                      sx={{ fontSize: 24, marginTop: -0.5 }}
                      color="gold"
                    >
                      Vegetarianos
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={vegetarian}
                      onChange={handleChangeVegetarian}
                      autoWidth
                      label="Vegetarianos vegeti"
                      error={shouldshowSelectError}
                      disabled={confirmedGuests === '0'}
                      color="gold"
                    >
                      <MenuItem value={0}>0</MenuItem>
                      {menusArray?.map((_, index) => {
                        return (
                          <MenuItem value={index + 1} key={index}>
                            {index + 1}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel
                      id="demo-simple-select-autowidth-label"
                      sx={{ fontSize: 24, marginTop: -0.5 }}
                      color="gold"
                    >
                      Veganos
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={vegan}
                      onChange={handleChangeVegan}
                      autoWidth
                      label="Veganos vegi"
                      error={shouldshowSelectError}
                      disabled={confirmedGuests === '0'}
                      color="gold"
                    >
                      <MenuItem value={0}>0</MenuItem>
                      {menusArray?.map((_, index) => {
                        return (
                          <MenuItem value={index + 1} key={index}>
                            {index + 1}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel
                      id="demo-simple-select-autowidth-label"
                      sx={{ fontSize: 24, marginTop: -0.5 }}
                      color="gold"
                    >
                      Celíacos
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={celiac}
                      onChange={handleChangeCeliac}
                      autoWidth
                      error={shouldshowSelectError}
                      disabled={confirmedGuests === '0'}
                      label="Celiacos celi"
                      color="gold"
                    >
                      <MenuItem value={0}>0</MenuItem>
                      {menusArray?.map((_, index) => {
                        return (
                          <MenuItem value={index + 1} key={index}>
                            {index + 1}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </>
          )}
        </Paper>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography variant="h5" gutterBottom>
            ¿Qué canción no puede faltar en la fiesta?{' '}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <FormControl sx={{ minWidth: '100%' }}>
                <TextField
                  id="song"
                  name="song"
                  label=""
                  autoComplete=""
                  variant="standard"
                  onChange={handleChangeSong}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Button
              variant="contained"
              onClick={() => {
                setOpen(true);
                updateOneUser(userId, formData);
              }}
              sx={{ mt: 3, ml: 1 }}
              disabled={shouldDisableConfirm}
              color="gold"
            >
              <Typography sx={{ textTransform: 'none', fontSize: 20 }}>Confirmar</Typography>
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="outlined"
              onClick={() => {
                navigate(-1);
              }}
              sx={{ mt: 3 }}
              color="gold"
              disabled={open}
            >
              <Typography sx={{ textTransform: 'none', fontSize: 20 }}>Cancelar</Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
