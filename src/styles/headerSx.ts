import { SxProps, Theme } from '@mui/system';

export const sx_Header = {
    container: {
        width: '70%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 0rem',
        gap: '2rem',
    } as SxProps<Theme>,

    sectionLogoMarquee: {
        display: 'flex',
        overflow: 'hidden',
        gap: '2rem',
    } as SxProps<Theme>,

    sectionNavButtons: {
        display: 'flex',
        gap: '2rem',
    } as SxProps<Theme>,
};

export const st_HeaderLogo = {
    width: '12.5rem',
    cursor: 'pointer',
};

export const sx_HeaderMarquee: SxProps<Theme> = {
    display: 'flex',
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: '100px',
};

export const sx_HeaderMarqueeChip: SxProps<Theme> = {
    margin: '0.4rem',
    letterSpacing: '0.075rem',
};
