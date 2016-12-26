import NotFound from './views/NotFound';
import Feed from './views/Feed';

export default [
    {
        path: '/',
        component: Feed
    },
    {
        path: '*',
        component: NotFound
    }
];
