import { Container, Section, Img, Content } from '../components/Tags';
import logo_01 from '../assets/logo_01.png';
import { NavButton } from '../components';
import { navBtnData } from '../data';
import st from '../styles/containers/Header.module.css';
import useFirstPathSegment from '../hooks/useFirstPathSegment';
import { Button } from '../components/mui';

function Header() {
    const pathname = useFirstPathSegment();

    return (
        <Container className={st.container}>
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
                <Button className={st.button} variant='contained'>
                    Contact
                </Button>
            </Section>
        </Container>
    );
}

export default Header;
