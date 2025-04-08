import { NavButton } from '../components';
import { Container, Section, Img, Content } from '../components/Tags';
import { Button } from '../components/mui';
import useFirstPathSegment from '../hooks/useFirstPathSegment';
import { navBtnData } from '../data';
import logo_01 from '../assets/logo_01.png';
import st from '../styles/containers/Header.module.css';
import useNavigateTo from '../hooks/useNavigateTo';
import { ROUTE } from '../consts';

function Header() {
    const pathname = useFirstPathSegment();
    const navigateToUrl = useNavigateTo();

    return (
        <Container className={st.header}>
            <Img className={st.logo} src={logo_01} alt='Logo' />
            <Section className={st.section}>
                <Content className={st.content}>
                    {navBtnData.map((button, index) => (
                        <NavButton
                            key={index}
                            label={button.label}
                            link={button.link}
                            isActive={pathname === button.link}
                        />
                    ))}
                </Content>
                <Button
                    className={st.button}
                    variant='contained'
                    onClick={() => navigateToUrl(ROUTE.CONTACT)}
                >
                    Contact
                </Button>
            </Section>
        </Container>
    );
}

export default Header;
