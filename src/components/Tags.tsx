import Box, { BoxProps } from '@mui/material/Box';

export function Main(props: BoxProps) {
    return (
        <Box component='main' {...props}>
            {props.children}
        </Box>
    );
}
