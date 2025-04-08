import { Button } from './mui';
import useNavigateTo from '../hooks/useNavigateTo';
import { Component } from './Tags';
import { GenDivider } from './';
import st from '../styles/components/NavButton.module.css';

type Props = {
    label: string;
    link: string;
    isActive: boolean;
};

function NavButton({ label, link, isActive }: Props) {
    const navigateToUrl = useNavigateTo();

    return (
        <Component className={st.component}>
            <Button
                className={st.button}
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
