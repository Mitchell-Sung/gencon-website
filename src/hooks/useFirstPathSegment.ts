import { useLocation } from 'react-router-dom';

function useFirstPathSegment(): string {
    const { pathname } = useLocation();

    const segments = pathname.split('/').filter(Boolean);

    return '/' + (segments.length > 0 ? segments[0] : '');
}

export default useFirstPathSegment;
