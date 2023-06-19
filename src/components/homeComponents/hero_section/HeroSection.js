import React from 'react'
import '../../../App.css'
import './HeroSection.css'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import img_one from '../../../img/meOut1.JPG'
import img_two from '../../../img/meOut2.JPG'
import img_three from  '../../../img/meOut3.JPG'


const theme = createTheme();


const StyledImageGird = styled(Grid)(() => ({  
  width: '50%', 
  height: '100vh',
  background: 'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)',
  paddingLeft:'5vh'

}));

const StyledIndividualGird = styled(Grid)(() => ({  
  height: '80vh',
  flexDirection: 'row',
  justifyContent: "space-around",
  width: '25%',
  marginTop: '15vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  outlineColor: 'rgb(255, 0, 136)',
  outlineStyle: 'solid',
  transition: '0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
    filter: 'grayscale(5.5)',
  },
}));

export const HeroSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledImageGird container>
        <Grid container   wrap={'nowrap'} columnSpacing={{ xs: 1, sm: 1, md: 5 }} sx={{flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center'}}>
          <StyledIndividualGird item sx={{backgroundImage: `url(${img_one})`,}}/>
          <StyledIndividualGird item sx={{backgroundImage: `url(${img_two})`,}}/>
          <StyledIndividualGird item sx={{backgroundImage: `url(${img_three})`,}}/>
        </Grid>
      </StyledImageGird>
    </ThemeProvider>
 
  );
}
