import Marquee from 'react-fast-marquee';
import { headerMarqueeLabelData } from '../data';
import { Component } from './Tags';
import { Chip } from './mui';
import st from '../styles/components/HeaderMarquee.module.css';

function HeaderMarquee() {
    return (
        <Component className={st.component}>
            <Marquee className={st.marquee} speed={30} pauseOnHover={true}>
                {headerMarqueeLabelData.map((label: string, index: number) => (
                    <Chip
                        key={index}
                        className={st.chip}
                        label={label}
                        variant='outlined'
                    />
                ))}
            </Marquee>
        </Component>
    );
}

export default HeaderMarquee;
