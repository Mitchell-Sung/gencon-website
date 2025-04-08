import { ROUTE } from '../consts';
import { Container } from '../components/Tags';
import {
    ButtonCallToAction,
    HeaderLogo,
    HeaderMarquee,
    HeaderNavButtons,
} from '../components';
import st from '../styles/containers/Header.module.css';

function Header() {
    return (
        <Container className={st.container}>
            <HeaderLogo />
            <HeaderMarquee />
            <HeaderNavButtons />
            <ButtonCallToAction label='Contact' link={ROUTE.CONTACT} />
        </Container>
    );
}

export default Header;
