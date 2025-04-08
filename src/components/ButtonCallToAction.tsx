import useNavigateTo from '../hooks/useNavigateTo';
import { Button } from './mui';

type Props = {
    label: string;
    link: string;
};

function ButtonCallToAction({ label, link }: Props) {
    const navigateToUrl = useNavigateTo();

    return (
        <Button
            sx={{
                width: '15rem',
                background:
                    'linear-gradient(315deg, var(--cl-ci-grey) 20%, var(--cl-ci-red) 50%, var(--cl-ci-blue) 80%)',
                backgroundSize: '400% 400%',
                animation: 'gradientWave 5s ease infinite',
                textTransform: 'none',
                fontSize: '1.1rem',
                color: '#eeeeee',
                transition: 'filter 0.3s ease',

                '&:hover': {
                    filter: 'brightness(1.15)',
                },

                '@keyframes gradientWave': {
                    '0%': {
                        backgroundPosition: '0% 50%',
                    },
                    '50%': {
                        backgroundPosition: '100% 50%',
                    },
                    '100%': {
                        backgroundPosition: '0% 50%',
                    },
                },
            }}
            onClick={() => navigateToUrl(link)}
        >
            {label}
        </Button>
    );
}

export default ButtonCallToAction;
