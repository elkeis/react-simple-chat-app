import createStore from './store';
import reducer from './reducer';

export const store = createStore(reducer);
export default store;

