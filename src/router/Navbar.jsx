import { AppBar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import gameConstants from '../common/constants/game.constants';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Typography onClick={() => navigate('/')} className="headerText" variant="h6" component="div">
        {gameConstants.gameName}
      </Typography>
    </AppBar>
  );
};

export default Navbar;
