import { Typography } from './mui';

type Props = { label: string };

function HeroOutlinedTypo({ label }: Props) {
    return (
        <Typography
            variant='subtitle1'
            sx={{
                display: 'flex',
                padding: '0.25rem 1rem',
                borderRadius: '10px',
                width: 'fit-content',
                color: '#eeeeee',
                backgroundColor: 'var(--cl-ci-blue)',
                fontWeight: '700',
            }}
        >
            {label}
        </Typography>
    );
}

export default HeroOutlinedTypo;
