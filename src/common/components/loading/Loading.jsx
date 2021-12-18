import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import './loading.styles.css';

const Loading = ({ text = 'Cargando...' }) => {
  return (
    <Box className="loadingContainer">
      <CircularProgress />
      <Typography variant="h4">{text}</Typography>
    </Box>
  );
};

export default Loading;
