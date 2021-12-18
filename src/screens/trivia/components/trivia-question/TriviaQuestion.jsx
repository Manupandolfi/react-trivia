import { Box, Button, Grid, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import CircularProgressWithLabel from '../../../../common/components/circular-progress-with-label/CircularProgressWithLabel';
import triviaQuestionConstants from './trivia-question.constants';
import './trivia-question.styles.css';

const TriviaQuestion = ({ question, advanceQuestion, questionsCount, questionNumber }) => {
  const [timeLeft, setTimeLeft] = useState(question.lifetimeSeconds);
  const [resultsRevealed, setResultsRevealed] = useState(false);
  const [result, setResult] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);

  const timeLeftRef = useRef(timeLeft);
  timeLeftRef.current = timeLeft;

  useEffect(() => {
    startTriviaQuestion();
    const timer = setInterval(() => {
      if (timeLeftRef.current > 0) {
        setTimeLeft(timeLeftRef.current - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [question]);

  useEffect(() => {
    if (timeLeft === 0) {
      if (!resultsRevealed) {
        revealResults(null);
      } else {
        advanceQuestion(result);
      }
    }
  }, [timeLeft]);

  const startTriviaQuestion = () => {
    setTimeLeft(question.lifetimeSeconds);
    setResult(false);
    setHasSelected(false);
    setResultsRevealed(false);
    timeLeftRef.current = question.lifetimeSeconds;
  };

  const revealResults = (option = null) => {
    if (option) {
      setHasSelected(true);
    }
    setResult(option ? option.correct : false);
    setResultsRevealed(true);
    timeLeftRef.current = 2;
    setTimeLeft(2);
  };

  const getOptionColor = (option) => {
    if (resultsRevealed) {
      return option.correct ? 'success' : 'error';
    } else {
      return 'primary';
    }
  };

  return (
    <Grid className="triviaQuestionContainer">
      <CircularProgressWithLabel
        label={timeLeft}
        value={resultsRevealed ? 0 : Math.round((timeLeft / question.lifetimeSeconds) * 100)}
      />
      <Typography variant="h4">{question.text}</Typography>
      <img src={question.image} className="triviaQuestionImage" />
      <Box className="optionsContainer">
        {question.options.map((option, key) => {
          return (
            <Box>
              <Button
                key={`option-${key}`}
                className="optionButton"
                variant="contained"
                sx={{ cursor: resultsRevealed ? 'not-allowed' : 'pointer' }}
                onClick={() => !resultsRevealed && revealResults(option)}
                color={getOptionColor(option)}
              >
                {option.text}
              </Button>
            </Box>
          );
        })}
      </Box>
      {resultsRevealed && !hasSelected && (
        <Typography variant="body1">{triviaQuestionConstants.timeOutMessage}</Typography>
      )}
      <Typography variant="h6">{`${questionNumber} ${triviaQuestionConstants.ofText} ${questionsCount} ${triviaQuestionConstants.questionsText}`}</Typography>
      <LinearProgress
        className="questionsProgress"
        variant="determinate"
        value={(questionNumber / questionsCount) * 100}
      />
    </Grid>
  );
};

export default TriviaQuestion;
