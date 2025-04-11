import { companyData } from '../data';
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
                {companyData.name}
            </Typography>
            <Section
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <FooterContactItem
                    label={companyData.phoneLabel}
                    info={companyData.phone}
                />
                <FooterContactItem
                    label={companyData.emailLabel}
                    info={companyData.email}
                />
                <FooterContactItem
                    label={companyData.locationLabel}
                    info={companyData.location}
                />
            </Section>
            <Section
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography variant='caption'>{companyData.copy}</Typography>
                <Typography variant='caption'>
                    {companyData.designed}
                </Typography>
            </Section>
        </Container>
    );
}

export default Footer;
