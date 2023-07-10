import React from 'react'
import {CardItems} from './CardItems'
import './Cards.css'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import card_one from '../../../img/mirando.JPG'
import card_two from '../../../img/aboutme.JPG'
import card_three from '../../../img/Contact.png'

const MainGridContainer = styled(Grid)(() => ({  
    alignItems: "center",
    padding: '6rem 1.5rem',
    justifyContent: "space-around",
    height: '100vh',
   
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
            
            <Grid item sx={{ overflowX:'scroll', overflowY:'hidden', '&::-webkit-scrollbar': {display: 'none'}, padding: '7px'}}>
                <Grid container wrap={'nowrap'} columnSpacing={{ xs: 0.2, sm: 1, md: 6 }} sx={{ paddingTop:'4rem', minWidth: 'max-content'}} >
                    <StyledIndividualGird item>
                        <CardItems 
                            label={'Projects'}
                            text={'Take a look at my portfolio!'}
                            src={card_one}/>
                    </StyledIndividualGird>
          
                    <StyledIndividualGird item>
                        <CardItems 
                            label={'About Me'}
                            text={'Who Am I? Understand my background!'}
                            src={card_two}/>                    
                    </StyledIndividualGird>

                    <StyledIndividualGird item>
                        <CardItems
                            label={'Contact'}
                            text={'Get in touch with me!'}
                            src={card_three}/>
                    </StyledIndividualGird> 
                </Grid>
            </Grid>
        </MainGridContainer>
    );
};
