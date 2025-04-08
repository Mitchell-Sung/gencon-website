import MuiPaper, { PaperProps } from '@mui/material/Paper';

function Paper(props: PaperProps) {
    return <MuiPaper {...props}>{props.children}</MuiPaper>;
}

export default Paper;
