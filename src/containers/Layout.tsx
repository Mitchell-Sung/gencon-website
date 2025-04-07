import { Outlet } from 'react-router-dom';
import { Header } from './';
import { Container, Section } from '../components/Tags';

function Layout() {
    return (
        <Container>
            <Header />
            <Section>
                <Outlet />
            </Section>
        </Container>
    );
}

export default Layout;
