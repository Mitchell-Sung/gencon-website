import MuiDivider, { DividerProps } from '@mui/material/Divider';

function Divider(props: DividerProps) {
    return <MuiDivider {...props}>{props.children}</MuiDivider>;
}

export default Divider;
