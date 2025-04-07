import { Container } from '../components/Tags';
import { Typography } from '../components/mui';

function Header() {
    return (
        <Container>
            <Typography variant='h1' gutterBottom>
                Hello Header Container
            </Typography>
        </Container>
    );
}

export default Header;
