import { Chip } from './mui';
import { sx_HeaderMarqueeChip } from '../styles/headerSx';

type Props = { label: string };

function HeaderMarqueeChip({ label }: Props) {
    return (
        <Chip
            label={label}
            variant='outlined'
            size='small'
            sx={sx_HeaderMarqueeChip}
        />
    );
}

export default HeaderMarqueeChip;
