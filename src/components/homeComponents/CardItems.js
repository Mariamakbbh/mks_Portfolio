import React from 'react';
import './Cards.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/system';


const StyledText = styled(Typography)({
  fontFamily: 'Montserrat',
    color: '#000000',
    fontWeight: 500,
    fontSize: 15,
});

const StyledLable = styled(Typography)({
    fontFamily: 'didot',
    fontSize: '1rem',
    textTransform: 'uppercase',
    backgroundColor: 'rgb(255, 0, 136)',
    width: '100%',
    top: '0',
    position: 'absolute',
    color: '#fff',
    fontWeight: 900,
    padding: '6px 8px',

});

const StyledImageArea = styled(CardMedia)({
transition: '0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

  export const CardItems = (props) => {
    return (
      <Card >
        <CardActionArea>

          <StyledImageArea
            component="img"
            height="260"
            image={props.src}
            alt="green iguana"/>
        
          <StyledLable gutterBottom variant="h5" component="div" >
            {props.label}
          </StyledLable>

          <CardContent >
            <StyledText variant="body2" color="text.secondary">
              {props.text}
            </StyledText>
          </CardContent>

        </CardActionArea>
      </Card>
  );
  }
