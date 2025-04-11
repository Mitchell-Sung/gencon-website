import {
    HomeAboutUsContainer,
    HomeHeroMain,
    HomeHeroProject,
    HomeServiceContainer,
} from '../containers';
import { Page } from '../components/Tags';
import { sx_Home } from '../styles/homeSx';

function Home() {
    return (
        <Page sx={sx_Home}>
            <HomeHeroMain />
            <HomeServiceContainer />
            <HomeHeroProject />
            <HomeAboutUsContainer />
        </Page>
    );
}

export default Home;
