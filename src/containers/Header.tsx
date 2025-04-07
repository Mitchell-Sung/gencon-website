import { Container, Img, Section } from '../components/Tags';
import st from '../styles/containers/Header.module.css';
import logoOrigin from '../assets/logo_01.png';
import { Button } from '../components/mui';

function Header() {
    return (
        <Container className={st.container}>
            <Img className={st.logo} src={logoOrigin} alt='Logo' />
            <Section>
                <Button>Home</Button>
            </Section>
        </Container>
    );
}

export default Header;
