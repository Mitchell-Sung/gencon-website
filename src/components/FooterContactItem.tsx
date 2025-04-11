import { sx_FooterContactItem } from '../styles/footerSx';
import { Component } from './Tags';
import { Typography } from './mui';

type Props = { label: string; info: string };

function FooterContactItem({ label, info }: Props) {
    return (
        <Component sx={sx_FooterContactItem.component}>
            <Typography sx={sx_FooterContactItem.typoLabel}>{label}</Typography>
            <Typography sx={sx_FooterContactItem.typoInfo}>{info}</Typography>
        </Component>
    );
}

export default FooterContactItem;
