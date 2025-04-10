import { genconInfo } from '../data';
import { Container, Section } from '../components/Tags';
import { FooterContactItem } from '../components';
import { Typography } from '../components/mui';

function Footer() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                width: '70%',
                margin: '0 auto',
                padding: '2rem 0rem 2rem 0rem',
            }}
        >
            <Typography sx={{ fontSize: '1rem', fontWeight: '500' }}>
                {genconInfo.name}
            </Typography>
            <Section
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <FooterContactItem
                    label={genconInfo.phoneLabel}
                    info={genconInfo.phone}
                />
                <FooterContactItem
                    label={genconInfo.emailLabel}
                    info={genconInfo.email}
                />
                <FooterContactItem
                    label={genconInfo.locationLabel}
                    info={genconInfo.location}
                />
            </Section>
            <Section
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography variant='caption'>{genconInfo.copy}</Typography>
                <Typography variant='caption'>{genconInfo.designed}</Typography>
            </Section>
        </Container>
    );
}

export default Footer;
