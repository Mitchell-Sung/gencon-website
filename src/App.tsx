import { Main } from './components/Tags';
import './styles/App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './styles/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Main className='app'>Hello App</Main>
        </ThemeProvider>
    );
}

export default App;

<ThemeProvider theme={theme}>
    <CssBaseline />
    <Main className='app'>{/* <RouterProvider router={router} /> */}</Main>
</ThemeProvider>;
