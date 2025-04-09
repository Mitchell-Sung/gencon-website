import Marquee from 'react-fast-marquee';
import { headerMarqueeLabelData } from '../data';
import { Component } from './Tags';
import { Chip } from './mui';

function HeaderMarquee() {
    return (
        <Component
            sx={{
                display: 'flex',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRadius: '100px',
            }}
        >
            <Marquee speed={30} pauseOnHover={true} autoFill={true}>
                {headerMarqueeLabelData.map((label: string, index: number) => (
                    <Chip
                        key={index}
                        label={label}
                        variant='outlined'
                        size='small'
                        sx={{
                            margin: '0.4rem',
                            letterSpacing: '0.075rem',
                        }}
                    />
                ))}
            </Marquee>
        </Component>
    );
}

export default HeaderMarquee;
