import { Component } from './Tags';

type Props = { width: string; height: string };

function UnderLineTitle({ width, height }: Props) {
    return (
        <Component
            sx={{
                width: `${width}`,
                height: `${height}`,
                borderRadius: '10px',
                background:
                    'linear-gradient(315deg, var(--cl-ci-grey) 25%, var(--cl-ci-red) 50%, var(--cl-ci-blue) 75%)',
                backgroundSize: '200% 200%',
                animation: 'gradientWave 4s ease infinite',
                transition: 'filter 0.3s ease',
                '@keyframes gradientWave': {
                    '0%': {
                        backgroundPosition: '0% 50%',
                    },
                    '50%': {
                        backgroundPosition: '100% 50%',
                    },
                    '100%': {
                        backgroundPosition: '0% 50%',
                    },
                },
            }}
        />
    );
}

export default UnderLineTitle;
