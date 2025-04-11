import { ROUTE } from '../consts';
import { Container, Section } from '../components/Tags';
import {
    ButtonCallToAction,
    HeaderLogo,
    HeaderMarquee,
    HeaderNavButtons,
} from '../components';
import { sx_Header } from '../styles/headerSx';

function Header() {
    return (
        <Container sx={sx_Header.container}>
            <Section sx={sx_Header.sectionLogoMarquee}>
                <HeaderLogo />
                <HeaderMarquee />
            </Section>
            <Section sx={sx_Header.sectionNavButtons}>
                <HeaderNavButtons />
                <ButtonCallToAction label='Contact' link={ROUTE.CONTACT} />
            </Section>
        </Container>
    );
}

export default Header;
