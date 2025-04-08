import { Outlet } from 'react-router-dom';
import { Header } from './';
import { Container, Section } from '../components/Tags';
import { Divider } from '../components/mui';
import st from '../styles/containers/Layout.module.css';

function Layout() {
    return (
        <Container className={st.container}>
            <Header />
            <Divider />
            <Section className={st.section}>
                <Outlet />
            </Section>
        </Container>
    );
}

export default Layout;
