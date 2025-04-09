import { TypeAnimation } from 'react-type-animation';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from '../components/mui';
import { Content, Img, Page, Section } from '../components/Tags';
import home_01 from '../assets/home_01.jpg';
import temp_01 from '../assets/temp_01.jpg';
import { ElectricalServicesIcon } from '../components/mui/Icons';
import useNavigateTo from '../hooks/useNavigateTo';
import { ROUTE } from '../consts';

function Home() {
    const navigateToUrl = useNavigateTo();

    return (
        <Page
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '70%',
                margin: '0 auto',
                gap: '2.5rem',
            }}
        >
            <Section
                sx={{
                    display: 'flex',
                    // padding: '1.5rem',
                    padding: '1rem 0rem',
                    gap: '2.5rem',
                    flexWrap: 'nowrap',
                    overflow: 'hidden',
                    borderRadius: '10px',
                }}
            >
                <Content
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        flex: '0 0 60%',
                    }}
                >
                    <Typography
                        variant='subtitle1'
                        sx={{
                            display: 'flex',
                            padding: '0.25rem 1rem',
                            borderRadius: '10px',
                            width: 'fit-content',
                            color: '#eeeeee',
                            backgroundColor: 'var(--cl-ci-blue)',
                            fontWeight: '700',
                        }}
                    >
                        Your Local Electrical Experts
                    </Typography>
                    <Typography variant='h4'>
                        Building Your Trust, <br />
                        Powering Your{' '}
                        <span
                            style={{
                                color: 'var(--cl-ci-red)',
                            }}
                        >
                            <TypeAnimation
                                sequence={[
                                    'Spaces.',
                                    1000,
                                    'Homes.',
                                    1000,
                                    'Buildings.',
                                    1000,
                                    'Offices.',
                                    1000,
                                    'Dreams.',
                                    1000,
                                ]}
                                wrapper='span'
                                speed={30}
                                repeat={Infinity}
                            />
                        </span>
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        color='var(--cl-text-secondary)'
                    >
                        Experience top-quality electrical work delivered by
                        professionals who truly care about your safety, comfort,
                        and satisfaction. We take pride in offering reliable
                        service and long-lasting results you can count on, every
                        time.
                    </Typography>
                    <Button
                        variant='text'
                        size='large'
                        endIcon={<ElectricalServicesIcon />}
                        onClick={() => navigateToUrl(ROUTE.REQUEST_SERVICE)}
                        sx={{
                            textTransform: 'none',
                            width: '180px',
                            color: 'var(--cl-ci-blue)',
                        }}
                    >
                        Request a Service
                    </Button>
                </Content>
                <Img
                    style={{ width: '100%', borderRadius: '10px' }}
                    src={home_01}
                    alt='Home Image'
                />
            </Section>
            <Section sx={{ display: 'flex', gap: '1rem' }}>
                <Card sx={{ borderRadius: '10px', width: '300px' }}>
                    <CardHeader title='Residential Electrical Services' />
                    <CardMedia>
                        <Img
                            src={temp_01}
                            alt='Service Image'
                            style={{ width: '100%' }}
                        />
                    </CardMedia>
                    <CardContent>
                        <Typography>
                            We provide safe, reliable, and code-compliant
                            electrical solutions for your home. From new wiring
                            and panel upgrades to lighting installation and
                            troubleshooting, our certified electricians ensure
                            every job is done right the first time.
                        </Typography>
                    </CardContent>
                </Card>
            </Section>
        </Page>
    );
}

export default Home;
