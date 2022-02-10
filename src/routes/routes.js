import Home from "components/Home";
import Profile from "components/Profile";

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: false
    },
    {
        path: '/profile',
        exact: true,
        component: Profile,
        auth: true
    }
] 