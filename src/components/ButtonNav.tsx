import { Button } from './mui';
import useNavigateTo from '../hooks/useNavigateTo';
import { Component } from './Tags';
import { GenDivider } from './';

type Props = {
    label: string;
    link: string;
    isActive: boolean;
};

function NavButton({ label, link, isActive }: Props) {
    const navigateToUrl = useNavigateTo();

    return (
        <Component>
            <Button
                sx={{
                    width: '100px',
                    color: 'var(--cl-text-secondary)',
                    textTransform: 'none',
                    fontSize: '1.1rem',
                }}
                variant='text'
                onClick={() => navigateToUrl(link)}
            >
                {label}
            </Button>
            {isActive && <GenDivider />}
        </Component>
    );
}

export default NavButton;
