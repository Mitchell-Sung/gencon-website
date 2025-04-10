import { Typography } from './mui';

type Props = { label: string[] };

function HeroHeadlineTypo({ label }: Props) {
    return (
        <Typography variant='h4'>
            {label[0]}
            <br />
            {label[1]}
        </Typography>
    );
}

export default HeroHeadlineTypo;
