import React from 'react'
import {CardItems} from './CardItems'
import './Cards.css'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const MainGridContainer = styled(Grid)(() => ({  
    alignItems: "center",
    padding: '6rem 1.5rem',
    justifyContent: "space-around",
   
}));

const StyledIndividualGird = styled(Grid)(() => ({  
    padding: '0rem 2.5rem',  
    width: '100%',
}));


export const Cards = () => {
    return (
        <MainGridContainer container>
            <Grid item>
                    <h1 id="quote">
                        "
                        <span id="liking">
                            Success is liking {' '}
                        </span> 
                        <span id="pinktext">
                            yourself,
                        </span> 
                        <br/> 
                        <span id="liking">
                            liking {' '}
                        </span>
                        <span id="pinktext">
                            what you do,
                        </span> 
                        <br/> 
                        <span id="liking">
                            and liking {' '}
                        </span> 
                        <span id="pinktext">
                            how you do it
                        </span> 
                        ."
                    </h1>
            </Grid>
            
            <Grid item sx={{ overflow:'scroll', padding: '7px'}}>
                <Grid container wrap={'nowrap'} columnSpacing={{ xs: 0.2, sm: 1, md: 6 }} sx={{ paddingTop:'4rem', minWidth: 'max-content'}} >
                    <StyledIndividualGird item>
                        <CardItems 
                            label={'Projects'}
                            text={'Take a look at my portfolio!'}
                            src={'images/mirando.JPG'}/>
                    </StyledIndividualGird>
          
                    <StyledIndividualGird item>
                        <CardItems 
                            label={'About Me'}
                            text={'Who Am I? Understand my background!'}
                            src={'images/aboutme.JPG'}/>                    
                    </StyledIndividualGird>

                    <StyledIndividualGird item>
                        <CardItems
                            label={'Contact'}
                            text={'Get in touch with me!'}
                            src={'images/Contact.png'}/>
                    </StyledIndividualGird> 
                </Grid>
            </Grid>
        </MainGridContainer>
    );
};
