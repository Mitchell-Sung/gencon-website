import { Typography } from './mui';

type Props = { label: string };

function HeroSubHeadlineTypo({ label }: Props) {
    return (
        <Typography variant='subtitle1' color='var(--cl-text-secondary)'>
            {label}
        </Typography>
    );
}

export default HeroSubHeadlineTypo;
