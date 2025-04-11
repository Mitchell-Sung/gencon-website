import { Typography } from './mui';
import { Component } from './Tags';
import UnderLineTitle from './UnderLineTitle';

type Props = {
    label: string;
};

function TypoTitleSection({ label }: Props) {
    return (
        <Component
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
            }}
        >
            <UnderLineTitle width='100px' height='7px' />
            <Typography variant='h5' sx={{ fontWeight: '400' }}>
                {label}
            </Typography>
        </Component>
    );
}

export default TypoTitleSection;
