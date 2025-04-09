import { ROUTE } from '../consts';
import { Container, Section } from '../components/Tags';
import {
    ButtonCallToAction,
    HeaderLogo,
    HeaderMarquee,
    HeaderNavButtons,
} from '../components';

function Header() {
    return (
        <Container
            sx={{
                width: '70%',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 0rem',
                gap: '2rem',
            }}
        >
            <Section
                sx={{
                    display: 'flex',
                    overflow: 'hidden',
                    gap: '2rem',
                }}
            >
                <HeaderLogo />
                <HeaderMarquee />
            </Section>
            <Section sx={{ display: 'flex', gap: '2rem' }}>
                <HeaderNavButtons />
                <ButtonCallToAction label='Contact' link={ROUTE.CONTACT} />
            </Section>
        </Container>
    );
}

export default Header;
