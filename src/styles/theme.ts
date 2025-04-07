import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        background: {
            default: '#eeeeee',
        },
        text: {
            primary: '#616161',
            secondary: '#6b6b6b',
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
