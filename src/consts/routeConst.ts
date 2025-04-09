const ROUTE = Object.freeze({
    ROOT: '/',
    SERVICES: '/services',
    PROJECTS: '/projects',
    ABOUT_US: '/about_us',
    CONTACT: '/contact',
    GET_A_QUOTE: '/get_a_quote',
    REQUEST_SERVICE: '/request_service',
    NOT_FOUND: '*',
} as const);

export default ROUTE;
