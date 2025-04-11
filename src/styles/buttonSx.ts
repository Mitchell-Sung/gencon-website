import { SxProps, Theme } from '@mui/system';

export const sx_ButtonCallToAction: SxProps<Theme> = {
    width: '100px',
    borderRadius: '5px',
    background:
        'linear-gradient(315deg, var(--cl-ci-grey) 20%, var(--cl-ci-red) 50%, var(--cl-ci-blue) 80%)',
    backgroundSize: '400% 400%',
    animation: 'gradientWave 5s ease infinite',
    textTransform: 'none',
    fontSize: '1.1rem',
    color: '#eeeeee',
    transition: 'filter 0.3s ease',

    '&:hover': {
        filter: 'brightness(1.15)',
    },

    '@keyframes gradientWave': {
        '0%': {
            backgroundPosition: '0% 50%',
        },
        '50%': {
            backgroundPosition: '100% 50%',
        },
        '100%': {
            backgroundPosition: '0% 50%',
        },
    },
};

export const sx_ButtonLearnMore: SxProps<Theme> = {
    textTransform: 'none',
    color: 'var(--cl-ci-blue)',
};

export const sx_NavButton: SxProps<Theme> = {
    width: '100px',
    color: 'var(--cl-text-secondary)',
    textTransform: 'none',
    fontSize: '1.1rem',
};
