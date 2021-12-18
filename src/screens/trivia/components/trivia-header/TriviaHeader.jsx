import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './trivia-header.styles.css';
import { useNavigate } from 'react-router';

const TriviaHeader = ({ text }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box className="triviaHeaderContainer">
        <IconButton onClick={() => navigate('/trivias')}>
          <ArrowBackIcon />
        </IconButton>
        <Typography className="triviaHeaderText" variant="h5">
          {text}
        </Typography>
      </Box>
      <Box className="triviaHeaderSeparator" />
    </Box>
  );
};

export default TriviaHeader;
