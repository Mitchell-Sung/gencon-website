import { JSX } from 'react';
import useNavigateTo from '../hooks/useNavigateTo';
import { Button } from './mui';

type Props = {
    width?: string;
    label: string;
    link: string;
    icon: JSX.Element;
};

function ButtonLearnMore({ width, label, link, icon }: Props) {
    const navigateToUrl = useNavigateTo();

    return (
        <Button
            variant='text'
            endIcon={icon}
            size='large'
            onClick={() => navigateToUrl(link)}
            sx={{
                textTransform: 'none',
                width: `${width}`,
                color: 'var(--cl-ci-blue)',
            }}
        >
            {label}
        </Button>
    );
}

export default ButtonLearnMore;
