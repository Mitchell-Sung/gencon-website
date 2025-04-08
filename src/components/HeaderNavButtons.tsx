import { navBtnData } from '../data';
import useFirstPathSegment from '../hooks/useFirstPathSegment';
import { Component } from './Tags';
import { ButtonNav } from '../components';

function HeaderNavButtons() {
    const pathname = useFirstPathSegment();

    return (
        <Component sx={{ display: 'flex' }}>
            {navBtnData.map((button, index) => (
                <ButtonNav
                    key={index}
                    label={button.label}
                    link={button.link}
                    isActive={pathname === button.link}
                />
            ))}
        </Component>
    );
}

export default HeaderNavButtons;
