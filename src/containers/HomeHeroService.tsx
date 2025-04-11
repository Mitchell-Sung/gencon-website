import { homeHeroServiceCardData } from '../data';
import { Container, Content } from '../components/Tags';
import { HomeHeroServiceCard, TitleSection } from '../components';

function HomeHeroService() {
    return (
        <Container
            sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
            <TitleSection label='What We Offer' />
            <Content
                sx={{
                    display: 'flex',
                    gap: '2rem',
                    justifyContent: 'space-between',
                }}
            >
                {homeHeroServiceCardData.map((service) => (
                    <HomeHeroServiceCard key={service.id} service={service} />
                ))}
            </Content>
        </Container>
    );
}

export default HomeHeroService;
