import { TypeAnimation } from 'react-type-animation';
import { Button, Paper, Typography } from '../components/mui';
import { Content, Img } from '../components/Tags';
import home_01 from '../assets/home_01.jpg';
import { ElectricalServicesIcon } from '../components/mui/Icons';
import useNavigateTo from '../hooks/useNavigateTo';
import { ROUTE } from '../consts';

function Home() {
    const navigateToUrl = useNavigateTo();
    return (
        <Paper
            sx={{
                display: 'flex',
                width: '70%',
                margin: '0 auto',
                padding: '1.5rem',
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
                    professionals who truly care about your safety, comfort, and
                    satisfaction. We take pride in offering reliable service and
                    long-lasting results you can count on, every time.
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
        </Paper>
    );
}

export default Home;
