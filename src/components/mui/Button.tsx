import MuiButton, { ButtonProps } from '@mui/material/Button';

function Button(props: ButtonProps) {
    return <MuiButton {...props}>{props.children}</MuiButton>;
}

export default Button;
