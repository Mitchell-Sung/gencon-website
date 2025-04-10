import { UnderLineTitle } from '../components';
import { Container } from '../components/Tags';

const homeHeroProjectData = {
    title: `What We've Built Together`,
    headline: ['Powerful Projects,', 'Proven Results.'],
    subHeadline: `From residential upgrades to large-scale commercial installations, our portfolio reflects a commitment to quality and precision that speaks for itself.`,
    buttonLabel: 'View all projects',
};

function HomeHeroProject() {
    return (
        <Container
            sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
            <UnderLineTitle width='100px' height='7px' />
        </Container>
    );
}

export default HomeHeroProject;
