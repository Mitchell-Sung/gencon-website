import MuiChip, { ChipProps } from '@mui/material/Chip';

function Chip(props: ChipProps) {
    return <MuiChip {...props}>{props.children}</MuiChip>;
}

export default Chip;
