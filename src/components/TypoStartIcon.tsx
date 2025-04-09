import { JSX } from 'react';
import { Component } from './Tags';
import { Typography } from './mui';
import { TypographyProps } from '@mui/material/Typography';

type Props = {
    label: string;
    variant: TypographyProps['variant'];
    icon: JSX.Element;
};

function TypoStartIcon({ label, variant, icon }: Props) {
    return (
        <Component
            sx={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center',
            }}
        >
            {icon}
            <Typography variant={variant}>{label}</Typography>
        </Component>
    );
}

export default TypoStartIcon;
