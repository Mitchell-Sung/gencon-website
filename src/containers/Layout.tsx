import { Outlet } from 'react-router-dom';
import { Header, Footer } from './';
import { Container, Section } from '../components/Tags';
import { Divider } from '../components/mui';

function Layout() {
    return (
        <Container>
            <Header />
            <Divider />
            <Section
                sx={{
                    width: '70%',
                    margin: '0 auto',
                    padding: '3rem 0rem 3rem 0rem',
                }}
            >
                <Outlet />
            </Section>
            <Divider />
            <Footer />
        </Container>
    );
}

export default Layout;
