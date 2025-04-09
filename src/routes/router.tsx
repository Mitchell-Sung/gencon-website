import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTE } from '../consts';
import {
    AboutUs,
    Contact,
    Home,
    NotFound,
    Projects,
    RequestService,
    Services,
} from '../pages';
import { Layout } from '../containers';
import { ProgressCircular } from '../components';

const router = createBrowserRouter([
    {
        path: ROUTE.ROOT,
        element: (
            <Suspense fallback={<ProgressCircular inProgress={true} />}>
                <Layout />
            </Suspense>
        ),
        children: [
            { index: true, element: <Home /> },
            { path: ROUTE.SERVICES, element: <Services /> },
            { path: ROUTE.PROJECTS, element: <Projects /> },
            { path: ROUTE.ABOUT_US, element: <AboutUs /> },
            { path: ROUTE.CONTACT, element: <Contact /> },
            { path: ROUTE.REQUEST_SERVICE, element: <RequestService /> },
            { path: ROUTE.NOT_FOUND, element: <NotFound /> },
        ],
    },
]);

export default router;
