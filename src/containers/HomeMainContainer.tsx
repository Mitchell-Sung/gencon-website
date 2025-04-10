import home_01 from '../assets/home_01.jpg';
import { ROUTE } from '../consts';
import { homeHeroMainData } from '../data';
import { Container, Content, Img, Section } from '../components/Tags';
import {
    ButtonLearnMore,
    HeroHeadlineTypeAnimation,
    HeroOutlinedTypo,
    HeroSubHeadlineTypo,
    UnderLineTitle,
} from '../components';
import { ElectricalServicesIcon } from '../components/mui/Icons';

function HomeMainContainer() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            <UnderLineTitle width='100px' height='7px' />
            <Section
                sx={{
                    display: 'flex',
                    gap: '1.5rem',
                }}
            >
                <Content
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        flex: '0 0 55%',
                        justifyContent: 'center',
                    }}
                >
                    <HeroOutlinedTypo label={homeHeroMainData.title} />
                    <HeroHeadlineTypeAnimation />
                    <HeroSubHeadlineTypo label={homeHeroMainData.subHeadline} />
                    <ButtonLearnMore
                        width='180px'
                        label={homeHeroMainData.buttonLabel}
                        link={ROUTE.CONTACT}
                        icon={<ElectricalServicesIcon />}
                    />
                </Content>
                <Img
                    src={home_01}
                    alt='Home Image'
                    style={{ width: '100%', borderRadius: '10px' }}
                />
            </Section>
        </Container>
    );
}

export default HomeMainContainer;
