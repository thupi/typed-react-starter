import { Route, State } from 'router5';
import { IStore } from './stores/Store';

// Constants
import { ROUTE_NAMES, ROUTE_PATHS } from './constants/routes';

export type LifecycleHandler = (
  toState: State,
  fromState: State,
  done: (parameter?: object) => void
) => void;

const routes: Array<Route> = [
  {
    name: ROUTE_NAMES.LOGIN,
    path: '/login'
  },
  {
    name: ROUTE_NAMES.APP,
    path: '/',
    canActivate: (router, dependencies) => (toState, fromState, done) => {
      if (dependencies) {
        if ((dependencies.store as IStore).meStore.hasToken) {
          done();
          return true;
        } else {
          done({ redirect: { name: ROUTE_PATHS.LOGIN } });
          return false;
        }
      } else {
        done({ redirect: { name: ROUTE_PATHS.LOGIN } });
        return false;
      }
    }
  }
];

export default routes;
