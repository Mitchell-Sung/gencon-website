import { Typography } from './mui';

type Props = { label: string };

function HeroHeadlineTypo({ label }: Props) {
    return <Typography variant='h4'>{label}</Typography>;
}

export default HeroHeadlineTypo;
