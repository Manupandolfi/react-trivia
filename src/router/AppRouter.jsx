import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import HomeScreen from '../screens/home/HomeScreen';
import TriviaMenuScreen from '../screens/trivia-menu/TriviaMenuScreen';
import TriviaScreen from '../screens/trivia/TriviaScreen';
import '../App.css';

const AppRouter = () => {
  return (
    <Box className="appContainer">
      <BrowserRouter>
        <Navbar />
        <Box className="routesContainer">
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/trivias" element={<TriviaMenuScreen />} />
            <Route path="/trivias/:triviaId" element={<TriviaScreen />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
};

export default AppRouter;
