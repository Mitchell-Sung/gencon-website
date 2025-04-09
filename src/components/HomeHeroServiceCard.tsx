import { Paper, Typography } from './mui';
import { Content, Img } from './Tags';

type Props = {
    title: string;
    description: string;
    img: string;
};

function HomeHeroServiceCard({ title, description, img }: Props) {
    const truncate = (str: string, maxLength: number) => {
        return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
    };

    return (
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                padding: '1rem',
            }}
        >
            <Typography variant='h5'>{title}</Typography>
            <Content>
                <Img src={img} style={{ width: '70%' }} />
            </Content>
            <Typography variant='body2'>{truncate(description, 50)}</Typography>
        </Paper>
    );
}

export default HomeHeroServiceCard;
