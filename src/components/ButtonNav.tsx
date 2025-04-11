import { Button } from './mui';
import useNavigateTo from '../hooks/useNavigateTo';
import { Component } from './Tags';
import { UnderLineNavButton } from './';
import { sx_NavButton } from '../styles/buttonSx';

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
                sx={sx_NavButton}
                variant='text'
                onClick={() => navigateToUrl(link)}
            >
                {label}
            </Button>
            {isActive && <UnderLineNavButton />}
        </Component>
    );
}

export default NavButton;
