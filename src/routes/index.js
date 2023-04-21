import routesConfig from '~/config/routes';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: routesConfig.home, component: Home},
    { path: routesConfig.profile, component: Profile},
    { path: routesConfig.search, component: Search}
]

const privateRoutes = []

export { publicRoutes, privateRoutes }