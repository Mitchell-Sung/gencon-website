import MuiTypography, { TypographyProps } from '@mui/material/Typography';

function Typography(props: TypographyProps) {
    return <MuiTypography {...props}>{props.children}</MuiTypography>;
}

export default Typography;
