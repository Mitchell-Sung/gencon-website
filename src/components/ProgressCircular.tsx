import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type Props = { inProgress: boolean };

function ProgressCircular({ inProgress = true }: Props) {
    return (
        <Backdrop
            open={inProgress}
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <CircularProgress color='primary' size={100} thickness={7} />
        </Backdrop>
    );
}

export default ProgressCircular;
