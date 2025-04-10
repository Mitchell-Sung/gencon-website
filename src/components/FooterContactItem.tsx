import { Component } from './Tags';
import { Typography } from './mui';

type Props = { label: string; info: string };

function FooterContactItem({ label, info }: Props) {
    return (
        <Component
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
            }}
        >
            <Typography sx={{ fontSize: '0.9rem', color: '#8a8a8a' }}>
                {label}
            </Typography>
            <Typography
                sx={{
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
                }}
            >
                {info}
            </Typography>
        </Component>
    );
}

export default FooterContactItem;
