import RouterStore from './RouterStore';
import MeStore from './MeStore';

// Store
class Store {
  routerStore = new RouterStore();
  meStore = new MeStore();
}

const store = new Store();
export { store };
export type IStore = Store;
export default Store;
