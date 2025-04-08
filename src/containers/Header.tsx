import { NavButton } from '../components';
import { Container, Section, Img, Content } from '../components/Tags';
import { Button, Chip, Typography } from '../components/mui';
import useFirstPathSegment from '../hooks/useFirstPathSegment';
import { navBtnData } from '../data';
import logo_01 from '../assets/logo_01.png';
import useNavigateTo from '../hooks/useNavigateTo';
import { ROUTE } from '../consts';
import st from '../styles/containers/Header.module.css';

function Header() {
    const pathname = useFirstPathSegment();
    const navigateToUrl = useNavigateTo();

    return (
        <Container className={st.container}>
            <Img
                className={st.logo}
                src={logo_01}
                alt='Logo'
                onClick={() => navigateToUrl(ROUTE.ROOT)}
            />
            <Section sx={{ border: 'solid 1px red' }}>
                <Chip
                    label={
                        <Typography
                            component='span'
                            variant='body2'
                            style={{
                                letterSpacing: '0.1rem',
                            }}
                        >
                            Location: Alberta, Canada
                        </Typography>
                    }
                />
                <Chip
                    label={
                        <Typography
                            component='span'
                            variant='body2'
                            style={{
                                letterSpacing: '0.1rem',
                            }}
                        >
                            Tel: 587-338-0250
                        </Typography>
                    }
                />
                <Chip
                    label={
                        <Typography
                            component='span'
                            variant='body2'
                            style={{
                                letterSpacing: '0.1rem',
                            }}
                        >
                            Email: info@genconelectric.ca
                        </Typography>
                    }
                />
                <Chip
                    label={
                        <Typography
                            component='span'
                            variant='body2'
                            style={{
                                letterSpacing: '0.1rem',
                            }}
                        >
                            Master Electrician License
                        </Typography>
                    }
                />
                <Chip
                    label={
                        <Typography
                            component='span'
                            variant='body2'
                            style={{
                                letterSpacing: '0.1rem',
                            }}
                        >
                            Residential Electrical Expert
                        </Typography>
                    }
                />
                <Chip
                    label={
                        <Typography
                            component='span'
                            variant='body2'
                            style={{
                                letterSpacing: '0.1rem',
                            }}
                        >
                            Commercial Electrical Expert
                        </Typography>
                    }
                />
            </Section>
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
