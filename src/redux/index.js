import { createStore } from 'redux';
import reducer from './reducer';

let store = createStore(reducer)


export const getStore = () => store;

export default store;