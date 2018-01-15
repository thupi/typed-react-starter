import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

// Styles
import './index.css';

// Router
import createRouter from 'router5';
import { mobxPlugin } from 'mobx-router5';
import browserPlugin from 'router5/plugins/browser';
import routes from './routes';

// Store
import { store } from './stores/Store';

// Router config
const router = createRouter(routes, {}, { store })
  .usePlugin(mobxPlugin(store.routerStore))
  .usePlugin(browserPlugin({ useHash: false }));

// Views
import Root from './views/Root';

router.start(() => {
  ReactDOM.render(
    <Provider store={store} routerStore={store.routerStore}>
      <Root />
    </Provider>,
    document.getElementById('root') as HTMLDivElement
  );
});

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
