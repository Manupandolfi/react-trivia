import React from 'react';
import homeScreenConstants from './home-screen.constants';
import './home-screen.styles.css';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import images from '../../common/assets/images/images';

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <Box className="homeScreenContainer">
      <Typography className="welcomeText" variant="h4" component="div" gutterBottom>
        {homeScreenConstants.welcomeMessage}
      </Typography>
      <Box>
        <img className="homeImage" src={images.home} />
      </Box>
      <Box>
        <Button className="playNowButton" onClick={() => navigate('/trivias')} variant="contained">
          {homeScreenConstants.playNowMessage}
        </Button>
      </Box>
    </Box>
  );
};

export default HomeScreen;
