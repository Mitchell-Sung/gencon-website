import { SxProps, Theme } from '@mui/system';

export const sx_Contact = {
    page: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    } as SxProps<Theme>,

    section: {
        display: 'flex',
        gap: '1rem',
    } as SxProps<Theme>,
};

export const sx_ContactPanel = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        flex: '0 0 50%',
    } as SxProps<Theme>,

    section_01: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    } as SxProps<Theme>,

    content_01: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        paddingLeft: '1rem',
    } as SxProps<Theme>,

    item_01: { display: 'flex', gap: '0.7rem' } as SxProps<Theme>,

    section_02: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    } as SxProps<Theme>,

    content_02: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        paddingLeft: '1rem',
    } as SxProps<Theme>,

    item_02: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    } as SxProps<Theme>,

    typography: { letterSpacing: '0.075rem' } as SxProps<Theme>,
};

export const sx_ContactForm = {
    paper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '1.5rem',
        borderRadius: '10px',
        gap: '2rem',
    } as SxProps<Theme>,

    typo_01: { marginLeft: 'auto' } as SxProps<Theme>,

    content_01: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    } as SxProps<Theme>,

    content_02: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '0.5rem',
    } as SxProps<Theme>,

    button_01: {
        textTransform: 'none',
        background: '#2196f3',
    } as SxProps<Theme>,

    item_01: {
        display: 'flex',
        gap: '0.3rem',
        alignItems: 'center',
    } as SxProps<Theme>,

    icon_01: { color: '#4caf50' } as SxProps<Theme>,
};
