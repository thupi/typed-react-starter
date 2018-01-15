import * as React from 'react';
import { routeNode, IRouteNodeProps } from 'react-mobx-router5';

// Constants
import { ROUTE_NAMES } from '../../constants/routes';

// Views
import Login from './views/Login';
import App from './views/App';

// Component
export interface IProps extends IRouteNodeProps {}

class Router extends React.Component<IProps> {
  render() {
    if (!this.props.route) {
      return <h1>Not Found</h1>;
    }

    const segment = this.props.route.name.split('.')[0];

    switch (segment) {
      case ROUTE_NAMES.LOGIN:
        return <Login />;
      default:
        return <App />;
    }
  }
}

export default routeNode('')(Router);
