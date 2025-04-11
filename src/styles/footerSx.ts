import { SxProps, Theme } from '@mui/system';

export const sx_FooterContactItem = {
    component: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
    } as SxProps<Theme>,

    typoLabel: { fontSize: '0.9rem', color: '#8a8a8a' } as SxProps<Theme>,

    typoInfo: {
        fontSize: '1.1rem',
        transition: '0.3s ease',
        letterSpacing: '0.5px',
        position: 'relative',
        left: '0px',
        cursor: 'pointer',
        '&:hover': {
            color: 'var(--cl-common-light)',
            left: '6px',
        },
    } as SxProps<Theme>,
};
