import { Divider } from './mui';

function GenDivider() {
    return (
        <Divider
            sx={{
                width: '100%',
                height: '0.25rem',
                borderRadius: '10px',
                background:
                    'linear-gradient(315deg, var(--cl-ci-grey) 25%, var(--cl-ci-red) 50%, var(--cl-ci-blue) 75%)',
            }}
        />
    );
}

export default GenDivider;
