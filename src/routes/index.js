import { HeaderOnly } from '~/layouts/HeaderOnly';
import { Following } from '~/pages/Following';
import { Home } from '~/pages/Home';
import { Profile } from '~/pages/Profile';

const publicRoutes = [
  { path: '/', component: Home, layout: HeaderOnly },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
