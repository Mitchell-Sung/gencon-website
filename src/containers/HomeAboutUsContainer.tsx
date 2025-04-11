import { ButtonLearnMore, TitleSection, TypoStartIcon } from '../components';
import { CheckCircleIcon, InfoOutlineIcon } from '../components/mui/Icons';
import { Container, Content, Img, Item, Section } from '../components/Tags';
import AboutUs from '../assets/AboutUs.jpg';
import { ROUTE } from '../consts';

const homeAboutUsContainerData: string[] = [
    'Founded in 2010, we bring over a decade of experience to every project.',
    'Certified Canadian Master Electrician with top-level safety and skill.',
    'Grew quickly through quality work and strong referrals.',
    'Clients return through trust and consistent service.',
    'High satisfaction and a record of on-time results.',
    'Skilled at solving complex electrical challenges.',
];

function HomeAboutUsContainer() {
    return (
        <Container sx={{ paddingBottom: '2rem' }}>
            <TitleSection label='Who We Are' />
            <Section sx={{ display: 'flex', gap: '1.5rem' }}>
                <Content
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        flex: '0 0 60%',
                        justifyContent: 'center',
                    }}
                >
                    <Item
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            justifyContent: 'center',
                            paddingLeft: '1rem',
                            paddingTop: '1rem',
                        }}
                    >
                        {homeAboutUsContainerData.map((label) => (
                            <TypoStartIcon
                                key={label}
                                label={label}
                                variant='subtitle1'
                                fontWeight='400'
                                icon={
                                    <CheckCircleIcon
                                        sx={{ color: '#ef5350' }}
                                    />
                                }
                            />
                        ))}
                    </Item>
                    <ButtonLearnMore
                        width='150px'
                        label='Learn More'
                        link={ROUTE.ABOUT_US}
                        icon={<InfoOutlineIcon />}
                    />
                </Content>
                <Img
                    src={AboutUs}
                    alt={'Home About Img'}
                    style={{ width: '100%', borderRadius: '10px' }}
                />
            </Section>
        </Container>
    );
}

export default HomeAboutUsContainer;
