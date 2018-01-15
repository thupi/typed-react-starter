declare module 'react-mobx-router5' {
  import { State } from 'router5';

  type IReactComponent<P> =
    | React.StatelessComponent<P>
    | React.ComponentClass<P>;
  type IRouteNodeType<P> = <TFunction extends IReactComponent<P>>(
    target: TFunction
  ) => TFunction;

  export interface IRouteNodeProps {
    route?: State;
    previousRoute?: State;
  }

  function routeNode<P>(
    nodeName: string,
    storeName?: string
  ): IRouteNodeType<P>;
  function withRoute<P>(target: IReactComponent<P>): IReactComponent<P>;

  export interface ILinkProps {
    routeName: string;
    routeParams?: object;
    routeOptions?: object;
    LinkWrapper?: Function;

    className?: string;
    style?: React.CSSProperties;
    children?: JSX.Element | string | null | Array<JSX.Element | string | null>;
  }

  class Link extends React.Component<ILinkProps, {}> {}
}
