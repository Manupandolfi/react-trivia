import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './common/theme/dark.theme';
import TriviaGameProvider from './contexts/TriviaGameContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <TriviaGameProvider>
        <AppRouter />
      </TriviaGameProvider>
    </ThemeProvider>
  );
}

export default App;
