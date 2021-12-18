import React, { useContext } from 'react';
import Loading from '../../common/components/loading/Loading';
import TriviaMenuItem from './components/trivia-menu-item/TriviaMenuItem';
import { TriviaGameContext } from '../../contexts/TriviaGameContext';
import { Box } from '@mui/material';
import triviaMenuScreenConstants from './trivia-menu-screen.constants';

const TriviaMenuScreen = () => {
  const { trivias, loadingTrivias } = useContext(TriviaGameContext);

  if (loadingTrivias) {
    return <Loading text={triviaMenuScreenConstants.loadingTrivias} />;
  }

  return (
    <Box>
      {trivias.map((trivia, key) => (
        <TriviaMenuItem key={`${trivia.title}-${key}`} trivia={trivia} triviaId={key} />
      ))}
    </Box>
  );
};

export default TriviaMenuScreen;
