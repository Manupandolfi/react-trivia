import React, { createContext, useEffect, useState } from 'react';
import triviasApi from '../api/triviasApi';

const triviaGameInitialState = {
  trivias: [],
  loading: true,
};

export const TriviaGameContext = createContext(triviaGameInitialState);

const TriviaGameProvider = ({ children }) => {
  // I could have used the whole circuit of React context, with reducers and actions, but I didn't find it necessary for this case :)
  const [trivias, setTrivias] = useState(triviaGameInitialState.trivias);
  const [loadingTrivias, setLoadingTrivias] = useState(triviaGameInitialState.loading);

  useEffect(() => {
    fetchTrivias();
  }, []);

  const fetchTrivias = async () => {
    const trivias = await triviasApi.getTrivias();
    console.log(trivias);
    setTrivias(trivias);
    setLoadingTrivias(false);
  };

  const triviaGameState = {
    trivias,
    loadingTrivias,
  };

  return (
    <TriviaGameContext.Provider value={triviaGameState}>{children}</TriviaGameContext.Provider>
  );
};

export default TriviaGameProvider;
