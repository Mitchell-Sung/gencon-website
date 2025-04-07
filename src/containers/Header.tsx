import { Container, Img } from '../components/Tags';
import { Typography } from '../components/mui';
import st from '../styles/containers/Header.module.css';
import logoOrigin from '../assets/logo_01.png';

function Header() {
    return (
        <Container className={st.container}>
            <Img className={st.logo} src={logoOrigin} alt='Logo' />
            <Typography variant='h1' gutterBottom>
                Hello Header Container
            </Typography>
        </Container>
    );
}

export default Header;
