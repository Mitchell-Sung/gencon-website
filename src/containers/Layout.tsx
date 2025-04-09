import { Outlet } from 'react-router-dom';
import { Header } from './';
import { Container, Section } from '../components/Tags';
import { Divider } from '../components/mui';

function Layout() {
    return (
        <Container>
            <Header />
            <Divider />
            <Section sx={{ marginTop: '1rem' }}>
                <Outlet />
            </Section>
        </Container>
    );
}

export default Layout;
