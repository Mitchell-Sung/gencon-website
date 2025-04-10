import { JSX } from 'react';
import { Component } from './Tags';
import { Typography } from './mui';
import { TypographyProps } from '@mui/material/Typography';

type Props = {
    label: string;
    variant: TypographyProps['variant'];
    fontWeight: string;
    icon: JSX.Element;
};

function TypoStartIcon({ label, variant, fontWeight, icon }: Props) {
    return (
        <Component
            sx={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center',
            }}
        >
            {icon}
            <Typography
                variant={variant}
                sx={{ color: '#757575', fontWeight: `${fontWeight}` }}
            >
                {label}
            </Typography>
        </Component>
    );
}

export default TypoStartIcon;
