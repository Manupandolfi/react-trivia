import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

/*
  ref: https://mui.com/components/progress/#circular-with-label
*/

const CircularProgressWithLabel = ({ value, label, color, size = 50 }) => {
  const getVariant = () => {
    if (size > 75) {
      return 'h5';
    }
    return 'h6';
  };

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        sx={{ color: color ?? 'gray' }}
        variant="determinate"
        value={value}
        size={size}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant={getVariant()} component="div" color="text.secondary">
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
