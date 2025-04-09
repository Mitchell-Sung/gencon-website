import { HomeHeroMain, HomeHeroService } from '../containers';
import { Page } from '../components/Tags';

function Home() {
    return (
        <Page
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '70%',
                margin: '0 auto',
                gap: '5rem',
                padding: '1rem 0rem',
            }}
        >
            <HomeHeroMain />
            <HomeHeroService />
        </Page>
    );
}

export default Home;
