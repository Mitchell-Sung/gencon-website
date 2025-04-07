import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { Main } from './components/Tags';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './styles/theme';
import './styles/App.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Main className='app'>
                <RouterProvider router={router} />
            </Main>
        </ThemeProvider>
    );
}

export default App;
