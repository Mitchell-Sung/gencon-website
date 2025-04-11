import {
    HomeAboutUsContainer,
    HomeMainContainer,
    HomeHeroProject,
    HomeServiceContainer,
} from '../containers';
import { Page } from '../components/Tags';
import { sx_Home } from '../styles/homeSx';

function Home() {
    return (
        <Page sx={sx_Home}>
            <HomeMainContainer />
            <HomeServiceContainer />
            <HomeHeroProject />
            <HomeAboutUsContainer />
        </Page>
    );
}

export default Home;
