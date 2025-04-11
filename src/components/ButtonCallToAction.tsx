import useNavigateTo from '../hooks/useNavigateTo';
import { sx_ButtonCallToAction } from '../styles/buttonSx';
import { Button } from './mui';

type Props = {
    label: string;
    link: string;
};

function ButtonCallToAction({ label, link }: Props) {
    const navigateToUrl = useNavigateTo();

    return (
        <Button sx={sx_ButtonCallToAction} onClick={() => navigateToUrl(link)}>
            {label}
        </Button>
    );
}

export default ButtonCallToAction;
