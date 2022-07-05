import React from 'react'
import '../../App.css'
import './HeroSection.css'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';


const theme = createTheme();

const StyledIndividualGird = styled(Grid)(() => ({  
  height: '70vh',
  flexDirection: 'row',
  justifyContent: "space-around",
  width: '25%',
  marginTop: '18vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  outlineColor: 'rgb(255, 0, 136)',
  outlineStyle: 'solid',
}));

export const HeroSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container   wrap={'nowrap'} columnSpacing={{ xs: 1, sm: 1, md: 5 }} sx={{flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center'}}>
        <StyledIndividualGird
          item
          sx={{
            backgroundImage: `url(images/meOut1.JPG)`,
            
          }}
        />
        <StyledIndividualGird
          item
          sx={{
            backgroundImage: `url(images/meOut2.JPG)`,
          }}
        />
        <StyledIndividualGird
          item
          sx={{
            backgroundImage: `url(images/meOut3.JPG)`,
          }}
        />
      </Grid>
    </ThemeProvider>
 
  );
}
