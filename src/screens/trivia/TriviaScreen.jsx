import { Box } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../../common/components/loading/Loading';
import { TriviaGameContext } from '../../contexts/TriviaGameContext';
import TriviaHeader from './components/trivia-header/TriviaHeader';
import TriviaQuestion from './components/trivia-question/TriviaQuestion';
import TriviaResults from './components/trivia-results/TriviaResults';
import triviaScreenConstants from './trivia-screen.constants';
import ErrorTriviaNotFound from '../../common/components/errors/ErrorTriviaNotFound';

const TriviaScreen = () => {
  const params = useParams();
  const { loadingTrivias, trivias } = useContext(TriviaGameContext);

  const [error, setError] = useState(false);
  const [selectedTrivia, setSelectedTrivia] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [triviaStatus, setTriviaStatus] = useState({
    currentTriviaQuestion: 0,
    triviaFinished: false,
    results: [],
  });

  useEffect(() => {
    if (!loadingTrivias) {
      // It would be better if the trivias had an id and did not use the array position
      const triviaId = parseInt(params.triviaId);
      if (isNaN(triviaId) || trivias.length <= triviaId) {
        setError(true);
      } else {
        const trivia = trivias[triviaId];
        setSelectedQuestion(trivia.questions[0]);
        setSelectedTrivia(trivias[triviaId]);
      }
    }
  }, [loadingTrivias]);

  const advanceQuestion = (result) => {
    const results = [...triviaStatus.results, result];
    const triviaFinished =
      triviaStatus.currentTriviaQuestion === selectedTrivia.questions.length - 1;
    const newTriviaQuestion = triviaStatus.currentTriviaQuestion + 1;
    setTriviaStatus({
      currentTriviaQuestion: newTriviaQuestion,
      results,
      triviaFinished,
    });
    if (!triviaFinished) {
      setSelectedQuestion(selectedTrivia.questions[newTriviaQuestion]);
    }
  };

  if (error) {
    return <ErrorTriviaNotFound />;
  }

  if (loadingTrivias || !selectedTrivia) {
    return <Loading text={triviaScreenConstants.loadingTrivia} />;
  }

  return (
    <Box>
      <TriviaHeader text={selectedTrivia.title} />
      {!triviaStatus.triviaFinished ? (
        <TriviaQuestion
          advanceQuestion={advanceQuestion}
          question={selectedQuestion}
          questionNumber={triviaStatus.currentTriviaQuestion + 1}
          questionsCount={selectedTrivia.questions.length}
        />
      ) : (
        <TriviaResults results={triviaStatus.results} />
      )}
    </Box>
  );
};

export default TriviaScreen;
