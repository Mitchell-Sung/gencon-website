import MuiButton, { ButtonProps } from '@mui/material/Button';
import MuiDivider, { DividerProps } from '@mui/material/Divider';
import MuiChip, { ChipProps } from '@mui/material/Chip';
import MuiPaper, { PaperProps } from '@mui/material/Paper';
import MuiTypography, { TypographyProps } from '@mui/material/Typography';
import MuiTooltip, { TooltipProps } from '@mui/material/Tooltip';
import MuiCard, { CardProps } from '@mui/material/Card';
import MuiCardHeader, { CardHeaderProps } from '@mui/material/CardHeader';
import MuiCardMedia, { CardMediaProps } from '@mui/material/CardMedia';
import MuiCardContent, { CardContentProps } from '@mui/material/CardContent';
import MuiCardActions, { CardActionsProps } from '@mui/material/CardActions';
import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

export function Button(props: ButtonProps) {
    return <MuiButton {...props}>{props.children}</MuiButton>;
}

export function Chip(props: ChipProps) {
    return <MuiChip {...props}>{props.children}</MuiChip>;
}

export function Divider(props: DividerProps) {
    return <MuiDivider {...props}>{props.children}</MuiDivider>;
}

export function Paper(props: PaperProps) {
    return <MuiPaper {...props}>{props.children}</MuiPaper>;
}

export function Typography(props: TypographyProps) {
    return <MuiTypography {...props}>{props.children}</MuiTypography>;
}

export function TextField(props: TextFieldProps) {
    return <MuiTextField {...props}>{props.children}</MuiTextField>;
}

export function Tooltip(props: TooltipProps) {
    return <MuiTooltip {...props}>{props.children}</MuiTooltip>;
}

// Card
export function Card(props: CardProps) {
    return <MuiCard {...props}>{props.children}</MuiCard>;
}

export function CardHeader(props: CardHeaderProps) {
    return <MuiCardHeader {...props}>{props.children}</MuiCardHeader>;
}

export function CardMedia(props: CardMediaProps) {
    return <MuiCardMedia {...props}>{props.children}</MuiCardMedia>;
}

export function CardContent(props: CardContentProps) {
    return <MuiCardContent {...props}>{props.children}</MuiCardContent>;
}

export function CardActions(props: CardActionsProps) {
    return <MuiCardActions {...props}>{props.children}</MuiCardActions>;
}
