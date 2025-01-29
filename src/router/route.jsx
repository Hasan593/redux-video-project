import {createBrowserRouter} from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Video from '../pages/video/Video';
import Home from '../pages/home/Home';

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'video',
                element: <Video />
            }
        ]
    },
    {
        path: '*',
        element: <h1 className='text-center text-3xl'>Page Not Found</h1>
    }
]);

export default route;