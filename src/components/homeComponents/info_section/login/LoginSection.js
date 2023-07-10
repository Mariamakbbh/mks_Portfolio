import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UploadIcon from "../../../../img/private.jpeg";
import {SignupModel} from './SignUp'


const theme = createTheme();

export const LoginSection = () => {

  // This sends the sign in user details to the backend to authenticate 
  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      let res = await fetch("http://localhost:3080/user_API/AddUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
        body: JSON.stringify({
          email: data.get('email'),
          password: data.get('password')
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200 || res.status === 201) {
        console.log("Authorised User: ", res.body);
      } else {
        console.log("Invalid User Request: " + res.status + "\b" + res.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const [selectedSection, SetselectedSection] = React.useState('');

  // const handleChange = (event) => {
  //   SetselectedSection(event.target.value);
  // };

  const [open, setOpen] = React.useState(false);

  const handleModelClickOpen = () => {
    console.log("handleModelClickOpen clicked")
    setOpen(true);
  };


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh', paddingTop: 10}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${UploadIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 5,
              mx: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'rgb(255, 0, 136)' }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <br/>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            
            {/* Dropdown menue */}
            {/* <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>Select Site</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedSection}
              label="selectedSection"
              sx={{backgroundColor: '#1976d2', 
                  color: 'white'}}
              onChange={handleChange}
            >
            <MenuItem value={10}>Professional Progress Tracking</MenuItem>
            <MenuItem value={20}>Personal Progress Tracking</MenuItem>
            <MenuItem value={30}>Learning Agenda</MenuItem>
            </Select>
            </FormControl>
            <br/> */}

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor:'rgb(255, 0, 136)' }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="no" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link variant="body2"  href='#0' onClick={handleModelClickOpen}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
    <div>
    <SignupModel open={open} handleClick={() =>  setOpen(false) } />
    </div>
      </Grid>
    </ThemeProvider>

    
  );
}
