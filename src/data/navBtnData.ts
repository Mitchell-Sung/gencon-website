import { ROUTE } from '../consts';
import { NavBtnDataType } from '../types';

const navBtnData: NavBtnDataType[] = [
    { label: 'Home', link: ROUTE.ROOT },
    { label: 'Services', link: ROUTE.SERVICES },
    { label: 'Projects', link: ROUTE.PROJECTS },
    { label: 'About us', link: ROUTE.ABOUT_US },
];

export default navBtnData;
