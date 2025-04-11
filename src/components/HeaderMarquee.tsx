import Marquee from 'react-fast-marquee';
import { companyData } from '../data';
import { Component } from './Tags';
import { HeaderMarqueeChip } from '../components';
import { sx_HeaderMarquee } from '../styles/headerSx';

function HeaderMarquee() {
    return (
        <Component sx={sx_HeaderMarquee}>
            <Marquee speed={30} pauseOnHover={true} autoFill={true}>
                <HeaderMarqueeChip label={companyData.phone} />
                <HeaderMarqueeChip label={companyData.email} />
                <HeaderMarqueeChip label={companyData.location} />
            </Marquee>
        </Component>
    );
}

export default HeaderMarquee;
