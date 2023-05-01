import routesConfig from '~/config/routes';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import ForgotPassword from '~/pages/ForgotPassword';
import Authentication from '../Layout/Authentication';

const publicRoutes = [
    { path: routesConfig.home, component: Home},
    { path: routesConfig.profile, component: Profile},
    { path: routesConfig.search, component: Search},
    { path: routesConfig.signin, component: SignIn, layout: Authentication},
    { path: routesConfig.signup, component: SignUp, layout: Authentication},
    { path: routesConfig.forgot, component: ForgotPassword, layout: Authentication},
]

const privateRoutes = []

export { publicRoutes, privateRoutes }