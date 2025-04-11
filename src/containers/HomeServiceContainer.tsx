import { homeHeroServiceCardData } from '../data';
import { Container, Content } from '../components/Tags';
import { HomeServiceCard, TypoTitleSection } from '../components';

function HomeServiceContainer() {
    return (
        <Container
            sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
            <TypoTitleSection label='What We Offer' />
            <Content
                sx={{
                    display: 'flex',
                    gap: '2rem',
                    justifyContent: 'space-between',
                }}
            >
                {homeHeroServiceCardData.map((service) => (
                    <HomeServiceCard key={service.id} service={service} />
                ))}
            </Content>
        </Container>
    );
}

export default HomeServiceContainer;
