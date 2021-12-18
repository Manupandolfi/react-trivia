import { Box, Typography } from '@mui/material';
import React from 'react';
import errorTriviaNotFoundConstants from './error-trivia-not-found.constants';
import './error-trivia-not-found.styles.css';
import images from '../../assets/images/images';

const ErrorTriviaNotFound = () => {
  return (
    <Box>
      <Typography gutterBottom variant="h4" component="div" color={'white'}>
        {errorTriviaNotFoundConstants.errorText}
      </Typography>
      <Typography gutterBottom variant="h5" component="div" color={'white'}>
        {errorTriviaNotFoundConstants.notFoundText}
      </Typography>
      <img className="notFoundImage" src={images.error} alt="not-found-img" />
    </Box>
  );
};

export default ErrorTriviaNotFound;
