import { TypeAnimation } from 'react-type-animation';
import { Span } from './Tags';
import { Typography } from './mui';

// Todo: Update the props...

function HeroHeadlineTypeAnimation() {
    return (
        <Typography variant='h4'>
            Building Your Trust, <br />
            Powering Your{' '}
            <Span
                sx={{
                    color: 'var(--cl-ci-red)',
                }}
            >
                <TypeAnimation
                    sequence={[
                        'Spaces.',
                        1000,
                        'Homes.',
                        1000,
                        'Buildings.',
                        1000,
                        'Offices.',
                        1000,
                        'Dreams.',
                        1000,
                    ]}
                    wrapper='span'
                    speed={30}
                    repeat={Infinity}
                />
            </Span>
        </Typography>
    );
}

export default HeroHeadlineTypeAnimation;
