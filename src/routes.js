import NotFound from './views/NotFound';
import Home from './views/Home';
import Hello from './views/Hello';

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/hello',
        component: Hello
    },
    {
        path: '*',
        component: NotFound
    }
];
