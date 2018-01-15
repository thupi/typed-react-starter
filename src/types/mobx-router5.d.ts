declare module 'mobx-router5' {
  import { observable } from 'mobx';
  import { Router, State, NavigationOptions, PluginFactory } from 'router5';

  export class RouterStore {
    @observable router: Router;
    @observable route: State;
    @observable previousRoute: State;
    @observable transitionRoute: State;
    @observable transitionError: any; // tslint:disable-line
    @observable intersectionNode: string;

    setRouter(router: RouterStore): void;

    onTransitionStart(route: State, previousRoute: State): void;

    onTransitionSuccess(
      route: State,
      previousRoute: State,
      opts: NavigationOptions
    ): void;

    onTransitionCancel(route: State, previousRoute: State): void;

    onTransitionError(
      route: State,
      previousRoute: State,
      transitionError: any
    ): void; // tslint:disable-line
    navigate(name: string, params?: object, opts?: NavigationOptions): void;

    clearErrors(): void;
  }

  export function mobxPlugin(
    routerStore: RouterStore,
    options?: object
  ): PluginFactory;
}
