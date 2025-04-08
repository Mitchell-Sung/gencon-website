import logo_01 from '../assets/logo_01.png';
import { ROUTE } from '../consts';
import useNavigateTo from '../hooks/useNavigateTo';
import { Img } from './Tags';

function HeaderLogo() {
    const navigateToUrl = useNavigateTo();

    return (
        <Img
            style={{ width: '15rem', cursor: 'pointer' }}
            src={logo_01}
            alt='Logo'
            onClick={() => navigateToUrl(ROUTE.ROOT)}
        />
    );
}

export default HeaderLogo;
