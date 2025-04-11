import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#eeeeee',
        },
        text: {
            primary: '#616161',
            secondary: '#757575',
        },
    },
    typography: {
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
});

export default theme;
