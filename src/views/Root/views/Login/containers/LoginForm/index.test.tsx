// Polyfills
import 'raf/polyfill';

// Testing Utilities
import * as Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Stores
import Store from 'stores/Store';

// Components
// Import the Component without the inject wrapper. Otherwise enzyme will become buggy
import { LoginForm } from './index';

describe('Component: App/Login/LoginForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    const store = new Store();

    ReactDOM.render(<LoginForm store={store} />, div);
  });
});
