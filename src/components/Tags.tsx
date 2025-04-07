import { forwardRef, ImgHTMLAttributes } from 'react';
import Box, { BoxProps } from '@mui/material/Box';

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function Main(props: BoxProps) {
    return (
        <Box component='main' {...props}>
            {props.children}
        </Box>
    );
}

export function Page(props: BoxProps) {
    return (
        <Box component='section' {...props}>
            {props.children}
        </Box>
    );
}

export function Container(props: BoxProps) {
    return (
        <Box component='section' {...props}>
            {props.children}
        </Box>
    );
}

export const Section = forwardRef<HTMLElement, BoxProps>((props, ref) => {
    return (
        <Box component='section' ref={ref} {...props}>
            {props.children}
        </Box>
    );
});

export function Component(props: BoxProps) {
    return (
        <Box component='section' {...props}>
            {props.children}
        </Box>
    );
}

export const Content = forwardRef<HTMLElement, BoxProps>((props, ref) => {
    return (
        <Box component='div' ref={ref} {...props}>
            {props.children}
        </Box>
    );
});

export const Item = forwardRef<HTMLElement, BoxProps>((props, ref) => {
    return (
        <Box component='div' ref={ref} {...props}>
            {props.children}
        </Box>
    );
});

export function Img(props: ImageProps) {
    return <img loading='lazy' {...props} />;
}
