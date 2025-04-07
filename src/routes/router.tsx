import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTE } from '../consts';
import { Home, NotFound } from '../pages';
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
            { path: ROUTE.NOT_FOUND, element: <NotFound /> },
        ],
    },
]);

export default router;
