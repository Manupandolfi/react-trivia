import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import triviaItemConstants from './trivia-item.constants';
import './trivia-item.styles.css';

const TriviaMenuItem = ({ trivia, triviaId }) => {
  const navigate = useNavigate();
  return (
    <Card className="triviaMenuItemContainer">
      <CardMedia component="img" height="140" image={trivia.image} alt={`${trivia.title}-image`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {trivia.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`/trivias/${triviaId}`)} size="small">
          {triviaItemConstants.startTrivia}
        </Button>
      </CardActions>
    </Card>
  );
};

export default TriviaMenuItem;
