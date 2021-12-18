import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import images from '../../../../common/assets/images/images';
import CircularProgressWithLabel from '../../../../common/components/circular-progress-with-label/CircularProgressWithLabel';
import triviaResultsConstants from './trivia-results.constants';
import './trivia-results.styles.css';

const TriviaSummary = ({ corrects, total }) => {
  return (
    <Typography variant="body1" className="triviaSummary">
      {`${triviaResultsConstants.summary1} ${corrects} ${triviaResultsConstants.summary2} ${total}`}
    </Typography>
  );
};

const TriviaResults = ({ results }) => {
  const [percentage, setPercentage] = useState(0);
  const [corrects, setCorrects] = useState(0);

  useEffect(() => {
    const corrects = results.filter((r) => r === true).length;
    setCorrects(corrects);
    setPercentage((corrects / results.length) * 100);
  }, []);

  return (
    <Box>
      {percentage >= 60 ? (
        <Box className="resultContainer">
          <Box>
            <Typography variant="h3" component="div" className="resultTitle winTitle">
              {triviaResultsConstants.resultMessage.win}
            </Typography>
            <TriviaSummary total={results.length} corrects={corrects} />
          </Box>
          <Box>
            <CircularProgressWithLabel
              value={percentage}
              color={triviaResultsConstants.colors.win}
              label={`${percentage}%`}
              size={100}
            />
          </Box>
          <Box>
            <img className="resultImage" src={images.win} alt="win-result-img" />
          </Box>
        </Box>
      ) : (
        <Box className="resultContainer">
          <Box>
            <Typography variant="h3" className="resultTitle loseTitle">
              {triviaResultsConstants.resultMessage.lose}
            </Typography>
            <TriviaSummary total={results.length} corrects={corrects} />
          </Box>
          <Box>
            <CircularProgressWithLabel
              label={`${percentage}%`}
              color={triviaResultsConstants.colors.lose}
              value={percentage}
              size={100}
            />
          </Box>
          <Box>
            <img className="resultImage" src={images.lose} alt="lose-result-img" />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TriviaResults;
