import rootReducer from './Reducers';
import { createStore, applyMiddleware } from 'redux';
import state from './statedata';
import thunk from 'redux-thunk';
import {fetchUser} from  './Actions'


const store = createStore(rootReducer, state, applyMiddleware(thunk));


store.dispatch(fetchUser('https://jsonplaceholder.typicode.com/users'));


export default store;