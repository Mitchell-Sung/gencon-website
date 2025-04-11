import logo_01 from '../assets/logo_01.png';
import { ROUTE } from '../consts';
import useNavigateTo from '../hooks/useNavigateTo';
import { st_HeaderLogo } from '../styles/headerSx';
import { Img } from './Tags';

function HeaderLogo() {
    const navigateToUrl = useNavigateTo();

    return (
        <Img
            style={st_HeaderLogo}
            src={logo_01}
            alt='Logo'
            onClick={() => navigateToUrl(ROUTE.ROOT)}
        />
    );
}

export default HeaderLogo;
