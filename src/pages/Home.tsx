import { Typography } from '../components/mui';
import { Page } from '../components/Tags';
import style from '../styles/Pages/Home.module.css';

function Home() {
    return (
        <Page className={style.home}>
            <Typography variant='h1' gutterBottom>
                Hello Home Page
            </Typography>
        </Page>
    );
}

export default Home;
