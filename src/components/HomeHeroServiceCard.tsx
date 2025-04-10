import { ROUTE } from '../consts';
import useNavigateTo from '../hooks/useNavigateTo';
import { Content, Img } from './Tags';
import TypoStartIcon from './TypoStartIcon';
import { Button, Paper, Typography } from './mui';
import { CheckIcon, EmojiObjectsIcon } from './mui/Icons';

type Props = {
    service: {
        id: number;
        title: string;
        img: string;
        includes: string[];
    };
};

function HomeHeroServiceCard({ service }: Props) {
    const { title, img, includes } = service;

    const navigateToUrl = useNavigateTo();

    return (
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem',
                borderRadius: '15px',
                padding: '1rem',
                width: '500px',
            }}
        >
            <Typography variant='h5'>{title}</Typography>
            <Content
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '250px',
                    width: '100%',
                }}
            >
                <Img
                    src={img}
                    style={{
                        width: '70%',
                        height: '70%',
                    }}
                />
            </Content>
            <Content
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.2rem',
                    paddingLeft: '0.5rem',
                }}
            >
                {includes.map((label, index) => (
                    <TypoStartIcon
                        key={index}
                        label={label}
                        variant='body1'
                        fontWeight='400'
                        icon={<CheckIcon fontSize='small' />}
                    />
                ))}
            </Content>
            <Button
                endIcon={<EmojiObjectsIcon />}
                onClick={() => navigateToUrl(ROUTE.SERVICES)}
                sx={{
                    textTransform: 'none',
                    color: 'var(--cl-ci-blue)',
                    marginLeft: 'auto',
                }}
            >
                Read more
            </Button>
        </Paper>
    );
}

export default HomeHeroServiceCard;
