import { Paper, Typography } from '../components/mui';
import { Content } from '../components/Tags';

function Home() {
    return (
        <Paper sx={{ width: '70%', margin: '0 auto', padding: '1rem' }}>
            <Content>
                <Typography
                    variant='subtitle1'
                    sx={{
                        display: 'flex',
                        padding: '0.25rem 1rem',
                        borderRadius: '10px',
                        width: 'fit-content',
                        color: '#eeeeee',
                        backgroundColor: 'var(--cl-ci-blue)',
                        fontWeight: '700',
                    }}
                >
                    Expert Electrical Services
                </Typography>
                <Typography variant='h3'>
                    Reliable Electricians, <br />
                    Trusted Results
                </Typography>
                <Typography variant='subtitle1'>
                    Experience the difference with our electrical solutions.
                </Typography>
            </Content>
        </Paper>
    );
}

export default Home;
