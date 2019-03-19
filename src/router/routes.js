import HomePage from '../components/HomePage';
import LoginPage from '../components/Login';
import WelcomePage from '../components/Layout';
import MakePass from '../components/MakePassword';

export const routes = [
    {
        exact: true,
        path: '/',
        component: HomePage
    },
    {
        exact: false,
        path: '/login',
        component: LoginPage
    },
    {
        exact: false,
        path: '/welcome',
        component: WelcomePage
    },
    {
        exact: false,
        path: '/password',
        component: MakePass
    }
];

